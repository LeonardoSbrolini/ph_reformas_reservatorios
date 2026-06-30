"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactAction(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name    = (formData.get("name")    as string)?.trim();
  const email   = (formData.get("email")   as string)?.trim();
  const phone   = (formData.get("phone")   as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Preencha os campos obrigatórios (nome, e-mail e mensagem)." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Informe um e-mail válido." };
  }

  // TODO: integrar com serviço de e-mail (ex: Resend, Nodemailer, SendGrid)
  //
  // Exemplo com Resend:
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "site@phreformas.com.br",
  //   to:   "contato@phreformas.com.br",
  //   subject: `Novo contato via site — ${service || "Geral"}`,
  //   html: `<p><b>Nome:</b> ${name}</p>
  //          <p><b>E-mail:</b> ${email}</p>
  //          <p><b>Telefone:</b> ${phone || "—"}</p>
  //          <p><b>Serviço:</b> ${service || "—"}</p>
  //          <p><b>Mensagem:</b><br/>${message}</p>`,
  // });

  console.log("Contato recebido:", { name, email, phone, service, message });

  return { status: "success" };
}
