// Cloudflare Pages Function — handles POST /api/contact
//
// Sends the contact form through the Cloudflare Email Workers "send_email"
// binding (configured as `EMAIL` in the Pages project settings). The
// destination address below must already be routable in Cloudflare Email
// Routing (forwarded to the real inbox), and the sender domain must be
// onboarded / verified for outbound send.

interface Env {
  EMAIL: {
    send(message: {
      to: string;
      from: string;
      subject: string;
      text?: string;
      html?: string;
      replyTo?: string;
    }): Promise<{ messageId: string }>;
  };
}

const DESTINATION = "contact@solomonicintelligence.com";
const SENDER = "noreply@solomonicintelligence.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // Honeypot — a real visitor never sees or fills this field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const organization = String(body.organization ?? "").trim();
  const role = String(body.role ?? "").trim();
  const email = String(body.email ?? "").trim();
  const inquiryType = String(body.inquiryType ?? "").trim();
  const jurisdiction = String(body.jurisdiction ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !inquiryType || !message) {
    return json({ ok: false, error: "Missing required fields." }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: "Invalid email address." }, 400);
  }

  const subject = `[${inquiryType}] Inquiry from ${name}`;

  const fields: [string, string][] = [
    ["Name", name],
    ["Organization", organization || "—"],
    ["Role", role || "—"],
    ["Email", email],
    ...(jurisdiction ? ([["Country / Jurisdiction", jurisdiction]] as [string, string][]) : []),
    ["Inquiry Type", inquiryType],
  ];

  const text = [...fields.map(([k, v]) => `${k}: ${v}`), "", message].join("\n");

  const html = `<table cellpadding="4" cellspacing="0">${fields
    .map(([k, v]) => `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`;

  try {
    await env.EMAIL.send({
      to: DESTINATION,
      from: SENDER,
      subject,
      text,
      html,
      replyTo: email,
    });
  } catch {
    return json(
      { ok: false, error: "Could not send message. Please try again later." },
      502
    );
  }

  return json({ ok: true });
};
