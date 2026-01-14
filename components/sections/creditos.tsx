import Link from "next/link";
import { ArrowRight, Banknote, CalendarClock, Percent } from "lucide-react";

export function Creditos() {
    return (
        <section id="creditos" className="py-24 bg-background">
            <div className="container">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Nuestros Créditos
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Soluciones de libre inversión diseñadas a tu medida.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                        <Banknote className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Libre Inversión</h3>
                        <p className="text-muted-foreground mb-6">
                            Para lo que necesites: viajes, estudios, consolidación de deudas o imprevistos.
                        </p>
                        <ul className="space-y-2 mb-8 text-sm">
                            <li className="flex items-center">✓ Montos desde $500.000</li>
                            <li className="flex items-center">✓ Sin codeudor*</li>
                            <li className="flex items-center">✓ Aprobación digital</li>
                        </ul>
                        <Link href="/formulario-de-registro" className="mt-auto inline-flex items-center text-primary font-medium hover:underline">
                            Solicitar ahora <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="flex flex-col p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                        <CalendarClock className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Plazos Flexibles</h3>
                        <p className="text-muted-foreground mb-6">
                            Elige el plazo que mejor se adapte a tu flujo de caja mensual.
                        </p>
                        <ul className="space-y-2 mb-8 text-sm">
                            <li className="flex items-center">✓ De 6 a 48 meses</li>
                            <li className="flex items-center">✓ Cuota fija mensual</li>
                            <li className="flex items-center">✓ Posibilidad de prepago</li>
                        </ul>
                        <Link href="/formulario-de-registro" className="mt-auto inline-flex items-center text-primary font-medium hover:underline">
                            Ver plazos <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="flex flex-col p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                        <Percent className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Tasas Competitivas</h3>
                        <p className="text-muted-foreground mb-6">
                            Ofrecemos tasas reguladas y justas, pensadas en tu bienestar financiero.
                        </p>
                        <ul className="space-y-2 mb-8 text-sm">
                            <li className="flex items-center">✓ Tasa legal vigente</li>
                            <li className="flex items-center">✓ Sin costos ocultos</li>
                            <li className="flex items-center">✓ Estudio de crédito gratis</li>
                        </ul>
                        <Link href="/formulario-de-registro" className="mt-auto inline-flex items-center text-primary font-medium hover:underline">
                            Simular crédito <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
