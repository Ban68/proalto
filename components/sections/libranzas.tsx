import Link from "next/link";
import { Building, Users } from "lucide-react";

export function Libranzas() {
    return (
        <section id="libranzas" className="py-24 bg-muted/30">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Convenio de Libranzas
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Sé parte de las empresas que nos permiten otorgar créditos a sus empleados a tasas competitivas.
                            Gestionamos todo el proceso para que tu empresa brinde bienestar financiero sin carga operativa.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Building className="h-6 w-6 text-secondary" />
                                <span>Descuento directo por nómina</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Users className="h-6 w-6 text-secondary" />
                                <span>Beneficios exclusivos para empleados</span>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link
                                href="/#contacto"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                            >
                                Solicitar Convenio
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-white shadow-lg flex items-center justify-center">
                        {/* Placeholder for an image */}
                        <div className="text-center p-6">
                            <Building className="h-24 w-24 text-muted mx-auto mb-4" />
                            <p className="text-muted-foreground">Imagen Corporativa / Empresarial</p>
                            <p className="text-xs text-muted-foreground mt-2">(Reemplazar con foto de equipo o empresa)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
