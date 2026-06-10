import type { Metadata } from "next";
import { business, fullAddress } from "@/config/business";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { BreadcrumbSchema } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/icon";

const title = "Contact Get Gone Junk Removal";
const description = `Request a junk removal pickup in Columbus, OH. Call, text a photo, or send us your info and we'll get right back to you with an upfront price.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: `${business.url}/contact` },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const mapsQuery = encodeURIComponent(`${business.address.city}, ${business.address.region}`);

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      <PageHero
        eyebrow="We reply fast"
        title={"Let’s get your junk"}
        highlight="gone."
        crumbs={crumbs}
        showCtas={false}
        description="Call or text us a photo for the fastest quote, or drop your details below and we'll reach out right away."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact details */}
          <Reveal>
            <div className="space-y-4">
              <ContactCard
                icon="phone"
                label="Call us"
                value={business.phone}
                href={`tel:${business.phoneRaw}`}
                accent
              />
              <ContactCard
                icon="chat"
                label="Text a photo for a fast quote"
                value={business.phone}
                href={`sms:${business.phoneRaw}`}
              />
              <ContactCard
                icon="check"
                label="Email"
                value={business.email}
                href={`mailto:${business.email}`}
              />
              <div className="rounded-3xl border border-ink-700/10 bg-fog p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-ink-900 text-brand-400">
                    <Icon name="clock" weight="fill" className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-600">Hours</p>
                    <p className="font-bold text-ink-900">{business.hoursLabel}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3 border-t border-ink-700/10 pt-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-ink-900 text-brand-400">
                    <Icon name="pin" weight="fill" className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-600">Service area</p>
                    <p className="font-bold text-ink-900">{business.address.city} &amp; Central Ohio</p>
                    <p className="text-sm text-ink-600">{fullAddress}</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-ink-700/10">
                <iframe
                  title={`Map of ${business.address.city}, ${business.address.region}`}
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-ink-700/10 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-display text-3xl text-ink-900">Request a pickup</h2>
              <p className="mt-1 text-ink-600">
                Short and simple — name, number, and what needs to go. No drawn-out quote forms.
              </p>
              <div className="mt-6">
                <LeadForm source="contact" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  accent = false,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-4 rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-card ${
        accent
          ? "border-brand-300 bg-brand-50"
          : "border-ink-700/10 bg-fog hover:bg-white"
      }`}
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink-900 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
        <Icon name={icon} weight="fill" className="size-6" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink-600">{label}</span>
        <span className="block font-display text-2xl text-ink-900">{value}</span>
      </span>
    </a>
  );
}
