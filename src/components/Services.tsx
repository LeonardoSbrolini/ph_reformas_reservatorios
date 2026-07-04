import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { WaterBubbles } from "@/components/WaterBubbles";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/services-data";
import { WhatsAppSvg } from "@/components/WhatsAppSvg";
import { ButtonShine } from "@/components/ButtonShine";
import { whatsappLink, whatsappMessages } from "@/lib/site-config";

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 overflow-hidden bg-linear-to-br from-surface-darkest via-brand-navy to-surface-dark"
    >
      <WaterBubbles />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-64 bg-brand-light/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <Badge className="mb-4 bg-white/10 text-white/90 border-white/20">
            O que fazemos
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Nossos <span className="text-brand-light">Serviços</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/55 text-base">
            Soluções completas para recuperar, proteger e prolongar a vida útil
            dos seus reservatórios metálicos.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mb-14">
          {servicesData.map(({ icon: Icon, title, shortDesc: description, accent, slug }, index) => (
            <Link
              key={title}
              href={`/servicos/${slug}`}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 hover:border-brand-light/30 hover:shadow-2xl hover:shadow-brand-light/10 transition-all duration-500"
            >
              {/* Top accent bar (cresce no hover) */}
              <div className={cn("h-0.5 w-full bg-linear-to-r transition-all duration-300 group-hover:h-1", accent)} />

              {/* Shine que varre o card no hover */}
              <span className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-linear-to-r from-transparent via-white/12 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[130%]" />

              <div className="relative z-10 p-4 sm:p-7">
                {/* Icon */}
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-linear-to-br flex items-center justify-center mb-4 sm:mb-5 shadow-lg",
                    accent
                  )}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>

                {/* Number watermark */}
                <span className="absolute top-3 right-4 sm:top-4 sm:right-5 text-4xl sm:text-5xl font-black text-white/5 select-none leading-none group-hover:text-white/8 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-white/55 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  {description}
                </p>

                {/* Saiba mais — escondido; aparece com shine no hover, sem borda */}
                <span
                  className={cn(
                    "relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r",
                    accent
                  )}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[130%]" />
                  <span className="relative">Saiba mais</span>
                  <ArrowRight className="relative h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={whatsappLink(whatsappMessages.manutencao)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative overflow-hidden bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-8 h-12 border-0 shadow-xl shadow-whatsapp/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-whatsapp/50"
            )}
          >
            <ButtonShine />
            <WhatsAppSvg className="relative mr-2 w-5 h-5 fill-white shrink-0" />
            <span className="relative">Solicitar Orçamento Gratuito</span>
          </a>
        </div>
      </div>
    </section>
  );
}
