import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-32">
            <div className="container relative z-10 flex flex-col items-center text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                    Tu crédito DIGITAL.<br />
                    <span className="text-secondary">Recibe el dinero en 24H.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Sin filas, sin trámites presenciales. Solicítalo en línea y recibe respuesta inmediata.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Link
                        href="/formulario-de-registro"
                        className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        ¡Solicítalo YA!
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="#creditos"
                        className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Conoce más
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4 text-left sm:grid-cols-4 sm:gap-8">
                    {[
                        "100% Digital",
                        "Aprobación Rápida",
                        "Sin Codeudor*",
                        "Seguro y Confiable"
                    ].map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-secondary" />
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background" />
        </section>
    );
}
