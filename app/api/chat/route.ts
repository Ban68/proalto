import { google } from '@ai-sdk/google';
import { streamText, tool } from 'ai';
import { z } from 'zod';
import { prisma } from '@/lib/prisma'; // Assuming lib/prisma exists? I need to check. If not, I'll use standard import.

const checkStatusSchema = z.object({
    cedula: z.string().describe('The national identification number (Cedula) of the customer'),
});

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: google('gemini-1.5-pro'),
        messages,
        system: `You are a helpful customer service assistant for Proalto, a credit union/financial service.
    Your main goal is to assist customers with their credit inquiries, status checks, and document retrieval.
    
    Tone: Professional, friendly, and efficient.
    Language: Spanish.
    
    If you don't have the user's identification (Cedula), you should ask for it before trying to look up personal information.
    `,
        tools: {
            checkApplicationStatus: tool({
                description: 'Check the status of a credit application by Cedula',
                parameters: checkStatusSchema,
                execute: async ({ cedula }: z.infer<typeof checkStatusSchema>) => {
                    try {
                        const application = await prisma.creditApplication.findFirst({
                            where: { cedula: cedula },
                            orderBy: { createdAt: 'desc' }
                        });

                        if (!application) {
                            return `No encontré ninguna solicitud reciente con la cédula ${cedula}.`;
                        }

                        return `Tu solicitud del ${application.createdAt.toLocaleDateString()} está en estado: ${application.status}. ${application.notes ? `Notas: ${application.notes}` : ''}`;
                    } catch (error) {
                        return "Hubo un error al consultar la base de datos.";
                    } finally {
                        // prisma disconnect is handled by singleton usually, or not needed in serverless generally as connection reuse is preferred
                        // await prisma.$disconnect(); 
                    }
                },
            }),
        },
    });

    return result.toDataStreamResponse();
}
