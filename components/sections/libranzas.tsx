import Link from "next/link";

export function Libranzas() {
    return (
        <section id="libranzas" className="py-24 bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-[#283e52] sm:text-4xl">
                            Libranzas
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            La parte de las empresas que permite otorga créditos a sus empleados a tasas competitivas. Promueve de LIBRANZAS, y con ello deja datos para contactarte.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/#contacto"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-[#fec05c] px-8 text-base font-bold text-[#283e52] shadow transition-colors hover:bg-[#eeb14e]"
                            >
                                Haz Clic Aquí
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        {/* Placeholder for Handshake image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-gray-200"
                            style={{ backgroundImage: "url('/libranzas-img.webp')" }}
                        >
                            {/* Overlay removed */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
