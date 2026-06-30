import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PH Reforma de Reservatórios | Manutenção em Tanques Metálicos",
    template: "%s | PH Reforma de Reservatórios",
  },
  description:
    "Especialistas em manutenção, reforma e recuperação de reservatórios metálicos. Soluções eficientes, seguras e duradouras desde 2012.",
  keywords:
    "reforma reservatórios, manutenção tanques metálicos, recuperação estrutural, pintura industrial, PH Reforma",
  metadataBase: new URL("https://phreformas.com.br"),
  openGraph: {
    siteName: "PH Reforma de Reservatórios",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
