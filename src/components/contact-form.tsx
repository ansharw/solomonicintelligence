"use client";

import { useState, type FormEvent } from "react";

// Placeholder inbox — replace with a verified Solomonic Intelligence address before launch.
const CONTACT_EMAIL = "contact@solomonicintelligence.com";

const inquiryTypes = [
  "Enterprise",
  "Government & Public Institutions",
  "Research",
  "Technology Partnerships",
  "General",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const organization = String(data.get("organization") ?? "");
    const role = String(data.get("role") ?? "");
    const email = String(data.get("email") ?? "");
    const inquiryType = String(data.get("inquiryType") ?? "");
    const jurisdiction = String(data.get("jurisdiction") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `[${inquiryType}] Inquiry from ${name || "Solomonic Intelligence website"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Organization: ${organization}`,
      `Role: ${role}`,
      `Email: ${email}`,
      jurisdiction ? `Country / Jurisdiction: ${jurisdiction}` : "",
      `Inquiry Type: ${inquiryType}`,
      "",
      message,
    ].filter(Boolean);

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Organization" name="organization" />
        <Field label="Role" name="role" />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div>
        <label
          htmlFor="inquiryType"
          className="font-mono-label text-[11px] uppercase text-ink-3"
        >
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          defaultValue=""
          className="mt-2 w-full border-b border-line-2 bg-transparent py-2 text-ink-0 focus:border-brass-0 focus:outline-none"
        >
          <option value="" disabled>
            Select an inquiry type
          </option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <Field label="Country / Jurisdiction (optional)" name="jurisdiction" />

      <div>
        <label htmlFor="message" className="font-mono-label text-[11px] uppercase text-ink-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full border-b border-line-2 bg-transparent py-2 text-ink-0 focus:border-brass-0 focus:outline-none"
        />
      </div>

      <div>
        <button
          type="submit"
          className="border border-brass-1/60 px-6 py-3 font-mono-label text-xs uppercase text-ink-0 transition-colors hover:border-brass-0 hover:bg-brass-2/10"
        >
          Submit Inquiry
        </button>
        <p className="mt-3 text-xs text-ink-3">
          Submitting opens a message addressed to Solomonic Intelligence in
          your email client.
        </p>
        {submitted && (
          <p className="mt-2 text-xs text-brass-0/90">
            Your email client should now be open with this inquiry prepared.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono-label text-[11px] uppercase text-ink-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-line-2 bg-transparent py-2 text-ink-0 focus:border-brass-0 focus:outline-none"
      />
    </div>
  );
}
