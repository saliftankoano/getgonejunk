// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all business / NAP data.
// Replace every value marked `PLACEHOLDER` before going live.
// Used by both the UI and the JSON-LD structured data (LocalBusiness schema).
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: "Get Gone Junk Removal",
  legalName: "Get Gone Junk Removal LLC", // PLACEHOLDER
  tagline: "We haul it all, so you don't have to.",
  shortDescription:
    "Fast, friendly, full-service junk removal in Columbus, Ohio. We do the heavy lifting, recycle and donate what we can, and leave your space clean.",

  // Contact — PLACEHOLDERS, swap in the real numbers/email.
  phone: "(614) 555-0100", // PLACEHOLDER — display format
  phoneRaw: "+16145550100", // PLACEHOLDER — tel: / sms: format
  email: "hello@getgonejunk.co", // PLACEHOLDER

  // Location — PLACEHOLDER. A real street address helps local SEO & Google Business Profile.
  address: {
    street: "123 Example St", // PLACEHOLDER
    city: "Columbus",
    region: "OH",
    regionName: "Ohio",
    postal: "43215", // PLACEHOLDER
    country: "US",
  },

  // Geo center used for LocalBusiness schema (currently downtown Columbus). PLACEHOLDER.
  geo: { lat: 39.9612, lng: -82.9988 },

  // Hours — shown in UI + opening hours schema. PLACEHOLDER.
  hoursLabel: "Open 7 days a week · 7am–8pm",
  openingHours: [
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], open: "07:00", close: "20:00" },
  ],

  priceRange: "$$",
  foundingYear: "2025", // PLACEHOLDER

  // Canonical site URL (used for metadataBase, sitemap, canonical tags, schema).
  url: "https://getgonejunk.co",
  domain: "getgonejunk.co",

  // Brand pillars from the logo.
  pillars: [
    {
      icon: "shield",
      title: "Trustworthy",
      blurb: "Licensed, insured, background-checked crews. Upfront pricing — no surprises, no hidden fees.",
    },
    {
      icon: "recycle",
      title: "Responsible",
      blurb: "We donate and recycle whatever we can so less of your junk ends up in a Columbus landfill.",
    },
    {
      icon: "reusable",
      title: "Reusable",
      blurb: "Usable furniture and appliances get a second life through local charities and reuse partners.",
    },
  ],

  // Social — PLACEHOLDERS. Used in schema `sameAs` (helps Google verify the business).
  social: {
    facebook: "", // e.g. https://facebook.com/getgonejunk — PLACEHOLDER
    instagram: "", // PLACEHOLDER
    google: "", // Google Business Profile URL — PLACEHOLDER
  },

  // Proof points (swap with real numbers as you grow).
  stats: [
    { value: 1200, suffix: "+", label: "Jobs hauled" },
    { value: 4.9, suffix: "★", label: "Average rating", decimals: 1 },
    { value: 60, suffix: "%", label: "Diverted from landfill" },
    { value: 7, suffix: "days", label: "A week, including weekends", prefix: "" },
  ],
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postal}`;

export const cityState = `${business.address.city}, ${business.address.region}`;
