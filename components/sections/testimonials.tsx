import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-[#283e52] sm:text-4xl">
                        Testimonios de algunos clientes
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto px-12">
                    {/* Simple Grid implementation for now instead of complex carousel logic */}
                    <FadeIn delay={0.2} direction="up" fullWidth>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform hover:-translate-y-2 duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                        {/* Avatar placeholder */}
                                        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">PL</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#283e52]">Pelico Lesaida</h4>
                                        <p className="text-xs text-muted-foreground">Montserrat</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 italic">
                                    "Increíble experiencia con proalto, pude resolver mi situación financiera rápidamente."
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform hover:-translate-y-2 duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">NM</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#283e52]">Nanra Mócion</h4>
                                        <p className="text-xs text-muted-foreground">Montserrat</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 italic">
                                    "Nuestra vida cambio desde que conocimos a proalto, excelente servicio."
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform hover:-translate-y-2 duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">RM</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#283e52]">Robra Mianda</h4>
                                        <p className="text-xs text-muted-foreground">Montserrat</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 italic">
                                    "Crecimos y pudimos expandir nuestro negocio gracias a su apoyo."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Navigation buttons visual */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#283e52]">
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#283e52]">
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </section>
    );
}
