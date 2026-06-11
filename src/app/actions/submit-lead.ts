"use server";

import { headers } from "next/headers";
import { business } from "@/config/business";

const MAX_FILES = 7;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

type SubmitLeadResult = { ok: true; delivered: boolean } | { error: string };

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10;
}

async function getLeadRouteUrl() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");

  if (host) {
    return `${protocol}://${host}/api/lead`;
  }

  return `${business.url}/api/lead`;
}

export async function submitLead(formData: FormData): Promise<SubmitLeadResult> {
  const company = getString(formData, "company");
  if (company) {
    return { ok: true, delivered: false };
  }

  const name = getString(formData, "name");
  const phone = getString(formData, "phone");
  const email = getString(formData, "email");

  if (name.length < 2 || !isValidPhone(phone) || !isValidEmail(email)) {
    return { error: "Please enter a valid name, phone number, and email." };
  }

  const fileEntries = formData
    .getAll("photos")
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (fileEntries.length > MAX_FILES) {
    return { error: `Please upload up to ${MAX_FILES} photos.` };
  }

  for (const file of fileEntries) {
    if (!file.type.startsWith("image/")) {
      return { error: "Please upload image files only." };
    }
    if (file.size > MAX_FILE_SIZE) {
      return { error: "Each photo must be 10MB or smaller." };
    }
  }

  try {
    const url = await getLeadRouteUrl();
    const internalToken = process.env.LEAD_INTERNAL_TOKEN?.trim();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: internalToken ? { "x-lead-internal-token": internalToken } : undefined,
      cache: "no-store",
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      return { error: body.error || "We couldn't send your request right now." };
    }

    const body = await response.json().catch(() => ({ ok: true, delivered: true }));
    return { ok: true, delivered: Boolean(body.delivered) };
  } catch (error) {
    console.error("[lead] unexpected error:", error);
    return { error: "We couldn't send your request right now." };
  }
}
