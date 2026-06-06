import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  honeypot?: unknown;
};

function str(v: unknown, max = 5000) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "jainish5658@gmail.com";
  const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please email jainish5658@gmail.com directly.",
      },
      { status: 503 },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions, do nothing
  if (str(body.honeypot)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const subject = str(body.subject, 200);
  const message = str(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look valid." },
      { status: 400 },
    );
  }
  if (message.length < 8) {
    return NextResponse.json(
      { error: "Message is too short." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const safeSubject = subject || `Portfolio: message from ${name}`;
  const text = `From: ${name} <${email}>\n\nSubject: ${safeSubject}\n\n${message}`;

  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${safeSubject}`,
      text,
    });
    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Could not send right now. Please email directly." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form exception:", err);
    return NextResponse.json(
      { error: "Could not send right now. Please email directly." },
      { status: 502 },
    );
  }
}
