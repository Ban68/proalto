import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-[#283e52] text-white pt-40 pb-20 rounded-b-[3rem]">
                <div className="container max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Nosotros
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprometidos con el progreso y bienestar financiero de nuestros clientes.
                    </p>
                </div>
            </section>

            <div className="flex-grow container max-w-5xl mx-auto py-20 space-y-24">

                {/* Quiénes somos */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="text-[#fec05c] font-bold tracking-wider uppercase text-sm">Proalto</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#283e52]">
                            ¿Quiénes somos?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                            Proalto es una empresa que apoya a la población rural en Colombia, entregando
                            créditos formales y regulados a tasas competitivas. Hoy contamos con un número
                            significativo de clientes generando progreso en el sector rural y urbano.
                        </p>
                    </div>
                    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                        {/* Placeholder for "Farmer" image from original reference if available, or generic */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/values-img.webp')" }} // Reusing existing image for consistent theme
                        ></div>
                    </div>
                </section>

                {/* Objetivos & Visión Split */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Objetivos */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                        <h2 className="text-2xl font-bold text-[#283e52] mb-8 flex items-center gap-3">
                            <Target className="w-8 h-8 text-[#fec05c]" />
                            Objetivos
                        </h2>
                        <ul className="space-y-8">
                            <ObjectiveItem
                                icon={<TrendingUp className="w-5 h-5" />}
                                text="Ser una empresa sólida y en permanente crecimiento."
                            />
                            <ObjectiveItem
                                icon={<Lightbulb className="w-5 h-5" />}
                                text="Innovar en la creación de productos financieros que otorguen oportunidades de crecimiento tanto en el sector rural como urbano."
                            />
                            <ObjectiveItem
                                icon={<Users className="w-5 h-5" />}
                                text="Innovar en la creación de productos financieros que otorguen oportunidades de crecimiento a nuestros clientes."
                            />
                        </ul>
                    </section>

                    {/* Nuestra Visión */}
                    <section className="bg-[#283e52] text-white p-8 rounded-2xl shadow-xl h-full flex flex-col justify-center relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#fec05c]/10 rounded-full -mr-16 -mt-16 blur-xl"></div>

                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                            <Users className="w-8 h-8 text-[#fec05c]" />
                            Nuestra Visión
                        </h2>
                        <p className="text-lg text-gray-200 leading-relaxed relative z-10">
                            "Ser, para el año 2028, una financiera que con más de 5000 clientes activos;
                            ofreciendo créditos 100% digitales."
                        </p>
                    </section>
                </div>

            </div>
            <Footer />
        </main>
    );
}

function ObjectiveItem({ text, icon }: { text: string, icon: React.ReactNode }) {
    return (
        <li className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fec05c]/20 text-[#283e52] flex items-center justify-center">
                {icon}
            </div>
            <p className="text-gray-600 leading-relaxed pt-1.5">{text}</p>
        </li>
    );
}
