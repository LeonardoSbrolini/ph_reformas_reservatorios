import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Nossos Serviços",
  description:
    "Conheça todos os serviços da PH Reforma de Reservatórios: manutenção preventiva, reforma estrutural, recuperação, pintura industrial, revitalização e inspeção técnica em tanques metálicos.",
  keywords:
    "serviços reforma reservatórios, manutenção preventiva tanque, reforma estrutural reservatório, pintura industrial tanque, inspeção técnica reservatório",
  alternates: { canonical: "https://phreformas.com.br/servicos" },
  openGraph: {
    title: "Nossos Serviços | PH Reforma de Reservatórios",
    description:
      "Soluções completas em manutenção, reforma e recuperação de reservatórios metálicos.",
    url: "https://phreformas.com.br/servicos",
  },
};

export default function ServicosPage() {
  return (
    <>
      <PageBanner
        label="O que fazemos"
        title="Nossos"
        titleHighlight="Serviços"
        description="Soluções completas para recuperar, proteger e prolongar a vida útil dos seus reservatórios metálicos."
        breadcrumbs={[{ label: "Serviços" }]}
      />
      <Services />
    </>
  );
}
