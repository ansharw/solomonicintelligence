import Link from "next/link";
import { NodeField } from "@/components/node-field";
import { SolomonicLoop } from "@/components/solomonic-loop";
import { Section, Kicker, BigStatement, Lede, CTA } from "@/components/ui";
import { research } from "@/data/research";

const domains = [
  {
    name: "Institutional Intelligence",
    body: "Understand the organizations, rules, authorities, dependencies and relationships shaping an environment.",
    href: "/capabilities/institutional-intelligence",
  },
  {
    name: "Decision Intelligence",
    body: "Turn complex information into structured options, trade-offs and decisions.",
    href: "/capabilities/decision-intelligence",
  },
  {
    name: "Route Intelligence",
    body: "Identify legitimate paths through institutional and regulatory complexity.",
    href: "/route-intelligence",
  },
  {
    name: "Operational Intelligence",
    body: "Connect understanding to governed execution.",
    href: "/capabilities/operational-intelligence",
  },
];

export default function Home() {
  const latestResearch = research.slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden border-b border-line-0">
        <div className="absolute inset-0">
          <NodeField className="h-full w-full opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-0 via-bg-0/40 to-bg-0/10" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 lg:px-8">
          <Kicker>Solomonic Intelligence</Kicker>
          <h1 className="mt-6 font-serif-display text-5xl leading-[1.02] tracking-tight text-ink-0 md:text-7xl lg:text-8xl">
            Intelligence for
            <br />
            complex reality.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
            Solomonic Intelligence builds systems that help institutions understand
            complex environments, coordinate decisions, navigate institutional
            structures, and turn intelligence into action.
          </p>
          <p className="mt-4 font-serif-display italic text-xl text-ink-1 md:text-2xl">
            Data is abundant. Understanding is not.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <CTA href="/platform">Explore Solomonic</CTA>
            <CTA href="/company#thesis" variant="ghost">
              Our Thesis
            </CTA>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Kicker>The problem</Kicker>
            <BigStatement className="mt-6">
              Complexity is not the problem. Unstructured complexity is.
            </BigStatement>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <Lede>
              Modern institutions rarely suffer from a complete absence of
              information. They suffer from fragmentation.
            </Lede>
            <div className="space-y-1 text-ink-2">
              <p>Data lives across systems.</p>
              <p>Authority lives across institutions.</p>
              <p>Knowledge lives across people.</p>
              <p>Rules live across jurisdictions.</p>
              <p>Consequences propagate across all of them.</p>
            </div>
            <p className="text-ink-1">
              Solomonic Intelligence builds infrastructure between complexity and
              action.
            </p>
            <CTA href="/platform">Explore the Platform</CTA>
          </div>
        </div>
      </Section>

      <Section bg="bg-1">
        <Kicker>The Solomonic Loop</Kicker>
        <BigStatement className="mt-6 max-w-3xl">
          Every consequential organization performs some version of this cycle.
        </BigStatement>
        <p className="mt-6 max-w-2xl text-ink-2 leading-relaxed">
          Most perform it through fragmented software, meetings, spreadsheets,
          institutional memory, email, consultants, and human improvisation. We
          make the system explicit.
        </p>
        <div className="mt-12">
          <SolomonicLoop />
        </div>
      </Section>

      <Section>
        <Kicker>Four primary intelligence domains</Kicker>
        <div className="mt-10 grid gap-px overflow-hidden border border-line-1 bg-line-0 md:grid-cols-2">
          {domains.map((d) => (
            <Link
              key={d.name}
              href={d.href}
              className="group flex flex-col justify-between gap-10 bg-bg-0 p-8 transition-colors hover:bg-bg-1 md:p-12"
            >
              <h3 className="font-serif-display text-2xl text-ink-0 md:text-3xl">
                {d.name}
              </h3>
              <div>
                <p className="text-ink-2 leading-relaxed">{d.body}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-mono-label text-xs uppercase text-brass-0/90">
                  Read more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <CTA href="/capabilities">Explore Capabilities</CTA>
        </div>
      </Section>

      <Section bg="bg-1">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Kicker>Enterprise</Kicker>
            <BigStatement className="mt-6">The enterprise as a living system.</BigStatement>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <Lede>
              Organizations accumulate complexity faster than any individual can
              understand it.
            </Lede>
            <p className="text-ink-2 leading-relaxed">
              Solomonic systems are designed to connect data, operations,
              relationships, constraints and decisions into a coherent
              operational picture.
            </p>
            <CTA href="/enterprise">Enterprise</CTA>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Kicker>Government</Kicker>
            <BigStatement className="mt-6">
              Make the state legible to itself.
            </BigStatement>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <Lede>
              Public institutions contain enormous amounts of knowledge,
              authority and operational capability.
            </Lede>
            <p className="text-ink-2 leading-relaxed">
              Yet those capabilities are frequently fragmented across systems,
              agencies, jurisdictions and generations of infrastructure.
              Solomonic Intelligence develops architectures for making
              institutional complexity navigable without dissolving legitimate
              sovereignty.
            </p>
            <CTA href="/government">Government Systems</CTA>
          </div>
        </div>
      </Section>

      <Section bg="bg-1">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker>Research</Kicker>
            <BigStatement className="mt-6 max-w-2xl">
              Intelligence requires a theory of the world.
            </BigStatement>
          </div>
          <CTA href="/research" variant="ghost">
            Research Library
          </CTA>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-line-1 bg-line-0 md:grid-cols-3">
          {latestResearch.map((r) => (
            <Link
              key={r.slug}
              href={`/research/${r.slug}`}
              className="flex flex-col gap-4 bg-bg-1 p-6 transition-colors hover:bg-bg-2 md:p-8"
            >
              <span className="font-mono-label text-[10px] uppercase text-ink-3">
                {r.code} · {r.status}
              </span>
              <h3 className="font-serif-display text-xl text-ink-0">{r.title}</h3>
              <p className="text-sm text-ink-2 leading-relaxed">{r.subtitle || r.abstract}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="thesis">
        <Kicker>Thesis</Kicker>
        <div className="mt-10 max-w-3xl space-y-1 font-serif-display text-2xl leading-snug text-ink-1 md:text-3xl">
          <p>Civilization creates institutions.</p>
          <p>Institutions create complexity.</p>
          <p>Complexity creates information.</p>
          <p>Information creates decisions.</p>
          <p>Decisions create consequences.</p>
        </div>
        <p className="mt-10 max-w-2xl text-ink-2 leading-relaxed">
          The institutions carrying the greatest responsibilities increasingly
          operate inside environments too complex for any individual to
          comprehend in full.
        </p>
        <div className="mt-6 max-w-2xl space-y-1 text-ink-1">
          <p>The answer is not merely more information.</p>
          <p>It is better structure.</p>
          <p>Better intelligence.</p>
          <p>Better judgment.</p>
          <p>Better coordination.</p>
          <p>Better execution.</p>
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center lg:px-8 md:py-36">
          <BigStatement className="mx-auto max-w-3xl">
            Bring us the complexity.
          </BigStatement>
          <div className="mt-10 flex justify-center">
            <CTA href="/contact">Contact Solomonic Intelligence</CTA>
          </div>
        </div>
      </section>
    </>
  );
}
