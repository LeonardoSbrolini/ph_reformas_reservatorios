import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Contact } from "@/components/Contact";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contato e Orçamento Gratuito — ${siteConfig.seo.regionTitle}`,
  description: `Solicite um orçamento gratuito para reforma, recuperação ou manutenção do seu reservatório metálico em ${siteConfig.seo.region}. Atendimento rápido pelo WhatsApp ${siteConfig.contact.whatsapp.display}.`,
  keywords:
    "contato PH Reforma, orçamento reservatório, solicitar orçamento tanque metálico, WhatsApp manutenção reservatório, empresa reforma reservatório Araraquara Ribeirão Preto",
  alternates: { canonical: `${siteConfig.url}/contato` },
  openGraph: {
    title: `Contato e Orçamento Gratuito | ${siteConfig.name}`,
    description: `Orçamento gratuito para reforma e manutenção do seu reservatório metálico em ${siteConfig.seo.region}. Atendimento rápido pelo WhatsApp.`,
    url: `${siteConfig.url}/contato`,
  },
};

export default function ContatoPage() {
  return (
    <>
      <PageBanner
        label="Fale Conosco"
        title="Entre em"
        titleHighlight="Contato"
        description="Solicite uma avaliação gratuita. Nossa equipe retornará em breve com o melhor diagnóstico para o seu reservatório."
        breadcrumbs={[{ label: "Contato" }]}
      />
      <div className="[&>section]:pt-12">
        <Contact />
      </div>
    </>
  );
}
