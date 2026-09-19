import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const editorial = Newsreader({
  variable: "--font-editorial",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const technical = IBM_Plex_Sans({
  variable: "--font-technical",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const technicalMono = IBM_Plex_Mono({
  variable: "--font-technical-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://www.solomonicintelligence.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Solomonic Intelligence — Intelligence for Complex Reality",
    template: "%s — Solomonic Intelligence",
  },
  description:
    "Solomonic Intelligence builds systems that help institutions understand complex environments, coordinate decisions, navigate institutional structures, and turn intelligence into action.",
  openGraph: {
    title: "Solomonic Intelligence",
    description: "Intelligence for complex reality.",
    url: siteUrl,
    siteName: "Solomonic Intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solomonic Intelligence",
    description: "Intelligence for complex reality.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${editorial.variable} ${technical.variable} ${technicalMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-0 text-ink-0 selection:bg-brass-2">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:bg-bg-3 focus:text-ink-0 focus:px-4 focus:py-2 font-mono-label text-xs uppercase"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
