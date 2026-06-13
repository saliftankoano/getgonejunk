import Image from "next/image";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/ui";

export function RealResults() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <Eyebrow>Real transformations</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl">
            From packed garage to <span className="text-brand-500">clean slate.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink-600">
            This is what full-service hauling looks like: we lift everything, sweep up, and leave your
            space ready to use again.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="overflow-hidden rounded-3xl border border-ink-700/10 bg-fog shadow-card">
            <Image
              src="/home-before-after.png"
              alt="Before and after garage cleanout by Get Gone Junk Removal"
              width={2048}
              height={1365}
              sizes="(max-width: 1024px) 95vw, 760px"
              className="h-auto w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
