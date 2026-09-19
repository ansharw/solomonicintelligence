"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/nav";
import { Mark } from "@/components/mark";
import { SearchPalette } from "@/components/search-palette";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-line-0 bg-bg-0/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-ink-0">
          <Mark className="h-7 w-7 text-brass-0" />
          <span className="font-mono-label text-[13px] uppercase leading-none">
            Solomonic
            <br />
            Intelligence
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenIndex(i)}
            >
              <Link
                href={item.href}
                className="block px-3 py-2 font-mono-label text-[11px] uppercase text-ink-2 transition-colors hover:text-ink-0"
              >
                {item.label}
              </Link>
              {item.children && openIndex === i && (
                <div className="absolute left-0 top-full w-72 border border-line-1 bg-bg-2 pt-1 shadow-2xl">
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 hover:bg-bg-3"
                        >
                          <span className="block text-sm text-ink-0">{child.label}</span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs text-ink-3 leading-snug">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <SearchPalette />
          <Link
            href="/contact"
            className="hidden border border-brass-1/60 px-4 py-2 font-mono-label text-[11px] uppercase text-ink-0 transition-colors hover:border-brass-0 hover:bg-brass-2/10 lg:inline-block"
          >
            Contact
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
