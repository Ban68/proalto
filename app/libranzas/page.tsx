import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2, Building2, Users2, Laptop2, TrendingUp, Handshake, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LibranzasPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#283e52]">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/hero-bg.jpg" // Reusing hero-bg for consistency, or ideally a corporate meeting image
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container relative z-10">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Transforma el bienestar financiero de tus <span className="text-[#fec05c]">empleados</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Conviértete en un aliado estratégico. Ofrece créditos por libranza con tasas preferenciales, sin costos administrativos ni riesgos para tu empresa.
                            </p>
                            <div className="pt-8 flex justify-center gap-4">
                                <Link
                                    href="#contacto"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#fec05c] px-8 text-base font-bold text-[#283e52] shadow-lg hover:bg-[#eeb14e] transition-all hover:scale-105"
                                >
                                    Agendar Reunión
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Value Proposition / 3 Strong Arguments */}
            <section className="py-24 bg-gray-50">
                <div className="container space-y-16">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-[#283e52] sm:text-4xl mb-4">
                            ¿Por qué ser aliado de Proalto?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Entendemos las necesidades de las empresas modernas. Nuestra alianza está diseñada para aportar valor real sin cargas operativas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Argument 1 */}
                        <FadeIn delay={0.1} fullWidth>
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#fec05c]/50 transition-colors h-full">
                                <div className="w-14 h-14 bg-[#283e52]/10 rounded-xl flex items-center justify-center mb-6 text-[#283e52]">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#283e52] mb-3">
                                    Productividad y Retención
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    El estrés financiero es una de las principales causas de distracción laboral. Al ofrecer soluciones de liquidez ágiles, mejoras el clima organizacional, reduces la rotación y aumentas el enfoque de tu equipo.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Argument 2 */}
                        <FadeIn delay={0.2} fullWidth>
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#fec05c]/50 transition-colors h-full">
                                <div className="w-14 h-14 bg-[#283e52]/10 rounded-xl flex items-center justify-center mb-6 text-[#283e52]">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#283e52] mb-3">
                                    Cero Costo y Cero Riesgo
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Tu empresa no asume ninguna responsabilidad por el pago del crédito ni incurre en costos. Proalto asume el 100% del riesgo crediticio. Tu rol se limita a facilitar el descuento de nómina.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Argument 3 */}
                        <FadeIn delay={0.3} fullWidth>
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#fec05c]/50 transition-colors h-full">
                                <div className="w-14 h-14 bg-[#283e52]/10 rounded-xl flex items-center justify-center mb-6 text-[#283e52]">
                                    <Laptop2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#283e52] mb-3">
                                    Gestión 100% Digital
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    No cargamos a tu departamento de RRHH con papeleo. Nuestro proceso es digital, eficiente y transparente, minimizando la operatividad para tu equipo administrativo.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Metrics & Trust Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right">
                            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/libranzas-img.webp" // reusing the handshake image
                                    alt="Alianza Estratégica"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight text-[#283e52] sm:text-4xl mb-4">
                                        Solidez y Confianza
                                    </h2>
                                    <p className="text-lg text-muted-foreground">
                                        Somos una entidad vigilada y comprometida con el desarrollo del país. Nuestra trayectoria nos permite ofrecer un respaldo sólido a nuestros aliados.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#fec05c]">
                                        <div className="text-3xl font-bold text-[#283e52] mb-1">+5</div>
                                        <div className="text-sm text-gray-600 font-medium">Años de Experiencia en el Sector</div>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#fec05c]">
                                        <div className="text-3xl font-bold text-[#283e52] mb-1">24h</div>
                                        <div className="text-sm text-gray-600 font-medium">Tiempo Promedio de Respuesta</div>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#fec05c]">
                                        <div className="text-3xl font-bold text-[#283e52] mb-1">100%</div>
                                        <div className="text-sm text-gray-600 font-medium">Cobertura Legal y Regulatoria</div>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#fec05c]">
                                        <div className="text-3xl font-bold text-[#283e52] mb-1">Top</div>
                                        <div className="text-sm text-gray-600 font-medium">Aliado Agroindustrial</div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#fec05c]" />
                                            <span className="text-gray-700">Aprobación rápida garantizada</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#fec05c]" />
                                            <span className="text-gray-700">Tasas reguladas y transparentes</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#fec05c]" />
                                            <span className="text-gray-700">Soporte dedicado para la empresa</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA / Contact Section */}
            <section id="contacto" className="py-24 bg-[#283e52]">
                <div className="container text-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                            ¿Listo para potenciar tu empresa?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Hablemos hoy mismo. Un asesor corporativo está listo para presentarte nuestra propuesta de convenio a medida.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="https://wa.me/573001234567" // Placeholder, should be updated with real number if different
                                target="_blank"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-8 text-base font-bold text-white shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105"
                            >
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="mr-2 filter brightness-0 invert"
                                />
                                Contactar por WhatsApp
                            </Link>
                            <Link
                                href="mailto:gerencia@proalto.co"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-[#283e52] shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
                            >
                                <Handshake className="mr-2 h-5 w-5" />
                                Escribir a Gerencia
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
