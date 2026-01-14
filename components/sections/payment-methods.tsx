import { Building2, CreditCard } from "lucide-react";

export function PaymentMethods() {
    return (
        <section id="pagos" className="py-24 bg-background border-t">
            <div className="container">
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Métodos de Pago
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Utiliza nuestros canales oficiales para realizar tus abonos con seguridad.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
                    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col items-center text-center">
                        <div className="p-3 bg-primary/10 rounded-full mb-4">
                            <Building2 className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-xl mb-2">Consignación Bancaria</h3>
                        <p className="text-sm text-muted-foreground mb-4">Banco BBVA Colombia</p>
                        <div className="w-full bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="font-medium">Cuenta de Ahorros:</span>
                                <span className="font-mono select-all">00130518000200481460</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Titular:</span>
                                <span>Financiera Proalto SAS</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">NIT:</span>
                                <span>901.397.413</span>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-muted-foreground">
                            Enviar soporte a: <a href="mailto:pagos@proalto.co" className="text-primary hover:underline">pagos@proalto.co</a>
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col items-center text-center">
                        <div className="p-3 bg-primary/10 rounded-full mb-4">
                            <CreditCard className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-xl mb-2">Pago en Línea</h3>
                        <p className="text-sm text-muted-foreground mb-4">Zona de Pagos Segura</p>
                        <p className="mb-6 text-sm text-muted-foreground">
                            Realiza tu pago de forma segura a través de nuestra plataforma de recaudo digital.
                        </p>
                        <a
                            href="https://www.zonapagos.com/t_finanproalto/pagos.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Pagar en Línea
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
