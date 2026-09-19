import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { research, getResearchBySlug } from "@/data/research";
import { Section, Kicker, CTA } from "@/components/ui";

export function generateStaticParams() {
  return research.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getResearchBySlug(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.abstract,
  };
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getResearchBySlug(slug);
  if (!entry) notFound();

  const related = (entry.related ?? [])
    .map((s) => getResearchBySlug(s))
    .filter(Boolean);

  return (
    <>
      <div className="mx-auto max-w-4xl px-6 pt-36 pb-12 md:pt-44 lg:px-8">
        <Link
          href="/research"
          className="font-mono-label text-[11px] uppercase text-ink-3 hover:text-ink-1"
        >
          ← Research Library
        </Link>
        <div className="mt-8 flex items-center justify-between">
          <Kicker>{entry.category}</Kicker>
          <span className="font-mono-label text-[10px] uppercase text-ink-3">{entry.code}</span>
        </div>
        <h1 className="mt-6 font-serif-display text-3xl leading-tight text-ink-0 md:text-5xl">
          {entry.title}
        </h1>
        {entry.subtitle && (
          <p className="mt-3 font-serif-display italic text-xl text-ink-2 md:text-2xl">
            {entry.subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-label text-[11px] uppercase text-ink-3">
          <span>Solomonic Intelligence Research</span>
          <span>{entry.type}</span>
          <span className="text-brass-0/90">{entry.status}</span>
          <span>{entry.readingTime} read</span>
        </div>
      </div>

      <Section className="pt-0">
        <div className="grid gap-16 lg:grid-cols-[16rem_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="font-mono-label text-[10px] uppercase text-ink-3">Contents</p>
              <ol className="mt-4 space-y-3">
                <li>
                  <a href="#abstract" className="text-sm text-ink-2 hover:text-ink-0">
                    Abstract
                  </a>
                </li>
                {entry.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#section-${i}`}
                      className="text-sm text-ink-2 hover:text-ink-0"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="max-w-2xl">
            <div id="abstract" className="border-l-2 border-brass-1/60 pl-6">
              <p className="font-mono-label text-[10px] uppercase text-ink-3">Abstract</p>
              <p className="mt-3 text-lg leading-relaxed text-ink-1">{entry.abstract}</p>
            </div>

            <div className="mt-16 space-y-14">
              {entry.sections.map((s, i) => (
                <div key={s.heading} id={`section-${i}`}>
                  <h2 className="font-serif-display text-2xl text-ink-0">{s.heading}</h2>
                  <div className="mt-4 space-y-4 text-ink-2 leading-relaxed">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-line-0 pt-8">
              <p className="font-mono-label text-[10px] uppercase text-ink-3">Status note</p>
              <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                This entry is published as a {entry.status.toLowerCase()}. It reflects current
                thinking inside Solomonic Intelligence and is expected to change as it is
                tested against real institutional environments.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {related.length > 0 && (
        <Section bg="bg-1">
          <Kicker>Related Research</Kicker>
          <div className="mt-8 grid gap-px overflow-hidden border border-line-1 bg-line-0 md:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r!.slug}
                href={`/research/${r!.slug}`}
                className="flex flex-col gap-2 bg-bg-0 p-6 transition-colors hover:bg-bg-2"
              >
                <span className="font-mono-label text-[10px] uppercase text-ink-3">{r!.code}</span>
                <span className="font-serif-display text-lg text-ink-0">{r!.title}</span>
                <span className="text-sm text-ink-2">{r!.subtitle}</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="font-serif-display text-2xl text-ink-0 md:text-3xl">
            Engage with our research directly.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA href="/contact">Contact Solomonic Intelligence</CTA>
          </div>
        </div>
      </section>
    </>
  );
}
