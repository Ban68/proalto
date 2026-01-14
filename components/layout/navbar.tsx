import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-10 w-40">
                        <Image
                            src="/logo.png"
                            alt="Proalto Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex gap-6">
                    <Link href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
                        Nosotros
                    </Link>
                    <Link href="#creditos" className="text-sm font-medium hover:text-primary transition-colors">
                        Créditos
                    </Link>
                    <Link href="#libranzas" className="text-sm font-medium hover:text-primary transition-colors">
                        Convenio Libranzas
                    </Link>
                    <Link href="#pagos" className="text-sm font-medium hover:text-primary transition-colors">
                        Métodos de pago
                    </Link>
                    <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
                        Contáctanos
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/formulario-de-registro"
                        className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Solicitar Crédito
                    </Link>
                    <button className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
