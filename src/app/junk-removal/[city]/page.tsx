import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/config/locations";
import { services } from "@/config/services";
import { business } from "@/config/business";
import { PageHero } from "@/components/page-hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pillars } from "@/components/sections/pillars";
import { Faq } from "@/components/sections/faq";
import { LeadCta } from "@/components/sections/lead-cta";
import { BreadcrumbSchema, FaqSchema, ServiceSchema } from "@/components/schema";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { faqs } from "@/config/faqs";

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  const title = `Junk Removal in ${loc.city}, OH`;
  const description = `Fast, friendly junk removal in ${loc.city}, Ohio. Same-day furniture, appliance & full-home cleanouts with upfront pricing from ${business.name}.`;
  return {
    title,
    description,
    alternates: { canonical: `/junk-removal/${city}` },
    openGraph: { title, description, url: `${business.url}/junk-removal/${city}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const url = `${business.url}/junk-removal/${city}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Junk Removal", path: "/junk-removal" },
    { name: loc.city, path: `/junk-removal/${city}` },
  ];

  // Localized FAQ: swap the generic pricing answer for a city-specific one.
  const localFaqs = [
    {
      q: `How much does junk removal cost in ${loc.city}?`,
      a: `In ${loc.city}, pricing is based on how much space your items take up in our truck — and we give you the all-in price (labor, hauling, and disposal) before we start. Call or share a few photos for a fast quote.`,
    },
    ...faqs.filter((f) => !f.q.toLowerCase().includes("cost")),
  ];

  const nearby = locations.filter((l) => l.slug !== loc.slug && l.slug !== "columbus").slice(0, 6);

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={`Junk Removal in ${loc.city}, OH`}
        description={`Junk removal, furniture removal, and appliance removal in ${loc.city}, Ohio.`}
        url={url}
        areaName={`${loc.city}, ${business.address.region}`}
      />
      <FaqSchema faqs={localFaqs} />

      <PageHero
        eyebrow={`${loc.city} · ${loc.county}`}
        title={`Junk removal in`}
        highlight={`${loc.city}, OH`}
        crumbs={crumbs}
        description={loc.blurb}
      />

      {/* Local intro + services */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <Reveal>
              <Eyebrow>Your local crew</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-ink-900 sm:text-4xl">
                Hauling junk across {loc.city}
              </h2>
              <p className="mt-4 text-lg text-ink-600">
                {business.name} serves {loc.city} and the surrounding {loc.county} neighborhoods —
                including {formatList(loc.landmarks)}. Whether it&apos;s a single old couch or a
                full garage cleanout, we show up on time, give you an upfront price, and haul it all
                away in one trip.
              </p>
              <p className="mt-4 text-lg text-ink-600">
                We&apos;re reuse-first: usable furniture and appliances from {loc.city} homes get
                donated to local charities whenever possible, so less of your junk ends up in a
                landfill.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {loc.zips.map((z) => (
                  <span
                    key={z}
                    className="rounded-full bg-fog px-3 py-1 text-sm font-medium text-ink-700 ring-1 ring-ink-700/10"
                  >
                    {z}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <Stagger className="grid gap-4">
                {services.map((s) => (
                  <StaggerItem key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-start gap-4 rounded-3xl border border-ink-700/10 bg-fog p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:bg-white hover:shadow-card"
                    >
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink-900 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                        <Icon name={s.icon} weight="duotone" className="size-6" />
                      </span>
                      <span>
                        <span className="block font-display text-xl text-ink-900">{s.name}</span>
                        <span className="mt-1 block text-sm text-ink-600">{s.summary}</span>
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Pillars />

      {/* Nearby areas internal linking */}
      <section className="bg-fog py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">
              We also haul in nearby areas
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              <li>
                <Link
                  href="/junk-removal/columbus"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-700/10 bg-white px-4 py-2 font-semibold text-ink-800 transition-colors hover:border-brand-400 hover:text-brand-600"
                >
                  Columbus
                </Link>
              </li>
              {nearby.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/junk-removal/${l.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink-700/10 bg-white px-4 py-2 font-semibold text-ink-800 transition-colors hover:border-brand-400 hover:text-brand-600"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Faq faqs={localFaqs} heading={`${loc.city} junk removal FAQ`} />
      <LeadCta source={`city-${city}`} />
    </>
  );
}

function formatList(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
