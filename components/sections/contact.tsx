"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contacto" className="relative py-24 bg-slate-900 text-white overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-slate-900/90 z-10" />
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('/contact-bg.jpg')" }} // Placeholder, will rely on solid color if image missing
            />

            <div className="container relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
                        ¡Contáctanos!
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-[#fbbf24] text-xl font-bold mb-2">Oficina</h3>
                            <p className="text-gray-100">
                                Calle 24 No. 3 -99 Oficina 909 Edificio 424
                                <br />
                                Santa Marta
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#fbbf24] text-xl font-bold mb-2">Contáctanos</h3>
                            <p className="text-gray-100 mb-1">info@proalto.co</p>
                            <p className="text-gray-100">
                                Celulares: 3203454201 - 3114121467
                            </p>
                        </div>

                        <div>
                            <h3 className="text-[#fbbf24] text-xl font-bold mb-2">Horario De Atención</h3>
                            <p className="text-gray-100">
                                Lunes a viernes: 7:30 am a 5:30 pm
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-transparent">
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="nombre" className="text-sm font-semibold text-white">
                                    Nombre
                                </label>
                                <input
                                    id="nombre"
                                    placeholder="Nombre"
                                    className="w-full h-10 px-3 rounded-md border border-input bg-white text-black text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-white">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-10 px-3 rounded-md border border-input bg-white text-black text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mensaje" className="text-sm font-semibold text-white">
                                    Mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    placeholder="Mensaje"
                                    className="w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-white text-black text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-12 bg-[#fbbf24] hover:bg-[#f59e0b] text-white font-bold tracking-wider rounded-md transition-colors flex items-center justify-center uppercase mt-6"
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
