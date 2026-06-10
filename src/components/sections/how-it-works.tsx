import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const steps = [
  {
    icon: "phone",
    title: "Call or text a photo",
    body: "Tell us what needs to go — or just text a picture. We'll give you an upfront, all-in price on the spot. No drawn-out quote forms.",
  },
  {
    icon: "clock",
    title: "Pick a time that works",
    body: "Same-day and next-day slots, seven days a week. We give you a tight arrival window and a courtesy call before we roll up.",
  },
  {
    icon: "truck",
    title: "We haul it away",
    body: "Our uniformed crew does all the lifting and loading from wherever your stuff is, sweeps up, and you only pay once it's gone.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-brand-300">Dead simple</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Three steps to a <span className="text-brand-400">clutter-free</span> space
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={step.title} className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <span className="absolute -top-5 right-6 font-display text-7xl text-white/5">
                  0{i + 1}
                </span>
                <div className="grid size-14 place-items-center rounded-2xl bg-brand-500 text-ink-950">
                  <Icon name={step.icon} weight="fill" className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-white">{step.title}</h3>
                <p className="mt-2 text-white/65">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
