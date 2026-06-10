import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CallButton, TextUsButton } from "@/components/ui";
import { Icon } from "@/components/icon";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumbs,
  showCtas = true,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  highlight?: string;
  description?: ReactNode;
  crumbs: { name: string; path: string }[];
  showCtas?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[30rem] rounded-full bg-brand-500/15 blur-[120px]"
      />
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={crumbs} />
        {eyebrow && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-brand-300">
            <Icon name="pin" weight="fill" className="size-4" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[0.95] text-white sm:text-6xl">
          {title} {highlight && <span className="text-brand-400">{highlight}</span>}
        </h1>
        {description && (
          <div className="mt-5 max-w-2xl text-lg text-white/70">{description}</div>
        )}
        {showCtas && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <TextUsButton />
          </div>
        )}
        {children}
      </div>
      <div aria-hidden className="tape-stripes h-3 w-full opacity-90" />
    </section>
  );
}
