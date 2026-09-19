import Link from "next/link";
import type { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono-label text-[11px] uppercase text-brass-0/90 flex items-center gap-3">
      <span className="h-px w-6 bg-brass-1/70" aria-hidden="true" />
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  bg = "bg-0",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "bg-0" | "bg-1" | "bg-2";
}) {
  const bgClass = bg === "bg-1" ? "bg-bg-1" : bg === "bg-2" ? "bg-bg-2" : "bg-bg-0";
  return (
    <section id={id} className={`${bgClass} border-t border-line-0 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">{children}</div>
    </section>
  );
}

export function BigStatement({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-serif-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink-0 ${className}`}
    >
      {children}
    </p>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-ink-2 font-light">
      {children}
    </p>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl space-y-5 text-[15px] md:text-base leading-relaxed text-ink-2">
      {children}
    </div>
  );
}

export function Doc({ children }: { children: ReactNode }) {
  return <span className="font-mono-label text-[11px] uppercase text-ink-3">{children}</span>;
}

export function CTA({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className="group inline-flex items-center gap-2 border border-brass-1/60 px-5 py-3 font-mono-label text-xs uppercase text-ink-0 transition-colors hover:border-brass-0 hover:bg-brass-2/10"
      >
        {children}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-mono-label text-xs uppercase text-ink-2 underline decoration-line-2 underline-offset-4 transition-colors hover:text-ink-0"
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function PageHeader({
  kicker,
  title,
  lede,
  doc,
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  doc?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-36 pb-16 md:pt-44 md:pb-20 lg:px-8">
      <div className="flex items-center justify-between">
        <Kicker>{kicker}</Kicker>
        {doc ? <Doc>{doc}</Doc> : null}
      </div>
      <h1 className="mt-6 font-serif-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink-0">
        {title}
      </h1>
      {lede ? <div className="mt-6">{lede}</div> : null}
    </div>
  );
}

export function Grid2({ children }: { children: ReactNode }) {
  return <div className="grid gap-10 md:grid-cols-2 md:gap-16">{children}</div>;
}

export function NumberedList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="space-y-8">
      {items.map((item, i) => (
        <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[4rem_1fr]">
          <span className="font-mono-label text-sm text-brass-0/80">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-serif-display text-xl text-ink-0">{item.title}</h3>
            <p className="mt-2 text-ink-2 leading-relaxed">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
