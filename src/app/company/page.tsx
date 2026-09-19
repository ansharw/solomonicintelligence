import type { Metadata } from "next";
import { PageHeader, Section, Kicker, BigStatement, Prose, CTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Solomonic Intelligence is being built around a simple conviction: complex reality can be made more legible.",
};

const principles = [
  {
    title: "Structure before automation",
    body: "Do not automate a system that has not been understood.",
  },
  {
    title: "Judgment before action",
    body: "Intelligence should improve decisions, not merely accelerate activity.",
  },
  {
    title: "Authority must remain legible",
    body: "Every consequential action should have an understandable source of authority.",
  },
  {
    title: "AI is a component",
    body: "Not the sovereign.",
  },
  {
    title: "Complexity should become navigable",
    body: "Not merely visualized.",
  },
  {
    title: "Sovereignty matters",
    body: "Critical organizations should understand and control the systems on which they depend.",
  },
  {
    title: "Transparency is architectural",
    body: "Auditability should be designed, not added afterward.",
  },
  {
    title: "Institutions matter",
    body: "Software exists inside legal, social and organizational systems.",
  },
  {
    title: "Human judgment remains real",
    body: "Not every consequential decision should be reduced to an automated output.",
  },
  {
    title: "Build for consequence",
    body: "The greater the consequence, the higher the standard.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader kicker="Company" doc="SI / COMPANY / 00" title="Solomonic Intelligence" />

      <Section className="pt-0" id="thesis">
        <Prose>
          <p>
            Solomonic Intelligence is being built around a simple conviction:
          </p>
          <p className="font-serif-display text-xl text-ink-1 not-italic">
            Complex reality can be made more legible.
          </p>
          <p>The company explores the intersection of:</p>
        </Prose>
        <ul className="mt-4 max-w-xl space-y-1 text-ink-1">
          {[
            "artificial intelligence",
            "complex systems",
            "institutional architecture",
            "decision science",
            "operational software",
            "government infrastructure",
            "enterprise intelligence",
          ].map((i) => (
            <li key={i}>— {i}</li>
          ))}
        </ul>
      </Section>

      <Section bg="bg-1">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Kicker>Mission</Kicker>
            <p className="mt-4 font-serif-display text-2xl text-ink-0">
              Build systems that improve the ability of consequential
              institutions to understand, decide and act.
            </p>
          </div>
          <div>
            <Kicker>Long-term objective</Kicker>
            <p className="mt-4 text-ink-2 leading-relaxed">
              Develop intelligence infrastructure through which complex
              organizations can perceive their environments, reason about
              available options, coordinate action and preserve
              accountability.
            </p>
          </div>
        </div>
      </Section>

      <Section id="principles">
        <Kicker>Principles</Kicker>
        <div className="mt-10 grid gap-px overflow-hidden border border-line-1 bg-line-0 md:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.title} className="bg-bg-0 p-8">
              <span className="font-mono-label text-xs text-brass-0/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif-display text-xl text-ink-0">{p.title.toUpperCase()}</h3>
              <p className="mt-2 text-sm text-ink-2 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <BigStatement>The name refers to a standard of judgment.</BigStatement>
          <p className="mt-8 max-w-2xl mx-auto text-ink-2">
            Read more about the founder&rsquo;s thesis, or the reasoning behind
            the name Solomonic, on the Founder page.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <CTA href="/founder">Founder</CTA>
            <CTA href="/contact" variant="ghost">
              Contact
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
