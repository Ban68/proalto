import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Values() {
    return (
        <section id="nosotros" className="py-24 bg-gray-50">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                        {/* Placeholder for Person in Field image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-gray-200"
                            style={{ backgroundImage: "url('/values-img.jpg')" }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50">
                                <span className="text-gray-500 font-medium">Imagen: Persona en Campo</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                        <h2 className="text-3xl font-bold tracking-tight text-[#283e52] sm:text-4xl">
                            ¿Por qué Proalto?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Porque somos unas empresas que ofrece CRÉDITOS formales y regulados a tasas rentas, somos una nueva alternativa. Con miles de de empresas que confían en nosotros para brindar beneficios y ser empresas.
                        </p>
                        <div className="pt-2">
                            <Link href="/#nosotros" className="inline-flex items-center font-semibold text-[#283e52] hover:text-[#fec05c] transition-colors">
                                Leer más <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
