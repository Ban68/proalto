import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Proalto</h3>
                        <p className="text-primary-foreground/80">
                            Soluciones financieras ágiles y transparentes para empleados y pensionados.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><Link href="/#nosotros" className="hover:text-secondary transition-colors">Nosotros</Link></li>
                            <li><Link href="/#creditos" className="hover:text-secondary transition-colors">Créditos</Link></li>
                            <li><Link href="/#libranzas" className="hover:text-secondary transition-colors">Libranzas</Link></li>
                            <li><Link href="/formulario-de-registro" className="hover:text-secondary transition-colors">Solicitar Crédito</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 shrink-0" />
                                <span>Calle 23 # 6-18 Oficina 301, Santa Marta</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 shrink-0" />
                                <span>+57 (320) 3454201</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 shrink-0" />
                                <span>info@proalto.co</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-secondary transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="/documents/politica-tratamiento-datos.pdf" className="hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">Política de Tratamiento de Datos</Link></li>
                            <li><Link href="/tasas-y-tarifas" className="hover:text-secondary transition-colors">Tasas y Tarifas</Link></li>
                        </ul>
                        <div className="mt-6 flex gap-4">
                            <Link href="#" className="hover:text-secondary transition-colors"><Facebook className="h-6 w-6" /></Link>
                            <Link href="#" className="hover:text-secondary transition-colors"><Instagram className="h-6 w-6" /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
                    © {new Date().getFullYear()} Financiera Proalto SAS. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
