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
    <section className="relative overflow-hidden bg-brand-50 text-ink-900">
      {/* Ambient brand glow + texture (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-brand-500/20 blur-[120px]"
      />
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div>
          <p className="hero-rise hero-rise-1 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700">
            <Icon name="pin" weight="fill" className="size-4" />
            Columbus, Ohio&apos;s junk removal crew
          </p>

          <h1 className="hero-rise hero-rise-2 mt-5 font-display text-5xl leading-[0.92] text-ink-900 sm:text-6xl lg:text-7xl">
            We haul it all,
            <br />
            <span className="text-brand-400">so you don&apos;t</span> have to.
          </h1>

          <p className="hero-rise hero-rise-2 mt-5 max-w-xl text-lg text-ink-700">
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
              <li key={t.label} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                <Icon name={t.icon} weight="fill" className="size-5 text-brand-400" />
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="hero-rise hero-rise-3 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-6 rounded-[2rem] bg-brand-500/25 blur-2xl"
            />
            <Image
              src="/hero-family.png"
              alt="Happy Columbus family with Get Gone Junk Removal crew beside the truck"
              width={1024}
              height={682}
              priority
              sizes="(max-width: 1024px) 92vw, 560px"
              className="relative mx-auto w-full max-w-[560px] rounded-[2rem] object-cover"
            />
          </div>

          {/* Floating proof badges */}
          <div className="animate-float absolute -left-2 top-6 hidden rounded-2xl border border-ink-700/10 bg-white px-4 py-3 shadow-card sm:block">
            <p className="font-display text-2xl text-brand-400">1,200+</p>
            <p className="text-xs text-ink-600">jobs hauled</p>
          </div>
          <div className="animate-float absolute -right-2 bottom-8 hidden rounded-2xl border border-ink-700/10 bg-white px-4 py-3 shadow-card sm:block">
            <p className="flex items-center gap-1 font-display text-2xl text-brand-400">
              <Icon name="leaf" weight="fill" className="size-5" /> 60%
            </p>
            <p className="text-xs text-ink-600">kept from landfill</p>
          </div>
        </div>
      </div>
    </section>
  );
}
