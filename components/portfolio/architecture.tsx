import { Reveal, SectionHeading } from "@/components/portfolio/reveal";
import { architecture } from "@/lib/portfolio-data";

export function Architecture() {
  return (
    <section
      id="architettura"
      className="relative border-t border-white/5 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Competenze Architetturali"
            title="Pensare in sistemi, non in funzioni"
            description="Approfondimento attivo su system design e architetture distribuite, applicato direttamente sui progetti personali."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {architecture.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.05}
              className="bg-black"
            >
              <div className="h-full bg-white/[0.02] p-7 transition-colors hover:bg-white/[0.05]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-neutral-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {group.items}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
