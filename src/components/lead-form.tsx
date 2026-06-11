"use client";

import { useState, useTransition } from "react";
import { business } from "@/config/business";
import { Icon } from "@/components/icon";
import { CircleNotch, Images as ImagesIcon } from "@phosphor-icons/react/dist/ssr";
import { submitLead } from "@/app/actions/submit-lead";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Deliberately short, low-friction lead form (no quote wizard).
 * Name + phone + email + optional details/photos. Submits via server action.
 */
export function LeadForm({ source = "site" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [photoCount, setPhotoCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone: string) {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 10;
  }

  function validate(form: HTMLFormElement) {
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const photos = formData
      .getAll("photos")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (name.length < 2) return "Please enter your name.";
    if (!isValidPhone(phone)) return "Please enter a valid phone number.";
    if (!isValidEmail(email)) return "Please enter a valid email address.";
    if (photos.length > 7) return "Please upload up to 7 photos.";
    for (const photo of photos) {
      if (!photo.type.startsWith("image/")) return "Please upload image files only.";
      if (photo.size > 10 * 1024 * 1024) return "Each photo must be 10MB or smaller.";
    }
    return null;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    const form = e.currentTarget;

    const validationError = validate(form);
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      return;
    }

    setStatus("submitting");

    const formData = new FormData(form);
    formData.set("source", source);

    startTransition(async () => {
      const result = await submitLead(formData);
      if ("error" in result) {
        setStatus("error");
        setErrorMsg(result.error);
        return;
      }

      setStatus("success");
      setPhotoCount(0);
      form.reset();
    });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-brand-500">
          <Icon name="check" weight="fill" className="size-8 text-ink-950" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-ink-900">You&apos;re all set!</h3>
        <p className="mt-2 text-ink-700">
          Thanks — we got your info and we&apos;ll reach out shortly to lock in your pickup. Need us
          sooner?
        </p>
        <a
          href={`tel:${business.phoneRaw}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 font-bold text-white hover:bg-ink-800"
        >
          <Icon name="phone" weight="fill" className="size-4 text-brand-400" />
          Call {business.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name">
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Jordan Smith"
            className={inputCls}
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(614) 555-0123"
            className={inputCls}
          />
        </Field>
      </div>
      <Field label="Email">
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className={inputCls}
        />
      </Field>
      <Field label="What needs to go?" optional>
        <input
          name="details"
          placeholder="e.g. a couch & a fridge in the garage"
          className={inputCls}
        />
      </Field>
      <div>
        <span className="mb-1.5 block text-sm font-semibold text-ink-800">
          Upload photos <span className="ml-1 font-normal text-ink-600">(optional)</span>
        </span>
        <label
          htmlFor="lead-photos"
          className="relative flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-ink-700/20 bg-fog px-4 py-3 transition hover:border-brand-400 hover:bg-brand-50"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-100 text-brand-600">
            <ImagesIcon className="size-5" weight="duotone" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-ink-800">
              {photoCount > 0
                ? `${photoCount} photo${photoCount === 1 ? "" : "s"} selected`
                : "Add photos"}
            </span>
            <span className="block text-xs text-ink-600">Tap to upload · up to 7 images</span>
          </span>
          <input
            id="lead-photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="absolute inset-0 cursor-pointer opacity-0"
            onChange={(e) => setPhotoCount(e.currentTarget.files?.length ?? 0)}
          />
        </label>
        <p className="mt-1 text-xs text-ink-600">Share a few photos for a more precise estimate.</p>
      </div>

      {/* Honeypot — hidden from users, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "submitting" || isPending}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-bold text-ink-950 transition-all hover:bg-brand-bright hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" || isPending ? (
          <>
            <CircleNotch className="size-5 animate-spin" weight="bold" />
            Sending…
          </>
        ) : (
          <>
            Get my fast estimate
            <Icon name="caret" weight="bold" className="size-4" />
          </>
        )}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMsg} Please call us at{" "}
          <a href={`tel:${business.phoneRaw}`} className="underline">
            {business.phone}
          </a>
          .
        </p>
      )}

      <p className="text-center text-xs text-ink-600">
        Prefer to talk? Call or text{" "}
        <a href={`tel:${business.phoneRaw}`} className="font-semibold text-ink-900 underline">
          {business.phone}
        </a>
        . No spam, ever.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-ink-700/15 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-600/50 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label}
        {optional && <span className="ml-1 font-normal text-ink-600">(optional)</span>}
      </span>
      {children}
    </label>
  );
}
