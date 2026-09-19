const steps = [
  "Observe",
  "Integrate",
  "Structure",
  "Understand",
  "Model",
  "Simulate",
  "Decide",
  "Route",
  "Coordinate",
  "Execute",
  "Audit",
  "Learn",
];

export function SolomonicLoop({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-thin">
      <ol
        className={`flex min-w-max items-stretch gap-0 font-mono-label text-[11px] uppercase ${
          compact ? "text-ink-3" : "text-ink-2"
        }`}
      >
        {steps.map((step, i) => (
          <li key={step} className="flex items-center">
            <div
              className={`flex flex-col items-center gap-2 border border-line-1 px-4 py-3 md:px-5 md:py-4 ${
                i === 0 || i === steps.length - 1 ? "border-brass-1/60" : ""
              }`}
            >
              <span className="text-ink-3">{String(i + 1).padStart(2, "0")}</span>
              <span className="whitespace-nowrap text-ink-0">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="mx-1 text-brass-0/70 md:mx-2" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
