import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { Reveal } from "@/components/portfolio/reveal";
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
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Header */}
        <section className="relative overflow-hidden pt-32">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_at_50%_0%,black_40%,transparent_80%)]" />
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-40" fill="white" />

          <div className="relative mx-auto max-w-7xl px-6">
            {/* Project switcher */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                {projects.map((p) => {
                  const active = p.slug === project.slug;
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="rounded-full border px-3 py-1.5 text-sm font-medium transition-colors"
                      style={
                        active
                          ? {
                              borderColor: `${project.color}66`,
                              backgroundColor: `${project.color}1a`,
                              color: "#fff",
                            }
                          : undefined
                      }
                    >
                      <span
                        className={
                          active
                            ? ""
                            : "text-neutral-400 hover:text-white"
                        }
                      >
                        <span className="font-mono text-xs text-neutral-500">
                          {p.index}
                        </span>{" "}
                        {p.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </Reveal>

            {/* Title block */}
            <Reveal delay={0.05}>
              <div className="mt-10 flex items-start gap-6">
                <span
                  className="bg-gradient-to-b bg-clip-text font-mono text-6xl font-bold leading-none text-transparent sm:text-7xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${project.color}, ${project.color}55)`,
                  }}
                >
                  {project.index}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-neutral-400">
                      {project.categories.map((c, i) => (
                        <span key={c} className="flex items-center gap-2">
                          {c}
                          {i < project.categories.length - 1 ? (
                            <span className="text-neutral-700">·</span>
                          ) : null}
                        </span>
                      ))}
                    </p>
                    <span className="font-mono text-sm text-neutral-500">
                      {project.year}
                    </span>
                  </div>
                  <h1
                    className={`mt-2 bg-gradient-to-br ${project.gradient} bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl`}
                  >
                    {project.name}
                  </h1>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
                {project.description}
              </p>
            </Reveal>

            {/* Graph + spec */}
            <Reveal delay={0.15}>
              <div className="mt-12 grid gap-8 pb-4 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <ServiceGraph graph={project.graph} color={project.color} />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:col-span-5">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">
                    spec
                  </p>
                  <dl className="mt-4 divide-y divide-white/5">
                    {project.specs.map((s) => (
                      <div
                        key={s.k}
                        className="flex items-baseline gap-4 py-2.5 text-sm"
                      >
                        <dt className="w-24 shrink-0 font-mono text-neutral-500">
                          {s.k}
                        </dt>
                        <dd className="text-neutral-200">{s.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Highlights + tags */}
        <section className="border-t border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-neutral-600" />
                Highlights
              </span>
            </Reveal>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.04}>
                  <div className="flex h-full gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/[0.04]">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: project.color }}
                    />
                    <span>{h}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Actions */}
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
                  >
                    Vedi il repository
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-neutral-500">
                    Repository privato
                  </span>
                )}
                <Link
                  href="/#progetti"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Tutti i progetti
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Other projects + prev/next */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                Altri progetti
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href={`/projects/${prev.slug}`}
                  aria-label={`Progetto precedente: ${prev.name}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <Link
                  href={`/projects/${next.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  {next.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} blur-3xl`}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-neutral-500">
                        {p.index}
                      </span>
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <h3 className="font-semibold text-white">{p.name}</h3>
                      <ArrowUpRight className="ml-auto h-4 w-4 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-2 text-sm text-neutral-400">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
