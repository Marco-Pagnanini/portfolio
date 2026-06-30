import { Reveal, SectionHeading } from "@/components/portfolio/reveal";
import { stack } from "@/lib/portfolio-data";

export function TechStack() {
  return (
    <section id="stack" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Stack Tecnico"
            title="Le tecnologie che il robot mette in moto"
            description="Dallo strato mobile fino all'infrastruttura: ogni livello dello stack che uso quotidianamente, dal codice al deploy in produzione."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className={`h-5 w-5 ${category.accent}`} />
                    </span>
                    <h3 className="font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300 transition-colors group-hover:border-white/20"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
