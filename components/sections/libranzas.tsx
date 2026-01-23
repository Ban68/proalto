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
                            Ofrecemos convenios de libranza para empresas, permitiendo a tus empleados acceder a créditos con tasas preferenciales y descuento directo de nómina. Gestionamos todo el proceso para facilitar el bienestar financiero de tu equipo.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/libranzas"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-[#fec05c] px-8 text-base font-bold text-[#283e52] shadow transition-colors hover:bg-[#eeb14e]"
                            >
                                Conoce Más
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
