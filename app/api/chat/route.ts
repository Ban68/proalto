import { google } from '@ai-sdk/google';
import { streamText, tool } from 'ai';
import { z } from 'zod';
import { prisma } from '@/lib/prisma'; // Assuming lib/prisma exists? I need to check. If not, I'll use standard import.

tools: {
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
        },
    });

return result.toDataStreamResponse();
}
