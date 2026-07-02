"use client";

import { useActionState } from "react";
import { sendContactAction, type ContactState } from "@/actions/contact";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { WhatsAppSvg } from "@/components/WhatsAppSvg";
import { ButtonShine } from "@/components/ButtonShine";
import {
  Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, ChevronDown,
} from "lucide-react";

const services = [
  "Manutenção Preventiva",
  "Reforma Estrutural",
  "Recuperação Estrutural",
  "Pintura Industrial",
  "Revitalização",
  "Inspeção Técnica",
  "Outro",
];

const contactItems = [
  {
    icon: WhatsAppSvg,
    isCustomSvg: true,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
    hoverColor: "hover:text-whatsapp",
  },
  {
    icon: Phone,
    isCustomSvg: false,
    label: "Telefone",
    value: "(11) 99999-9999",
    href: "tel:+5511999999999",
    hoverColor: "hover:text-brand-light",
  },
  {
    icon: MapPin,
    isCustomSvg: false,
    label: "Localização",
    value: "Brasil",
    href: null,
    hoverColor: "",
  },
];

const initialState: ContactState = { status: "idle" };

function InputField({
  label, name, type = "text", placeholder, required = false,
}: {
  label: string; name: string; type?: string; placeholder: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {label} {required && <span className="text-brand-light">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 px-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 text-sm placeholder:text-gray-400 outline-none focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/10 focus:bg-white transition-all duration-200"
      />
    </div>
  );
}

export function Contact() {
  const [state, action, isPending] = useActionState(sendContactAction, initialState);

  return (
    <section
      id="contato-form"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, color-mix(in srgb, var(--color-brand-dark) 5%, transparent) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        backgroundColor: "var(--color-surface-light)",
      }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-surface-light via-transparent to-surface-light pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-surface-light via-transparent to-surface-light pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <Badge className="mb-4 bg-brand-dark/8 text-brand-dark border-brand-dark/15">
            Fale Conosco
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">
            Entre em <span className="text-brand-light">Contato</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Preencha o formulário e nossa equipe retornará em breve com um orçamento personalizado.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-xl overflow-hidden shadow-2xl shadow-brand-dark/10 border border-white/80 flex flex-col lg:flex-row">

          {/* Left — info panel */}
          <div className="relative lg:w-[38%] bg-linear-to-br from-surface-darkest via-brand-navy to-surface-panel p-12 flex flex-col justify-between overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-white/8 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-dark to-brand-light" />

            <div>
              {/* Logo */}
              <div className="mb-8">
                <Image
                  src="/logo.png"
                  alt="PH Reforma de Reservatórios"
                  width={140}
                  height={175}
                  className="h-16 w-auto"
                />
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3 leading-snug">
                Solicite sua<br />
                <span className="text-brand-light">avaliação gratuita</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Nossa equipe especializada analisa a situação do seu reservatório e oferece o melhor diagnóstico sem compromisso.
              </p>

              {/* Contact items */}
              <ul className="space-y-4">
                {contactItems.map(({ icon: Icon, isCustomSvg, label, value, href, hoverColor }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`flex items-center gap-3 text-white/55 ${hoverColor} transition-colors group`}
                      >
                        <div className="w-9 h-9 rounded-md bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                          {isCustomSvg
                            ? <Icon className="w-4 h-4 fill-current" />
                            : <Icon className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest">{label}</p>
                          <p className="text-sm font-medium">{value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 text-white/55">
                        <div className="w-9 h-9 rounded-md bg-white/8 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest">{label}</p>
                          <p className="text-sm font-medium">{value}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom note */}
            <p className="text-white/20 text-xs mt-8">
              Atendimento de segunda a sábado · Resposta em até 24h
            </p>
          </div>

          {/* Right — form */}
          <div className="lg:w-[62%] bg-white p-12 flex flex-col justify-center">
            {state.status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-navy">Mensagem enviada!</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Recebemos seu contato e retornaremos em breve. Você também pode nos chamar diretamente pelo WhatsApp.
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden mt-2 flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-sm px-5 h-10 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-whatsapp/40"
                >
                  <ButtonShine />
                  <WhatsAppSvg className="relative w-4 h-4 fill-white" />
                  <span className="relative">Chamar no WhatsApp</span>
                </a>
              </div>
            ) : (
              <form action={action} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Nome completo" name="name" placeholder="Seu nome" required />
                  <InputField label="E-mail" name="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Telefone / WhatsApp" name="phone" type="tel" placeholder="(11) 99999-9999" />

                  {/* Service select */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Serviço de interesse
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        className="w-full h-11 pl-4 pr-10 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 text-sm outline-none focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/10 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Mensagem <span className="text-brand-light">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Descreva sua necessidade, o tipo de reservatório, localização..."
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 text-sm placeholder:text-gray-400 outline-none focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/10 focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>

                {/* Error */}
                {state.status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-100 px-4 py-3 rounded-lg">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {state.message}
                  </div>
                )}

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="group relative overflow-hidden flex items-center justify-center gap-2 w-full sm:w-auto bg-linear-to-r from-brand-dark to-brand-light disabled:opacity-60 disabled:pointer-events-none text-white font-bold text-sm px-8 h-12 rounded-lg shadow-lg shadow-brand-dark/20 transition-all duration-300 border-0 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-dark/40"
                  >
                    <ButtonShine />
                    <span className="relative flex items-center gap-2">
                      {isPending ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
                      ) : (
                        <><Send className="h-4 w-4" /> Enviar Mensagem</>
                      )}
                    </span>
                  </button>
                  <p className="text-xs text-gray-400 text-center sm:text-left">
                    Também podemos conversar pelo{" "}
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-whatsapp font-semibold hover:underline">
                      WhatsApp
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
