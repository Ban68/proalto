import { ClipboardList, Upload, Handshake, Coins } from "lucide-react";

export function ProcessSteps() {
    const steps = [
        {
            icon: ClipboardList,
            title: "Solicitud",
            description: "Diligencia el formulario"
        },
        {
            icon: Upload,
            title: "Documentación",
            description: "Adjunta los soportes"
        },
        {
            icon: Handshake,
            title: "Formalización",
            description: "Firma digitalmente"
        },
        {
            icon: Coins,
            title: "Desembolso",
            description: "Recibe tu dinero"
        }
    ];

    return (
        <section className="relative z-20 -mt-24 px-4">
            <div className="container mx-auto">
                <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 rounded-full border-2 border-[#fec05c] text-[#fec05c]">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-[#283e52] text-lg">{step.title}</h3>
                            {/* <p className="text-sm text-muted-foreground">{step.description}</p> // Hidden in design screenshot but useful context */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
