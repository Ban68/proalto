"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { submitContactForm } from "@/app/actions";

export function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await submitContactForm(formData);

        if (result.success) {
            setIsSuccess(true);
        } else {
            setError(result.error || "Algo salió mal. Inténtalo de nuevo.");
        }
        setIsLoading(false);
    }
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
                                Celulares: 3145248483
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
                        {isSuccess ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                    <Send className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#283e52]">¡Mensaje Enviado!</h3>
                                <p className="text-gray-600">
                                    Gracias por contactarnos. Te responderemos lo antes posible.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-[#fec05c] font-bold hover:underline mt-4"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={onSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="nombre" className="text-sm font-bold text-[#283e52]">
                                        Nombre
                                    </label>
                                    <input
                                        id="nombre"
                                        name="name"
                                        required
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
                                        name="email"
                                        type="email"
                                        required
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
                                        name="message"
                                        required
                                        placeholder="Mensaje"
                                        className="w-full min-h-[120px] px-3 py-2 rounded-md border border-gray-200 bg-white text-black text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#283e52]/20 focus-visible:border-[#283e52] resize-y"
                                    />
                                </div>

                                {error && (
                                    <p className="text-sm text-red-500 text-center">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 bg-[#283e52] hover:bg-[#1a2936] text-white font-bold tracking-wider rounded-md transition-colors flex items-center justify-center uppercase mt-6 shadow-lg disabled:opacity-70 disabled:cursor-wait"
                                >
                                    {isLoading ? "Enviando..." : "Enviar"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
