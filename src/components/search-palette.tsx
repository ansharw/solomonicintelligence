"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { searchIndex } from "@/data/search-index";

export function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function close() {
    setOpen(false);
    setQuery("");
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 8);
    const q = query.toLowerCase();
    return searchIndex
      .filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.section.toLowerCase().includes(q)
      )
      .slice(0, 12);
  }, [query]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-3 border border-line-1 px-3 py-1.5 font-mono-label text-[11px] uppercase text-ink-3 transition-colors hover:border-line-2 hover:text-ink-1"
        aria-label="Search the intelligence layer"
      >
        Search
        <span className="text-ink-3/70">⌘K</span>
      </button>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-ink-1"
        aria-label="Search"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[90] flex items-start justify-center bg-bg-0/80 backdrop-blur-sm px-4 pt-24 md:pt-36">
          <div
            className="fixed inset-0"
            onClick={close}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-xl border border-line-1 bg-bg-2 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-line-0 px-4 py-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-3 shrink-0">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the intelligence layer"
                className="w-full bg-transparent py-1 text-sm text-ink-0 placeholder:text-ink-3 focus:outline-none"
              />
              <span className="font-mono-label text-[10px] text-ink-3">ESC</span>
            </div>
            <ul className="max-h-96 overflow-y-auto scrollbar-thin py-2">
              {results.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-ink-3">No matches inside the current system.</li>
              )}
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={close}
                    className="flex flex-col gap-0.5 px-4 py-2.5 hover:bg-bg-3"
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-sm text-ink-0">{r.title}</span>
                      <span className="font-mono-label text-[10px] uppercase text-ink-3">{r.section}</span>
                    </span>
                    <span className="text-xs text-ink-2 line-clamp-1">{r.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
