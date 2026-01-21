import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Link from "next/link";
import { Target, Lightbulb, Users, TrendingUp, ShieldCheck, Zap, Heart, Calendar } from "lucide-react";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* 1. Immersive Hero Section */}
            <section className="relative bg-[#283e52] text-white pt-48 pb-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero-bg.webp')" }}
                ></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#283e52]/90 to-[#283e52]"></div>

                <div className="container max-w-5xl mx-auto text-center relative z-10 px-4">
                    <span className="text-[#fec05c] font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Nuestra Esencia
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Nosotros
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprometidos con el progreso y bienestar financiero del campo y la ciudad.
                    </p>
                </div>
            </section>

            {/* 2. Impact Stats Bar */}
            <section className="relative z-20 -mt-16 container max-w-6xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <StatItem number="+5,000" label="Clientes Felices" />
                    <StatItem number="100%" label="Digital" />
                    <StatItem number="+50" label="Municipios" />
                    <StatItem number="24h" label="Respuesta Rápida" />
                </div>
            </section>

            <div className="flex-grow container max-w-5xl mx-auto py-24 space-y-32">

                {/* ¿Quiénes somos? */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#283e52]">
                            Transformando el acceso al crédito
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
                            <p>
                                <strong className="text-[#283e52]">Proalto</strong> nace con una misión clara: democratizar las oportunidades financieras en Colombia. Nos especializamos en apoyar tanto a la población rural como urbana, sectores históricamente desatendidos por la banca tradicional.
                            </p>
                            <p>
                                A través de créditos de libranza formales y regulados, ofrecemos una alternativa segura contra el "gota a gota", brindando tasas competitivas y un servicio humano que entiende las necesidades reales de nuestros clientes.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/values-img.webp')" }}
                        ></div>
                    </div>
                </section>

                {/* 3. Valores Corporativos */}
                <section className="text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#283e52]">Nuestros Valores</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Los pilares que guían cada crédito que otorgamos.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<ShieldCheck className="w-10 h-10 text-[#fec05c]" />}
                            title="Transparencia"
                            text="Sin letras chiquitas. Hablamos claro desde el primer momento porque tu confianza es nuestro mayor activo."
                        />
                        <ValueCard
                            icon={<Zap className="w-10 h-10 text-[#fec05c]" />}
                            title="Agilidad"
                            text="Entendemos que el dinero se necesita a tiempo. Optimizamos nuestros procesos para darte respuestas rápidas."
                        />
                        <ValueCard
                            icon={<Heart className="w-10 h-10 text-[#fec05c]" />}
                            title="Empatía"
                            text="Más que clientes, vemos personas con sueños y necesidades. Diseñamos soluciones que se adaptan a ti."
                        />
                    </div>
                </section>

                {/* Objetivos & Visión (Updated Design) */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <Target className="w-8 h-8 text-[#283e52]" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#283e52]">Nuestros Objetivos</h2>
                        </div>
                        <ul className="space-y-6">
                            <ObjectiveItem
                                icon={<TrendingUp className="w-5 h-5 text-[#fec05c]" />}
                                text="Ser una empresa sólida y en permanente crecimiento sostenible."
                            />
                            <ObjectiveItem
                                icon={<Lightbulb className="w-5 h-5 text-[#fec05c]" />}
                                text="Innovar constantemente en productos financieros inclusivos para el campo y la ciudad."
                            />
                        </ul>
                    </section>

                    <section className="bg-[#283e52] text-white p-10 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#fec05c]/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-[#fec05c]/20 transition-all duration-700"></div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                    <Users className="w-8 h-8 text-[#fec05c]" />
                                </div>
                                <h2 className="text-2xl font-bold">Nuestra Visión</h2>
                            </div>
                            <p className="text-xl text-gray-100 leading-relaxed font-light">
                                "Consolidarnos para el año 2028 como la financiera líder en inclusión digital, con más de <span className="font-bold text-[#fec05c]">5,000 clientes activos</span> y procesos 100% remotos."
                            </p>
                        </div>
                    </section>
                </div>

                {/* 4. Timeline (Trayectoria) */}
                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#283e52]">Nuestra Trayectoria</h2>
                    </div>
                    <div className="max-w-4xl mx-auto border-l-2 border-[#fec05c]/30 pl-8 md:pl-0 md:border-l-0 md:border-t-2 md:pt-12 grid md:grid-cols-3 gap-8 relative">
                        {/* Desktop dots */}
                        <div className="hidden md:block absolute -top-1.5 left-[16%] w-3 h-3 bg-[#fec05c] rounded-full"></div>
                        <div className="hidden md:block absolute -top-1.5 left-[50%] w-3 h-3 bg-[#fec05c] rounded-full"></div>
                        <div className="hidden md:block absolute -top-1.5 left-[83%] w-3 h-3 bg-[#fec05c] rounded-full"></div>

                        <TimelineItem
                            year="2020"
                            title="El Comienzo"
                            text="Nace Proalto con la visión de llevar crédito al sector rural."
                        />
                        <TimelineItem
                            year="2023"
                            title="Expansión Digital"
                            text="Lanzamos nuestra plataforma para solicitudes 100% en línea."
                        />
                        <TimelineItem
                            year="2025"
                            title="Crecimiento"
                            text="Alcanzamos miles de clientes felices y ampliamos nuestro portafolio de libranzas."
                        />
                    </div>
                </section>

            </div>

            {/* 5. Final CTA */}
            <section className="bg-white py-24 border-t border-gray-100">
                <div className="container max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold text-[#283e52]">
                        ¿Listo para formar parte de nuestra historia?
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Únete a los miles de colombianos que ya confían en Proalto.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href="/formulario-de-registro"
                            className="inline-flex items-center justify-center rounded-full bg-[#fec05c] px-8 py-4 text-lg font-bold text-[#283e52] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Solicitar Crédito
                        </Link>
                        <Link
                            href="/#contacto"
                            className="inline-flex items-center justify-center rounded-full bg-white border-2 border-[#283e52] px-8 py-4 text-lg font-bold text-[#283e52] hover:bg-[#283e52] hover:text-white transition-all duration-300 shadow-sm"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function StatItem({ number, label }: { number: string, label: string }) {
    return (
        <div className="text-center p-2">
            <div className="text-3xl md:text-4xl font-extrabold text-[#283e52] mb-1">{number}</div>
            <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
        </div>
    );
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
            <div className="mb-6 inline-block p-4 bg-[#283e52]/5 rounded-2xl group-hover:bg-[#283e52]/10 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[#283e52] mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{text}</p>
        </div>
    );
}

function ObjectiveItem({ text, icon }: { text: string, icon: React.ReactNode }) {
    return (
        <li className="flex gap-4 items-start">
            <div className="flex-shrink-0 mt-1">
                {icon}
            </div>
            <p className="text-gray-600 leading-relaxed font-medium">{text}</p>
        </li>
    );
}

function TimelineItem({ year, title, text }: { year: string, title: string, text: string }) {
    return (
        <div className="relative pl-8 md:pl-0 md:text-center group">
            {/* Mobile dot */}
            <div className="md:hidden absolute top-0 left-[-5px] w-3 h-3 bg-[#fec05c] rounded-full border-2 border-white shadow-sm"></div>

            <div className="text-4xl font-bold text-[#fec05c]/40 mb-2 group-hover:text-[#fec05c] transition-colors duration-300">{year}</div>
            <h3 className="text-xl font-bold text-[#283e52] mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
        </div>
    );
}
