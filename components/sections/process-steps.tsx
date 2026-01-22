import { ClipboardList, Upload, Handshake, Coins } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

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
        <section className="relative z-20 -mt-24 px-4 hidden md:block">
            <FadeIn delay={0.6} direction="up" fullWidth>
                <div className="container mx-auto">
                    <div className="bg-white rounded-xl shadow-xl p-0 grid grid-cols-1 md:grid-cols-4 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative h-80 overflow-hidden cursor-pointer bg-white">
                                {/* Sliding Container */}
                                <div className="absolute w-full h-full transition-transform duration-500 ease-in-out group-hover:-translate-y-full will-change-transform">

                                    {/* Front Face (Icon + Title) */}
                                    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                                        <div className="p-4 rounded-full border-2 border-[#fec05c] text-[#fec05c] transition-colors mb-4">
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-[#283e52] text-lg">{step.title}</h3>
                                    </div>

                                    {/* Back Face (Description + Button) - Rendered conceptually "below" the front face */}
                                    <div className="h-full w-full flex flex-col items-center justify-center p-6 bg-[#fec05c] text-center">
                                        <h3 className="font-bold text-[#283e52] text-lg mb-2">{step.title}</h3>
                                        <p className="text-sm font-medium leading-relaxed mb-4 text-[#283e52]">
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

                                </div>

                                {/* Clickable Overlay */}
                                {!step.buttonText && (
                                    <a href={step.link} className="absolute inset-0 z-10" aria-label={step.title} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
            {/* Mobile Fallback - Static Layout */}
            <div className="container mx-auto mt-8 md:hidden">
                <div className="bg-white rounded-xl shadow-xl p-6 space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center pb-6 border-b last:border-0 last:pb-0">
                            <div className="p-3 rounded-full border-2 border-[#fec05c] text-[#fec05c] mb-2">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-[#283e52] text-lg mb-1">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                            {step.buttonText && (
                                <a href={step.link} className="mt-3 inline-block bg-[#283e52] text-white px-4 py-2 rounded-md text-xs font-bold">
                                    {step.buttonText}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
