import Link from "next/link";
import { Mark } from "@/components/mark";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <Mark className="h-10 w-10 text-brass-0/70" />
      <p className="mt-8 font-mono-label text-[11px] uppercase text-ink-3">SI / 404</p>
      <h1 className="mt-4 font-serif-display text-4xl text-ink-0 md:text-5xl">
        No route found.
      </h1>
      <p className="mt-4 max-w-md text-ink-2">
        The requested path does not resolve inside the current system.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 border border-brass-1/60 px-5 py-3 font-mono-label text-xs uppercase text-ink-0 transition-colors hover:border-brass-0 hover:bg-brass-2/10"
      >
        Return to Solomonic Intelligence
      </Link>
    </div>
  );
}
