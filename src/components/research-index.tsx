"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { research, type ResearchCategory, type ResearchType } from "@/data/research";

const categories = Array.from(new Set(research.map((r) => r.category))) as ResearchCategory[];
const types = Array.from(new Set(research.map((r) => r.type))) as ResearchType[];

export function ResearchIndex() {
  const params = useSearchParams();
  const initialType = params.get("type") as ResearchType | null;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ResearchCategory | "All">("All");
  const [type, setType] = useState<ResearchType | "All">(initialType ?? "All");

  const filtered = useMemo(() => {
    return research.filter((r) => {
      if (category !== "All" && r.category !== category) return false;
      if (type !== "All" && r.type !== type) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        return (
          r.title.toLowerCase().includes(q) ||
          r.subtitle.toLowerCase().includes(q) ||
          r.abstract.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [query, category, type]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line-0 pb-8 md:flex-row md:items-end md:justify-between">
        <div className="flex-1">
          <label htmlFor="research-search" className="sr-only">
            Search research
          </label>
          <input
            id="research-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the research library"
            className="w-full max-w-md border-b border-line-2 bg-transparent py-2 text-lg text-ink-0 placeholder:text-ink-3 focus:outline-none focus:border-brass-0"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <select
            aria-label="Filter by category"
            value={category}
            onChange={(e) => setCategory(e.target.value as ResearchCategory | "All")}
            className="border border-line-1 bg-bg-1 px-3 py-2 font-mono-label text-[11px] uppercase text-ink-1"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            aria-label="Filter by publication type"
            value={type}
            onChange={(e) => setType(e.target.value as ResearchType | "All")}
            className="border border-line-1 bg-bg-1 px-3 py-2 font-mono-label text-[11px] uppercase text-ink-1"
          >
            <option value="All">All Types</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 font-mono-label text-[11px] uppercase text-ink-3">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
      </p>

      <ul className="mt-4 divide-y divide-line-0">
        {filtered.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/research/${r.slug}`}
              className="grid gap-3 py-8 transition-colors hover:bg-bg-1 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-8 md:px-4"
            >
              <span className="font-mono-label text-[10px] uppercase text-ink-3">{r.code}</span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h2 className="font-serif-display text-xl text-ink-0 md:text-2xl">{r.title}</h2>
                  <span className="font-mono-label text-[10px] uppercase text-brass-0/80">
                    {r.status}
                  </span>
                </div>
                {r.subtitle && <p className="mt-1 text-ink-2">{r.subtitle}</p>}
                <p className="mt-2 font-mono-label text-[10px] uppercase text-ink-3">
                  {r.category} · {r.type} · {r.readingTime}
                </p>
              </div>
              <span className="font-mono-label text-xs uppercase text-brass-0/90 opacity-0 transition-opacity md:group-hover:opacity-100" />
            </Link>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="py-16 text-center text-ink-3">No entries match the current filters.</li>
        )}
      </ul>
    </div>
  );
}
