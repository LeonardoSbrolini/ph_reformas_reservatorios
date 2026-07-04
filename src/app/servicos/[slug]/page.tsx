import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import { PageBanner } from "@/components/PageBanner";
import { WhatsAppSvg } from "@/components/WhatsAppSvg";
import { ButtonShine } from "@/components/ButtonShine";
import { siteConfig, whatsappLink } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const title = `${service.title} de Reservatórios Metálicos em ${siteConfig.address.city}/${siteConfig.address.state}`;
  const description = `${service.seoDesc} Atendemos ${siteConfig.address.city} e região.`;

  return {
    // `absolute` evita duplicar a marca, já presente no template do layout.
    title: { absolute: `${title} | ${siteConfig.shortName}` },
    description,
    keywords: `${service.seoKeywords}, ${service.title.toLowerCase()} ${siteConfig.address.city}`,
    alternates: {
      canonical: `${siteConfig.url}/servicos/${service.slug}`,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${siteConfig.url}/servicos/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  const otherServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} de Reservatórios Metálicos`,
    serviceType: service.title,
    description: service.seoDesc,
    url: `${siteConfig.url}/servicos/${service.slug}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
    },
    areaServed: siteConfig.seo.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <PageBanner
        label="Nossos Serviços"
        title={service.title}
        description={service.shortDesc}
        breadcrumbs={[
          { label: "Serviços", href: "/servicos" },
          { label: service.title },
        ]}
      />

      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="reveal lg:col-span-2">
              <div className="flex items-start gap-5 mb-10">
                <div
                  className={`w-16 h-16 rounded-lg bg-linear-to-br ${service.accent} flex items-center justify-center shrink-0 shadow-lg shadow-brand-dark/20`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-brand-navy mb-1">
                    {service.title}
                  </h2>
                  <p className="text-brand-light text-sm font-semibold">
                    {siteConfig.name}
                  </p>
                </div>
              </div>

              <div className="space-y-5 mb-12">
                {service.fullDesc.map((para, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="bg-linear-to-br from-surface-tint to-slate-50 rounded-lg p-8 mb-10 border border-brand-dark/8">
                <h3 className="text-lg font-extrabold text-brand-navy mb-6">
                  Benefícios do Serviço
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-gray-700 text-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-brand-light shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink(`Olá! Gostaria de solicitar um orçamento para ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-sm px-6 h-12 rounded-lg shadow-lg shadow-whatsapp/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-whatsapp/40"
                >
                  <ButtonShine />
                  <WhatsAppSvg className="relative w-4 h-4 fill-white shrink-0" />
                  <span className="relative">Solicitar Orçamento</span>
                </a>
                <Link
                  href="/contato"
                  className="flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-white font-semibold text-sm px-6 h-12 rounded-lg transition-all duration-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  Fale Conosco
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div
              className="reveal lg:col-span-1 space-y-6"
              style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
            >
              {/* CTA card */}
              <div className="rounded-lg bg-linear-to-br from-surface-darkest via-brand-navy to-surface-dark p-7 text-white">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-white font-extrabold text-xs">PH</span>
                </div>
                <h4 className="text-base font-extrabold mb-2">
                  Avaliação Gratuita
                </h4>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  Nossa equipe analisa seu reservatório e oferece o melhor
                  diagnóstico sem compromisso.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-sm w-full h-10 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-whatsapp/40"
                >
                  <ButtonShine />
                  <WhatsAppSvg className="relative w-4 h-4 fill-white shrink-0" />
                  <span className="relative">Chamar no WhatsApp</span>
                </a>
              </div>

              {/* Other services */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Outros Serviços
                </h4>
                <ul className="space-y-2">
                  {otherServices.map((s) => {
                    const OtherIcon = s.icon;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/servicos/${s.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-brand-dark/20 hover:bg-surface-tint/50 transition-all group"
                        >
                          <div
                            className={`w-8 h-8 rounded-md bg-linear-to-br ${s.accent} flex items-center justify-center shrink-0`}
                          >
                            <OtherIcon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium group-hover:text-brand-dark transition-colors">
                            {s.title}
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-brand-light ml-auto transition-colors" />
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      href="/servicos"
                      className="flex items-center justify-center gap-1.5 text-brand-light text-sm font-semibold hover:underline pt-1"
                    >
                      Ver todos os serviços
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
