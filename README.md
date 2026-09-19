# Solomonic Intelligence

Institutional website for Solomonic Intelligence, built with Next.js (App
Router) and exported as a fully static site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This runs `next build` with `output: "export"` (see `next.config.ts`) and
produces a fully static site in `out/`. There is no Node.js server and no
Next.js API routes — the only backend logic is the Cloudflare Pages
Function at `functions/api/contact.ts`, which handles the contact form.

## Deploying to Cloudflare Pages

This project is a **static export**, not a server-rendered Next.js app.
Do not select the plain "Next.js" framework preset — it assumes an SSR
deployment via `@opennextjs/cloudflare` / `@cloudflare/next-on-pages` and
will fail with an `ENOENT ... .next/standalone/...` error, since static
export never produces that output.

**Correct dashboard settings** (Workers & Pages → project → Settings →
Build):

| Setting | Value |
|---|---|
| Framework preset | `Next.js (Static HTML Export)` (or `None`) |
| Build command | `npm run build` |
| Build output directory | `out` |

`wrangler.toml` in this repo also declares `pages_build_output_dir = "out"`
and the `EMAIL` send-email binding used by the contact form — Wrangler
configuration is the source of truth for those fields once present, but
the **Build command** field above is still set independently in the
dashboard and must not be left on an SSR/OpenNext default.

### Email binding (contact form)

The contact form sends through Cloudflare Email Workers, not a
third-party API. Before it will actually deliver mail:

1. Enable **Email Routing** for `solomonicintelligence.com` and add a rule
   forwarding `contact@solomonicintelligence.com` to the real inbox.
2. In the Pages project, add a **Send Email** binding named `EMAIL`
   (Settings → Functions → Bindings), restricted to
   `contact@solomonicintelligence.com` — this matches
   `functions/api/contact.ts` and `wrangler.toml`.
3. Redeploy after adding the binding.

## Project structure

- `src/app/` — pages (App Router)
- `src/components/` — shared UI
- `src/data/` — nav, capabilities, and research content
- `functions/` — Cloudflare Pages Functions (kept separate from the
  Next.js TypeScript project via `functions/tsconfig.json`)
