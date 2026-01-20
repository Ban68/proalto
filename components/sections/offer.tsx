import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Offer() {
    return (
        <section id="creditos" className="py-24 bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-[#283e52] sm:text-4xl">
                            ¿Qué ofrecemos?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Porque somos una financiera que ofrece CRÉDITOS formales y regulados a tasas competitivas, pagamos grandes montos a nuestros clientes clientes tanto en con en nosotros para brindar beneficios y ser empresas.
                        </p>
                        <div className="pt-2">
                            <Link href="/#creditos" className="inline-flex items-center font-semibold text-[#283e52] hover:text-[#fec05c] transition-colors">
                                Leer más <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        {/* Placeholder for Man with Laptop image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-gray-200"
                            style={{ backgroundImage: "url('/offer-img.webp')" }}
                        >

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
