"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contacto" className="relative py-24 bg-slate-50 text-[#283e52] overflow-hidden">

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#283e52]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fec05c]/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="container relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-[#283e52] mb-4">
                        ¡Contáctanos!
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-[#fec05c] text-xl font-bold mb-2">Contáctanos</h3>
                            <p className="text-muted-foreground font-medium mb-1">info@proalto.co</p>
                            <p className="text-muted-foreground font-medium">
                                Celulares: 3203454201 - 3114121467
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#fec05c] text-xl font-bold mb-2">Horario De Atención</h3>
                            <p className="text-muted-foreground font-medium">
                                Lunes a viernes: 7:30 am a 5:30 pm
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="nombre" className="text-sm font-bold text-[#283e52]">
                                    Nombre
                                </label>
                                <input
                                    id="nombre"
                                    placeholder="Nombre"
                                    className="w-full h-10 px-3 rounded-md border border-gray-200 bg-white text-black text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#283e52]/20 focus-visible:border-[#283e52]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-[#283e52]">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-10 px-3 rounded-md border border-gray-200 bg-white text-black text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#283e52]/20 focus-visible:border-[#283e52]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mensaje" className="text-sm font-bold text-[#283e52]">
                                    Mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    placeholder="Mensaje"
                                    className="w-full min-h-[120px] px-3 py-2 rounded-md border border-gray-200 bg-white text-black text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#283e52]/20 focus-visible:border-[#283e52] resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-12 bg-[#283e52] hover:bg-[#1a2936] text-white font-bold tracking-wider rounded-md transition-colors flex items-center justify-center uppercase mt-6 shadow-lg"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
