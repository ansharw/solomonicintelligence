import type { Metadata } from "next";
import { PageHeader, Section, Kicker, BigStatement, Prose, CTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Government",
  description:
    "Make the state legible to itself. Architectures for coordinating institutional complexity while preserving legitimate sovereign authority.",
};

const facilityRequirements = [
  "corporate registration",
  "land",
  "zoning",
  "environmental approval",
  "construction",
  "utilities",
  "tax",
  "customs",
  "machinery import",
  "immigration",
  "labor",
  "local licensing",
  "logistics",
];

const orchestrationFlow = [
  "Public Interface",
  "Identity",
  "Objective",
  "Policy",
  "Routing",
  "Agencies",
  "Workflows",
  "Decisions",
  "Audit",
];

const sovereignAuthority = [
  "lawmaking authority",
  "regulatory authority",
  "enforcement authority",
  "taxation",
  "licensing authority",
  "judicial review",
  "political accountability",
];

const softwareSupports = [
  "workflow orchestration",
  "application tracking",
  "data integration",
  "decision support",
  "audit trails",
  "document verification",
  "interoperability",
  "public interfaces",
  "analytics",
];

const integrityMechanisms = [
  "published requirements",
  "transparent fees",
  "digital payments",
  "timestamped submissions",
  "documented rejection reasons",
  "attributable decisions",
  "approval histories",
  "audit trails",
  "exception monitoring",
  "automatic escalation",
  "anomaly detection",
];

export default function GovernmentPage() {
  return (
    <>
      <PageHeader
        kicker="Government"
        doc="SI / GOVERNMENT / 00"
        title={
          <>
            Make the state
            <br />
            legible to itself.
          </>
        }
      />

      <Section className="pt-0">
        <Prose>
          <p>
            Governments contain extraordinary institutional intelligence. Yet
            that intelligence may be fragmented across ministries, agencies,
            databases, regulations, jurisdictions, documents, legacy software,
            and institutional memory.
          </p>
          <p>
            Citizens and businesses often experience that fragmentation
            directly. Solomonic Intelligence explores systems capable of
            coordinating complexity while preserving legitimate institutional
            authority.
          </p>
        </Prose>
      </Section>

      <Section bg="bg-1">
        <Kicker>One public objective</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>A company says: “I want to establish a manufacturing facility.”</p>
            <p>Behind that statement may exist:</p>
          </Prose>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1 text-ink-1 sm:grid-cols-2">
            {facilityRequirements.map((f) => (
              <li key={f}>— {f}</li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <BigStatement>
            To the user, this is one objective. Internally, it may involve an
            entire state.
          </BigStatement>
        </div>
      </section>

      <Section id="public-orchestration">
        <Kicker>Public Orchestration</Kicker>
        <div className="mt-10 flex flex-wrap items-stretch gap-0 overflow-x-auto scrollbar-thin">
          {orchestrationFlow.map((f, i) => (
            <div key={f} className="flex items-center">
              <div className="border border-line-1 px-5 py-4 font-mono-label text-xs uppercase text-ink-1">
                {f}
              </div>
              {i < orchestrationFlow.length - 1 && (
                <span className="mx-2 text-brass-0" aria-hidden="true">
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-10 font-serif-display text-xl text-ink-1 md:text-2xl">
          One government experience. Many sovereign systems underneath.
        </p>
      </Section>

      <Section bg="bg-1">
        <Kicker>Sovereign Authority</Kicker>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-mono-label text-xs uppercase text-ink-3">Government retains</h3>
            <ul className="mt-4 space-y-1 text-ink-1">
              {sovereignAuthority.map((s) => (
                <li key={s} className="capitalize">— {s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono-label text-xs uppercase text-ink-3">Software supports</h3>
            <ul className="mt-4 space-y-1 text-ink-1">
              {softwareSupports.map((s) => (
                <li key={s} className="capitalize">— {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <BigStatement>
            Automate procedure. Preserve legitimate sovereignty.
          </BigStatement>
        </div>
      </section>

      <Section id="integrity-infrastructure">
        <Kicker>Integrity Infrastructure</Kicker>
        <BigStatement className="mt-6 max-w-3xl">
          Corruption thrives inside opacity.
        </BigStatement>
        <div className="mt-8 max-w-2xl">
          <Prose>
            <p>Systems can increase traceability through:</p>
          </Prose>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1 text-ink-1 sm:grid-cols-2">
            {integrityMechanisms.map((m) => (
              <li key={m} className="capitalize">— {m}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-ink-1">
            Technology cannot eliminate corruption by declaration. It can,
            however, reduce the institutional environments in which opaque
            discretion becomes difficult to observe.
          </p>
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-1">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <BigStatement>Transparency should be architectural.</BigStatement>
          <div className="mt-10 flex justify-center gap-8">
            <CTA href="/security">Security & Sovereignty</CTA>
            <CTA href="/contact" variant="ghost">
              Contact
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
