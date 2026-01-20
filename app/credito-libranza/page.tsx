import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, Wallet, FileText, Building2, BadgeCheck } from "lucide-react";

export default function CreditoLibranzaPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-[#283e52] text-white pt-40 pb-20 rounded-b-[3rem]">
                <div className="container max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Tu crédito por descuento de nómina, <br />
                        <span className="text-[#fec05c]">fácil y rápido.</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Crédito por libranza: <span className="font-semibold text-white">hasta el doble de tu salario sin codeudor</span>,
                        cuotas fijas y respuesta ágil. Si tu empresa no tiene convenio, <span className="font-semibold text-[#fec05c]">ProAlto lo gestiona por ti.</span>
                    </p>
                </div>
            </section>

            <div className="flex-grow container max-w-5xl mx-auto py-16 space-y-20">

                {/* Beneficios Claves - Grid */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#283e52] mb-4">Beneficios Claves</h2>
                        <p className="text-muted-foreground">Todo lo que necesitas para tomar la mejor decisión financiera.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <BenefitCard
                            icon={<Wallet className="w-8 h-8 text-[#fec05c]" />}
                            title="Monto Flexible"
                            description="Hasta el doble de tu salario sin codeudor (según tu capacidad de endeudamiento)."
                        />
                        <BenefitCard
                            icon={<ShieldCheck className="w-8 h-8 text-[#fec05c]" />}
                            title="Reportados Bienvenidos"
                            description="Si estás reportado, evaluamos tu solicitud (sujeto a políticas de riesgo)."
                        />
                        <BenefitCard
                            icon={<Clock className="w-8 h-8 text-[#fec05c]" />}
                            title="Pagos Automáticos"
                            description="Cuotas por nómina: simples, puntuales y sin trámites presenciales."
                        />
                        <BenefitCard
                            icon={<CheckCircle2 className="w-8 h-8 text-[#fec05c]" />}
                            title="100% Acompañado"
                            description="Proceso digital y acompañamiento personalizado de principio a fin."
                        />
                    </div>
                </section>

                {/* Como funciona & Requisitos Split */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Como funciona */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#283e52] mb-6 flex items-center gap-2">
                            <Building2 className="w-6 h-6 text-[#fec05c]" />
                            ¿Cómo funciona?
                        </h2>
                        <div className="space-y-6">
                            <Step number="1" text="Déjanos tus datos y envía la documentación." />
                            <Step number="2" text="Validamos con tu empresa (o gestionamos el convenio)." />
                            <Step number="3" text="Enviamos autorización de descuento." />
                            <Step number="4" text="Desembolso y descuento por nómina." />
                        </div>
                    </section>

                    {/* Requisitos */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#283e52] mb-6 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-[#fec05c]" />
                            Requisitos
                        </h2>
                        <ul className="space-y-4">
                            <RequirementItem text="Antigüedad mínima en la empresa: 3 meses." />
                            <RequirementItem text="Ser mayor de edad y empleado." />
                            <RequirementItem text="Cédula original." />
                            <RequirementItem text="2 últimos desprendibles de nómina." />
                            <RequirementItem text="Certificado laboral." />
                            <RequirementItem text="Último extracto bancario donde recibes tu nómina." />
                        </ul>
                    </section>
                </div>

                {/* CTA Button */}
                <div className="text-center py-8">
                    <Link
                        href="/formulario-de-registro"
                        className="inline-flex items-center justify-center rounded-full bg-[#fec05c] px-10 py-4 text-lg font-bold text-[#283e52] shadow-xl hover:bg-[#eeb14e] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                    >
                        ¡SOLICITALO YA!
                    </Link>
                    <p className="mt-4 text-sm text-muted-foreground">Respuesta en menos de 24 horas hábiles</p>
                </div>

            </div>
            <Footer />
        </main>
    );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="bg-[#283e52]/5 p-3 rounded-lg">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-[#283e52] text-lg mb-1">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
            </div>
        </div>
    );
}

function Step({ number, text }: { number: string, text: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#283e52] text-[#fec05c] flex items-center justify-center font-bold text-sm">
                {number}
            </div>
            <p className="text-gray-600 pt-1">{text}</p>
        </div>
    );
}

function RequirementItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <BadgeCheck className="w-5 h-5 text-[#fec05c] flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{text}</span>
        </li>
    );
}
