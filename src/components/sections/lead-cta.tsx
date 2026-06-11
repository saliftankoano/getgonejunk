import { business } from "@/config/business";
import { Icon } from "@/components/icon";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/motion";

const perks = [
  "Upfront, all-in pricing — no hidden fees",
  "Same-day & next-day availability",
  "We do 100% of the lifting",
  "Donation & recycling included",
];

export function LeadCta({ source = "home" }: { source?: string }) {
  return (
    <section id="quote" className="scroll-mt-20 relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 size-[30rem] rounded-full bg-brand-500/15 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-brand-300">
            <Icon name="chat" weight="fill" className="size-4" /> No tedious quote forms
          </span>
          <h2 className="mt-5 font-display text-4xl text-white sm:text-5xl">
            Get a fast estimate.
            <br />
            <span className="text-brand-400">Then get gone.</span>
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/70">
            Drop your info and we&apos;ll text or call you right back with an upfront price. Or skip
            the form entirely — share a few photos and we&apos;ll give you a spot-on quote.
          </p>

          <ul className="mt-7 grid gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-white/85">
                <Icon name="check" weight="fill" className="size-5 shrink-0 text-brand-400" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${business.phoneRaw}`}
              className="animate-pulse-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-lg font-bold text-ink-950 transition-all hover:bg-brand-bright hover:-translate-y-0.5"
            >
              <Icon name="phone" weight="fill" className="size-5" /> Call {business.phone}
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-white/25 px-7 py-4 text-lg font-bold text-white hover:border-brand-400 hover:bg-white/10"
            >
              <Icon name="chat" weight="fill" className="size-5 text-brand-400" /> Get photo quote
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="quote-form" className="scroll-mt-24 rounded-3xl border border-ink-700/10 bg-white p-6 shadow-card sm:p-8">
            <h3 className="font-display text-2xl text-ink-900">Request a pickup</h3>
            <p className="mt-1 text-sm text-ink-600">Takes 20 seconds. We&apos;ll handle the rest.</p>
            <div className="mt-5">
              <LeadForm source={source} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
