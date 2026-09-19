import type { Metadata } from "next";
import { PageHeader, Section, Kicker, BigStatement, Prose, CTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Security & Sovereignty",
  description:
    "Critical systems should not require blind dependence. Data sovereignty, model independence, identity and access, auditability, and deployment architecture.",
};

const questions = [
  "Who owns the data?",
  "Who controls the infrastructure?",
  "Who determines permissions?",
  "Who can alter the workflow?",
  "What happens if an AI provider disappears?",
  "What happens if a vendor relationship ends?",
];

const deploymentModels = [
  {
    name: "Managed Cloud",
    body: "A fully managed environment, appropriate for organizations prioritizing speed of deployment over infrastructure control.",
  },
  {
    name: "Dedicated Environment",
    body: "A single-tenant environment isolated from other deployments, for organizations requiring stronger isolation guarantees.",
  },
  {
    name: "Private Cloud",
    body: "Deployment inside an organization's own cloud environment, under its own infrastructure controls.",
  },
  {
    name: "Hybrid Infrastructure",
    body: "A combination of managed and self-hosted components, splitting workloads by sensitivity.",
  },
  {
    name: "Sovereign Deployment",
    body: "Deployment configured to satisfy jurisdictional data-residency and sovereignty requirements.",
  },
  {
    name: "Air-Gapped / Highly Restricted Environments",
    body: "Where technically appropriate, deployment into environments with no external network dependency.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        kicker="Security & Sovereignty"
        doc="SI / SECURITY / 00"
        title={
          <>
            Critical systems should not
            <br />
            require blind dependence.
          </>
        }
      />

      <Section className="pt-0">
        <Prose>
          <p>
            The more important a system becomes, the more carefully questions
            of control must be answered.
          </p>
        </Prose>
        <ul className="mt-6 max-w-xl space-y-2 font-serif-display text-lg text-ink-1 md:text-xl">
          {questions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-ink-2">
          Solomonic Intelligence approaches these questions architecturally.
        </p>
      </Section>

      <Section bg="bg-1" id="sovereignty">
        <Kicker>Data Sovereignty</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              Organizations should maintain appropriate control over data,
              access, retention, residency, and permissions — decided
              according to the sensitivity of the workload and the
              jurisdiction it operates within.
            </p>
          </Prose>
        </div>
      </Section>

      <Section id="model-independence">
        <Kicker>Model Independence</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              AI providers should be replaceable where operational
              requirements demand it. Our architecture is designed to support
              multiple commercial models, private models, local models, and
              hybrid combinations of these, behind a stable institutional
              layer.
            </p>
          </Prose>
        </div>
      </Section>

      <Section bg="bg-1">
        <Kicker>Identity & Access</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>
              Role-based access. Least privilege. Separation of duties.
              Approval structures for sensitive actions.
            </p>
          </Prose>
        </div>
      </Section>

      <Section>
        <Kicker>Auditability</Kicker>
        <div className="mt-6 max-w-2xl">
          <Prose>
            <p>Important actions should be reconstructable after the fact — who initiated them, on what basis, and with what outcome.</p>
          </Prose>
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <BigStatement>
            AI provides intelligence. Institutions retain authority.
          </BigStatement>
        </div>
      </section>

      <Section id="deployment">
        <Kicker>Deployment</Kicker>
        <p className="mt-6 max-w-2xl text-ink-2">
          Potential deployment models. These describe architectural
          directions and supported design goals; availability depends on the
          specific engagement and is confirmed during scoping.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden border border-line-1 bg-line-0 md:grid-cols-2">
          {deploymentModels.map((d) => (
            <div key={d.name} className="bg-bg-1 p-8">
              <h3 className="font-serif-display text-lg text-ink-0">{d.name}</h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-1">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="font-serif-display text-2xl text-ink-0 md:text-3xl">
            Discuss deployment and sovereignty requirements.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA href="/contact">Contact Solomonic Intelligence</CTA>
          </div>
        </div>
      </section>
    </>
  );
}
