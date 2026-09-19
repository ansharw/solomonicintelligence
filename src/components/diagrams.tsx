import type { ReactNode } from "react";

function Frame({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="border border-line-1 bg-bg-1 p-6 md:p-10">
      {children}
      {label && (
        <p className="mt-4 font-mono-label text-[10px] uppercase text-ink-3">{label}</p>
      )}
    </div>
  );
}

export function GraphDiagram() {
  const nodes = [
    { x: 60, y: 40, label: "Company" },
    { x: 220, y: 40, label: "Facility" },
    { x: 380, y: 40, label: "Permit" },
    { x: 380, y: 130, label: "Authority" },
    { x: 220, y: 175, label: "Regulation" },
    { x: 60, y: 130, label: "Supplier" },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
    [0, 5],
    [5, 1],
  ];
  return (
    <Frame label="Institutional Graph — illustrative structure">
      <svg viewBox="0 0 440 210" className="w-full text-ink-3" fill="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="currentColor"
            strokeOpacity={0.35}
            strokeWidth={1}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={5} className="fill-brass-0" />
            <text
              x={n.x}
              y={n.y - 12}
              textAnchor="middle"
              className="fill-ink-1 font-mono-label"
              fontSize="10"
              letterSpacing="0.04em"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </Frame>
  );
}

export function TreeDiagram() {
  return (
    <Frame label="Decision Tree — illustrative structure">
      <svg viewBox="0 0 440 200" className="w-full text-ink-3" fill="none">
        <line x1="220" y1="20" x2="80" y2="100" stroke="currentColor" strokeOpacity={0.35} />
        <line x1="220" y1="20" x2="220" y2="100" stroke="currentColor" strokeOpacity={0.35} />
        <line x1="220" y1="20" x2="360" y2="100" stroke="currentColor" strokeOpacity={0.35} />
        <line x1="80" y1="100" x2="40" y2="175" stroke="currentColor" strokeOpacity={0.25} />
        <line x1="80" y1="100" x2="120" y2="175" stroke="currentColor" strokeOpacity={0.25} />
        <line x1="360" y1="100" x2="320" y2="175" stroke="currentColor" strokeOpacity={0.25} />
        <line x1="360" y1="100" x2="400" y2="175" stroke="currentColor" strokeOpacity={0.25} />
        <circle cx="220" cy="20" r="6" className="fill-brass-0" />
        <text x="220" y="8" textAnchor="middle" fontSize="10" className="fill-ink-1 font-mono-label">Objective</text>
        {[["Option A", 80, 100], ["Option B", 220, 100], ["Option C", 360, 100]].map(([label, x, y]) => (
          <g key={label as string}>
            <circle cx={x as number} cy={y as number} r={5} className="fill-ink-1" />
            <text x={x as number} y={(y as number) + 20} textAnchor="middle" fontSize="9" className="fill-ink-2 font-mono-label">
              {label}
            </text>
          </g>
        ))}
        {[[40, 175], [120, 175], [320, 175], [400, 175]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={3} className="fill-ink-3" />
        ))}
      </svg>
    </Frame>
  );
}

export function WorkflowDiagram() {
  const steps = ["Signal", "Task", "Approval", "Action", "Audit"];
  return (
    <Frame label="Workflow Sequence — illustrative structure">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className="border border-line-2 px-4 py-3 font-mono-label text-[11px] uppercase text-ink-1">
              {s}
            </div>
            {i < steps.length - 1 && <span className="text-brass-0">→</span>}
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function ScenarioDiagram() {
  return (
    <Frame label="Scenario Comparison — illustrative structure">
      <svg viewBox="0 0 440 170" className="w-full text-ink-3" fill="none">
        <line x1="20" y1="140" x2="140" y2="140" stroke="currentColor" strokeOpacity={0.5} />
        <line x1="140" y1="140" x2="420" y2="40" stroke="currentColor" strokeOpacity={0.4} />
        <line x1="140" y1="140" x2="420" y2="100" stroke="currentColor" strokeOpacity={0.4} />
        <line x1="140" y1="140" x2="420" y2="150" stroke="currentColor" strokeOpacity={0.4} />
        <circle cx="140" cy="140" r="5" className="fill-brass-0" />
        <text x="140" y="158" textAnchor="middle" fontSize="9" className="fill-ink-2 font-mono-label">Present</text>
        {[["Scenario A", 420, 40], ["Scenario B", 420, 100], ["Scenario C", 420, 150]].map(([label, x, y]) => (
          <g key={label as string}>
            <circle cx={x as number} cy={y as number} r={4} className="fill-ink-1" />
            <text x={(x as number) - 8} y={(y as number) - 8} textAnchor="end" fontSize="9" className="fill-ink-2 font-mono-label">
              {label}
            </text>
          </g>
        ))}
      </svg>
    </Frame>
  );
}

export function LedgerDiagram() {
  const entries = [
    { t: "T+00:00", label: "Submission received" },
    { t: "T+00:14", label: "Requirements verified" },
    { t: "T+02:40", label: "Reviewed — Officer 114" },
    { t: "T+03:05", label: "Approved" },
  ];
  return (
    <Frame label="Audit Timeline — illustrative structure">
      <ul className="space-y-0">
        {entries.map((e, i) => (
          <li key={e.t} className="relative flex gap-4 pb-6 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="h-2 w-2 shrink-0 rounded-full bg-brass-0" />
              {i < entries.length - 1 && <span className="mt-1 w-px flex-1 bg-line-2" />}
            </div>
            <div className="flex-1 pt-[-2px]">
              <p className="font-mono-label text-[10px] uppercase text-ink-3">{e.t}</p>
              <p className="text-sm text-ink-1">{e.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function OrchestrationDiagram() {
  const models = ["Commercial Model", "Private Model", "Local Model"];
  return (
    <Frame label="Orchestration Layer — illustrative structure">
      <svg viewBox="0 0 440 180" className="w-full text-ink-3" fill="none">
        <circle cx="220" cy="150" r="60" stroke="currentColor" strokeOpacity={0.2} />
        <line x1="220" y1="150" x2="60" y2="30" stroke="currentColor" strokeOpacity={0.35} />
        <line x1="220" y1="150" x2="220" y2="20" stroke="currentColor" strokeOpacity={0.35} />
        <line x1="220" y1="150" x2="380" y2="30" stroke="currentColor" strokeOpacity={0.35} />
        <circle cx="220" cy="150" r="7" className="fill-brass-0" />
        <text x="220" y="150" dy="26" textAnchor="middle" fontSize="9" className="fill-ink-2 font-mono-label">
          Institutional Graph
        </text>
        {[[60, 30], [220, 20], [380, 30]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={5} className="fill-ink-1" />
            <text x={x} y={y - 10} textAnchor="middle" fontSize="9" className="fill-ink-2 font-mono-label">
              {models[i]}
            </text>
          </g>
        ))}
      </svg>
    </Frame>
  );
}
