import type { Metadata } from "next";
import { business } from "@/config/business";
import { PageHero } from "@/components/page-hero";
import { ServicesSection } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pillars } from "@/components/sections/pillars";
import { ServiceArea } from "@/components/sections/service-area";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { LeadCta } from "@/components/sections/lead-cta";
import { BreadcrumbSchema, FaqSchema, ServiceSchema } from "@/components/schema";
import { faqs } from "@/config/faqs";

const title = "Junk Removal in Columbus, OH";
const description =
  "Full-service junk removal in Columbus, Ohio. Same-day pickups, upfront pricing, and donation-first hauling. We do the lifting — you just point.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/junk-removal" },
  openGraph: { title, description, url: `${business.url}/junk-removal` },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Junk Removal", path: "/junk-removal" },
];

export default function JunkRemovalPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name="Junk Removal"
        description={description}
        url={`${business.url}/junk-removal`}
      />
      <FaqSchema faqs={faqs} />

      <PageHero
        eyebrow="Columbus & Central Ohio"
        title="Junk removal in Columbus,"
        highlight="done right."
        crumbs={crumbs}
        description={
          <>
            Garages, basements, furniture, appliances, whole-home cleanouts — if two people can carry
            it, {business.name} will haul it away. On time, upfront price, and most of it kept out of
            the landfill.
          </>
        }
      />

      <ServicesSection />
      <HowItWorks />
      <Pillars />
      <ServiceArea />
      <Testimonials />
      <Faq faqs={faqs} heading="Columbus junk removal FAQ" />
      <LeadCta source="junk-removal" />
    </>
  );
}
