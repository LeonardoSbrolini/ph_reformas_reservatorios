import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Target,
    tag: "Missão",
    title: "Nossa razão de existir",
    content:
      "Oferecer soluções especializadas em manutenção, reforma e recuperação de reservatórios metálicos, garantindo máxima confiabilidade, desempenho operacional e tranquilidade para nossos clientes.",
    gradient: "from-brand-navy to-brand-dark",
    border: "from-brand-navy/40 to-brand-dark/40",
  },
  {
    number: "02",
    icon: Eye,
    tag: "Visão",
    title: "Para onde caminhamos",
    content:
      "Ser reconhecida como referência no segmento de manutenção e reforma em reservatórios metálicos, destacando-nos pela qualidade técnica, inovação e comprometimento com os resultados dos nossos clientes.",
    gradient: "from-brand-dark to-brand-light",
    border: "from-brand-dark/40 to-brand-light/40",
  },
  {
    number: "03",
    icon: Heart,
    tag: "Valores",
    title: "Como nos guiamos",
    content:
      "Compromisso com a qualidade e a satisfação do cliente. Atuamos com ética, transparência e responsabilidade em cada projeto, buscando sempre superar as expectativas e construir relações duradouras.",
    gradient: "from-brand-light to-brand-glow",
    border: "from-brand-light/40 to-brand-glow/40",
  },
];

export function Values() {
  return (
    <section
      id="valores"
      className="relative py-20 md:py-28 overflow-hidden bg-linear-to-br from-white via-surface-tint to-slate-100"
    >
      {/* Textura de pontos (visível) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--color-brand-dark) 15%, transparent) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Decorative blurred orbs */}
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-brand-light/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-brand-dark/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-12 md:mb-18">
          <Badge className="mb-4 bg-brand-dark/8 text-brand-dark border-brand-dark/15">
            Nossa Essência
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            Missão, Visão &{" "}
            <span className="text-brand-light">Valores</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 text-base">
            Os princípios que guiam cada projeto e definem o nosso compromisso
            com clientes, parceiros e o setor.
          </p>
        </div>

        {/* Cards with gradient border */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {pillars.map(({ number, icon: Icon, tag, title, content, gradient, border }) => (
            <div
              key={tag}
              className={`group p-px rounded-2xl bg-linear-to-br ${border} hover:shadow-2xl hover:shadow-brand-dark/15 transition-all duration-400`}
            >
              <div className="relative flex sm:block gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 h-full overflow-hidden ring-1 ring-brand-dark/5 group-hover:ring-brand-light/30 transition-shadow duration-400">
                {/* Shine que varre o card no hover */}
                <span className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-linear-to-r from-transparent via-brand-light/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[130%]" />

                {/* Color wash orb (combina com o pilar) */}
                <div
                  className={`absolute -top-14 -right-14 w-40 h-40 rounded-full bg-linear-to-br ${gradient} opacity-[0.08] blur-2xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Watermark number */}
                <span className="absolute -top-2 right-1 text-6xl sm:text-7xl md:text-8xl font-black text-brand-dark/5 select-none leading-none group-hover:text-brand-dark/10 transition-colors duration-300">
                  {number}
                </span>

                {/* Icon */}
                <div
                  className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mb-0 sm:mb-6 shadow-lg shadow-brand-dark/20 ring-4 ring-white`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>

                <div className="relative min-w-0">
                  {/* Tag */}
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest bg-linear-to-r ${gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {tag}
                  </span>

                  {/* Divider */}
                  <div
                    className={`h-px w-10 bg-linear-to-r ${gradient} mb-4 group-hover:w-16 transition-all duration-300`}
                  />

                  <h3 className="text-lg font-extrabold text-brand-navy mb-2 sm:mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
