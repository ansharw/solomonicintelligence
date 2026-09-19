import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, Lede } from "@/components/ui";
import { capabilities } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Different problems. One underlying architecture.",
};

const routeIntelligence = {
  code: "SI / CAPABILITY / 00",
  name: "Route Intelligence",
  short: "Map legitimate pathways through institutional complexity.",
  href: "/route-intelligence",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        kicker="Capabilities"
        doc="SI / CAPABILITIES"
        title="Capabilities"
        lede={<Lede>Different problems. One underlying architecture.</Lede>}
      />

      <Section>
        <div className="grid divide-y divide-line-0 border-t border-line-0">
          <Link
            href={routeIntelligence.href}
            className="group grid gap-4 py-10 transition-colors hover:bg-bg-1 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-8 md:px-4"
          >
            <span className="font-mono-label text-[11px] uppercase text-ink-3">
              {routeIntelligence.code}
            </span>
            <div>
              <h2 className="font-serif-display text-2xl text-ink-0 md:text-3xl">
                {routeIntelligence.name}
              </h2>
              <p className="mt-2 max-w-xl text-ink-2 leading-relaxed">
                {routeIntelligence.short}
              </p>
            </div>
            <span className="font-mono-label text-xs uppercase text-brass-0/90 opacity-0 transition-opacity group-hover:opacity-100">
              Enter →
            </span>
          </Link>

          {capabilities.map((c) => (
            <Link
              key={c.slug}
              href={`/capabilities/${c.slug}`}
              className="group grid gap-4 py-10 transition-colors hover:bg-bg-1 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-8 md:px-4"
            >
              <span className="font-mono-label text-[11px] uppercase text-ink-3">
                {c.code}
              </span>
              <div>
                <h2 className="font-serif-display text-2xl text-ink-0 md:text-3xl">
                  {c.name}
                </h2>
                <p className="mt-2 max-w-xl text-ink-2 leading-relaxed">{c.short}</p>
              </div>
              <span className="font-mono-label text-xs uppercase text-brass-0/90 opacity-0 transition-opacity group-hover:opacity-100">
                Enter →
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
