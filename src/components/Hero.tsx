import { buttonVariants } from "@/components/ui/button";
import { MessageCircle, ArrowDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { WhatsAppSvg } from "@/components/WhatsAppSvg";
import { Counter } from "@/components/Counter";

const stats = [
  { value: 12, prefix: "+", suffix: "", label: "Anos de\nexperiência" },
  { value: 500, prefix: "", suffix: "+", label: "Projetos\nrealizados" },
  { value: 100, prefix: "", suffix: "%", label: "Compromisso\ncom o cliente" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/hero-bg.webp"
        alt="Reservatório metálico industrial"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] sm:object-center scale-105 animate-[ken-burns_28s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
        quality={72}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-r from-surface-darkest/90 via-brand-navy/80 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-surface-darkest/60 via-transparent to-surface-darkest/20" />

      {/* Decorative ring — right side */}
      <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-white/8 pointer-events-none" />
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />

      {/* Vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-linear-to-b from-transparent via-brand-light/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-16">
        <div className="max-w-xl">

          {/* Eyebrow tag */}
          <div className="intro flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-brand-light" />
            <span className="text-brand-light text-xs font-bold tracking-[0.2em] uppercase">
              Desde 2012 · Especialistas
            </span>
          </div>

          {/* Headline */}
          <h1 className="intro [animation-delay:120ms] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5">
            Manutenção e{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-brand-glow to-brand-light">
                Reforma
              </span>
            </span>
            <br />
            de Reservatórios
            <br />
            <span className="text-white/60 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Metálicos
            </span>
          </h1>

          {/* Description */}
          <p className="intro [animation-delay:240ms] text-white/65 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Soluções técnicas em manutenção, recuperação estrutural, pintura
            e revitalização. Segurança e qualidade em cada projeto.
          </p>

          {/* CTAs */}
          <div className="intro [animation-delay:360ms] flex flex-wrap gap-3 mb-12">
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar uma avaliação e orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-sm px-6 h-11 shadow-xl shadow-whatsapp/25 border-0"
              )}
            >
              <WhatsAppSvg className="mr-2 w-4 h-4 fill-white shrink-0" />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "text-white hover:text-white border border-white/25 hover:border-white/50 hover:bg-white/10 font-semibold text-sm px-5 h-11 group transition-colors"
              )}
            >
              Nossos Serviços
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Stats row */}
          <div className="intro [animation-delay:480ms] flex items-center gap-0">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="pr-6">
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="block text-2xl font-extrabold text-white leading-none mb-1"
                  />
                  <div className="text-white/45 text-[11px] leading-tight whitespace-pre-line">
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-white/15 mr-6 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] tracking-[0.15em] uppercase font-medium">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
