import type { Metadata } from "next";
import { Section, Kicker, Prose, CTA } from "@/components/ui";
import { Mark } from "@/components/mark";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Syahreza Daffa Rafiali, Founder of Solomonic Intelligence — on institutional complexity, judgment, and the intersection of artificial intelligence and institutional systems.",
};

export default function FounderPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-36 pb-16 md:pt-44 md:pb-24 lg:px-8">
        <div className="flex items-center justify-between">
          <Kicker>Founder</Kicker>
          <span className="font-mono-label text-[10px] uppercase text-ink-3">SI / COMPANY / 01</span>
        </div>
        <h1 className="mt-8 font-serif-display text-4xl leading-[1.05] tracking-tight text-ink-0 md:text-6xl lg:text-7xl">
          Syahreza
          <br />
          Daffa
          <br />
          Rafiali
        </h1>
        <p className="mt-6 font-mono-label text-xs uppercase text-ink-3">
          Founder — Solomonic Intelligence
        </p>
      </div>

      <Section className="pt-0">
        <Prose>
          <p>
            Syahreza Daffa Rafiali founded Solomonic Intelligence around a
            central conviction: complexity becomes more manageable when its
            underlying structure can be made legible.
          </p>
          <p>
            Solomonic Intelligence is being developed around the intersection
            of artificial intelligence, institutional systems, decision
            infrastructure, operational intelligence and the navigation of
            complex organizations.
          </p>
          <p>
            The company&rsquo;s long-term objective is to build systems capable
            of helping institutions understand environments that exceed the
            cognitive reach of any single individual, evaluate legitimate
            paths through complexity, coordinate action and preserve
            accountability throughout execution.
          </p>
        </Prose>
      </Section>

      <section className="border-y border-line-0 bg-bg-1">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <Mark className="mx-auto h-8 w-8 text-brass-0/70" />
          <blockquote className="mt-8 text-center font-serif-display text-2xl leading-snug text-ink-0 md:text-3xl">
            “Information alone is insufficient. The difficult problem is
            turning complexity into understanding, understanding into
            judgment, and judgment into coordinated action.”
          </blockquote>
          <p className="mt-6 text-center font-mono-label text-xs uppercase text-ink-3">
            — Syahreza Daffa Rafiali, Founder, Solomonic Intelligence
          </p>
        </div>
      </section>

      <Section>
        <Kicker>Why Solomonic</Kicker>
        <div className="mt-8 max-w-2xl">
          <Prose>
            <p>
              The name refers to a standard of judgment rather than a claim of
              omniscience.
            </p>
            <p>Knowledge answers: “What do we know?”</p>
            <p>
              Judgment asks: “What does it mean?” “What conflicts?” “What
              matters?” “What should happen next?”
            </p>
            <p>
              Solomonic Intelligence is built around that distinction.
            </p>
          </Prose>
        </div>
      </Section>

      <section className="border-t border-line-0 bg-bg-2">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="font-serif-display text-2xl text-ink-0 md:text-3xl">
            Learn more about the institution built around this thesis.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <CTA href="/company">Company</CTA>
            <CTA href="/contact" variant="ghost">
              Contact
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
