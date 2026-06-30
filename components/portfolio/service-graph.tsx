"use client";

import { motion } from "framer-motion";
import type { ProjectGraph } from "@/lib/portfolio-data";

export function ServiceGraph({
  graph,
  color,
}: {
  graph: ProjectGraph;
  color: string;
}) {
  const nodeById = (id: string) => graph.nodes.find((n) => n.id === id);
  const edges = graph.edges
    .map((e) => ({ a: nodeById(e.from), b: nodeById(e.to) }))
    .filter((e) => e.a && e.b) as {
    a: NonNullable<ReturnType<typeof nodeById>>;
    b: NonNullable<ReturnType<typeof nodeById>>;
  }[];

  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:h-[360px]">
      {/* themed glow */}
      <div
        className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: `${color}22` }}
      />

      <span className="absolute left-4 top-3 z-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-neutral-400">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        {graph.title}
      </span>

      {/* Edges */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {edges.map((e, i) => (
          <g key={`edge-${i}`}>
            {/* base faint line */}
            <line
              x1={e.a.x}
              y1={e.a.y}
              x2={e.b.x}
              y2={e.b.y}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
            {/* animated traveling dashes */}
            <line
              x1={e.a.x}
              y1={e.a.y}
              x2={e.b.x}
              y2={e.b.y}
              stroke={color}
              strokeWidth={1.5}
              strokeDasharray="4 8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{
                animation: "dash-flow 1s linear infinite",
                animationDelay: `${i * 0.15}s`,
                opacity: 0.9,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Traveling "packet" dots that ride along each edge */}
      {edges.map((e, i) => (
        <motion.span
          key={`packet-${i}`}
          className="absolute z-[3] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px 2px ${color}`,
          }}
          initial={{ left: `${e.a.x}%`, top: `${e.a.y}%`, opacity: 0 }}
          animate={{
            left: [`${e.a.x}%`, `${e.b.x}%`],
            top: [`${e.a.y}%`, `${e.b.y}%`],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}

      {/* Nodes */}
      {graph.nodes.map((n) => (
        <div
          key={n.id}
          className="absolute z-[4] -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/80 px-3.5 py-2 text-sm font-medium text-white shadow-lg shadow-black/50 backdrop-blur">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
