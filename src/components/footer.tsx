import Link from "next/link";
import Image from "next/image";
import { business, fullAddress } from "@/config/business";
import { featuredServices } from "@/config/services";
import { suburbs } from "@/config/locations";
import { Icon } from "@/components/icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-950 text-white/70">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Ready to <span className="text-brand-400">get gone?</span>
            </h2>
            <p className="mt-1 text-white/60">
              Same-day &amp; next-day pickups across {business.address.city} and Central Ohio.
            </p>
          </div>
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-lg font-bold text-ink-950 transition-all hover:bg-brand-bright hover:-translate-y-0.5"
          >
            <Icon name="phone" weight="fill" className="size-5" /> Call {business.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt={business.name} width={44} height={44} className="size-11 rounded-lg object-cover" />
            <span className="font-display text-2xl text-white">
              Get <span className="text-brand-400">Gone</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{business.tagline}</p>
          <p className="mt-4 flex items-start gap-2 text-sm">
            <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-brand-400" />
            <span>{fullAddress}</span>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <Icon name="clock" className="size-4 text-brand-400" />
            {business.hoursLabel}
          </p>
        </div>

        <nav aria-label="Services">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {featuredServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-brand-400">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/junk-removal" className="transition-colors hover:text-brand-400">
                All Junk Removal
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Service areas" className="lg:col-span-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <li>
              <Link href="/junk-removal/columbus" className="transition-colors hover:text-brand-400">
                Columbus
              </Link>
            </li>
            {suburbs.map((l) => (
              <li key={l.slug}>
                <Link href={`/junk-removal/${l.slug}`} className="transition-colors hover:text-brand-400">
                  {l.city}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 hover:text-brand-400">
                <Icon name="phone" weight="fill" className="size-4 text-brand-400" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-brand-400 break-all">
                <Icon name="chat" className="size-4 text-brand-400" />
                {business.email}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="mt-2 inline-flex rounded-full border border-white/20 px-4 py-2 font-semibold text-white hover:border-brand-400"
              >
                Request a pickup
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <p>Licensed &amp; insured · Junk removal in {business.address.city}, {business.address.region}</p>
        </div>
      </div>
    </footer>
  );
}
