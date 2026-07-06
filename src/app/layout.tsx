import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StructuredData } from "@/components/StructuredData";
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
    default: `Reforma de Reservatórios Metálicos — ${siteConfig.seo.regionTitle} | ${siteConfig.shortName}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: `Reforma, recuperação e manutenção de reservatórios e tanques metálicos em ${siteConfig.seo.region}. Empresa com anos de experiência, laudos técnicos e proteção anticorrosiva. Orçamento gratuito pelo WhatsApp.`,
  keywords: [
    "reforma de reservatórios metálicos",
    "manutenção de tanques metálicos",
    "recuperação estrutural de reservatório",
    "pintura industrial anticorrosiva",
    "impermeabilização de reservatório",
    `reforma de reservatório ${siteConfig.address.city}`,
    "reforma de reservatórios Araraquara",
    "reforma de reservatórios Ribeirão Preto",
    "manutenção de reservatório São Carlos",
    siteConfig.shortName,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Manutenção Industrial",
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: siteConfig.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `Reforma de Reservatórios Metálicos — ${siteConfig.seo.regionTitle}`,
    description: `Reforma, recuperação e manutenção de reservatórios e tanques metálicos em ${siteConfig.seo.region}. Orçamento gratuito pelo WhatsApp.`,
    images: [
      {
        url: siteConfig.seo.ogImage,
        alt: `${siteConfig.name} — reforma e manutenção de reservatórios metálicos`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Reforma de Reservatórios Metálicos — ${siteConfig.seo.regionTitle}`,
    description: `Reforma, recuperação e manutenção de reservatórios e tanques metálicos em ${siteConfig.seo.region}. Orçamento gratuito pelo WhatsApp.`,
    images: [siteConfig.seo.ogImage],
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
        <StructuredData />
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
