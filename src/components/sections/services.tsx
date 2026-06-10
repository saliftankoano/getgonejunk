import Link from "next/link";
import { services } from "@/config/services";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we haul</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl">
            If you don&apos;t want it, <span className="text-brand-500">we&apos;ll take it.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            From a single old couch to a whole-home cleanout, our crews load it, haul it, and clean
            up after. Here&apos;s what Columbus calls us for most.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-700/10 bg-fog p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
              >
                {/* accent sweep on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100"
                />
                <div className="grid size-14 place-items-center rounded-2xl bg-ink-900 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                  <Icon name={s.icon} weight="duotone" className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink-900">{s.name}</h3>
                <p className="mt-2 text-ink-600">{s.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.slice(0, 5).map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-sm font-medium text-ink-700 ring-1 ring-ink-700/10"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1.5 font-bold text-brand-600 transition-transform group-hover:translate-x-1">
                  See {s.name.toLowerCase()}
                  <Icon name="caret" weight="bold" className="size-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
