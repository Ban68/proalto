import { google } from '@ai-sdk/google';
import { streamText, tool } from 'ai';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const tools = {
    checkApplicationStatus: tool({
        description: 'Check the status of a credit application by Cedula',
        parameters: z.object({
            cedula: z.string().describe('The national identification number (Cedula) of the customer'),
        }),
        execute: async (args) => {
            const { cedula } = args;
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
            }
        },
    }),
};

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
        tools,
    });

    return result.toDataStreamResponse();
}
