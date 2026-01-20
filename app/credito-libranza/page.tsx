import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Link from "next/link";

export default function CreditoLibranzaPage() {
    return (
        <main className="min-h-screen bg-[#283e52] text-white flex flex-col">
            <Navbar />
            <div className="flex-grow pt-32 pb-16">
                <div className="container max-w-4xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                            Tu crédito por descuento de nómina, <span className="text-[#fec05c]">fácil y rápido.</span>
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            Crédito por libranza: <span className="font-bold text-white">hasta el doble de tu salario sin codeudor</span>,
                            cuotas fijas y respuesta ágil, incluso si estás reportado puedes acceder a un crédito con nosotros.
                            Si tu empresa no tiene convenio, <span className="font-bold text-white">ProAlto lo gestiona por ti.</span>
                        </p>
                    </div>

                    {/* Beneficios Claves */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-100">Beneficios Claves</h2>
                        <ul className="space-y-3 list-disc pl-5 text-gray-300">
                            <li>
                                <span className="font-bold text-white">Hasta el doble de tu salario</span> sin codeudor
                                <span className="italic"> (según tu capacidad de endeudamiento)</span>
                            </li>
                            <li>
                                <span className="font-bold text-white">Si estás reportado</span>, evaluamos tu
                                <span className="italic"> solicitud (sujeto a políticas de riesgo y capacidad de pago).</span>
                            </li>
                            <li>
                                <span className="font-bold text-white">Cuotas por nómina:</span> simples, puntuales y sin trámites presenciales.
                            </li>
                            <li>
                                <span className="font-bold text-white">Proceso digital y acompañamiento personalizado</span> de principio a fin.
                            </li>
                        </ul>
                    </section>

                    {/* Como funciona */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-100">Como funciona:</h2>
                        <ol className="space-y-2 list-decimal pl-5 text-gray-300">
                            <li>Déjanos tus datos y envía la documentación</li>
                            <li>Validamos con tu empresa (o gestionamos el convenio si aún no existe).</li>
                            <li>Enviamos autorización de descuento.</li>
                            <li>Desembolso y descuento por nómina.</li>
                        </ol>
                    </section>

                    {/* Requisitos */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-100">Requisitos</h2>
                        <ul className="space-y-2 list-disc pl-5 text-gray-300">
                            <li>Antigüedad mínima en la empresa: 3 meses.</li>
                            <li>Ser mayor de edad y empleado.</li>
                            <li>Cédula original.</li>
                            <li>2 últimos desprendibles de nómina.</li>
                            <li>Certificado laboral.</li>
                            <li>Último extracto bancario donde recibes tu nómina.</li>
                        </ul>
                    </section>

                    {/* CTA Button */}
                    <div className="pt-8 flex justify-center">
                        <Link
                            href="/formulario-de-registro"
                            className="inline-flex items-center justify-center rounded-md bg-[#fec05c] px-8 py-3 text-base font-bold text-[#283e52] shadow-lg hover:bg-[#eeb14e] transition-colors uppercase tracking-wide"
                        >
                            ¡SOLICITALO YA!
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
