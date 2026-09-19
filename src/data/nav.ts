export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Overview", href: "/platform", description: "Ingestion, graph, reasoning, decision, routing, execution, audit." },
      { label: "Intelligence Graph", href: "/platform#intelligence-graph", description: "Machine-readable structure for operational and institutional reality." },
      { label: "Decision Systems", href: "/platform#decision", description: "Structuring uncertainty into actionable choices." },
      { label: "Operational Systems", href: "/platform#execution", description: "Governed workflows, routing and execution." },
      { label: "AI Architecture", href: "/security#model-independence", description: "AI as a governed component, not the sovereign." },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    children: [
      { label: "Institutional Intelligence", href: "/capabilities/institutional-intelligence" },
      { label: "Decision Intelligence", href: "/capabilities/decision-intelligence" },
      { label: "Route Intelligence", href: "/route-intelligence" },
      { label: "Operational Intelligence", href: "/capabilities/operational-intelligence" },
      { label: "Strategic Simulation", href: "/capabilities/strategic-simulation" },
    ],
  },
  {
    label: "Institutional Systems",
    href: "/institutional-systems",
    children: [
      { label: "Institutional Graphs", href: "/institutional-systems#institutional-graph" },
      { label: "Workflow Orchestration", href: "/institutional-systems#workflow-orchestration" },
      { label: "Regulatory Navigation", href: "/route-intelligence" },
      { label: "Integrity Infrastructure", href: "/government#integrity-infrastructure" },
    ],
  },
  {
    label: "Enterprise",
    href: "/enterprise",
    children: [
      { label: "Enterprise Systems", href: "/enterprise#commercial-intelligence" },
      { label: "Industrial Operations", href: "/enterprise#industrial-systems" },
      { label: "Supply Chains", href: "/enterprise#supply-chain" },
      { label: "Regulated Industries", href: "/enterprise#compliance" },
    ],
  },
  {
    label: "Government",
    href: "/government",
    children: [
      { label: "Government Infrastructure", href: "/government" },
      { label: "Public-Service Orchestration", href: "/government#public-orchestration" },
      { label: "Integrity Systems", href: "/government#integrity-infrastructure" },
      { label: "Sovereign Deployment", href: "/security#deployment" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research Library", href: "/research" },
      { label: "Intelligence Notes", href: "/research?type=Field+Note" },
      { label: "Papers", href: "/research?type=Research+Paper" },
      { label: "Frameworks", href: "/research?type=Framework" },
    ],
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About", href: "/company" },
      { label: "Founder", href: "/founder" },
      { label: "Principles", href: "/company#principles" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerNav = {
  platform: [
    { label: "Overview", href: "/platform" },
    { label: "Intelligence Graph", href: "/platform#intelligence-graph" },
    { label: "Decision Systems", href: "/platform#decision" },
    { label: "Operational Systems", href: "/platform#execution" },
  ],
  capabilities: [
    { label: "Institutional Intelligence", href: "/capabilities/institutional-intelligence" },
    { label: "Decision Intelligence", href: "/capabilities/decision-intelligence" },
    { label: "Route Intelligence", href: "/route-intelligence" },
    { label: "Operational Intelligence", href: "/capabilities/operational-intelligence" },
    { label: "Strategic Simulation", href: "/capabilities/strategic-simulation" },
  ],
  institutional: [
    { label: "Institutional Graphs", href: "/institutional-systems#institutional-graph" },
    { label: "Regulatory Navigation", href: "/route-intelligence" },
    { label: "Workflow Orchestration", href: "/institutional-systems#workflow-orchestration" },
    { label: "Integrity Infrastructure", href: "/government#integrity-infrastructure" },
  ],
  sectors: [
    { label: "Enterprise", href: "/enterprise" },
    { label: "Industrial Systems", href: "/enterprise#industrial-systems" },
    { label: "Government", href: "/government" },
    { label: "Public Institutions", href: "/government#public-orchestration" },
  ],
  research: [
    { label: "Research Library", href: "/research" },
    { label: "Frameworks", href: "/research?type=Framework" },
    { label: "Working Papers", href: "/research?type=Working+Paper" },
    { label: "Intelligence Notes", href: "/research?type=Field+Note" },
  ],
  company: [
    { label: "About", href: "/company" },
    { label: "Founder", href: "/founder" },
    { label: "Principles", href: "/company#principles" },
    { label: "Contact", href: "/contact" },
  ],
  trust: [
    { label: "Security", href: "/security" },
    { label: "Sovereignty", href: "/security#sovereignty" },
    { label: "Privacy", href: "/privacy" },
  ],
};
