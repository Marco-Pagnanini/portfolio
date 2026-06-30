import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowDown, ArrowUp } from "lucide-react";
import { TerminalTopbar } from "@/components/portfolio/terminal-topbar";
import { ProjectSidebar } from "@/components/portfolio/project-sidebar";
import { ServiceGraph } from "@/components/portfolio/service-graph";
import { projects } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Progetto non trovato" };
  return {
    title: `${project.name} — Marco Pagnanini`,
    description: project.tagline,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-black text-white">
      <TerminalTopbar />

      <div className="mx-auto flex max-w-[100rem] flex-col lg:flex-row">
        <ProjectSidebar activeSlug={project.slug} />

        {/* Detail */}
        <main className="min-w-0 flex-1 px-6 py-10 sm:px-10">
          {/* Header */}
          <div className="flex items-start gap-6">
            <span className="font-mono text-6xl font-bold leading-none text-white/90 sm:text-7xl">
              {project.index}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm font-medium text-emerald-400">
                  {project.categories.map((c, i) => (
                    <span key={c}>
                      {c}
                      {i < project.categories.length - 1 ? (
                        <span className="ml-3 text-neutral-700">·</span>
                      ) : null}
                    </span>
                  ))}
                </p>
                <span className="shrink-0 font-mono text-sm text-neutral-500">
                  {project.year}
                </span>
              </div>
              <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
                {project.name}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
            {project.description}
          </p>

          {/* Graph + spec */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ServiceGraph graph={project.graph} />
            </div>

            <div className="lg:col-span-5">
              <p className="font-mono text-xs text-neutral-500">// spec</p>
              <dl className="mt-3 divide-y divide-white/5">
                {project.specs.map((s) => (
                  <div
                    key={s.k}
                    className="flex items-baseline gap-4 py-2.5 font-mono text-sm"
                  >
                    <dt className="w-24 shrink-0 text-neutral-500">{s.k}</dt>
                    <dd className="text-neutral-200">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-10">
            <p className="font-mono text-xs text-neutral-500">// highlights</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-sm text-neutral-300"
                >
                  <span className="mt-1 font-mono text-emerald-400">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-neutral-300"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-2.5 font-mono text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                view repo <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 font-mono text-sm text-neutral-500">
                repo privato
              </span>
            )}

            <div className="flex items-center gap-2">
              <Link
                href="/"
                aria-label="Torna alla home"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <ArrowUp className="h-4 w-4" />
              </Link>
              <Link
                href={`/projects/${next.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 font-mono text-sm text-white transition-colors hover:bg-white/10"
              >
                next <ArrowDown className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
