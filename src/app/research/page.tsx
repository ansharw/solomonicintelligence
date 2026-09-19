import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader, Section, Lede } from "@/components/ui";
import { ResearchIndex } from "@/components/research-index";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Understanding complex systems requires more than software. The Solomonic Intelligence research library — frameworks, working papers, field notes and institutional analysis.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        kicker="Research"
        doc="SI / RESEARCH"
        title="Research"
        lede={<Lede>Understanding complex systems requires more than software.</Lede>}
      />
      <Section className="pt-0">
        <Suspense fallback={null}>
          <ResearchIndex />
        </Suspense>
      </Section>
    </>
  );
}
