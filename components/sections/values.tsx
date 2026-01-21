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
                            style={{ backgroundImage: "url('/values-img.webp')" }}
                        >
                            {/* Overlay removed */}
                        </div>
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                        <h2 className="text-3xl font-bold tracking-tight text-[#283e52] sm:text-4xl">
                            ¿Por qué Proalto?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Más que una financiera, somos tu aliado estratégico. Nos destacamos por nuestra solidez, transparencia y rapidez en el servicio. Miles de clientes confían en nosotros gracias a nuestro compromiso con su bienestar financiero y nuestras tasas competitivas.
                        </p>
                        <div className="pt-2">
                            <Link href="/nosotros" className="inline-flex items-center font-semibold text-[#283e52] hover:text-[#fec05c] transition-colors">
                                Leer más <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
