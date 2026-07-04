"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Wrench,
  Shield,
  PaintBucket,
  RotateCcw,
  SearchCheck,
  HardHat,
  Users,
  Target,
  ChevronDown,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { WhatsAppSvg } from "@/components/WhatsAppSvg";
import { ButtonShine } from "@/components/ButtonShine";
import { siteConfig, whatsappLink } from "@/lib/site-config";

type DropdownItem = { icon: React.ElementType; label: string; desc: string; href: string };

type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  { label: "Início", href: "/" },
  {
    label: "Sobre",
    href: "/sobre",
    dropdown: [
      { icon: Users,  label: "Quem Somos",      desc: "Nossa história e equipe",  href: "/sobre"   },
      { icon: Target, label: "Missão & Valores", desc: "Princípios que nos guiam", href: "/valores" },
    ],
  },
  {
    label: "Serviços",
    href: "/servicos",
    dropdown: [
      { icon: Wrench,      label: "Manutenção Preventiva",  desc: "Inspeções e intervenções periódicas",        href: "/servicos/manutencao-preventiva"  },
      { icon: HardHat,     label: "Reforma Estrutural",     desc: "Reforço e substituição de elementos",        href: "/servicos/reforma-estrutural"     },
      { icon: Shield,      label: "Recuperação Estrutural", desc: "Restauração de estruturas danificadas",      href: "/servicos/recuperacao-estrutural" },
      { icon: PaintBucket, label: "Pintura Industrial",     desc: "Sistemas anticorrosivos de alta performance",href: "/servicos/pintura-industrial"     },
      { icon: RotateCcw,   label: "Revitalização",          desc: "Limpeza, tratamento e acabamento final",     href: "/servicos/revitalizacao"          },
      { icon: SearchCheck, label: "Inspeção Técnica",       desc: "Diagnóstico detalhado das condições",        href: "/servicos/inspecao-tecnica"       },
    ],
  },
  { label: "Avaliações", href: "/avaliacoes" },
  { label: "Contato",    href: "/contato"    },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown  = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isSolid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-500",
        isSolid ? "shadow-lg shadow-black/30" : ""
      )}
    >
      {/* Fundo transparente base (sobre o hero) */}
      <div className="absolute inset-0 bg-linear-to-b from-surface-darkest/80 via-surface-darkest/40 to-transparent pointer-events-none" />

      {/* Fundo sólido — surge por opacidade, sincronizado com a onda */}
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-b from-brand-navy to-surface-darkest transition-opacity duration-500 pointer-events-none",
          isSolid ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Premium top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-light/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Left — mobile menu trigger + logo */}
          <div className="flex items-center gap-2">
            {/* Mobile menu (left side) */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={cn(
                  "lg:hidden -ml-1 inline-flex items-center justify-center rounded-lg w-11 h-11 text-white hover:text-white hover:bg-white/15 hover:scale-110 active:scale-95 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                )}
              >
                <Menu className="h-6 w-6" />
              </SheetTrigger>

              <SheetContent
                side="left"
                showCloseButton={false}
                className="bg-surface-darkest border-white/10 w-72 p-0"
              >
                {/* Botão fechar (X) — branco, gira no hover */}
                <SheetClose className="absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-lg w-10 h-10 text-white/80 hover:text-white hover:bg-white/15 hover:rotate-90 active:scale-95 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                  <X className="h-6 w-6" />
                </SheetClose>

                <div className="flex items-center gap-3 p-6 border-b border-white/8">
                  <Image
                    src="/logo.png"
                    alt={siteConfig.name}
                    width={140}
                    height={175}
                    className="h-16 w-auto"
                  />
                  <span className="flex flex-col leading-none">
                    <span className="text-base font-extrabold tracking-tight text-white">
                      PH <span className="text-brand-light">Reforma</span>
                    </span>
                    <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
                      de Reservatórios
                    </span>
                  </span>
                </div>

                <nav className="flex flex-col p-4 gap-1 overflow-y-auto">
                  {navLinks.map((link) =>
                    link.dropdown ? (
                      <div key={link.label}>
                        <p className="px-4 pt-4 pb-1 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          {link.label}
                        </p>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-white/65 hover:text-white hover:bg-white/5 text-sm transition-all"
                          >
                            <item.icon className="h-4 w-4 text-brand-light shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-light" />
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>

                <div className="p-4 pt-2">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "group relative overflow-hidden w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold border-0 justify-center h-11 transition-all duration-300 hover:shadow-lg hover:shadow-whatsapp/30"
                    )}
                  >
                    <ButtonShine />
                    <WhatsAppSvg className="relative mr-2 w-4 h-4 fill-white shrink-0" />
                    <span className="relative">Solicitar Orçamento</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={140}
                height={175}
                className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <span className="flex flex-col leading-none">
                <span className="text-sm sm:text-base lg:text-lg font-extrabold tracking-tight text-white">
                  PH <span className="text-brand-light">Reforma</span>
                </span>
                <span className="mt-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white/55">
                  de Reservatórios
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={link.href}
                    className="relative flex items-center gap-1 px-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 group"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        activeDropdown === link.label ? "rotate-180 text-brand-light" : ""
                      )}
                    />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-brand-light group-hover:w-4/5 transition-all duration-300" />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-200",
                      link.dropdown.length > 2 ? "w-120" : "w-64",
                      activeDropdown === link.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    )}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-surface-panel border-l border-t border-white/10" />

                    <div className="relative bg-surface-panel border border-white/10 rounded-lg shadow-2xl shadow-black/40 overflow-hidden p-3">
                      {/* Header strip */}
                      <div className="px-3 py-2 mb-2 border-b border-white/8">
                        <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{link.label}</p>
                      </div>

                      <div className={cn(
                        "grid gap-1",
                        link.dropdown.length > 2 ? "grid-cols-2" : "grid-cols-1"
                      )}>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-150 group/item"
                          >
                            <div className="w-8 h-8 rounded-md bg-linear-to-br from-brand-dark/60 to-brand-light/40 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:from-brand-dark group-hover/item:to-brand-light transition-all duration-200">
                              <item.icon className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold leading-tight mb-0.5">{item.label}</p>
                              <p className="text-white/45 text-xs leading-snug">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-brand-light group-hover:w-4/5 transition-all duration-300" />
                </Link>
              )
            )}
          </nav>

          {/* Right — desktop CTA */}
          <div className="flex items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "default" }),
                "group relative overflow-hidden hidden md:inline-flex bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-semibold border-0 ring-1 ring-white/10 shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40 hover:-translate-y-0.5 transition-all duration-300 h-10 px-5"
              )}
            >
              <ButtonShine />
              <WhatsAppSvg className="relative mr-2 w-4 h-4 fill-white shrink-0" />
              <span className="relative">Solicitar Orçamento</span>
            </a>
          </div>

        </div>
      </div>

      {/* Onda na borda inferior — aparece quando o header fica sólido */}
      <HeaderWave visible={isSolid} />
    </header>
  );
}

/** Onda animada na borda inferior do header (visível no estado sólido). */
function HeaderWave({ visible }: { visible: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-x-0 top-full h-4 -z-10 overflow-hidden pointer-events-none transition-opacity duration-500",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Onda preenchida na cor do header — forma a borda inferior ondulada */}
      <svg
        className="absolute inset-0 h-full w-[200%] animate-[wave-drift_linear_infinite] animation-duration-[8s] text-surface-darkest"
        viewBox="0 0 2400 16"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,0 H2400 V4 Q2250,14 2100,4 T1800,4 T1500,4 T1200,4 T900,4 T600,4 T300,4 T0,4 Z" />
      </svg>
    </div>
  );
}
