import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a PH Reforma de Reservatórios. Empresa especializada em manutenção e reforma de tanques metálicos, com mais de 12 anos de experiência no mercado.",
  keywords:
    "sobre PH Reforma, empresa manutenção reservatórios, quem somos PH Reforma, história empresa",
  alternates: { canonical: "https://phreformas.com.br/sobre" },
  openGraph: {
    title: "Sobre Nós | PH Reforma de Reservatórios",
    description:
      "Conheça a PH Reforma de Reservatórios. Empresa especializada em manutenção e reforma de tanques metálicos, com mais de 12 anos de experiência.",
    url: "https://phreformas.com.br/sobre",
  },
};

export default function SobrePage() {
  return (
    <>
      <PageBanner
        label="Quem Somos"
        title="Sobre a"
        titleHighlight="PH Reforma"
        description="Especialistas em manutenção e reforma de reservatórios metálicos há mais de 12 anos, com compromisso inabalável com qualidade e segurança."
        breadcrumbs={[{ label: "Sobre" }]}
      />
      <About />
    </>
  );
}
