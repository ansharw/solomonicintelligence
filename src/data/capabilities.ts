export type Capability = {
  slug: string;
  code: string;
  name: string;
  short: string;
  diagram: "graph" | "tree" | "workflow" | "scenario" | "ledger" | "orchestration";
  concept: string[];
  problem: string[];
  architecture: string[];
  operationalUse: string[];
  humanRole: string[];
  governance: string[];
  exampleEnvironment: string;
  relatedResearch: string[];
  relatedCapabilities: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "institutional-intelligence",
    code: "SI / CAPABILITY / 01",
    name: "Institutional Intelligence",
    short:
      "Understand the organizations, rules, authorities, dependencies and relationships shaping an environment.",
    diagram: "graph",
    concept: [
      "Institutional intelligence is the discipline of representing an environment — the companies, agencies, people, assets, contracts, jurisdictions, and obligations inside it — as an explicit structure rather than a set of disconnected records.",
      "The premise is simple: an organization cannot reason well about an environment it cannot see the shape of.",
    ],
    problem: [
      "Most institutions hold the information required to understand their environment, but hold it fragmented across departments, systems, and individual memory. No single view of 'who is connected to whom, under what obligation' typically exists.",
      "This makes basic questions surprisingly expensive to answer: which counterparties share a common dependency, which subsidiaries fall under a given regulatory regime, which relationships would be exposed by a single point of failure.",
    ],
    architecture: [
      "Institutional intelligence is built on an entity-relationship graph: companies, people, assets, contracts, agencies, and jurisdictions as nodes; ownership, authority, obligation, and dependency as typed, provenance-tracked edges.",
      "The graph is populated through governed ingestion from internal systems, public registries, documents, and — where appropriate — human input, with each fact traceable to its source.",
    ],
    operationalUse: [
      "Mapping ownership and control structures across complex corporate groups.",
      "Identifying which regulatory regimes and authorities bear on a given entity or transaction.",
      "Surfacing indirect relationships — shared suppliers, shared counterparties, shared exposure — invisible in any single system.",
    ],
    humanRole: [
      "Analysts and subject-matter experts curate and validate the graph; the system does not assert institutional facts without a traceable source. Where public information is ambiguous or contested, that ambiguity is preserved rather than resolved silently.",
    ],
    governance: [
      "Every relationship in the graph carries provenance and a valid time range. Access to sensitive institutional relationships is governed by role and purpose, consistent with the sovereignty principles described in Security & Sovereignty.",
    ],
    exampleEnvironment:
      "A conglomerate seeking to understand its own regulatory exposure across twenty subsidiaries, twelve jurisdictions, and several hundred supplier relationships — a question no single department currently holds the full answer to.",
    relatedResearch: ["institutional-graphs", "administrative-surface-area"],
    relatedCapabilities: ["decision-intelligence", "operational-intelligence"],
  },
  {
    slug: "decision-intelligence",
    code: "SI / CAPABILITY / 02",
    name: "Decision Intelligence",
    short: "Turn complex information into structured options, trade-offs and decisions.",
    diagram: "tree",
    concept: [
      "Decision intelligence structures the space around a consequential choice: the objective, the constraints, the available options, the uncertainty attached to each, and the trade-offs between them — so that a decision can be examined rather than simply made.",
    ],
    problem: [
      "Consequential decisions inside large organizations are frequently made with the relevant information scattered across memos, meetings, and the judgment of a few individuals, with no durable record of what was considered or why a particular option was chosen.",
      "This makes decisions difficult to review, difficult to learn from, and difficult to defend after the fact.",
    ],
    architecture: [
      "A decision intelligence environment holds a structured decision object: the stated objective, the known constraints, a comparable set of options, an estimate of risk and uncertainty for each, the required approvals, and — once resolved — the recorded outcome and rationale.",
      "This structure sits on top of the institutional graph and any relevant simulation output, so that options are evaluated against real dependencies rather than assumptions.",
    ],
    operationalUse: [
      "Comparing candidate strategic options against a shared set of constraints and risk estimates.",
      "Producing a durable, reviewable record of why a decision was made, for later audit or institutional learning.",
      "Structuring recurring decision types — capital allocation, vendor selection, market entry — so that comparable past decisions inform new ones.",
    ],
    humanRole: [
      "Decision intelligence structures the choice; it does not make it. Accountable decision-makers retain authority over the final judgment, particularly where the stakes are financial, legal, or human.",
    ],
    governance: [
      "Decision records are immutable once finalized and retain full attribution of who proposed, who approved, and on what information the decision relied — the basis of what we describe elsewhere as decision memory.",
    ],
    exampleEnvironment:
      "A board evaluating three candidate markets for expansion, each with different regulatory, capital, and supply-chain implications, needing a single comparable view rather than three disconnected memos.",
    relatedResearch: ["decision-environments", "human-judgment-in-augmented-institutions"],
    relatedCapabilities: ["institutional-intelligence", "strategic-simulation"],
  },
  {
    slug: "operational-intelligence",
    code: "SI / CAPABILITY / 03",
    name: "Operational Intelligence",
    short: "Connect understanding to governed execution.",
    diagram: "workflow",
    concept: [
      "Operational intelligence is the bridge between understanding an environment and acting inside it — connecting the institutional graph and decision layer to real workflows, tasks, approvals, and system actions.",
    ],
    problem: [
      "Insight that does not connect to execution tends to stay insight. Many organizations can produce excellent analysis that never translates into a coordinated operational response, because the analysis and the workflow tools live in entirely separate systems.",
    ],
    architecture: [
      "Operational intelligence connects graph and decision structures to governed workflow primitives: task creation, approval routing, document preparation, escalation, and — where appropriate — direct system actions, each bound by explicit permissions.",
      "Every action is attributable to the intelligence and authority that produced it, preserving a continuous chain from observation to execution.",
    ],
    operationalUse: [
      "Routing an approved decision directly into task assignments across the responsible teams.",
      "Triggering alerts and escalations when monitored conditions cross a defined threshold.",
      "Coordinating multi-department responses to an operational event from a single governed source of truth.",
    ],
    humanRole: [
      "Operational intelligence recommends and routes; the permissions model determines which actions may execute automatically and which require explicit human authorization, calibrated to consequence.",
    ],
    governance: [
      "All actions are logged with full attribution, satisfying the same audit standard applied across the platform: who knew what, who decided what, and what changed as a result.",
    ],
    exampleEnvironment:
      "A logistics operator whose supply-risk analysis needs to result in immediate re-routing tasks assigned to the right regional teams, not a report circulated after the disruption has already occurred.",
    relatedResearch: ["institutional-memory", "operational-ontologies"],
    relatedCapabilities: ["institutional-intelligence", "route-intelligence"],
  },
  {
    slug: "strategic-simulation",
    code: "SI / CAPABILITY / 04",
    name: "Strategic Simulation",
    short: "Explore potential consequences before committing resources.",
    diagram: "scenario",
    concept: [
      "Strategic simulation allows an organization to explore the likely consequences of a policy change, supply disruption, regulatory shift, or organizational restructuring before committing capital or political will to it.",
    ],
    problem: [
      "Many consequential decisions are made with only a narrative sense of their downstream effects, because building a rigorous model of the relevant system is normally a bespoke, slow, and expensive undertaking, redone from scratch for each question.",
    ],
    architecture: [
      "Simulation runs on top of the institutional graph, using the same entities, relationships, and constraints already represented there, so that a scenario reflects real dependencies rather than a simplified stand-in model built for a single study.",
      "Scenarios are parameterized and comparable, allowing several candidate futures to be examined side by side.",
    ],
    operationalUse: [
      "Modeling the effect of a regulatory change on a portfolio of facilities or contracts.",
      "Testing the resilience of a supply chain against a plausible disruption before it occurs.",
      "Comparing the second-order effects of alternative organizational restructurings.",
    ],
    humanRole: [
      "Simulation output is a structured estimate, not a prophecy. Analysts and decision-makers are expected to interrogate assumptions, and the system is built to expose those assumptions rather than hide them behind a single confident number.",
    ],
    governance: [
      "Every simulation records its input assumptions and data sources alongside its output, so results remain interpretable and defensible after the fact rather than treated as an opaque black box.",
    ],
    exampleEnvironment:
      "A manufacturer needing to understand, before committing capital, how a proposed tariff change would propagate through a supplier network spanning four countries.",
    relatedResearch: ["decision-environments", "operational-ontologies"],
    relatedCapabilities: ["decision-intelligence", "institutional-intelligence"],
  },
  {
    slug: "integrity-intelligence",
    code: "SI / CAPABILITY / 05",
    name: "Integrity Intelligence",
    short: "Make institutional processes more visible, attributable and auditable.",
    diagram: "ledger",
    concept: [
      "Integrity intelligence treats traceability as an architectural property of a system, not an audit exercise performed after the fact. It concerns who knew what, who decided what, which rule applied, and what happened next.",
    ],
    problem: [
      "Opaque discretion — decisions made without visible criteria, timestamps, or attribution — is difficult to observe and therefore difficult to hold accountable, in both commercial and public institutions.",
    ],
    architecture: [
      "Integrity intelligence is implemented through timestamped submissions, attributable decision records, complete approval histories, documented rejection reasons, and anomaly detection that flags processes departing from their documented path.",
      "These are not bolted onto the platform; they are properties of how the graph, decision, and workflow layers are built.",
    ],
    operationalUse: [
      "Reconstructing the complete history behind any consequential decision or approval.",
      "Detecting process anomalies — unusual delay, unusual discretion, unusual deviation from documented procedure — automatically.",
      "Producing defensible audit trails for regulators, boards, or oversight bodies without a separate reconciliation exercise.",
    ],
    humanRole: [
      "Integrity intelligence surfaces what happened; determining what should happen in response — investigation, escalation, discipline — remains an institutional and, where relevant, legal responsibility outside the system.",
    ],
    governance: [
      "Audit records themselves are immutable and access to them is itself logged, so the integrity layer cannot become a new source of unaccountable discretion.",
    ],
    exampleEnvironment:
      "A public agency wanting to demonstrate, to an oversight body, that a large volume of permit approvals followed documented criteria rather than informal discretion.",
    relatedResearch: ["integrity-by-architecture", "public-service-orchestration"],
    relatedCapabilities: ["operational-intelligence", "institutional-intelligence"],
  },
  {
    slug: "ai-orchestration",
    code: "SI / CAPABILITY / 06",
    name: "AI Orchestration",
    short: "Use artificial intelligence as one capability within a governed institutional architecture.",
    diagram: "orchestration",
    concept: [
      "AI orchestration positions artificial intelligence as one governed capability among several — alongside the graph, the decision layer, and the workflow layer — rather than as an undifferentiated layer of automation sitting above the institution.",
    ],
    problem: [
      "Many organizations adopt AI as a set of disconnected point tools: one for drafting, one for search, one for analysis. None of them share the institution's structure, and none of them are bound by a consistent permissions or audit model.",
    ],
    architecture: [
      "The orchestration layer routes reasoning tasks — search, summarization, pattern detection, drafting, scenario construction — to the appropriate model, whether commercial, private, or local, while keeping the institutional graph, permissions, and audit trail constant underneath.",
      "This is what allows a model to be replaced, upgraded, or run in a more restricted environment without redesigning the institution's underlying logic — the architectural premise explored further in Sovereign AI.",
    ],
    operationalUse: [
      "Directing sensitive reasoning tasks to a private or local model while routing lower-sensitivity tasks to a commercial model.",
      "Applying consistent permissions and audit logging across every AI-assisted action, regardless of which model performed it.",
      "Swapping or upgrading underlying models as capabilities evolve, without re-architecting the institutional layer.",
    ],
    humanRole: [
      "Orchestration determines which model performs a task; it does not determine what authority that output carries. That determination remains with the governance layer and, ultimately, with accountable people.",
    ],
    governance: [
      "Model selection, inputs, and outputs are logged consistently with every other action on the platform, and sensitive workloads can be constrained to specific deployment environments described in Security & Sovereignty.",
    ],
    exampleEnvironment:
      "A financial institution that needs AI-assisted document review to run entirely inside a private deployment for regulatory reasons, while using commercial models for lower-sensitivity research tasks.",
    relatedResearch: ["sovereign-ai", "human-judgment-in-augmented-institutions"],
    relatedCapabilities: ["decision-intelligence", "integrity-intelligence"],
  },
];

export function getCapabilityBySlug(slug: string) {
  return capabilities.find((c) => c.slug === slug);
}
