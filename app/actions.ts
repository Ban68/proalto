"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import NewApplicationEmail from "@/components/email/new-application-email";

const prisma = new PrismaClient();
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function submitApplication(formData: FormData) {
    // Extract basic fields
    const name = formData.get("name") as string;
    const identificationType = formData.get("identificationType") as string;
    const cedula = formData.get("cedula") as string;
    const birthDate = formData.get("birthDate") ? new Date(formData.get("birthDate") as string) : null;

    // Contact & Address
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const department = formData.get("department") as string;
    const city = formData.get("city") as string;

    // Employment & Credit Details
    const company = formData.get("company") as string;
    const purpose = formData.get("purpose") as string;
    // Strip non-numeric characters for currency fields
    const amount = (formData.get("amount") as string).replace(/\D/g, "");
    const term = formData.get("term") as string;
    const employmentType = formData.get("employmentType") as string;
    const monthlyIncome = (formData.get("monthlyIncome") as string).replace(/\D/g, "");

    // Digital Service Option
    const digitalService = formData.get("digitalService") === "on";

    try {
        // Process Attachments (Upload to Supabase & Email Attachment)
        const docFields = [
            { key: 'doc_cedula', prefix: 'CEDULA' },
            { key: 'doc_rut', prefix: 'RUT' },
            { key: 'doc_laboral', prefix: 'LABORAL' },
            { key: 'doc_ingresos', prefix: 'INGRESOS' },
            { key: 'doc_camara', prefix: 'CAMARA' },
            { key: 'doc_otros', prefix: 'OTROS' },
        ];

        let allFiles: { file: File, prefix: string }[] = [];

        // Gather all files
        for (const field of docFields) {
            const files = formData.getAll(field.key) as File[];
            files.forEach(f => {
                if (f.size > 0 && f.name !== "undefined") {
                    allFiles.push({ file: f, prefix: field.prefix });
                }
            });
        }

        // Process uploads and collect metadata
        const processedFiles = await Promise.all(
            allFiles.map(async ({ file, prefix }) => {
                const buffer = Buffer.from(await file.arrayBuffer());

                // Filename: TYPE_Timestamp_OriginalName
                // Replace non-alphanumeric chars (except dot/dash) with underscore to be safe for all storage backends
                const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
                const filename = `${prefix}_${Date.now()}_${cleanName}`;

                let publicUrl = null;

                // Upload to Supabase
                const { data, error } = await supabase.storage
                    .from('applications')
                    .upload(filename, buffer, {
                        contentType: file.type,
                        upsert: false
                    });

                if (error) {
                    // Throwing here to be caught by the outer try/catch and returned to UI
                    // This allows the user to see exactly why it failed (e.g. invalid key, permissions, etc)
                    console.error("Supabase Upload Error:", error);
                    throw new Error(`Error subiendo archivo ${file.name}: ${error.message}`);
                }

                if (data) {
                    const { data: publicUrlData } = supabase.storage
                        .from('applications')
                        .getPublicUrl(filename);
                    publicUrl = publicUrlData.publicUrl;
                }

                return {
                    attachment: { filename: filename, content: buffer },
                    dbRecord: publicUrl ? { name: filename, url: publicUrl } : null
                };
            })
        );

        const attachments = processedFiles.map(f => f.attachment);
        const uploadedDocs = processedFiles.map(f => f.dbRecord).filter(r => r !== null);

        // Save to DB
        const newApplication = await prisma.creditApplication.create({
            data: {
                name,
                identificationType,
                cedula,
                birthDate,
                email,
                phone,
                address,
                department,
                city,
                company,
                purpose,
                amount: Number(amount),
                term: Number(term),
                employmentType,
                monthlyIncome: Number(monthlyIncome),
                digitalService,
                documents: uploadedDocs, // Save JSON array
            },
        });

        // Optional: Revalidate admin path if we had one
        revalidatePath("/admin");

        // Send Email Notification
        try {
            const resend = new Resend(process.env.RESEND_API_KEY);
            await resend.emails.send({
                from: 'Proalto <onboarding@resend.dev>', // Should be updated to a verified domain later
                to: ['analista@proalto.co'],
                subject: `Nueva Solicitud de Crédito - ${name}`,
                react: NewApplicationEmail({
                    name,
                    amount: Number(amount),
                    phone,
                    email,
                    city,
                    department,
                    id: newApplication.id
                }),
                attachments: attachments.length > 0 ? attachments : undefined,
            });
        } catch (emailError) {
            console.error("Failed to send email notification:", emailError);
            // We don't block the success response if email fails, but we log it
        }

        return { success: true };
    } catch (error: any) {
        console.error("Failed to create application:", error);
        return { success: false, error: error.message || "Error al guardar la solicitud en la base de datos." };
    }
}
