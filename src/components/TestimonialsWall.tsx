import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

type Review = {
  name: string;
  initials: string;
  color: string;
  rating: number;
  date: string;
  text: string;
};

const testimonials: Review[] = [
  { name: "Carlos Augusto M.", initials: "CA", color: "#4285F4", rating: 5, date: "há 2 meses", text: "Equipe muito profissional e eficiente. Fizeram a reforma completa do nosso reservatório industrial e o resultado foi excelente. Prazo cumprido e serviço de altíssima qualidade!" },
  { name: "Fernanda Oliveira", initials: "FO", color: "#EA4335", rating: 5, date: "há 4 meses", text: "Contratei a PH para manutenção preventiva do nosso tanque e fiquei muito satisfeita. Identificaram problemas que outros não notaram. Trabalho sério e transparente." },
  { name: "Roberto Silva", initials: "RS", color: "#34A853", rating: 5, date: "há 6 meses", text: "Serviço de recuperação estrutural impecável. Chegaram no horário, trabalharam com segurança total e entregaram um resultado que superou nossas expectativas." },
  { name: "Marcelo Pereira", initials: "MP", color: "#FBBC05", rating: 5, date: "há 1 mês", text: "Já é a terceira vez que contrato a PH e nunca me decepcionei. Profissionais qualificados, preço justo e atendimento rápido. Meu reservatório ficou como novo!" },
  { name: "Ana Paula R.", initials: "AP", color: "#4285F4", rating: 5, date: "há 3 meses", text: "Excelente do início ao fim. O orçamento foi rápido e transparente, o serviço de pintura anticorrosiva ficou perfeito e a equipe foi muito atenciosa. Nota 10!" },
  { name: "Luiz Henrique T.", initials: "LH", color: "#EA4335", rating: 5, date: "há 5 meses", text: "A inspeção técnica foi muito detalhada e o relatório bem claro. Depois contratei a reforma e ficou ótimo. Empresa séria, comprometida e de excelente qualidade." },
  { name: "Patrícia Gomes", initials: "PG", color: "#34A853", rating: 5, date: "há 7 meses", text: "Profissionais altamente capacitados. Realizaram a revitalização completa do nosso tanque metálico com extremo cuidado. Ficamos muito satisfeitos com o acabamento." },
  { name: "Eduardo Matos", initials: "EM", color: "#FBBC05", rating: 5, date: "há 8 meses", text: "Ótimo custo-benefício e serviço de primeira. A comunicação durante todo o processo foi excelente. Resultado final muito acima do esperado!" },
  { name: "Juliana Neves", initials: "JN", color: "#4285F4", rating: 5, date: "há 10 meses", text: "Equipe pontual, educada e muito eficiente. Manutenção preventiva e corretiva feitas com capricho. Recomendo sem hesitar para qualquer empresa." },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function ReviewCard({ t }: { t: Review }) {
  return (
    // 
    <div className="mb-4 w-full rounded-xl p-5 ">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: t.color }}
          >
            {t.initials}
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight text-gray-800">{t.name}</p>
            <p className="text-[11px] text-gray-400">{t.date}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>
      <div className="mb-2 flex items-center gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-gray-600">&ldquo;{t.text}&rdquo;</p>
    </div>
  );
}

function Column({ items, animationClass }: { items: Review[]; animationClass: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="h-140 w-75 shrink-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)]">
      <div
        className={`flex flex-col will-change-transform motion-reduce:animate-none ${animationClass}`}
      >
        {doubled.map((t, i) => (
          <ReviewCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsWall() {
  // Cada coluna recebe a lista completa (em ordem rotacionada) para sempre
  // haver cartões preenchendo a janela — sem espaços vazios no loop.
  const colA = testimonials;
  const colB = [...testimonials.slice(3), ...testimonials.slice(0, 3)];
  const colC = [...testimonials.slice(6), ...testimonials.slice(0, 6)];

  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden py-24"
      // style={{
      //   background:
      //     "linear-gradient(135deg, var(--color-surface-light) 0%, var(--color-surface-tint) 50%, var(--color-surface-light) 100%)",
      // }}
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-light/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-dark/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Badge className="mb-3 border-brand-dark/15 bg-brand-dark/8 text-brand-dark">
              Avaliações
            </Badge>
            <h2 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">
              O que nossos clientes <span className="text-brand-light">dizem</span>
            </h2>
          </div>

          <div className="relative isolate shrink-0 overflow-hidden rounded-xl p-[1.5px] shadow-sm">
            {/* Linha fina girando com as cores do Google */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] motion-reduce:hidden"
            />

            <div className="relative flex items-center gap-4 rounded-[7px] border border-gray-100 bg-white px-6 py-4">
              <GoogleIcon />
              <div>
                <div className="mb-0.5 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <p className="text-xs font-medium text-gray-500">
                  <span className="font-bold text-brand-navy">5.0</span> · Google Avaliações
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parede 3D de avaliações */}
      <div className="relative flex h-140 w-full items-center justify-center overflow-hidden perspective-[1400px]">
        <div className="flex justify-center gap-4 transform-[rotateX(6deg)_rotateY(-9deg)_rotateZ(3deg)_scale(1.05)]">
          <Column items={colA} animationClass="animate-[marquee-y-up_36s_linear_infinite]" />
          <Column items={colB} animationClass="animate-[marquee-y-down_44s_linear_infinite]" />
          <Column items={colC} animationClass="animate-[marquee-y-up_40s_linear_infinite]" />
        </div>
      </div>
    </section>
  );
}
