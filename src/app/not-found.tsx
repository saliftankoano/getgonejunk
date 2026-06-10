import Link from "next/link";
import { business } from "@/config/business";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-ink-950 px-4 text-center text-white">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative">
        <p className="font-display text-7xl text-brand-400 sm:text-8xl">Gone.</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">This page got hauled away</h1>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the good
          stuff.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-bold text-ink-950 hover:bg-brand-bright"
          >
            Back home
          </Link>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-6 py-3 font-bold text-white hover:border-brand-400"
          >
            <Icon name="phone" weight="fill" className="size-4 text-brand-400" /> Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
