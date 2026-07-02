import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { WhatsAppSvg } from "@/components/WhatsAppSvg";
import { ButtonShine } from "@/components/ButtonShine";

const services = [
  { label: "Manutenção Preventiva", href: "/servicos/manutencao-preventiva" },
  { label: "Reforma Estrutural",    href: "/servicos/reforma-estrutural"    },
  { label: "Recuperação Estrutural",href: "/servicos/recuperacao-estrutural"},
  { label: "Pintura Industrial",    href: "/servicos/pintura-industrial"    },
  { label: "Revitalização",         href: "/servicos/revitalizacao"         },
  { label: "Inspeção Técnica",      href: "/servicos/inspecao-tecnica"      },
];

const navLinks = [
  { label: "Início",           href: "/"          },
  { label: "Sobre",            href: "/sobre"     },
  { label: "Serviços",         href: "/servicos"  },
  { label: "Missão & Valores", href: "/valores"   },
  { label: "Avaliações",       href: "/avaliacoes"},
  { label: "Contato",          href: "/contato"   },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-darkest text-white overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-dark/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-brand-light/8 blur-3xl pointer-events-none" />

      {/* Top gradient line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-brand-light/40 to-transparent" />

      {/* CTA strip */}
      <div className="relative border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/45 text-xs font-medium uppercase tracking-widest mb-1">
              Precisa de um orçamento?
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Fale com nossa equipe agora mesmo
            </h3>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-sm px-6 h-12 rounded-xl shadow-lg shadow-whatsapp/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-whatsapp/40 shrink-0"
          >
            <ButtonShine />
            <WhatsAppSvg className="relative w-5 h-5 fill-white shrink-0" />
            <span className="relative">Solicitar Orçamento</span>
            <ArrowUpRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-5 group">
              <Image
                src="/logo.png"
                alt="PH Reforma de Reservatórios"
                width={140}
                height={175}
                className="h-28 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Recuperamos e preservamos reservatórios metálicos com soluções
              eficientes, seguras e duradouras desde 2012.
            </p>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/50 hover:text-whatsapp text-sm transition-colors group"
                >
                  <WhatsAppSvg className="w-4 h-4 fill-current shrink-0" />
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-2.5 text-white/50 hover:text-brand-light text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <MapPin className="h-4 w-4 shrink-0" />
                Brasil
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-brand-light group-hover:w-3 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-5">
              Serviços
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-light/50 group-hover:bg-brand-light transition-colors shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-lg border border-white/6 bg-white/3">
              <p className="text-white/30 text-xs leading-relaxed">
                <span className="text-white/50 font-semibold">
                  PH DE SOUZA REFORMAS DE RESERVATÓRIOS ME
                </span>
                <br />
                Fundada em 09/10/2012 · CNPJ regularizado · Área de atuação: manutenção em tanques metálicos
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">
            &copy; {year} PH Reforma de Reservatórios. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="text-white/30 hover:text-white text-xs transition-colors"
            >
              Política de Privacidade
            </Link>
            <span className="text-white/20 text-xs">
              Manutenção em Tanques Metálicos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
