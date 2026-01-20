import { ClipboardList, Upload, Handshake, Coins } from "lucide-react";

export function ProcessSteps() {
    const steps = [
        {
            icon: ClipboardList,
            title: "Solicitud",
            description: "Diligencia la solicitud en línea haciendo",
            buttonText: "click aquí",
            link: "/formulario-de-registro"
        },
        {
            icon: Upload,
            title: "Documentación",
            description: "Recibirás el listado de la información necesaria para que puedas contar con la aprobación al menor tiempo posible.",
            link: "/formulario-de-registro"
        },
        {
            icon: Handshake,
            title: "Formalización",
            description: "Firma digitalmente la documentación para proceder al desembolso.",
            link: "/formulario-de-registro"
        },
        {
            icon: Coins,
            title: "Desembolso",
            description: "La autorización de desembolso ya fue enviada para ser procesada. Si es fin de semana o festivo, será el siguiente día hábil.",
            link: "/formulario-de-registro"
        }
    ];

    return (
        <section className="relative z-20 -mt-24 px-4">
            <div className="container mx-auto">
                <div className="bg-white rounded-xl shadow-xl p-0 grid grid-cols-1 md:grid-cols-4 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative h-64 p-6 flex flex-col items-center justify-center text-center transition-all hover:bg-[#fec05c] hover:text-[#283e52] cursor-pointer">

                            {/* Normal State (Hidden on Hover) */}
                            <div className="flex flex-col items-center gap-4 transition-opacity duration-300 group-hover:opacity-0 group-hover:absolute group-hover:pointer-events-none">
                                <div className="p-4 rounded-full border-2 border-[#fec05c] text-[#fec05c] group-hover:border-white group-hover:text-white transition-colors">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-[#283e52] text-lg">{step.title}</h3>
                            </div>

                            {/* Hover State (Visible on Hover) */}
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fec05c]">
                                <h3 className="font-bold text-[#283e52] text-lg mb-2">{step.title}</h3>
                                <p className="text-sm font-medium leading-relaxed mb-4">
                                    {step.description}
                                </p>
                                {step.buttonText && (
                                    <a href={step.link} className="inline-block bg-[#283e52] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-opacity-90 transition-opacity">
                                        {step.buttonText}
                                    </a>
                                )}
                                {!step.buttonText && (
                                    <div className="w-8 h-1 bg-[#283e52] opacity-50 rounded-full mt-2" />
                                )}
                            </div>

                            {/* Make whole card clickable for non-button steps, or for all if desired */}
                            {!step.buttonText && (
                                <a href={step.link} className="absolute inset-0 z-10" aria-label={step.title} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
