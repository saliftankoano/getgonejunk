import Link from "next/link";
import { locations } from "@/config/locations";
import { business } from "@/config/business";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion";

export function ServiceArea() {
  return (
    <section id="areas" className="scroll-mt-24 bg-fog py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Where we haul</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl">
            Serving {business.address.city} &amp; <span className="text-brand-500">Central Ohio</span>
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Proudly hauling junk across Franklin, Delaware, and Fairfield counties. Tap your city for
            local pickup details.
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/junk-removal/${l.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-2xl border border-ink-700/10 bg-white px-4 py-3.5 font-semibold text-ink-800 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 hover:shadow-card"
                >
                  <span className="flex items-center gap-2">
                    <Icon
                      name="pin"
                      weight="fill"
                      className="size-4 text-brand-500 transition-transform group-hover:-translate-y-0.5"
                    />
                    {l.city}
                  </span>
                  <Icon
                    name="caret"
                    weight="bold"
                    className="size-4 text-ink-600/40 transition-all group-hover:translate-x-0.5 group-hover:text-brand-500"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-600">
            Don&apos;t see your town? We likely still cover it —{" "}
            <a href={`tel:${business.phoneRaw}`} className="font-semibold text-ink-900 underline">
              give us a call
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
