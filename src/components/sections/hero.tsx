import Image from "next/image";
import { business } from "@/config/business";
import { Icon } from "@/components/icon";
import { CallButton, TextUsButton } from "@/components/ui";

const trust = [
  { icon: "shield", label: "Licensed & insured" },
  { icon: "clock", label: "Same-day pickups" },
  { icon: "star", label: "4.9★ rated locally" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Ambient brand glow + texture (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-brand-500/20 blur-[120px]"
      />
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div>
          <p className="hero-rise hero-rise-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-brand-300">
            <Icon name="pin" weight="fill" className="size-4" />
            Columbus, Ohio&apos;s junk removal crew
          </p>

          <h1 className="hero-rise hero-rise-2 mt-5 font-display text-5xl leading-[0.92] text-white sm:text-6xl lg:text-7xl">
            We haul it all,
            <br />
            <span className="text-brand-400">so you don&apos;t</span> have to.
          </h1>

          <p className="hero-rise hero-rise-2 mt-5 max-w-xl text-lg text-white/70">
            Fast, friendly, no-hassle junk removal across {business.address.city} and Central Ohio.
            We do the heavy lifting, donate and recycle what we can, and leave your space clean — for
            an upfront price with zero surprises.
          </p>

          <div className="hero-rise hero-rise-3 mt-7 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <TextUsButton />
          </div>

          <ul className="hero-rise hero-rise-4 mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-sm font-medium text-white/75">
                <Icon name={t.icon} weight="fill" className="size-5 text-brand-400" />
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="hero-rise hero-rise-3 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-float relative">
            <div
              aria-hidden
              className="absolute inset-6 rounded-[2rem] bg-brand-500/25 blur-2xl"
            />
            <Image
              src="/logo.png"
              alt="Get Gone Junk Removal — we haul it all, so you don't have to"
              width={640}
              height={640}
              priority
              sizes="(max-width: 1024px) 80vw, 480px"
              className="relative mx-auto w-full max-w-[460px] rounded-[2rem]"
            />
          </div>

          {/* Floating proof badges */}
          <div className="absolute -left-2 top-6 hidden rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-lift backdrop-blur sm:block">
            <p className="font-display text-2xl text-brand-400">1,200+</p>
            <p className="text-xs text-white/60">jobs hauled</p>
          </div>
          <div className="absolute -right-2 bottom-8 hidden rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-lift backdrop-blur sm:block">
            <p className="flex items-center gap-1 font-display text-2xl text-brand-400">
              <Icon name="leaf" weight="fill" className="size-5" /> 60%
            </p>
            <p className="text-xs text-white/60">kept from landfill</p>
          </div>
        </div>
      </div>

      {/* Brand tape divider */}
      <div aria-hidden className="tape-stripes h-3 w-full opacity-90" />
    </section>
  );
}
