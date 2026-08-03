import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUPPORTED_LOCALES = ["en", "es", "pt"];
const HERMES_TIMEOUT_MS = 5_000;

interface LeadPayload {
  name: string;
  email: string;
  message: string;
  locale: string;
}

function parseLead(body: unknown): LeadPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const { name, email, message, locale } = body as Record<string, unknown>;
  if (typeof name !== "string" || name.trim().length === 0) return null;
  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) return null;
  if (typeof message !== "string" || message.trim().length === 0) return null;
  return {
    name: name.trim().slice(0, 200),
    email: email.trim().slice(0, 200),
    message: message.trim().slice(0, 5000),
    locale: SUPPORTED_LOCALES.includes(locale as string) ? (locale as string) : "en",
  };
}

function sendNotificationEmail(lead: LeadPayload): Promise<void> {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: lead.email,
    subject: `Lead: ${lead.name} (${lead.email})`,
    text: `Idioma: ${lead.locale}\n\n${lead.message}`,
  };

  return new Promise((resolve, reject) => {
    transport.sendMail(mailOptions, (err) => (err ? reject(err) : resolve()));
  });
}

// Best-effort: si el agente no está corriendo, el mail ya salió y el lead no se pierde.
// Crea un job one-shot en Hermes: el agente procesa el lead y entrega el draft
// por Telegram (home channel) — la respuesta HTTP directa no llega a ningún lado.
async function forwardToHermes(lead: LeadPayload): Promise<void> {
  const base = process.env.HERMES_API_URL;
  if (!base) return;
  try {
    await fetch(`${base.replace(/\/$/, "")}/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HERMES_API_KEY ?? ""}`,
      },
      body: JSON.stringify({
        name: `lead-${Date.now()}`,
        schedule: "1m",
        repeat: 1,
        deliver: "telegram",
        prompt:
          `Ejecutá la Tarea 1 del SOUL (lead intake). Nuevo lead del formulario de pdelabs.com:\n` +
          `Nombre: ${lead.name}\nEmail: ${lead.email}\nIdioma: ${lead.locale}\n` +
          `Mensaje:\n${lead.message}`,
      }),
      signal: AbortSignal.timeout(HERMES_TIMEOUT_MS),
    });
  } catch (err) {
    console.error("Hermes forward failed (lead still emailed):", err);
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const lead = parseLead(body);
  if (!lead) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  try {
    await sendNotificationEmail(lead);
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  await forwardToHermes(lead);

  return NextResponse.json({ message: "Email sent" });
}
