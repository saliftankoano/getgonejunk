import { testimonials } from "@/config/testimonials";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Neighbors love us</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl">
            Rated <span className="text-brand-500">4.9 stars</span> across Columbus
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink-700/10 bg-fog p-7">
                <div className="flex gap-0.5 text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" weight="fill" className="size-5" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-ink-700">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-700/10 pt-4">
                  <span className="grid size-10 place-items-center rounded-full bg-ink-900 font-display text-lg text-brand-400">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold text-ink-900">{t.name}</span>
                    <span className="block text-sm text-ink-600">{t.area}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
