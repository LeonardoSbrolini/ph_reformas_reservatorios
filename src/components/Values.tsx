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
    gradient: "from-brand-light to-sky-400",
    border: "from-brand-light/40 to-sky-400/40",
  },
];

export function Values() {
  return (
    <section
      id="valores"
      className="relative py-28 overflow-hidden bg-white"
      style={{
        backgroundImage:
          "radial-gradient(circle, #0B4DDA0D 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Soft vignette edges */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-18">
          <Badge className="mb-4 bg-brand-dark/8 text-brand-dark border-brand-dark/15">
            Nossa Essência
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            Missão, Visão &{" "}
            <span className="text-brand-light">Valores</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-base">
            Os princípios que guiam cada projeto e definem o nosso compromisso
            com clientes, parceiros e o setor.
          </p>
        </div>

        {/* Cards with gradient border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {pillars.map(({ number, icon: Icon, tag, title, content, gradient, border }) => (
            <div
              key={tag}
              className={`group p-px rounded-xl bg-linear-to-br ${border} hover:shadow-2xl hover:shadow-brand-dark/10 hover:-translate-y-1 transition-all duration-400`}
            >
              <div className="relative bg-white rounded-xl p-8 h-full overflow-hidden">
                {/* Watermark number */}
                <span className="absolute -top-2 -right-1 text-8xl font-black text-brand-dark/5 select-none leading-none group-hover:text-brand-dark/8 transition-colors duration-300">
                  {number}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Tag */}
                <span className={`inline-block text-xs font-bold uppercase tracking-widest bg-linear-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                  {tag}
                </span>

                {/* Divider */}
                <div className={`h-px w-10 bg-linear-to-r ${gradient} mb-4 group-hover:w-16 transition-all duration-300`} />

                <h3 className="text-lg font-extrabold text-brand-navy mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
