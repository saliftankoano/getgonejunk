import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/config/business";

export const runtime = "nodejs";

type LeadBody = {
  name?: string;
  phone?: string;
  email?: string;
  details?: string;
  source?: string;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bot submissions without sending.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();
  const details = body.details?.trim() || "—";
  const source = body.source || "site";

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Please include your name, phone, and email." },
      { status: 422 },
    );
  }

  const subject = `New pickup request from ${name}`;
  const text = [
    `New lead from ${business.domain}`,
    ``,
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email}`,
    `Needs:   ${details}`,
    `Source:  ${source}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || business.email;
  const from = process.env.LEAD_FROM_EMAIL || "leads@getgonejunk.co";

  // Graceful dev mode: without an API key, log the lead and return success so
  // the form works end-to-end before email is configured.
  if (!apiKey) {
    console.info("[lead] (no RESEND_API_KEY — logged only)\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${business.name} <${from}>`,
      to: [to],
      replyTo: email,
      subject,
      text,
    });
    if (error) {
      console.error("[lead] resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your request right now." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] unexpected error:", err);
    return NextResponse.json(
      { error: "We couldn't send your request right now." },
      { status: 500 },
    );
  }
}
