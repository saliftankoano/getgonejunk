import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion";

const steps = [
  {
    icon: "phone",
    title: "Get a photo quote",
    body: "Tell us what needs to go and share a few photos. We'll reply with an upfront, all-in price.",
  },
  {
    icon: "clock",
    title: "Pick a time that works",
    body: "Same-day and next-day slots, seven days a week. We call ahead with a tight arrival window.",
  },
  {
    icon: "truck",
    title: "We haul it away",
    body: "Our crew lifts, loads, and sweeps up from wherever your stuff is. You pay once it's gone.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <div aria-hidden className="dot-grid-dark pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-brand-300">Dead simple</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Three steps to a <span className="text-brand-400">clutter-free</span> space
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="h-full">
              <div className="relative flex h-full min-h-[280px] flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <span className="absolute right-5 top-4 font-display text-7xl text-white/5">
                  0{i + 1}
                </span>
                <div className="grid size-14 place-items-center rounded-2xl bg-brand-500 text-ink-950">
                  <Icon name={step.icon} weight="fill" className="size-7" />
                </div>
                <h3 className="mt-5 min-h-[3.5rem] font-display text-2xl leading-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 min-h-[4.5rem] text-white/65">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
