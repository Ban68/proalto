import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Proalto | Tu Crédito Digital",
  description: "Créditos digitales aprobados en menos de 24 horas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          outfit.variable
        )}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html >
  );
}
