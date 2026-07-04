import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Values } from "@/components/Values";
import { TestimonialsWall } from "@/components/TestimonialsWall";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Reforma de Reservatórios Metálicos em ${siteConfig.address.city}/${siteConfig.address.state}`,
  description: `Reforma, recuperação e manutenção de reservatórios e tanques metálicos em ${siteConfig.seo.region}. Proteção anticorrosiva, laudos técnicos e equipe especializada. Peça seu orçamento gratuito pelo WhatsApp.`,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `Reforma de Reservatórios Metálicos em ${siteConfig.address.city}/${siteConfig.address.state}`,
    description: `Reforma, recuperação e manutenção de reservatórios e tanques metálicos em ${siteConfig.seo.region}. Orçamento gratuito pelo WhatsApp.`,
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Values />
      {/* Depoimentos: carrossel no mobile, mural no desktop */}
      <div className="md:hidden">
        <Testimonials />
      </div>
      <div className="hidden md:block">
        <TestimonialsWall />
      </div>
      <CTA />
      <Contact />
    </>
  );
}
