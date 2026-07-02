import { buttonVariants } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppSvg } from "@/components/WhatsAppSvg";
import { ButtonShine } from "@/components/ButtonShine";

const perks = [
  "Atendimento rápido",
  "Sem compromisso",
  "Orçamento gratuito",
];

export function CTA() {
  return (
    <section
      id="contato"
      className="relative py-28 overflow-hidden bg-linear-to-br from-surface-darkest via-brand-navy to-surface-dark"
    >
      {/* Decorative orbs */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-200 h-64 rounded-full bg-brand-light/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-brand-dark/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-brand-light/10 blur-3xl pointer-events-none" />

      {/* Mesh radial glows — profundidade de cor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(60% 55% at 50% 0%, rgba(97,110,215,0.30), transparent 60%), radial-gradient(45% 55% at 10% 100%, rgba(73,85,196,0.24), transparent 55%), radial-gradient(45% 55% at 90% 85%, rgba(97,110,215,0.16), transparent 55%)",
        }}
      />

      {/* Textura de pontos */}
      <div
        className="absolute inset-0 opacity-[0.13] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Grade fina — vibe técnica/industrial */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Vinheta suave nas bordas */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent to-surface-darkest/40" />

      <div className="reveal relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon badge */}
        <div className="inline-flex items-center justify-center w-18 h-18 rounded-lg bg-whatsapp shadow-xl shadow-whatsapp/40 mb-8">
          <WhatsAppSvg className="w-10 h-10 fill-white" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Pronto para cuidar do
          <br />
          <span className="text-brand-light">seu reservatório?</span>
        </h2>

        <p className="text-white/65 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Solicite uma avaliação e receba um orçamento personalizado.
          Nossa equipe responde rapidamente pelo WhatsApp.
        </p>

        {/* Perks */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-white/75">
              <CheckCircle className="h-4 w-4 text-brand-light shrink-0" />
              <span className="text-sm font-medium">{perk}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar uma avaliação e orçamento para meu reservatório."
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative overflow-hidden bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-base px-8 h-12 shadow-xl shadow-whatsapp/30 w-full sm:w-auto border-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-whatsapp/50"
            )}
          >
            <ButtonShine />
            <WhatsAppSvg className="relative mr-2 w-5 h-5 fill-white shrink-0" />
            <span className="relative">Falar pelo WhatsApp</span>
          </a>
          <a
            href="tel:+5511999999999"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative overflow-hidden bg-linear-to-r from-brand-dark to-brand-light text-white font-bold text-base px-8 h-12 shadow-xl shadow-brand-dark/40 w-full sm:w-auto border-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-dark/55"
            )}
          >
            <ButtonShine />
            <Phone className="relative mr-2 h-5 w-5" />
            <span className="relative">Ligar Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
