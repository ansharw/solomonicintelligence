import type { Metadata } from "next";
import { PageHeader, Section, Kicker, BigStatement, Prose, CTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "The enterprise as a living system. Infrastructure for connecting data, operations, relationships, constraints and decisions into a coherent operational picture.",
};

const subsections = [
  {
    id: "commercial-intelligence",
    title: "Commercial Intelligence",
    items: ["customers", "revenue", "opportunities", "contracts", "relationships"],
  },
  {
    id: "operations",
    title: "Operations",
    items: ["facilities", "projects", "production", "workflows", "exceptions"],
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    items: ["suppliers", "routes", "inventory", "dependencies", "geopolitical exposure", "critical components"],
  },
  {
    id: "finance",
    title: "Finance",
    items: ["transactions", "obligations", "cash flows", "commercial relationships"],
  },
  {
    id: "workforce",
    title: "Workforce",
    items: ["roles", "permissions", "expertise", "responsibility"],
  },
  {
    id: "compliance",
    title: "Compliance",
    items: ["rules", "controls", "approval history", "regulatory dependencies"],
  },
  {
    id: "strategy",
    title: "Strategy",
    items: ["objectives", "scenarios", "constraints", "capital allocation", "execution"],
  },
];

export default function EnterprisePage() {
  return (
    <>
      <PageHeader
        kicker="Enterprise"
        doc="SI / ENTERPRISE / 00"
        title={
          <>
            The enterprise
            <br />
            as a living system.
          </>
        }
      />

      <Section className="pt-0">
        <Prose>
          <p>
            Large organizations accumulate complexity continuously. Departments
            specialize. Software fragments. Knowledge becomes tribal.
            Dependencies become invisible. Decisions become difficult to
            reconstruct.
          </p>
          <p>
            Solomonic Intelligence develops systems for creating a coherent
            operational picture.
          </p>
        </Prose>
      </Section>

      <Section bg="bg-1">
        <div className="grid gap-px overflow-hidden border border-line-1 bg-line-0 md:grid-cols-2 lg:grid-cols-3">
          {subsections.map((s) => (
            <div key={s.id} id={s.id} className="bg-bg-0 p-8">
              <h2 className="font-serif-display text-xl text-ink-0">{s.title}</h2>
              <ul className="mt-4 space-y-1 text-sm text-ink-2">
                {s.items.map((i) => (
                  <li key={i}>— {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <BigStatement>A company capable of understanding itself.</BigStatement>
        </div>
      </section>

      <Section id="industrial-systems">
        <Kicker>Industrial Systems</Kicker>
        <div className="mt-8 max-w-2xl">
          <Prose>
            <p>
              A deeper environment for manufacturing, logistics, construction,
              energy, infrastructure, distribution, and industrial networks.
            </p>
            <p>
              A manufacturer considering expansion should be able to
              understand facility capacity, supplier dependency, labor
              requirements, logistics, regulatory exposure, capital needs,
              utilities, customer demand, and import requirements inside one
              coherent operational environment.
            </p>
          </Prose>
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-1">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="font-serif-display text-2xl text-ink-0 md:text-3xl">
            Understand your organization as a single system.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <CTA href="/capabilities/institutional-intelligence">Institutional Intelligence</CTA>
            <CTA href="/contact" variant="ghost">
              Contact
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
