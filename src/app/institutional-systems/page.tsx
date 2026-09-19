import type { Metadata } from "next";
import { PageHeader, Section, Kicker, BigStatement, Prose, NumberedList } from "@/components/ui";
import { GraphDiagram } from "@/components/diagrams";

export const metadata: Metadata = {
  title: "Institutional Systems",
  description:
    "Institutions are systems. They should be legible. Infrastructure for representing and operating inside institutional relationships.",
};

const sections = [
  {
    title: "Institutional Graph",
    body: "Models entities and relationships — companies, agencies, people, assets, contracts — as an explicit, queryable structure.",
  },
  {
    title: "Workflow Orchestration",
    body: "Coordinates processes across departments and institutions, so a single objective can move correctly through several distinct systems of authority.",
  },
  {
    title: "Authority Mapping",
    body: "Represents who can authorize what, at what level, and under which conditions — making delegated authority visible rather than assumed.",
  },
  {
    title: "Policy Structure",
    body: "Maps rules to the processes they affect, so a change in policy can be traced directly to the workflows and decisions it touches.",
  },
  {
    title: "Dependency Intelligence",
    body: "Identifies upstream and downstream dependencies between institutions, processes, and decisions.",
  },
  {
    title: "Escalation Architecture",
    body: "Represents legitimate escalation paths — who a matter goes to next, and under what conditions, when a process cannot proceed as normal.",
  },
  {
    title: "Institutional Memory",
    body: "Preserves knowledge that would otherwise disappear when people leave, keeping operational understanding inside the system rather than inside any one person.",
  },
];

export default function InstitutionalSystemsPage() {
  return (
    <>
      <PageHeader
        kicker="Institutional Systems"
        doc="SI / SYSTEMS / 00"
        title={
          <>
            Institutions are systems.
            <br />
            They should be legible.
          </>
        }
      />

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Prose>
            <p>
              The world does not operate through isolated organizations.
              Companies interact with suppliers, banks, regulators,
              governments, employees, contractors, customers, infrastructure,
              courts, logistics providers, and professional advisers.
            </p>
            <p>
              Those relationships form institutional systems. Solomonic
              Intelligence develops infrastructure for representing and
              operating inside them.
            </p>
          </Prose>
          <GraphDiagram />
        </div>
      </Section>

      <Section bg="bg-1">
        <Kicker>Architecture</Kicker>
        <div className="mt-10" id="institutional-graph">
          <NumberedList items={sections} />
        </div>
        <span id="workflow-orchestration" className="sr-only" />
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <BigStatement>
            An organization should not forget how it works.
          </BigStatement>
        </div>
      </section>
    </>
  );
}
