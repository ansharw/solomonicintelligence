import type { Metadata } from "next";
import { PageHeader, Section, Kicker, Prose } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Solomonic Intelligence handles information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader kicker="Trust" doc="SI / TRUST / 01" title="Privacy" />
      <Section className="pt-0">
        <Prose>
          <p>
            This page describes how Solomonic Intelligence handles
            information submitted through this website. It does not describe
            the data-handling terms of any specific client engagement, which
            are governed separately by contract.
          </p>
        </Prose>

        <div className="mt-10 space-y-10">
          <div>
            <Kicker>Information collected</Kicker>
            <p className="mt-3 max-w-2xl text-ink-2 leading-relaxed">
              The contact form on this site collects the information you
              choose to provide — name, organization, role, email address,
              inquiry type, jurisdiction, and message. Submitting the form
              opens a message in your own email client; the contents are sent
              directly from you to Solomonic Intelligence and are not stored
              by this website.
            </p>
          </div>
          <div>
            <Kicker>Analytics</Kicker>
            <p className="mt-3 max-w-2xl text-ink-2 leading-relaxed">
              This site does not currently run third-party analytics or
              advertising trackers. If that changes, this page will be
              updated to describe what is collected and why.
            </p>
          </div>
          <div>
            <Kicker>Contact</Kicker>
            <p className="mt-3 max-w-2xl text-ink-2 leading-relaxed">
              Questions about this policy can be directed through the{" "}
              <a href="/contact" className="text-ink-1 underline underline-offset-4">
                contact page
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
