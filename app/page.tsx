import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Libranzas } from "@/components/sections/libranzas";
import { Offer } from "@/components/sections/offer";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Values } from "@/components/sections/values";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <ProcessSteps />
      <Offer />
      <Values />
      <Libranzas />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
