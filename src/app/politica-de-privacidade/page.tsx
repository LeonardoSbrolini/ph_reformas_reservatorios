import type { Metadata } from "next";
import {
  ShieldCheck,
  Database,
  Target,
  Scale,
  Share2,
  Cookie,
  UserCheck,
  Lock,
  Clock,
  Mail,
} from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade e Segurança",
  description: `Política de Privacidade e Segurança da ${siteConfig.name}, em conformidade com a LGPD (Lei nº 13.709/2018). Saiba como tratamos e protegemos seus dados pessoais.`,
  keywords:
    "política de privacidade, LGPD, proteção de dados, segurança da informação, PH Reforma",
  alternates: {
    canonical: `${siteConfig.url}/politica-de-privacidade`,
  },
  openGraph: {
    title: `Política de Privacidade e Segurança | ${siteConfig.name}`,
    description: `Como a ${siteConfig.name} trata e protege seus dados pessoais, em conformidade com a LGPD.`,
    url: `${siteConfig.url}/politica-de-privacidade`,
  },
};

const COMPANY = siteConfig.legalName;
const CONTACT_EMAIL = siteConfig.contact.email;
// Atualize a data sempre que a política for revisada:
const LAST_UPDATE = "21 de junho de 2026";

type Section = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    icon: ShieldCheck,
    title: "1. Quem somos (Controlador dos dados)",
    body: (
      <p>
        Esta Política de Privacidade descreve como a <strong>{COMPANY}</strong>{" "}
        (&ldquo;PH Reforma de Reservatórios&rdquo;, &ldquo;nós&rdquo;), na
        condição de Controladora, coleta, utiliza, armazena e protege os dados
        pessoais dos visitantes deste site, em conformidade com a Lei Geral de
        Proteção de Dados — LGPD (Lei nº 13.709/2018).
      </p>
    ),
  },
  {
    icon: Database,
    title: "2. Dados que coletamos",
    body: (
      <>
        <p className="mb-3">Podemos tratar os seguintes dados pessoais:</p>
        <ul className="space-y-2">
          <li>
            <strong>Dados fornecidos por você</strong> ao preencher formulários
            ou nos contatar: nome, telefone, e-mail e a mensagem enviada.
          </li>
          <li>
            <strong>Dados de navegação</strong>, coletados automaticamente
            mediante consentimento: páginas visitadas, tempo de permanência,
            tipo de dispositivo e dados aproximados de localização (via Google
            Analytics).
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: Target,
    title: "3. Finalidade do tratamento",
    body: (
      <ul className="space-y-2">
        <li>Responder a solicitações de contato e orçamento;</li>
        <li>Prestar e melhorar nossos serviços;</li>
        <li>
          Compreender como o site é utilizado e aprimorar a experiência do
          usuário (estatísticas de navegação);
        </li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>
    ),
  },
  {
    icon: Scale,
    title: "4. Base legal",
    body: (
      <p>
        O tratamento dos seus dados se fundamenta nas hipóteses do art. 7º da
        LGPD, especialmente: <strong>consentimento</strong> (cookies de análise
        e comunicações), <strong>execução de contrato</strong> ou procedimentos
        preliminares (atendimento e orçamentos), <strong>legítimo interesse</strong>{" "}
        (melhoria dos serviços) e <strong>cumprimento de obrigação legal</strong>.
      </p>
    ),
  },
  {
    icon: Share2,
    title: "5. Compartilhamento de dados",
    body: (
      <p>
        Não vendemos seus dados pessoais. Podemos compartilhá-los com
        prestadores de serviço que nos apoiam (por exemplo, Google, para
        estatísticas de navegação) e com autoridades públicas quando exigido por
        lei. Esses terceiros estão obrigados a proteger os dados de acordo com a
        legislação aplicável.
      </p>
    ),
  },
  {
    icon: Cookie,
    title: "6. Cookies",
    body: (
      <>
        <p className="mb-3">
          Utilizamos dois tipos de cookies:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Essenciais:</strong> necessários ao funcionamento do site;
            não exigem consentimento.
          </li>
          <li>
            <strong>De análise (Google Analytics):</strong> medem o desempenho
            do site e <strong>só são ativados após o seu consentimento</strong>{" "}
            no banner de cookies. Você pode rejeitá-los a qualquer momento sem
            prejuízo à navegação.
          </li>
        </ul>
        <p className="mt-3">
          Para revogar ou alterar sua escolha, limpe os cookies do navegador ou
          os dados do site; o banner será exibido novamente.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    title: "7. Seus direitos como titular",
    body: (
      <>
        <p className="mb-3">
          Nos termos do art. 18 da LGPD, você pode, a qualquer momento,
          solicitar:
        </p>
        <ul className="space-y-2">
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos seus dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            Anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desconformidade com a lei;
          </li>
          <li>Portabilidade e eliminação dos dados tratados com consentimento;</li>
          <li>Revogação do consentimento.</li>
        </ul>
        <p className="mt-3">
          Para exercer seus direitos, entre em contato pelo e-mail{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand-dark font-semibold hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    icon: Lock,
    title: "8. Segurança da informação",
    body: (
      <p>
        Adotamos medidas técnicas e administrativas adequadas para proteger os
        dados pessoais contra acessos não autorizados, perda, alteração,
        divulgação ou destruição indevida — incluindo tráfego criptografado
        (HTTPS), controle de acesso e a coleta mínima de dados necessária a cada
        finalidade. Nenhum sistema é 100% infalível; em caso de incidente de
        segurança relevante, comunicaremos os titulares e a ANPD conforme exigido
        pela LGPD.
      </p>
    ),
  },
  {
    icon: Clock,
    title: "9. Retenção de dados",
    body: (
      <p>
        Mantemos os dados pessoais apenas pelo tempo necessário ao cumprimento
        das finalidades aqui descritas ou de obrigações legais. Após esse
        período, os dados são eliminados ou anonimizados de forma segura.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "10. Encarregado e contato",
    body: (
      <p>
        Dúvidas sobre esta Política ou sobre o tratamento dos seus dados podem
        ser encaminhadas para{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-brand-dark font-semibold hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        . Esta Política poderá ser atualizada periodicamente; a data da última
        revisão está indicada abaixo.
      </p>
    ),
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageBanner
        label="LGPD · Lei nº 13.709/2018"
        title="Política de Privacidade"
        titleHighlight="e Segurança"
        description="Transparência sobre como coletamos, utilizamos e protegemos os seus dados pessoais."
        breadcrumbs={[{ label: "Política de Privacidade" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground text-sm mb-12">
            Última atualização: <strong>{LAST_UPDATE}</strong>
          </p>

          <div className="space-y-12">
            {sections.map(({ icon: Icon, title, body }) => (
              <article key={title} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand-light/10 border border-brand-light/15">
                    <Icon className="w-5 h-5 text-brand-dark" />
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-foreground">
                    {title}
                  </h2>
                </div>
                <div className="text-muted-foreground text-sm sm:text-base leading-relaxed pl-13 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5">
                  {body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
