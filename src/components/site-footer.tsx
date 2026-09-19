import Link from "next/link";
import { Mark } from "@/components/mark";
import { footerNav } from "@/data/nav";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono-label text-[11px] uppercase text-ink-3">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-ink-2 transition-colors hover:text-ink-0">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line-0 bg-bg-1">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-7">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-ink-0">
              <Mark className="h-6 w-6 text-brass-0" />
            </Link>
            <p className="mt-4 font-serif-display text-sm text-ink-1">
              Solomonic Intelligence
            </p>
            <p className="mt-1 text-xs text-ink-3">Intelligence for Complex Reality.</p>
          </div>
          <FooterColumn title="Platform" links={footerNav.platform} />
          <FooterColumn title="Capabilities" links={footerNav.capabilities} />
          <FooterColumn title="Institutional Systems" links={footerNav.institutional} />
          <FooterColumn title="Sectors" links={footerNav.sectors} />
          <FooterColumn title="Research" links={footerNav.research} />
          <FooterColumn title="Company" links={footerNav.company} />
        </div>

        <div className="hairline mt-14" />

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono-label text-[11px] uppercase text-ink-3">Founder</p>
            <p className="mt-1 text-sm text-ink-1">
              Syahreza Daffa Rafiali — Founder, Solomonic Intelligence
            </p>
          </div>
          <div className="flex gap-6">
            {footerNav.trust.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-ink-2 hover:text-ink-0">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hairline mt-8" />

        <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-serif-display italic text-sm text-ink-3">
            Understanding precedes judgment. Judgment precedes action.
          </p>
          <p className="font-mono-label text-[10px] uppercase text-ink-3">
            © {new Date().getFullYear()} Solomonic Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
