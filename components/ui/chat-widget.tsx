"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: "/api/chat",
    });
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-20 right-4 z-50 w-full max-w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-stone-200"
                    >
                        {/* Header */}
                        <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Asistente Proalto</h3>
                                    <p className="text-xs text-stone-300">Responde en segundos</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-stone-50" ref={scrollRef}>
                            {messages.length === 0 && (
                                <div className="text-center text-stone-500 mt-10">
                                    <Bot className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                    <p className="text-sm">¡Hola! Soy tu asistente virtual.</p>
                                    <p className="text-xs mt-1">
                                        Puedo ayudarte con tu estado de cuenta, saldo y más.
                                    </p>
                                </div>
                            )}

                            {messages.map((m: any) => (
                                <div
                                    key={m.id}
                                    className={cn(
                                        "flex gap-3 mb-4",
                                        m.role === "user" ? "flex-row-reverse" : "flex-row"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                            m.role === "user" ? "bg-stone-200 text-stone-700" : "bg-stone-900 text-white"
                                        )}
                                    >
                                        {m.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                                    </div>
                                    <div
                                        className={cn(
                                            "p-3 rounded-2xl max-w-[80%] text-sm",
                                            m.role === "user"
                                                ? "bg-white border border-stone-200 text-stone-800 rounded-tr-none"
                                                : "bg-[#e8f5e9] text-stone-800 rounded-tl-none border border-transparent" // Using a very light green for proalto feel if applicable, or generic
                                        )}
                                    >
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center shrink-0">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                    <div className="p-3 rounded-2xl bg-stone-100 text-stone-500 text-sm rounded-tl-none">
                                        <span className="animate-pulse">Escribiendo...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-stone-100">
                            <div className="flex items-center gap-2 bg-stone-50 p-2 rounded-xl border border-stone-200 focus-within:border-stone-400 focus-within:ring-1 focus-within:ring-stone-400 transition-all">
                                <input
                                    className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-stone-800 placeholder:text-stone-400"
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Escribe tu mensaje..."
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="p-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "fixed bottom-4 right-4 z-50 p-4 rounded-full shadow-lg transition-colors flex items-center justify-center",
                    isOpen ? "bg-stone-200 text-stone-800" : "bg-stone-900 text-white"
                )}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </>
    );
}
