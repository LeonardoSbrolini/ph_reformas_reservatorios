import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Entre em Contato",
  description:
    "Entre em contato com a PH Reforma de Reservatórios. Solicite um orçamento gratuito para manutenção, reforma ou recuperação do seu reservatório metálico. Atendimento via WhatsApp e e-mail.",
  keywords:
    "contato PH Reforma, orçamento reservatório, solicitar orçamento tanque metálico, WhatsApp manutenção reservatório",
  alternates: { canonical: "https://phreformas.com.br/contato" },
  openGraph: {
    title: "Entre em Contato | PH Reforma de Reservatórios",
    description:
      "Solicite um orçamento gratuito para manutenção e reforma do seu reservatório metálico. Atendimento rápido via WhatsApp.",
    url: "https://phreformas.com.br/contato",
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
      <Contact />
    </>
  );
}
