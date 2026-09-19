"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "contact@solomonicintelligence.com";

const inquiryTypes = [
  "Enterprise",
  "Government & Public Institutions",
  "Research",
  "Technology Partnerships",
  "General",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      organization: String(data.get("organization") ?? ""),
      role: String(data.get("role") ?? ""),
      email: String(data.get("email") ?? ""),
      inquiryType: String(data.get("inquiryType") ?? ""),
      jurisdiction: String(data.get("jurisdiction") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok || !result?.ok) {
        throw new Error(result?.error || "Could not send message. Please try again later.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-xl border border-brass-1/40 bg-bg-1 p-8">
        <p className="font-mono-label text-[11px] uppercase text-brass-0/90">Received</p>
        <p className="mt-3 text-ink-1">
          Your inquiry has been sent to Solomonic Intelligence. We will respond
          directly to the email address you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-8">
      {/* Honeypot field — hidden from real visitors, left blank by them */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Organization" name="organization" />
        <Field label="Role" name="role" />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div>
        <label htmlFor="inquiryType" className="font-mono-label text-[11px] uppercase text-ink-3">
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
          disabled={status === "submitting"}
          className="border border-brass-1/60 px-6 py-3 font-mono-label text-xs uppercase text-ink-0 transition-colors hover:border-brass-0 hover:bg-brass-2/10 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Submit Inquiry"}
        </button>

        {status === "error" && (
          <p className="mt-3 text-xs text-ink-1">
            {errorMessage} You can also reach us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
        {status !== "error" && (
          <p className="mt-3 text-xs text-ink-3">
            Submissions are sent directly to Solomonic Intelligence.
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
