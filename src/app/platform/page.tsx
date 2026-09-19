import type { Metadata } from "next";
import { PageHeader, Section, Kicker, BigStatement, Lede, Prose, CTA, NumberedList } from "@/components/ui";
import { GraphDiagram } from "@/components/diagrams";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Solomonic Platform is an integrated intelligence architecture connecting data, entities, relationships, rules, workflows, decisions, actions and audit histories.",
};

const sections = [
  {
    n: "01",
    id: "ingestion",
    title: "Ingestion",
    body: [
      "Systems can connect structured and unstructured information from databases, documents, internal applications, operational systems, external sources, human input, historical records, regulations, and transactional systems.",
      "The objective is not indiscriminate collection. It is governed integration — every ingested fact carries a source, a time, and a permission boundary.",
    ],
  },
  {
    n: "03",
    id: "reasoning",
    title: "Reasoning",
    body: [
      "Once relationships become explicit, systems can support search, analysis, pattern detection, dependency analysis, risk analysis, scenario construction, AI reasoning, and decision support.",
      "Reasoning operates on the graph, not on isolated documents — which is what allows a question to be answered across sources rather than within a single one.",
    ],
  },
  {
    n: "04",
    id: "decision",
    title: "Decision",
    body: [
      "Knowing what exists does not automatically reveal what should happen next. Decision environments can structure objectives, constraints, uncertainty, available options, trade-offs, risks, required approvals, and possible consequences.",
    ],
  },
  {
    n: "05",
    id: "routing",
    title: "Routing",
    body: [
      "Once an objective is defined, the system can model requirements, institutions, dependencies, constraints, routes, exceptions, timelines, and risks — the architecture explored in full on Route Intelligence.",
    ],
  },
  {
    n: "06",
    id: "execution",
    title: "Execution",
    body: [
      "Intelligence can enter controlled operations through workflow creation, approval routing, document preparation, task coordination, recommendations, alerts, escalations, and system actions.",
    ],
  },
  {
    n: "07",
    id: "audit",
    title: "Audit",
    body: [
      "Every consequential system should preserve who knew what, who decided what, what information informed the decision, which rule applied, what action occurred, and what changed afterward.",
    ],
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        kicker="Platform"
        doc="SI / PLATFORM / 00"
        title="The Solomonic Platform"
        lede={
          <Lede>
            Infrastructure for understanding, deciding and acting inside complex
            systems.
          </Lede>
        }
      />

      <Section>
        <Prose>
          <p>
            Solomonic Intelligence is conceived not as a single dashboard,
            chatbot or workflow tool, but as an integrated intelligence
            architecture.
          </p>
          <p>The platform connects:</p>
          <ul className="list-none space-y-1 pl-0 text-ink-1">
            <li>— data</li>
            <li>— entities</li>
            <li>— relationships</li>
            <li>— rules</li>
            <li>— institutional structures</li>
            <li>— workflows</li>
            <li>— decisions</li>
            <li>— actions</li>
            <li>— audit histories</li>
          </ul>
          <p>into systems capable of supporting consequential operations.</p>
        </Prose>
      </Section>

      <Section bg="bg-1" id="intelligence-graph">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Kicker>02 / Intelligence Graph</Kicker>
            <BigStatement className="mt-6">Reality has structure.</BigStatement>
            <div className="mt-8 space-y-5 text-ink-2 leading-relaxed">
              <p>
                A database stores records. An intelligence system must
                understand relationships.
              </p>
              <p className="font-mono-label text-xs uppercase text-ink-3 leading-loose">
                Company → owns → Facility
                <br />
                Facility → requires → Permit
                <br />
                Permit → governed by → Authority
                <br />
                Authority → constrained by → Regulation
                <br />
                Supplier → provides → Critical Component
                <br />
                Component → affects → Production
              </p>
              <p>
                Solomonic Intelligence creates machine-readable representations
                of operational and institutional reality.
              </p>
            </div>
          </div>
          <GraphDiagram />
        </div>
      </Section>

      <Section>
        <Kicker>Architecture</Kicker>
        <div className="mt-10">
          <NumberedList
            items={sections.map((s) => ({ title: `${s.n} / ${s.title}`, body: s.body.join(" ") }))}
          />
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8 md:py-32">
          <BigStatement>
            Intelligence without accountability is incomplete.
          </BigStatement>
          <div className="mt-10 flex justify-center gap-8">
            <CTA href="/security">Security & Sovereignty</CTA>
            <CTA href="/capabilities" variant="ghost">
              Explore Capabilities
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
