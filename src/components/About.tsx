import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Wrench } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "2012",
    label: "Fundação",
    desc: "Mais de 12 anos de experiência",
  },
  {
    icon: Users,
    value: "100%",
    label: "Satisfação",
    desc: "Compromisso com o cliente",
  },
  {
    icon: Award,
    value: "Top",
    label: "Qualidade",
    desc: "Referência no segmento",
  },
  {
    icon: Wrench,
    value: "Expert",
    label: "Equipe",
    desc: "Profissionais qualificados",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden bg-linear-to-br from-white via-slate-50 to-surface-tint">
      {/* Decorative blurred orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-light/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-dark/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge className="mb-4 bg-brand-dark/10 text-brand-dark border-brand-dark/20 hover:bg-brand-dark/20">
              Quem Somos
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6 leading-tight">
              Sobre a{" "}
              <span className="text-brand-light">PH Reforma de Reservatórios</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Somos uma empresa especializada na manutenção, recuperação e reforma
              de reservatórios metálicos. Trabalhamos com foco na qualidade,
              segurança e eficiência, oferecendo soluções que prolongam a vida
              útil das estruturas e reduzem custos com intervenções futuras.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Contamos com profissionais qualificados, equipamentos adequados e
              processos rigorosos para garantir a máxima confiabilidade em cada
              projeto executado. Desde 2012 atuamos no mercado com o compromisso
              de entregar excelência e tranquilidade aos nossos clientes.
            </p>

            <div className="flex flex-wrap gap-3">
              {["CNPJ Regularizado", "Equipe Técnica", "Processos Rigorosos"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-brand-dark/10 text-brand-dark text-sm font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ icon: Icon, value, label, desc }) => (
              <div
                key={label}
                className="rounded-lg border border-brand-dark/10 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-md bg-linear-to-br from-brand-dark to-brand-light flex items-center justify-center mb-4 shadow-md">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-extrabold text-brand-navy mb-1">
                  {value}
                </div>
                <div className="text-sm font-semibold text-brand-dark mb-1">
                  {label}
                </div>
                <div className="text-xs text-gray-500">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
