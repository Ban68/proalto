import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#283e52] text-white shadow-md">
            <div className="container flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-20 w-64">
                        <Image
                            src="/logo.png"
                            alt="Proalto Logo"
                            fill
                            className="object-contain object-left invert brightness-0 saturate-100 filter" // Make logo white/suitable for dark bg if needed, or rely on distinct logo
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex gap-8">
                    <Link href="/#nosotros" className="text-sm font-medium hover:text-[#fec05c] transition-colors">
                        Nosotros
                    </Link>
                    <Link href="/#creditos" className="text-sm font-medium hover:text-[#fec05c] transition-colors">
                        Créditos
                    </Link>
                    <Link href="/#libranzas" className="text-sm font-medium hover:text-[#fec05c] transition-colors">
                        Libranzas
                    </Link>
                    <Link href="/#pagos" className="text-sm font-medium hover:text-[#fec05c] transition-colors">
                        Pago
                    </Link>
                    <Link href="/#contacto" className="text-sm font-medium hover:text-[#fec05c] transition-colors">
                        Contacto
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/formulario-de-registro"
                        className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-[#fec05c] px-6 py-2 text-sm font-bold text-[#283e52] shadow hover:bg-[#eeb14e] transition-colors"
                    >
                        Solicitar Crédito
                    </Link>
                    <button className="md:hidden text-white">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
