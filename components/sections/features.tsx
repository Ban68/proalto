import { ShieldCheck, Zap, HeartHandshake, Banknote } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Rápido y Digital",
        description: "Proceso 100% en línea. Recibe tu dinero en menos de 24 horas hábiles una vez aprobado."
    },
    {
        icon: Banknote,
        title: "Hasta el doble de tu salario",
        description: "Te prestamos según tu capacidad de endeudamiento, sin codeudor en la mayoría de casos."
    },
    {
        icon: ShieldCheck,
        title: "Transparente y Seguro",
        description: "Somos una entidad vigilada y legalmente constituida. Sin costos ocultos."
    },
    {
        icon: HeartHandshake,
        title: "Atención Personalizada",
        description: "Acompañamiento cercano durante todo el proceso de tu solicitud."
    }
];

export function Features() {
    return (
        <section id="creditos" className="py-24 bg-muted/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        ¿Por qué elegir Proalto?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Diseñamos soluciones financieras pensando en tu bienestar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border transition-shadow hover:shadow-md">
                            <div className="p-3 bg-primary/10 rounded-full mb-4">
                                <feature.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
