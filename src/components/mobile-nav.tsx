"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/data/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 text-ink-0"
      >
        <span
          className={`h-px w-5 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 top-[65px] z-40 overflow-y-auto bg-bg-0 px-6 pb-10">
          <ul className="divide-y divide-line-0">
            {primaryNav.map((item) => (
              <li key={item.label} className="py-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 font-mono-label text-sm uppercase text-ink-0"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setExpanded((prev) => (prev === item.label ? null : item.label))
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                      className="p-3 text-ink-3"
                    >
                      {expanded === item.label ? "–" : "+"}
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <ul className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ink-2"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-block border border-brass-1/60 px-4 py-2 font-mono-label text-xs uppercase text-ink-0"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
