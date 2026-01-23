import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function Testimonials() {
    const testimonials = [
        {
            initials: "EU",
            name: "Eugenio",
            role: "Coordinador Finca Bananera",
            quote: "Elegí a la Financiera PROALTO porque maneja unas buenas tasas, además que los descuentos son por nomina, uno no siente que está pagando el crédito. Es muy fácil solicitar; ya voy en mi segundo crédito y estoy muy contento con ellos."
        },
        {
            initials: "AU",
            name: "Aurelio",
            role: "Vigilante en Finca Bananera",
            quote: "Elegí a PROALTO por sus buenas tasas, son cómodas y por convenio directo con las fincas. Podemos solicitar los créditos de una manera fácil y ágil... son una empresa seria y que nos ha ayudado mucho a los trabajadores de la finca. Yo voy para mi segundo crédito... Espero seguir teniendo un vínculo comercial con la financiera."
        },
        {
            initials: "FL",
            name: "Florentino",
            role: "Empleado Finca Bananera",
            quote: "Estoy muy agradecido con la financiera porque me colaboraron con un crédito que necesitaba de manera urgente. Hice una inversión en un negocio que tengo con mi esposa... Sus tasas son muy cómodas y bajas... Con PROALTO me siento feliz y espero seguir siendo su aliado."
        },
        {
            initials: "ZO",
            name: "Zoraida",
            role: "Cliente Satisfecha",
            quote: "Gracias a Financiera Proalto pude capitalizar mi negocio y unificar mis deudas... Proalto significó un nuevo comienzo."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-[#283e52] sm:text-4xl">
                        Testimonios de algunos clientes
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto px-12">
                    {/* Simple Grid implementation for now instead of complex carousel logic */}
                    <FadeIn delay={0.2} direction="up" fullWidth>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform hover:-translate-y-2 duration-300 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#fec05c]/20 flex items-center justify-center text-[#283e52] font-bold text-sm shrink-0">
                                            {testimonial.initials}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#283e52] text-sm uppercase">{testimonial.name}</h4>
                                            <p className="text-[10px] text-muted-foreground uppercase">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-600 italic leading-relaxed grow">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Navigation buttons visual */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#283e52]">
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#283e52]">
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </section>
    );
}
