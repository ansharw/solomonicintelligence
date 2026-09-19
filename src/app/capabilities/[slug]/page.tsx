import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { capabilities, getCapabilityBySlug } from "@/data/capabilities";
import { getResearchBySlug } from "@/data/research";
import { PageHeader, Section, Kicker, Lede, CTA } from "@/components/ui";
import {
  GraphDiagram,
  TreeDiagram,
  WorkflowDiagram,
  ScenarioDiagram,
  LedgerDiagram,
  OrchestrationDiagram,
} from "@/components/diagrams";

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) return {};
  return {
    title: capability.name,
    description: capability.short,
  };
}

const diagramBySlug = {
  graph: GraphDiagram,
  tree: TreeDiagram,
  workflow: WorkflowDiagram,
  scenario: ScenarioDiagram,
  ledger: LedgerDiagram,
  orchestration: OrchestrationDiagram,
};

function Block({ n, title, body }: { n: string; title: string; body: string[] }) {
  return (
    <div className="grid gap-4 border-t border-line-0 py-10 md:grid-cols-[10rem_1fr] md:gap-10">
      <div className="flex items-start gap-3">
        <span className="font-mono-label text-xs text-brass-0/80">{n}</span>
        <h2 className="font-serif-display text-xl text-ink-0 md:hidden">{title}</h2>
      </div>
      <div>
        <h2 className="hidden font-serif-display text-2xl text-ink-0 md:block">{title}</h2>
        <div className="mt-3 space-y-4 text-ink-2 leading-relaxed">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) notFound();

  const Diagram = diagramBySlug[capability.diagram];
  const related = capabilities.filter((c) => capability.relatedCapabilities.includes(c.slug));
  const relatedResearch = capability.relatedResearch
    .map((s) => getResearchBySlug(s))
    .filter(Boolean);

  return (
    <>
      <PageHeader
        kicker="Capability"
        doc={capability.code}
        title={capability.name}
        lede={<Lede>{capability.short}</Lede>}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Kicker>Concept</Kicker>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-1">
              {capability.concept.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <Diagram />
        </div>
      </Section>

      <Section bg="bg-1">
        <Block n="02" title="Problem" body={capability.problem} />
        <Block n="03" title="Architecture" body={capability.architecture} />
        <Block n="04" title="Operational Use" body={capability.operationalUse} />
        <Block n="05" title="Human Role" body={capability.humanRole} />
        <Block n="06" title="Governance" body={capability.governance} />
        <Block n="07" title="Example Environment" body={[capability.exampleEnvironment]} />
      </Section>

      {relatedResearch.length > 0 && (
        <Section>
          <Kicker>Related Research</Kicker>
          <div className="mt-8 grid gap-px overflow-hidden border border-line-1 bg-line-0 md:grid-cols-2">
            {relatedResearch.map((r) => (
              <Link
                key={r!.slug}
                href={`/research/${r!.slug}`}
                className="flex flex-col gap-2 bg-bg-0 p-6 transition-colors hover:bg-bg-1"
              >
                <span className="font-mono-label text-[10px] uppercase text-ink-3">{r!.code}</span>
                <span className="font-serif-display text-lg text-ink-0">{r!.title}</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section bg="bg-1">
          <Kicker>Related Capabilities</Kicker>
          <div className="mt-8 grid gap-px overflow-hidden border border-line-1 bg-line-0 md:grid-cols-2">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/capabilities/${c.slug}`}
                className="flex flex-col gap-2 bg-bg-0 p-6 transition-colors hover:bg-bg-2"
              >
                <span className="font-mono-label text-[10px] uppercase text-ink-3">{c.code}</span>
                <span className="font-serif-display text-lg text-ink-0">{c.name}</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="font-serif-display text-2xl text-ink-0 md:text-3xl">
            Discuss this capability against your environment.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA href="/contact">Contact Solomonic Intelligence</CTA>
          </div>
        </div>
      </section>
    </>
  );
}
