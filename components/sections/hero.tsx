import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-32 pb-48 overflow-hidden bg-[#283e52]">
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#283e52] via-[#283e52]/80 to-transparent z-10" />

            <div className="container relative z-20">
                <div className="max-w-2xl text-white space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                        Tu crédito digital <br />
                        en menos de <br />
                        <span className="text-white">24 horas</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/formulario-de-registro"
                            className="inline-flex h-14 items-center justify-center rounded-md bg-[#fec05c] px-8 text-lg font-bold text-[#283e52] shadow-lg transition-transform hover:scale-105 hover:bg-[#eeb14e]"
                        >
                            ¡Solicítalo YA!
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
