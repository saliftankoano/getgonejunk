import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/config/business";
import { PageHero } from "@/components/page-hero";
import { Pillars } from "@/components/sections/pillars";
import { StatsBar } from "@/components/sections/stats";
import { LeadCta } from "@/components/sections/lead-cta";
import { BreadcrumbSchema } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";

const title = "About Get Gone Junk Removal";
const description = `Meet ${business.name} — a local Columbus, Ohio junk removal crew built on three promises: reusable, responsible, and trustworthy.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: `${business.url}/about` },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const values = [
  {
    icon: "clock",
    title: "On time, every time",
    body: "We give you a tight arrival window and a courtesy call before we roll up. Your time matters.",
  },
  {
    icon: "dollar",
    title: "Upfront pricing",
    body: "You hear the all-in price before we lift a thing. No surprises, no pressure, no hidden fees.",
  },
  {
    icon: "leaf",
    title: "Landfill last",
    body: "Donating and recycling come first. The dumpster is always our last resort, not our default.",
  },
  {
    icon: "shield",
    title: "Respectful crews",
    body: "Background-checked, uniformed, and careful with your floors, walls, and landscaping.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      <PageHero
        eyebrow="Locally owned · Columbus, OH"
        title={"We’re the crew that"}
        highlight="does the heavy lifting."
        crumbs={crumbs}
        description={
          <>
            {business.name} started with a simple idea: junk removal in Columbus should be fast,
            honest, and easy on the planet. No 800-number runaround — just a friendly local team that
            shows up, hauls it all, and leaves your space clean.
          </>
        }
      />

      <StatsBar />

      {/* Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl">
              Built for Columbus, <span className="text-brand-500">by Columbus.</span>
            </h2>
            <div className="mt-5 space-y-4 text-lg text-ink-600">
              <p>
                We&apos;re neighbors who got tired of seeing perfectly good furniture tossed in
                dumpsters and homeowners stuck wrestling couches down the stairs alone. So we built a
                junk removal company around doing it the right way.
              </p>
              <p>
                That means treating your home like our own, sorting every load for donation and
                recycling, and quoting you an honest price before we start. From the Short North to
                Dublin, we&apos;re proud to keep Central Ohio a little lighter.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-4">
              <figure className="overflow-hidden rounded-3xl border border-ink-700/10 bg-fog shadow-card">
                <Image
                  src="/about-handshake.png"
                  alt="Get Gone Junk Removal crew member shaking hands with a homeowner"
                  width={1365}
                  height={1024}
                  sizes="(max-width: 1024px) 95vw, 560px"
                  className="h-auto w-full object-cover"
                />
              </figure>

              <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-3xl border border-ink-700/10 bg-fog p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-card"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-ink-900 text-brand-400">
                    <Icon name={v.icon} weight="fill" className="size-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{v.body}</p>
                </div>
              ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Pillars />
      <LeadCta source="about" />
    </>
  );
}
