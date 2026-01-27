import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Percent, TrendingUp, Store, FileText, Info } from "lucide-react";
import Link from "next/link";

export default function TasasPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-[#283e52] text-white pt-40 pb-20 rounded-b-[3rem]">
                <div className="container max-w-5xl mx-auto text-center px-4">
                    <span className="text-[#fec05c] font-bold tracking-widest uppercase text-sm mb-4 block">
                        Transparencia
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Tasas y Tarifas
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Conoce de manera clara y transparente las tasas vigentes y costos asociados a nuestros productos de crédito.
                    </p>
                </div>
            </section>

            <div className="flex-grow container max-w-5xl mx-auto py-20 px-4 space-y-20">

                {/* Tasa de Interés Vigente Card */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#283e52] mb-4">Tasa de Interés Vigente</h2>
                        <p className="text-muted-foreground">Aplicable para el mes en curso, sujeta a los límites de la Superfinanciera.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

                        {/* Libre Inversión */}
                        <div className="w-full">
                            <RateCard
                                title="Libre Inversión"
                                rate="24.36%"
                                period="E.A. (Efectivo Anual)"
                                icon={<TrendingUp className="w-8 h-8 text-white" />}
                                description="Tasa fija para créditos de consumo y libranzas generales."
                                highlight
                            />
                        </div>

                        {/* Decorative Image */}
                        <div className="relative h-full min-h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/tasas_y_tarifas_illustration.png"
                                alt="Crecimiento Financiero"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#283e52]/80 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="font-bold text-lg mb-2">Transparencia Total</p>
                                <p className="text-sm text-gray-200">Sin letras chiquitas ni costos ocultos. Tu tranquilidad financiera es nuestra prioridad.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comisiones y Otros Costos */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl font-bold text-[#283e52] flex items-center gap-3">
                                <FileText className="w-6 h-6 text-[#fec05c]" />
                                Comisiones y Cargos
                            </h3>
                            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-[#283e52] mb-2 text-lg">Comisión de Gestión</h4>
                                <p className="text-3xl font-bold text-[#283e52] mb-1">
                                    4,5% <span className="text-base font-normal text-muted-foreground">del valor del crédito</span>
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                                    Este valor cubre el estudio de crédito, consulta en centrales y gastos administrativos. Se computa para calcular la tasa máxima de interés vigente permitida.
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl font-bold text-[#283e52] flex items-center gap-3">
                                <Info className="w-6 h-6 text-[#fec05c]" />
                                Información Legal
                            </h3>
                            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="block w-1.5 h-1.5 rounded-full bg-[#fec05c] mt-2 flex-shrink-0"></span>
                                    Las tasas aquí presentadas son las máximas vigentes autorizadas.
                                </li>
                                <li className="flex gap-3">
                                    <span className="block w-1.5 h-1.5 rounded-full bg-[#fec05c] mt-2 flex-shrink-0"></span>
                                    La tasa aplicable a tu crédito específico dependerá de tu perfil de riesgo y monto solicitado.
                                </li>
                                <li className="flex gap-3">
                                    <span className="block w-1.5 h-1.5 rounded-full bg-[#fec05c] mt-2 flex-shrink-0"></span>
                                    No cobramos por estudios de crédito si la solicitud es rechazada.
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Link href="/formulario-de-registro" className="text-[#283e52] font-bold underline hover:text-[#fec05c] transition-colors">
                                    Solicitar estudio de crédito sin costo &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center text-xs text-gray-400 max-w-2xl mx-auto">
                    * Proalto vigila el cumplimiento de las tasas máximas de usura certificadas por la Superintendencia Financiera de Colombia para cada modalidad de crédito.
                </div>

            </div>
            <Footer />
        </main>
    );
}

function RateCard({ title, rate, period, icon, description, highlight = false }: { title: string, rate: string, period: string, icon: React.ReactNode, description: string, highlight?: boolean }) {
    return (
        <div className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${highlight ? 'bg-[#283e52] text-white shadow-lg ring-4 ring-[#fec05c]/20' : 'bg-white text-[#283e52] shadow-md border border-gray-100'}`}>

            {/* Decoration */}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-10 -mt-10 blur-2xl ${highlight ? 'bg-[#fec05c]/20' : 'bg-[#283e52]/5'}`}></div>

            <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-2xl mb-6 ${highlight ? 'bg-[#fec05c] text-[#283e52]' : 'bg-[#283e52] text-white'}`}>
                    {icon}
                </div>

                <h3 className={`text-xl font-bold mb-2 ${highlight ? 'text-gray-100' : 'text-gray-600'}`}>{title}</h3>

                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl md:text-5xl font-extrabold tracking-tight">{rate}</span>
                </div>
                <p className={`text-sm font-medium mb-6 ${highlight ? 'text-[#fec05c]' : 'text-blue-600'}`}>{period}</p>

                <p className={`text-sm leading-relaxed ${highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}
