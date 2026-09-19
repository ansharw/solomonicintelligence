export type ResearchStatus = "Research Agenda" | "Working Thesis" | "Concept Note" | "Forthcoming";

export type ResearchType =
  | "Research Paper"
  | "Framework"
  | "Technical Note"
  | "Institutional Analysis"
  | "Field Note"
  | "Essay"
  | "Architecture"
  | "Working Paper";

export type ResearchCategory =
  | "Institutional Systems"
  | "Decision Science"
  | "AI & Reasoning"
  | "Public Infrastructure"
  | "Complex Systems"
  | "Operational Intelligence"
  | "Sovereign Technology"
  | "Regulatory Systems"
  | "Integrity & Auditability";

export type ResearchEntry = {
  code: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ResearchCategory;
  type: ResearchType;
  status: ResearchStatus;
  readingTime: string;
  abstract: string;
  sections: { heading: string; body: string[] }[];
  related?: string[];
};

export const research: ResearchEntry[] = [
  {
    code: "SI / RESEARCH / 001",
    slug: "institutional-graphs",
    title: "Institutional Graphs",
    subtitle: "Representing Complex Organizations as Operational Systems",
    category: "Institutional Systems",
    type: "Framework",
    status: "Working Thesis",
    readingTime: "9 min",
    abstract:
      "A database stores records. An institution is not a set of records; it is a structure of relationships between entities, authorities, obligations, and dependencies. This note outlines a working framework for representing organizations and the environments around them as explicit, machine-readable graphs, rather than collections of unconnected tables.",
    sections: [
      {
        heading: "The problem with records",
        body: [
          "Most enterprise and government systems store entities as isolated records: a company in one system, a permit in another, an agency in a third. The relationships between them — ownership, dependency, authority, obligation — exist in practice but rarely in any queryable form.",
          "This produces a familiar failure mode: an organization can retrieve any individual fact quickly, but cannot answer questions that span several of them without a person manually assembling the picture.",
        ],
      },
      {
        heading: "Structure as a first-class object",
        body: [
          "An institutional graph treats relationships — not just entities — as data. A company owns a facility. A facility requires a permit. A permit is governed by an authority. An authority is constrained by a regulation. Each edge carries meaning, provenance, and a valid time range.",
          "This structure is what allows a system to answer questions no single record can answer alone: which facilities are exposed if a given regulation changes, which suppliers sit upstream of a critical component, which approvals must precede a given action.",
        ],
      },
      {
        heading: "Toward a working framework",
        body: [
          "Our current thesis organizes institutional graphs around four primitives: entities (who or what exists), relationships (how they connect), constraints (what governs them), and provenance (how the system came to know any of it).",
          "This is a working framework, not a finished ontology. We expect it to change as it is applied to real institutional environments across enterprise and government contexts.",
        ],
      },
    ],
    related: ["outcome-routing", "administrative-surface-area"],
  },
  {
    code: "SI / RESEARCH / 002",
    slug: "outcome-routing",
    title: "Outcome Routing",
    subtitle: "A Framework for Navigating Multi-Institutional Processes",
    category: "Regulatory Systems",
    type: "Framework",
    status: "Working Thesis",
    readingTime: "11 min",
    abstract:
      "Organizations frequently know what they need to accomplish and struggle only with the path between intention and completion. This note proposes outcome routing: treating an institutional objective as a structured search problem across requirements, dependencies, and legitimate available paths, rather than an undifferentiated experience of bureaucracy.",
    sections: [
      {
        heading: "The objective is fixed, the route is not",
        body: [
          "A company that needs to establish a facility, import equipment, or complete a regulated transaction is not asking a novel question. It is pursuing an objective that intersects a finite, if large, set of institutional requirements: permits, approvals, jurisdictions, counterparties, timelines.",
          "Most organizations experience this as an undifferentiated mass of friction. We treat it instead as a graph: an objective connects to requirements, requirements connect to institutions, institutions connect to dependencies and timelines. Somewhere inside that graph, one or more legitimate routes exist.",
        ],
      },
      {
        heading: "Respecting the rule while reducing the friction",
        body: [
          "Outcome routing does not treat rules as obstacles to be minimized. It treats the rule as fixed and the navigation of it as the variable worth improving. The objective may be fixed. The route is not — but every route considered must be a legitimate one.",
          "Where no legitimate route exists, a well-built system needs to be capable of saying so plainly, rather than quietly suggesting a way around the rule.",
        ],
      },
      {
        heading: "Dependency and critical path",
        body: [
          "Institutional processes are rarely linear. Some approvals cannot begin until others complete; some documents depend on the outcome of earlier submissions. Representing these as an explicit dependency graph makes the critical path visible, and makes it possible to identify which delays are structural and which are avoidable.",
        ],
      },
      {
        heading: "Where routes do not exist",
        body: [
          "A mature version of this framework must be able to represent a negative result: no compliant path currently exists for a stated objective. In that case, legitimate next steps include documenting the constraint, seeking a written legal basis from the relevant authority, pursuing formal appeal or exception processes, or engaging counsel. The system's role is to make that boundary legible, not to route around it.",
        ],
      },
    ],
    related: ["institutional-graphs", "administrative-surface-area", "integrity-by-architecture"],
  },
  {
    code: "SI / RESEARCH / 003",
    slug: "decision-environments",
    title: "Decision Environments",
    subtitle: "Beyond Dashboards in Consequential Organizations",
    category: "Decision Science",
    type: "Essay",
    status: "Concept Note",
    readingTime: "7 min",
    abstract:
      "A dashboard shows what is known. It rarely shows what is uncertain, what the options are, who holds authority, or what happened the last time a similar decision was made. This note sketches the idea of a decision environment: a shared space where information, constraints, options, and decision history exist together.",
    sections: [
      {
        heading: "The limits of the dashboard",
        body: [
          "Dashboards are built to display current state. Consequential decisions, however, are rarely about current state alone — they involve objectives, constraints, competing options, uncertainty, and the judgment of the people responsible for the outcome.",
          "A dashboard can tell an operations lead that inventory is low. It cannot tell them what their options are, what trade-offs each option implies, who needs to approve a given response, or what happened the last time inventory ran low under similar conditions.",
        ],
      },
      {
        heading: "What a decision environment holds",
        body: [
          "We use the term decision environment to describe a structured space that holds, together: the relevant information, the explicit objective, the known constraints, the candidate options, an estimate of risk and uncertainty for each, the required approvals, and a durable record of what was ultimately decided and why.",
          "This is closer to a working notebook shared between a system and a group of people than to a reporting surface.",
        ],
      },
      {
        heading: "Decision memory as an asset",
        body: [
          "Organizations rarely retain a structured record of why a past decision was made — only its outcome, if that. A decision environment that preserves what was known, what was believed, and why a particular option was chosen creates decision memory: an asset that compounds in value as an institution encounters similar situations again.",
        ],
      },
    ],
    related: ["human-judgment-in-augmented-institutions", "institutional-memory"],
  },
  {
    code: "SI / RESEARCH / 004",
    slug: "sovereign-ai",
    title: "Sovereign AI",
    subtitle: "Model Independence in Critical Institutional Infrastructure",
    category: "Sovereign Technology",
    type: "Technical Note",
    status: "Working Thesis",
    readingTime: "8 min",
    abstract:
      "The more consequential a system becomes, the more carefully an institution should be able to answer a narrow question: what happens if a given AI provider changes its terms, its availability, or disappears entirely? This note outlines an architectural approach to model independence for institutional infrastructure.",
    sections: [
      {
        heading: "A narrow but important question",
        body: [
          "Institutions adopting AI-assisted systems for consequential work are, whether they realize it or not, adopting a dependency. The relevant design question is not whether to depend on external model providers — most organizations will, at least in part — but whether that dependency is structured so it can be changed.",
        ],
      },
      {
        heading: "Designing for substitutability",
        body: [
          "An architecture built around model independence separates the institutional logic — the graph, the workflows, the decision structures, the audit trail — from any single model provider. Commercial models, private models, and local models become interchangeable components behind a stable interface, selected according to the sensitivity and requirements of a given workload.",
        ],
      },
      {
        heading: "AI as a component, not an authority",
        body: [
          "Model independence is one part of a broader principle: AI should function as a capability inside a governed institutional architecture, assisting judgment, rather than a black box that silently accumulates institutional authority. Human and institutional decision-makers retain the authority; the system retains the ability to change which intelligence provider sits underneath.",
        ],
      },
    ],
    related: ["human-judgment-in-augmented-institutions"],
  },
  {
    code: "SI / RESEARCH / 005",
    slug: "administrative-surface-area",
    title: "Administrative Surface Area",
    subtitle: "Measuring Institutional Complexity",
    category: "Complex Systems",
    type: "Working Paper",
    status: "Research Agenda",
    readingTime: "6 min",
    abstract:
      "Organizations rarely have a way to measure how complex their own administrative environment has become — how many agencies, approvals, dependencies, and rules bear on a given class of decision. This is a research agenda toward a measurable notion of administrative surface area.",
    sections: [
      {
        heading: "Why complexity needs a measure",
        body: [
          "Complexity is usually described qualitatively — 'this is a difficult jurisdiction,' 'this process has too many steps.' Without a measurable notion of administrative surface area, it is difficult to compare environments, track whether reform efforts are working, or forecast the effort required by a new objective.",
        ],
      },
      {
        heading: "Candidate dimensions",
        body: [
          "We are exploring candidate dimensions for this measure, including: the number of distinct authorities involved in a class of objective, the depth of sequential dependency between steps, the variance in processing time across comparable cases, and the frequency of rule change affecting a given process.",
        ],
      },
      {
        heading: "Status of this agenda",
        body: [
          "This is an open research agenda rather than a completed framework. We expect the working definition to change substantially as it is tested against real institutional graphs built through client and research engagements.",
        ],
      },
    ],
    related: ["institutional-graphs", "outcome-routing"],
  },
  {
    code: "SI / RESEARCH / 006",
    slug: "institutional-memory",
    title: "Institutional Memory",
    subtitle: "Preserving Operational Knowledge Across Organizations",
    category: "Operational Intelligence",
    type: "Field Note",
    status: "Concept Note",
    readingTime: "5 min",
    abstract:
      "A significant share of how an organization actually works exists only in the heads of the people who have worked there longest. This field note considers what it would take to preserve that knowledge as a structured, durable asset rather than an oral tradition.",
    sections: [
      {
        heading: "Tribal knowledge as a liability",
        body: [
          "Ask a long-tenured employee how a particular exception gets handled, and they will usually know. Ask the system, and it usually will not. This asymmetry is common, quietly expensive, and rarely addressed until the person in question leaves.",
        ],
      },
      {
        heading: "Toward structured continuity",
        body: [
          "Institutional memory, in our usage, refers to the deliberate capture of operational knowledge — how workflows actually run, which exceptions recur, which relationships matter — inside the same structured graph used for entities and decisions, rather than in a separate wiki that goes stale.",
        ],
      },
    ],
    related: ["institutional-graphs", "decision-environments"],
  },
  {
    code: "SI / RESEARCH / 007",
    slug: "integrity-by-architecture",
    title: "Integrity by Architecture",
    subtitle: "Reducing Opacity Through System Design",
    category: "Integrity & Auditability",
    type: "Institutional Analysis",
    status: "Working Thesis",
    readingTime: "8 min",
    abstract:
      "Technology cannot eliminate corruption by declaration. It can, however, reduce the institutional environments in which opaque discretion becomes difficult to observe. This note outlines design patterns — published requirements, timestamped submissions, attributable decisions, audit trails — that make integrity a property of the system rather than an aspiration layered on top of it.",
    sections: [
      {
        heading: "Opacity as the enabling condition",
        body: [
          "Corruption rarely requires elaborate technology; it requires opacity. Discretion exercised without visibility, timestamps, or attribution is difficult to observe and therefore difficult to hold accountable, regardless of the intentions of the people involved.",
        ],
      },
      {
        heading: "Design patterns for legibility",
        body: [
          "We are cataloguing recurring architectural patterns that increase traceability without requiring new law: published requirements and fee schedules, digital payment rails, timestamped submissions, documented rejection reasons, attributable decision records, complete approval histories, exception monitoring, and automatic escalation when a process departs from its documented path.",
        ],
      },
      {
        heading: "A limit worth stating plainly",
        body: [
          "None of this eliminates corruption by itself. What architecture can do is narrow the space in which opaque discretion can operate unobserved — which is a meaningfully different, and more honest, claim than eliminating it outright.",
        ],
      },
    ],
    related: ["outcome-routing", "public-service-orchestration"],
  },
  {
    code: "SI / RESEARCH / 008",
    slug: "human-judgment-in-augmented-institutions",
    title: "Human Judgment in AI-Augmented Institutions",
    subtitle: "",
    category: "AI & Reasoning",
    type: "Essay",
    status: "Concept Note",
    readingTime: "6 min",
    abstract:
      "As institutions adopt AI-assisted reasoning for consequential decisions, a quiet but important boundary needs to be drawn deliberately: which judgments remain human, and on what basis. This essay considers that boundary.",
    sections: [
      {
        heading: "Acceleration is not the same as judgment",
        body: [
          "AI systems are frequently adopted because they accelerate activity: more documents reviewed, more scenarios modeled, more options generated. Acceleration is valuable, but it is not the same capability as judgment — the weighing of competing, often incommensurable considerations under uncertainty and accountability.",
        ],
      },
      {
        heading: "Where the boundary should sit",
        body: [
          "Our working position is that AI should structure and narrow the space of a decision — surfacing options, flagging risk, modeling consequence — while the institution's accountable decision-makers retain the final judgment on consequential matters, particularly where legal, financial, or human welfare stakes are high.",
        ],
      },
    ],
    related: ["sovereign-ai", "decision-environments"],
  },
  {
    code: "SI / RESEARCH / 009",
    slug: "operational-ontologies",
    title: "Operational Ontologies for Industrial Systems",
    subtitle: "",
    category: "Operational Intelligence",
    type: "Technical Note",
    status: "Research Agenda",
    readingTime: "7 min",
    abstract:
      "Industrial environments — manufacturing, logistics, energy, construction — each carry distinct operational vocabularies: facilities, components, capacity, throughput, dependency. This is a research agenda toward shared ontological patterns across industrial operational systems.",
    sections: [
      {
        heading: "Why industrial systems resist generic modeling",
        body: [
          "A generic CRM-style data model captures customers and deals well and captures almost nothing about a production line, a supplier dependency chain, or a permit-constrained facility expansion. Industrial operations need ontologies built around their own primitives: facilities, components, capacity, throughput, and physical dependency.",
        ],
      },
      {
        heading: "Current direction",
        body: [
          "We are developing candidate ontological patterns for representing facility capacity, supplier dependency, logistics routes, and regulatory exposure inside one coherent operational graph, so that a question like 'what does an expansion require' can be answered across departments rather than reconstructed by hand.",
        ],
      },
    ],
    related: ["institutional-graphs"],
  },
  {
    code: "SI / RESEARCH / 010",
    slug: "public-service-orchestration",
    title: "Public-Service Orchestration",
    subtitle: "One Objective, Many Agencies",
    category: "Public Infrastructure",
    type: "Framework",
    status: "Research Agenda",
    readingTime: "9 min",
    abstract:
      "A citizen or business rarely experiences a single objective — opening a facility, registering a business — as the multi-agency process it actually is. This note outlines a framework for public-service orchestration: one coherent experience of an objective, routed correctly across the sovereign systems that must each retain their own authority.",
    sections: [
      {
        heading: "One objective, many agencies",
        body: [
          "A company stating an intent to establish a manufacturing facility may, without realizing it, be initiating a process that touches corporate registration, zoning, environmental approval, construction permitting, utilities, tax registration, customs, and labor authorization — each governed by a different agency, often with little coordination between them.",
        ],
      },
      {
        heading: "Orchestration without centralization of authority",
        body: [
          "Public-service orchestration proposes a layer that presents one coherent objective and routes the underlying workflow correctly across each sovereign agency system, without asking any agency to surrender its lawmaking, regulatory, enforcement, or judicial authority. The public interface is unified; the authority underneath remains distributed exactly as it is today.",
        ],
      },
      {
        heading: "What this requires",
        body: [
          "This kind of orchestration depends on interoperable data standards, an identity layer citizens and businesses can trust, and a willingness among agencies to expose workflow status through defined interfaces. It is a substantial undertaking, and this remains a research agenda rather than a deployed system.",
        ],
      },
    ],
    related: ["outcome-routing", "integrity-by-architecture"],
  },
];

export function getResearchBySlug(slug: string) {
  return research.find((entry) => entry.slug === slug);
}
