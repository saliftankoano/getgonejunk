import { NextResponse } from "next/server";
import { Resend } from "resend";
import sharp from "sharp";
import { business } from "@/config/business";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const configuredToken = process.env.LEAD_INTERNAL_TOKEN?.trim();
  const requestToken = request.headers.get("x-lead-internal-token")?.trim();
  if (configuredToken && requestToken !== configuredToken) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const getString = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };

  const company = getString("company");
  if (company) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const name = getString("name");
  const phone = getString("phone");
  const email = getString("email");
  const details = getString("details") || "—";
  const source = getString("source") || "site";

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = phone.replace(/\D/g, "").length >= 10;
  if (name.length < 2 || !isValidPhone || !isValidEmail) {
    return NextResponse.json(
      { error: "Please enter a valid name, phone number, and email." },
      { status: 422 },
    );
  }

  const maxFiles = 7;
  const maxFileSize = 10 * 1024 * 1024; // 10 MB
  const files = formData
    .getAll("photos")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (files.length > maxFiles) {
    return NextResponse.json({ error: `Please upload up to ${maxFiles} photos.` }, { status: 422 });
  }

  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Please upload image files only." }, { status: 422 });
    }
    if (file.size > maxFileSize) {
      return NextResponse.json({ error: "Each photo must be 10MB or smaller." }, { status: 422 });
    }
  }

  try {
    const attachments = await Promise.all(
      files.map(async (file, index) => {
        const arrayBuffer = await file.arrayBuffer();
        const input = Buffer.from(arrayBuffer);
        const output = await sharp(input)
          .rotate()
          .resize({ width: 1400, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true })
          .toBuffer();

        const safeBaseName = (file.name || `photo-${index + 1}`)
          .replace(/\.[^/.]+$/, "")
          .replace(/[^a-zA-Z0-9-_]/g, "-")
          .slice(0, 60);

        return {
          filename: `${safeBaseName || `photo-${index + 1}`}.jpg`,
          content: output,
        };
      }),
    );

    const subject = `New pickup request from ${name}`;
    const text = [
      `New lead from ${business.domain}`,
      "",
      `Name:    ${name}`,
      `Phone:   ${phone}`,
      `Email:   ${email}`,
      `Needs:   ${details}`,
      `Source:  ${source}`,
      `Photos:  ${attachments.length}`,
    ].join("\n");

    const recipients = [
      process.env.LEAD_EMAIL_ERROL,
      process.env.LEAD_EMAIL_SPOUSE,
      process.env.LEAD_EMAIL_SALIF,
    ]
      .filter((value): value is string => Boolean(value && value.trim()))
      .map((value) => value.trim());

    const fallbackRecipient = (process.env.LEAD_TO_EMAIL || business.email).trim();
    const to = recipients.length > 0 ? recipients : [fallbackRecipient];
    const from = (process.env.LEAD_FROM_EMAIL || "leads@getgonejunk.co").trim();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.info("[lead] (no RESEND_API_KEY — logged only)\n" + text);
      return NextResponse.json({ ok: true, delivered: false });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${business.name} <${from}>`,
      to,
      replyTo: email,
      subject,
      text,
      attachments,
    });

    if (error) {
      console.error("[lead] resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your request right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[lead] unexpected error:", error);
    return NextResponse.json(
      { error: "We couldn't send your request right now." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
