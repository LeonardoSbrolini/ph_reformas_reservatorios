import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Token de verificação do Google Search Console.
// Defina GOOGLE_SITE_VERIFICATION no ambiente (Search Console → método "Tag HTML",
// copie apenas o valor do content="..."). Renderiza uma meta tag no <head>.
// Não usa cookies e não rastreia — precisa estar sempre presente para o Googlebot
// conseguir verificar o site, por isso NÃO depende do consentimento de cookies.
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Manutenção em Tanques Metálicos`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:
    "reforma reservatórios, manutenção tanques metálicos, recuperação estrutural, pintura industrial, PH Reforma",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
        <Analytics />
        <ScrollReveal />
      </body>
    </html>
  );
}
