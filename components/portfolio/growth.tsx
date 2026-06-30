import { Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/reveal";
import { growth, profile } from "@/lib/portfolio-data";

export function Growth() {
  return (
    <section id="percorso" className="relative border-t border-white/5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Percorso di Crescita"
              title="Verso il livello senior / staff"
            />
            <p className="mt-6 text-neutral-400">{profile.bio}</p>
            <p className="mt-4 text-neutral-400">{profile.bioExtra}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {growth.map((g, i) => (
                <li
                  key={g}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20">
                    <Sparkles className="h-4 w-4 text-fuchsia-300" />
                  </span>
                  <span className="pt-1 text-sm text-neutral-300">{g}</span>
                  <span className="ml-auto font-mono text-xs text-neutral-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
