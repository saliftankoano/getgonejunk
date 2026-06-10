"use client";

import { useState } from "react";
import { business } from "@/config/business";
import { Icon } from "@/components/icon";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Deliberately short, low-friction lead form (no quote wizard).
 * Name + phone + email + one optional line. Posts to /api/lead.
 */
export function LeadForm({ source = "site" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Request failed");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong sending your request.",
      );
    }
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
        disabled={status === "submitting"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-bold text-ink-950 transition-all hover:bg-brand-bright hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
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
