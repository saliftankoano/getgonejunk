import Link from "next/link";
import type { ReactNode } from "react";
import { business } from "@/config/business";
import { Icon } from "@/components/icon";

/* Reusable button styles. Hover lift + press feedback under 150ms. */

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight transition-all duration-150 active:scale-[0.97] focus-visible:outline-offset-4";

const sizes = {
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-7 py-4 text-base",
};

export function PrimaryButton({
  children,
  href,
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  href: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} bg-brand-500 text-ink-950 shadow-card hover:bg-brand-bright hover:shadow-lift hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostButton({
  children,
  href,
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  href: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} border-2 border-white/25 bg-white/5 text-white hover:border-brand-400 hover:bg-white/10 hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </Link>
  );
}

/** Big tappable phone button. The single most important conversion element. */
export function CallButton({
  size = "lg",
  className = "",
  label = "Call",
}: {
  size?: keyof typeof sizes;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className={`${base} ${sizes[size]} bg-brand-500 text-ink-950 shadow-card hover:bg-brand-bright hover:shadow-lift hover:-translate-y-0.5 ${className}`}
    >
      <Icon name="phone" weight="fill" className="size-5" />
      <span>
        {label} {business.phone}
      </span>
    </a>
  );
}

export function TextUsButton({
  className = "",
  size = "lg",
}: {
  className?: string;
  size?: keyof typeof sizes;
}) {
  return (
    <a
      href={`sms:${business.phoneRaw}`}
      className={`${base} ${sizes[size]} border-2 border-white/25 bg-white/5 text-white hover:border-brand-400 hover:bg-white/10 hover:-translate-y-0.5 ${className}`}
    >
      <Icon name="chat" weight="fill" className="size-5 text-brand-400" />
      Text us a photo
    </a>
  );
}

/** Small uppercase section eyebrow. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-600 ${className}`}
    >
      <span className="h-px w-6 bg-brand-500" />
      {children}
    </span>
  );
}
