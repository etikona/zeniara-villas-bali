"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#concept", label: "Concept" },
  { href: "#gallery", label: "Gallery" },
  { href: "#invest", label: "Invest" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-zen-cream/90 backdrop-blur-md border-b border-zen-clay/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10 uppercase">
        <Link
          href="#top"
          className={`font-display text-lg tracking-widest ${
            scrolled ? "text-zen-ink" : "text-zen-cream"
          }`}
        >
          Zeniara Villas Bali
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-[13px] uppercase tracking-widest transition-opacity hover:opacity-70 ${
                scrolled ? "text-zen-ink" : "text-zen-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-none bg-zen-terracotta px-6 py-5 text-[13px] uppercase tracking-widest text-zen-cream hover:bg-zen-terracotta/90"
          >
            <a href="#whitepaper">Download Whitepaper</a>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-zen-ink" : "text-zen-cream"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zen-clay/40 bg-zen-cream px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm uppercase tracking-widest text-zen-ink"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 w-full rounded-none bg-zen-terracotta py-5 text-[13px] uppercase tracking-widest text-zen-cream hover:bg-zen-terracotta/90"
            >
              <a href="#whitepaper">Download Whitepaper</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
