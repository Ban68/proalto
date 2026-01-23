"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import NewApplicationEmail from "@/components/email/new-application-email";

const prisma = new PrismaClient();

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
            },
        });

        // Optional: Revalidate admin path if we had one
        revalidatePath("/admin");

        // Process Attachments
        const documents = formData.getAll("documents") as File[];
        const attachments = await Promise.all(
            documents
                .filter((doc) => doc.size > 0 && doc.name !== "undefined")
                .map(async (doc) => {
                    const buffer = Buffer.from(await doc.arrayBuffer());
                    return {
                        filename: doc.name,
                        content: buffer,
                    };
                })
        );

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
    } catch (error) {
        console.error("Failed to create application:", error);
        return { success: false, error: "Error al guardar la solicitud en la base de datos." };
    }
}
