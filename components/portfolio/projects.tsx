import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/reveal";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="progetti" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Progetti"
            title="Sistemi reali, non demo"
            description="Tre progetti che coprono mobile, backend distribuito, infrastruttura e machine learning — ognuno pensato e portato fino alla produzione. Apri la scheda per i dettagli."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20">
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} blur-3xl`}
                />
                <div className="relative grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <div className="flex items-start justify-between gap-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-2xl font-bold text-white transition-colors hover:text-emerald-300"
                      >
                        {project.name}
                      </Link>
                      <Link
                        href={`/projects/${project.slug}`}
                        aria-label={`Apri la scheda di ${project.name}`}
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <p className="mt-2 text-sm font-medium text-neutral-400">
                      {project.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 6).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                      >
                        Apri scheda
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
                        >
                          Repo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <ul className="space-y-3 lg:col-span-7">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-neutral-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
