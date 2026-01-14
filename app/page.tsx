import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Creditos } from "@/components/sections/creditos";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Libranzas } from "@/components/sections/libranzas";
import { PaymentMethods } from "@/components/sections/payment-methods";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Creditos />
      <Libranzas />
      <PaymentMethods />
      <Footer />
    </main>
  );
}
