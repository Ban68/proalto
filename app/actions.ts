"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function submitApplication(formData: FormData) {
    const name = formData.get("name") as string;
    const cedula = formData.get("cedula") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const amount = formData.get("amount") as string;
    const term = formData.get("term") as string;

    try {
        await prisma.creditApplication.create({
            data: {
                name,
                cedula,
                email,
                phone,
                amount: Number(amount),
                term: Number(term),
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to create application:", error);
        return { success: false, error: "Error al guardar la solicitud" };
    }
}
