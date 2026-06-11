import { business } from "@/config/business";
import { CountUp } from "@/components/count-up";

export function StatsBar() {
  return (
    <section className="bg-brand-500">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-10 sm:px-6 lg:grid-cols-4">
        {business.stats.map((s) => (
          <div key={s.label} className="px-2 text-center">
            <p className="font-display text-4xl text-ink-950 sm:text-5xl">
              <CountUp
                value={s.value}
                decimals={"decimals" in s ? (s.decimals as number) : 0}
                suffix={s.suffix}
              />
            </p>
            <p className="mt-1 text-sm font-medium text-ink-900/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
