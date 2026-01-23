import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PaymentMethods } from "@/components/sections/payment-methods";

export default function PagosPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="pt-20">
                <PaymentMethods />
            </div>
            <Footer />
        </main>
    );
}
