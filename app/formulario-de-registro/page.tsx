import { Suspense } from 'react';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CreditApplicationForm } from "@/components/forms/credit-application-form";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 container py-12 md:py-24">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Solicitud de Crédito</h1>
                        <p className="text-muted-foreground">
                            Diligencia el formulario para iniciar tu estudio de crédito digital.
                        </p>
                    </div>

                    <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <Suspense fallback={<div className="p-8 text-center">Cargando formulario...</div>}>
                            <CreditApplicationForm />
                        </Suspense>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
