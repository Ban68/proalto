import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
    return (
        <section className="relative pt-52 pb-48 overflow-hidden bg-[#283e52]">
            {/* Background Image Placeholder */}
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: "url('/hero-bg.webp')" }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#283e52]/90 via-[#283e52]/60 to-transparent z-10" />

            <div className="container relative z-20">
                <div className="max-w-2xl text-white space-y-8">
                    <FadeIn delay={0.2} direction="right">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                            Tu crédito digital <br />
                            en menos de <br />
                            <span className="text-white">24 horas</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <Link
                            href="/formulario-de-registro"
                            className="inline-flex h-14 items-center justify-center rounded-md bg-[#fec05c] px-8 text-lg font-bold text-[#283e52] shadow-lg transition-transform hover:scale-105 hover:bg-[#eeb14e]"
                        >
                            ¡Solicítalo YA!
                        </Link>
                        <Link
                            href="/tasas-y-tarifas#simulador"
                            className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white px-8 text-lg font-bold text-white shadow-lg transition-all hover:bg-white/10 hover:scale-105"
                        >
                            Simular Crédito
                        </Link>
                </div>
            </FadeIn>
        </div>
            </div >
        </section >
    );
}
