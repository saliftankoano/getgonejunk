# Get Gone Junk Removal

Marketing website for **Get Gone Junk Removal** — a junk removal business in Columbus, Ohio. Built for local SEO and phone-call conversions.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Phosphor Icons · Resend (lead email).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Before you go live — replace the placeholders

All business data lives in **one file**: [`src/config/business.ts`](src/config/business.ts). Search for `PLACEHOLDER` and update:

- [ ] **Phone** (`phone` + `phoneRaw`) — most important; drives every call/text button.
- [ ] **Email** (`email`).
- [ ] **Address / ZIP** (`address`) and **geo** coordinates — used by the LocalBusiness schema & Google.
- [ ] **Hours** (`hoursLabel`, `openingHours`).
- [ ] **Founding year**, legal name.
- [ ] **Social URLs** (`social`) — add your Google Business Profile, Facebook, Instagram (used in schema `sameAs`).
- [ ] Swap the real **review count / rating** in `src/components/schema.tsx` once you have Google reviews.
- [ ] Replace placeholder **testimonials** in `src/config/testimonials.ts`.
- [ ] Replace `public/logo.png` / add real **photos** (truck, team, before/after).

Other content you can edit freely:

- **Services** → `src/config/services.ts` (each `featured` service gets a `/services/[slug]` page).
- **Service-area suburbs** → `src/config/locations.ts` (each generates `/junk-removal/[slug]`).
- **FAQs** → `src/config/faqs.ts` (rendered + emitted as FAQ schema).

## Receiving leads (Resend)

The contact form posts to `src/app/api/lead/route.ts`. Without an API key it logs leads to the server console so the form still works. To receive real emails:

1. Create a [Resend](https://resend.com) account and **verify the `getgonejunk.co` domain**.
2. Copy `.env.example` → `.env.local` and set `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`.

## SEO notes

- Per-page metadata, canonicals, Open Graph & Twitter cards.
- JSON-LD: `LocalBusiness` (site-wide), `Service`, `FAQPage`, `BreadcrumbList`, `WebSite`.
- `sitemap.xml` and `robots.txt` are generated and include every suburb + service page.
- **The single biggest local-SEO lever lives outside this repo:** set up and verify a **Google Business Profile** for Get Gone Junk Removal, keep the name/address/phone identical to `business.ts`, and gather reviews.
