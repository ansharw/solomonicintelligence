import type { Metadata } from "next";
import { PageHeader, Section, Kicker, BigStatement, Prose, CTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Route Intelligence",
  description:
    "The objective may be fixed. The route is not. Solomonic Intelligence maps legitimate pathways through institutional and regulatory complexity.",
};

const flow = [
  "Objective",
  "Requirements",
  "Constraints",
  "Institutions",
  "Dependencies",
  "Available Routes",
  "Risk",
  "Execution",
];

const objectiveExamples = [
  "establish a factory",
  "enter a jurisdiction",
  "import equipment",
  "secure approvals",
  "construct infrastructure",
  "hire specialized workers",
  "complete regulated transactions",
  "coordinate utilities",
  "expand operations",
  "satisfy multiple regulatory requirements",
];

const intersections = [
  "laws",
  "agencies",
  "permits",
  "dependencies",
  "documents",
  "approvals",
  "jurisdictions",
  "timelines",
  "commercial counterparties",
  "technical requirements",
];

const humanRoles = [
  "Lawyers.",
  "Regulatory specialists.",
  "Operations experts.",
  "Government-relations professionals.",
  "Industry specialists.",
];

const escalationResponses = [
  "document the request",
  "identify official fees",
  "request written legal basis",
  "identify alternative pathways",
  "escalate internally",
  "engage legal counsel",
  "use formal appeals",
  "engage appropriate oversight channels",
];

export default function RouteIntelligencePage() {
  return (
    <>
      <PageHeader
        kicker="Route Intelligence"
        doc="SI / CAPABILITY / 00"
        title="Route Intelligence"
      />

      <Section className="pt-0">
        <BigStatement className="max-w-4xl">
          The objective may be fixed. The route is not.
        </BigStatement>
        <div className="mt-10 max-w-2xl">
          <Prose>
            <p>
              Organizations frequently know what they need to accomplish. The
              difficulty lies in navigating everything standing between
              intention and completion.
            </p>
            <p>A company may need to:</p>
          </Prose>
          <ul className="mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-1 text-ink-1 sm:grid-cols-2">
            {objectiveExamples.map((o) => (
              <li key={o}>— {o}</li>
            ))}
          </ul>
          <div className="mt-6 max-w-2xl">
            <Prose>
              <p>Each objective may intersect with:</p>
            </Prose>
            <ul className="mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-1 text-ink-1 sm:grid-cols-2">
              {intersections.map((o) => (
                <li key={o}>— {o}</li>
              ))}
            </ul>
          </div>
          <p className="mt-8 max-w-2xl text-lg text-ink-1">
            Most organizations experience these as bureaucracy. Solomonic
            Intelligence approaches them as a system.
          </p>
        </div>
      </Section>

      <Section bg="bg-1">
        <Kicker>The routing sequence</Kicker>
        <div className="mt-10 flex flex-wrap items-stretch gap-0 overflow-x-auto scrollbar-thin">
          {flow.map((f, i) => (
            <div key={f} className="flex items-center">
              <div className="border border-line-1 px-5 py-4 font-mono-label text-xs uppercase text-ink-1">
                {f}
              </div>
              {i < flow.length - 1 && (
                <span className="mx-2 text-brass-0" aria-hidden="true">
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <BigStatement>
            We do not circumvent the rule. We make the rules navigable.
          </BigStatement>
          <p className="mt-6 text-ink-2">
            Respect legitimate authority. Eliminate unnecessary friction.
          </p>
        </div>
      </section>

      <Section id="institutional-graph">
        <Kicker>Institutional Graph</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              Show how agencies, requirements and dependencies connect. Every
              objective is represented as a node linked to the requirements,
              institutions, and rules that bear on it — the same graph
              structure described in the Platform and applied here to
              regulatory and institutional navigation specifically.
            </p>
          </Prose>
        </div>
      </Section>

      <Section bg="bg-1" id="route-discovery">
        <Kicker>Route Discovery</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              Possible legitimate routes are mapped and compared. Where more
              than one compliant path exists, the system surfaces the
              trade-offs between them — timeline, cost, risk, precedent —
              rather than presenting a single unexplained recommendation.
            </p>
          </Prose>
        </div>
      </Section>

      <Section id="dependency-management">
        <Kicker>Dependency Management</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              Some actions cannot occur until others do. Solomonic Intelligence
              reveals the critical path through a set of institutional
              requirements, distinguishing delays that are structural from
              delays that are avoidable.
            </p>
          </Prose>
        </div>
      </Section>

      <Section bg="bg-1" id="document-intelligence">
        <Kicker>Document Intelligence</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              Identify required documentation and relationships among
              submissions — which document depends on which prior approval,
              which submission triggers which downstream requirement.
            </p>
          </Prose>
        </div>
      </Section>

      <Section id="regulatory-change">
        <Kicker>Regulatory Change</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              Institutional routes change when regulations change. Route
              intelligence should be continuously updateable, reflecting new
              rules and requirements as authorities publish them rather than
              relying on a static map that quietly goes stale.
            </p>
          </Prose>
        </div>
      </Section>

      <Section bg="bg-1" id="human-expertise">
        <Kicker>Human Expertise</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              Software should not pretend institutional knowledge exists
              entirely inside databases.
            </p>
          </Prose>
          <ul className="mt-4 space-y-1 text-ink-1">
            {humanRoles.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-ink-2">
            Humans remain part of the architecture.
          </p>
        </div>
      </Section>

      <Section id="outcome-orchestration">
        <Kicker>Outcome Orchestration</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>The long-term possibility:</p>
            <p>A client states a legitimate desired outcome.</p>
            <p>The system structures the journey toward completion.</p>
          </Prose>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-2 font-mono-label text-xs uppercase text-ink-1">
          <span className="border border-line-1 px-4 py-3">Problem</span>
          <span className="text-brass-0">→</span>
          <span className="border border-line-1 px-4 py-3">Structure</span>
          <span className="text-brass-0">→</span>
          <span className="border border-line-1 px-4 py-3">Route</span>
          <span className="text-brass-0">→</span>
          <span className="border border-line-1 px-4 py-3">Execution</span>
        </div>
      </Section>

      <Section bg="bg-1">
        <Kicker>Anti-corruption doctrine</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              If an unofficial payment is requested, the system does not
              optimize for it. Possible legitimate responses include:
            </p>
          </Prose>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1 text-ink-1 sm:grid-cols-2">
            {escalationResponses.map((r) => (
              <li key={r} className="capitalize">— {r}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-ink-1">
            Sometimes no legitimate route exists. The software must be capable
            of representing that answer.
          </p>
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <BigStatement>
            The rule remains. The friction does not have to.
          </BigStatement>
          <div className="mt-10 flex justify-center gap-8">
            <CTA href="/government">Government Systems</CTA>
            <CTA href="/contact" variant="ghost">
              Contact
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
