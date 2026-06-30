import type { ProjectGraph } from "@/lib/portfolio-data";

export function ServiceGraph({ graph }: { graph: ProjectGraph }) {
  const nodeById = (id: string) => graph.nodes.find((n) => n.id === id);

  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-dashed border-white/15 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.06),transparent_60%)] sm:h-[340px]">
      <span className="absolute left-4 top-3 z-10 flex items-center gap-2 font-mono text-xs text-emerald-400/80">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {graph.title}
      </span>

      {/* Edges */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {graph.edges.map((e, i) => {
          const a = nodeById(e.from);
          const b = nodeById(e.to);
          if (!a || !b) return null;
          return (
            <line
              key={`${e.from}-${e.to}-${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(52,211,153,0.35)"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {graph.nodes.map((n) => (
        <div
          key={n.id}
          className="absolute z-[2] -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black px-3 py-1.5 font-mono text-sm font-medium text-white shadow-lg shadow-black/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
