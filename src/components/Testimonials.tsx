"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Augusto M.",
    initials: "CA",
    color: "#4285F4",
    rating: 5,
    date: "há 2 meses",
    text: "Equipe muito profissional e eficiente. Fizeram a reforma completa do nosso reservatório industrial e o resultado foi excelente. Prazo cumprido e serviço de altíssima qualidade. Recomendo!",
  },
  {
    name: "Fernanda Oliveira",
    initials: "FO",
    color: "#EA4335",
    rating: 5,
    date: "há 4 meses",
    text: "Contratei a PH para manutenção preventiva do nosso tanque e fiquei muito satisfeita. Identificaram problemas que outros não notaram. Trabalho sério, transparente e bem executado.",
  },
  {
    name: "Roberto Silva",
    initials: "RS",
    color: "#34A853",
    rating: 5,
    date: "há 6 meses",
    text: "Serviço de recuperação estrutural impecável. A equipe chegou no horário, trabalhou com segurança total e entregou um resultado que superou nossas expectativas. Empresa de confiança!",
  },
  {
    name: "Marcelo Pereira",
    initials: "MP",
    color: "#FBBC05",
    rating: 5,
    date: "há 1 mês",
    text: "Já é a terceira vez que contrato a PH Reforma e nunca me decepcionei. Profissionais qualificados, preço justo e atendimento rápido. Meu reservatório ficou como novo!",
  },
  {
    name: "Ana Paula R.",
    initials: "AP",
    color: "#4285F4",
    rating: 5,
    date: "há 3 meses",
    text: "Excelente experiência do início ao fim. O orçamento foi rápido e transparente, o serviço de pintura anticorrosiva ficou perfeito e a equipe foi extremamente atenciosa. Nota 10!",
  },
  {
    name: "Luiz Henrique T.",
    initials: "LH",
    color: "#EA4335",
    rating: 5,
    date: "há 5 meses",
    text: "A inspeção técnica foi muito detalhada e o relatório muito claro. Depois contratei o serviço de reforma e ficou ótimo. Empresa séria, comprometida e de excelente qualidade.",
  },
  {
    name: "Patrícia Gomes",
    initials: "PG",
    color: "#34A853",
    rating: 5,
    date: "há 7 meses",
    text: "Profissionais altamente capacitados. Realizaram a revitalização completa do nosso tanque metálico com extremo cuidado. Ficamos muito satisfeitos com o acabamento e a durabilidade.",
  },
  {
    name: "Eduardo Matos",
    initials: "EM",
    color: "#FBBC05",
    rating: 5,
    date: "há 8 meses",
    text: "Ótimo custo-benefício e serviço de primeira. A comunicação durante todo o processo foi excelente, sempre nos mantendo informados. Resultado final muito acima do esperado!",
  },
  {
    name: "Juliana Neves",
    initials: "JN",
    color: "#4285F4",
    rating: 5,
    date: "há 10 meses",
    text: "Equipe pontual, educada e muito eficiente. Realizaram manutenção preventiva e corretiva com muito capricho. Recomendo sem hesitar para qualquer empresa que precise do serviço.",
  },
];

const ITEMS_PER_PAGE = 3;
const AUTOPLAY_MS = 5000;
const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);
  const [barKey, setBarKey] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pageRef = useRef(page);
  pageRef.current = page;

  const goTo = useCallback((next: number) => {
    setVisible(false);
    setBarKey((k) => k + 1);
    setTimeout(() => {
      setPage((next + totalPages) % totalPages);
      setVisible(true);
    }, 350);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!hovered) goTo(pageRef.current + 1);
    }, AUTOPLAY_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [hovered, goTo]);

  const currentCards = testimonials.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section
      id="avaliacoes"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-surface-light) 0%, var(--color-surface-tint) 50%, var(--color-surface-light) 100%)",
      }}
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-light/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-dark/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14">
          <div>
            <Badge className="mb-3 bg-brand-dark/8 text-brand-dark border-brand-dark/15">
              Avaliações
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              O que nossos clientes{" "}
              <span className="text-brand-light">dizem</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-100 shrink-0">
            <GoogleIcon />
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium">
                <span className="text-brand-navy font-bold">5.0</span> · Google Avaliações
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Cards — altura fixa para a seção não mudar de tamanho */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-opacity duration-350"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {currentCards.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col gap-3 h-56"
              >
                {/* Avatar + name */}
                <div className="flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 leading-tight">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.date}</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 shrink-0">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                {/* Text — clamped para não vazar */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 flex-1 overflow-hidden">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo(page - 1)}
              className="w-9 h-9 rounded-md border border-gray-200 bg-white hover:bg-brand-dark hover:border-brand-dark hover:text-white text-gray-500 flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-6 h-2 bg-brand-dark"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(page + 1)}
              className="w-9 h-9 rounded-md border border-gray-200 bg-white hover:bg-brand-dark hover:border-brand-dark hover:text-white text-gray-500 flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Próximo"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-gray-200 rounded-full overflow-hidden mx-auto mt-4">
            <div
              key={barKey}
              className="h-full bg-linear-to-r from-brand-dark to-brand-light rounded-full"
              style={{
                width: "0%",
                animation: `progress-fill ${AUTOPLAY_MS}ms linear forwards`,
                animationPlayState: hovered ? "paused" : "running",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
