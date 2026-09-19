import type { Metadata } from "next";
import { PageHeader, Section, Lede, Kicker } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Solomonic Intelligence engages around complex enterprise systems, institutional infrastructure, research and strategic technology.",
};

const categories = [
  "Enterprise",
  "Government & Public Institutions",
  "Research",
  "Technology Partnerships",
  "General",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        doc="SI / COMPANY / 02"
        title="Contact"
        lede={
          <Lede>
            Solomonic Intelligence engages around complex enterprise systems,
            institutional infrastructure, research and strategic technology.
          </Lede>
        }
      />

      <Section className="pt-0">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Kicker>Inquiry Categories</Kicker>
            <ul className="mt-6 space-y-3">
              {categories.map((c) => (
                <li key={c} className="border-b border-line-0 pb-3 text-ink-1">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
