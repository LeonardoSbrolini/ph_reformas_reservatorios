import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Values } from "@/components/Values";
import { TestimonialsWall } from "@/components/TestimonialsWall";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Manutenção em Tanques Metálicos`,
  description: siteConfig.description,
  keywords:
    "reforma reservatórios, manutenção tanques metálicos, recuperação estrutural, pintura industrial",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.name} | Manutenção em Tanques Metálicos`,
    description:
      "Especialistas em manutenção, reforma e recuperação de reservatórios metálicos.",
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
      <TestimonialsWall />
      <CTA />
      <Contact />
    </>
  );
}
