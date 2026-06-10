"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { business } from "@/config/business";
import { Icon } from "@/components/icon";
import { List, X } from "@phosphor-icons/react/dist/ssr";

const nav = [
  { label: "Junk Removal", href: "/junk-removal" },
  { label: "Services", href: "/junk-removal#services" },
  { label: "Service Area", href: "/junk-removal#areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile drawer whenever the route changes.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-ink-950/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-ink-950/85"
          : "bg-ink-950"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${business.name} home`}>
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-lg object-cover"
            priority
          />
          <span className="font-display text-xl leading-none text-white sm:text-2xl">
            Get <span className="text-brand-400">Gone</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-brand-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-ink-950 transition-all hover:bg-brand-bright hover:-translate-y-0.5 sm:inline-flex"
          >
            <Icon name="phone" weight="fill" className="size-4" />
            {business.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-lg text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-900 lg:hidden ${
          open ? "max-h-[480px]" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/5 py-3 text-base font-semibold text-white/90"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2 pb-2">
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-bold text-ink-950"
            >
              <Icon name="phone" weight="fill" className="size-4" /> Call {business.phone}
            </a>
            <a
              href={`sms:${business.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-5 py-3 font-bold text-white"
            >
              <Icon name="chat" weight="fill" className="size-4 text-brand-400" /> Text a photo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
