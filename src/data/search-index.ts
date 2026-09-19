import { capabilities } from "./capabilities";
import { research } from "./research";

export type SearchEntry = {
  title: string;
  section: string;
  href: string;
  description: string;
};

const pages: SearchEntry[] = [
  { title: "Home", section: "Company", href: "/", description: "Intelligence for complex reality." },
  { title: "Platform", section: "Platform", href: "/platform", description: "Infrastructure for understanding, deciding and acting inside complex systems." },
  { title: "Capabilities", section: "Capabilities", href: "/capabilities", description: "Different problems. One underlying architecture." },
  { title: "Route Intelligence", section: "Capabilities", href: "/route-intelligence", description: "The objective may be fixed. The route is not." },
  { title: "Institutional Systems", section: "Institutional Systems", href: "/institutional-systems", description: "Institutions are systems. They should be legible." },
  { title: "Enterprise", section: "Sectors", href: "/enterprise", description: "The enterprise as a living system." },
  { title: "Government", section: "Sectors", href: "/government", description: "Make the state legible to itself." },
  { title: "Research", section: "Research", href: "/research", description: "Understanding complex systems requires more than software." },
  { title: "Security & Sovereignty", section: "Trust", href: "/security", description: "Critical systems should not require blind dependence." },
  { title: "Company", section: "Company", href: "/company", description: "Complex reality can be made more legible." },
  { title: "Founder", section: "Company", href: "/founder", description: "Syahreza Daffa Rafiali, Founder." },
  { title: "Contact", section: "Company", href: "/contact", description: "Engage around complex enterprise systems and institutional infrastructure." },
  { title: "Privacy", section: "Trust", href: "/privacy", description: "How Solomonic Intelligence handles information." },
];

const capabilityEntries: SearchEntry[] = capabilities.map((c) => ({
  title: c.name,
  section: "Capabilities",
  href: `/capabilities/${c.slug}`,
  description: c.short,
}));

const researchEntries: SearchEntry[] = research.map((r) => ({
  title: r.title,
  section: "Research / " + r.category,
  href: `/research/${r.slug}`,
  description: r.subtitle || r.abstract,
}));

export const searchIndex: SearchEntry[] = [...pages, ...capabilityEntries, ...researchEntries];
