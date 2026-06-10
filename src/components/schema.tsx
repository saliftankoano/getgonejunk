import { business, fullAddress } from "@/config/business";
import { locations } from "@/config/locations";

/** Renders a JSON-LD <script> tag. Server-rendered into the HTML for crawlers. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ORG_ID = `${business.url}/#business`;

/**
 * Site-wide LocalBusiness (HomeAndConstructionBusiness) schema.
 * Render once in the root layout so every page carries NAP + geo + areaServed.
 */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    description: business.shortDescription,
    url: business.url,
    telephone: business.phoneRaw,
    email: business.email,
    image: `${business.url}/logo.png`,
    logo: `${business.url}/logo.png`,
    priceRange: business.priceRange,
    foundingDate: business.foundingYear,
    slogan: business.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postal,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: business.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${dayName(d)}`),
      opens: h.open,
      closes: h.close,
    })),
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.city}, ${business.address.region}`,
    })),
    sameAs: Object.values(business.social).filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };
  return <JsonLd data={data} />;
}

function dayName(abbr: string) {
  const map: Record<string, string> = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };
  return map[abbr] ?? abbr;
}

export function ServiceSchema({
  name,
  description,
  url,
  areaName,
}: {
  name: string;
  description: string;
  url: string;
  areaName?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    provider: { "@id": ORG_ID, "@type": "LocalBusiness", name: business.name },
    areaServed: {
      "@type": areaName ? "City" : "State",
      name: areaName ?? "Ohio",
    },
  };
  return <JsonLd data={data} />;
}

export function FaqSchema({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${business.url}${it.path}`,
    })),
  };
  return <JsonLd data={data} />;
}

export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.url,
    publisher: { "@id": ORG_ID },
  };
  return <JsonLd data={data} />;
}

export { fullAddress };
