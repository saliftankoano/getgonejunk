import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/config/services";
import { business } from "@/config/business";
import { PageHero } from "@/components/page-hero";
import { ServiceArea } from "@/components/sections/service-area";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Faq } from "@/components/sections/faq";
import { LeadCta } from "@/components/sections/lead-cta";
import { BreadcrumbSchema, FaqSchema, ServiceSchema } from "@/components/schema";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/ui";
import { faqs } from "@/config/faqs";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = `${service.name} in Columbus, OH`;
  const description = service.summary;
  return {
    title,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title, description, url: `${business.url}/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${business.url}/services/${slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Junk Removal", path: "/junk-removal" },
    { name: service.name, path: `/services/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema name={service.name} description={service.summary} url={url} />
      <FaqSchema faqs={faqs} />

      <PageHero
        eyebrow={`${service.tagline}`}
        title={`${service.name} in`}
        highlight="Columbus, OH"
        crumbs={crumbs}
        description={service.page?.intro ?? service.summary}
      />

      {/* What's included + items */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>What&apos;s included</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl">
              Everything, hauled in <span className="text-brand-500">one trip</span>
            </h2>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 rounded-2xl bg-fog p-4">
                    <Icon name="check" weight="fill" className="mt-0.5 size-5 shrink-0 text-brand-500" />
                    <span className="font-medium text-ink-800">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-ink-700/10 bg-ink-950 p-7 text-white">
              <h3 className="font-display text-2xl">Common items we take</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/60">
                Not sure if we take your item? Share a few photos at{" "}
                <a href={`tel:${business.phoneRaw}`} className="font-semibold text-brand-300 underline">
                  {business.phone}
                </a>{" "}
                and we&apos;ll let you know in minutes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO copy sections */}
      {service.page && (
        <section className="bg-fog py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-10">
              {service.page.sections.map((sec) => (
                <Reveal key={sec.heading}>
                  <article className="rounded-3xl border border-ink-700/10 bg-white p-7 sm:p-9">
                    <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">{sec.heading}</h2>
                    <p className="mt-3 text-lg leading-relaxed text-ink-600">{sec.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Cross-link to the other service */}
            <Reveal className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-ink-950 p-7 text-white">
                <p className="font-display text-2xl">Need something else hauled?</p>
                <div className="flex flex-wrap gap-3">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2.5 font-semibold transition-colors hover:border-brand-400 hover:text-brand-300"
                      >
                        {s.name}
                        <Icon name="caret" weight="bold" className="size-4" />
                      </Link>
                    ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <HowItWorks />
      <ServiceArea />
      <Faq faqs={faqs} heading={`${service.name} FAQ`} />
      <LeadCta source={`service-${slug}`} />
    </>
  );
}
