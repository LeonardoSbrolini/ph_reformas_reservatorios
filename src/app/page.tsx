import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Values } from "@/components/Values";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "PH Reforma de Reservatórios | Manutenção em Tanques Metálicos",
  description:
    "Especialistas em manutenção, reforma e recuperação de reservatórios metálicos. Soluções eficientes, seguras e duradouras desde 2012.",
  keywords:
    "reforma reservatórios, manutenção tanques metálicos, recuperação estrutural, pintura industrial",
  alternates: { canonical: "https://phreformas.com.br" },
  openGraph: {
    title: "PH Reforma de Reservatórios | Manutenção em Tanques Metálicos",
    description:
      "Especialistas em manutenção, reforma e recuperação de reservatórios metálicos.",
    url: "https://phreformas.com.br",
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
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
