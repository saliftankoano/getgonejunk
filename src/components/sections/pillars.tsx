import { business } from "@/config/business";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Pillars() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Why Columbus picks Get Gone</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl">
              Reusable. Responsible. <span className="text-brand-500">Trustworthy.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              We&apos;re not a faceless 800-number. We&apos;re a local crew that treats your home
              like our own and keeps as much as possible out of the landfill.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-fog p-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-ink-950">
                <Icon name="leaf" weight="fill" className="size-6" />
              </div>
              <p className="text-sm text-ink-700">
                <span className="font-bold text-ink-900">Reuse-first promise:</span> donatable items
                go to local charities and recyclables to recyclers — before anything sees a dumpster.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-3">
            {business.pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group h-full rounded-3xl border border-ink-700/10 bg-fog p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-300 hover:bg-white hover:shadow-card">
                  <div className="grid size-14 place-items-center rounded-2xl bg-ink-900 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                    <Icon name={p.icon} weight="duotone" className="size-7" />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{p.blurb}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
