import { Github, Mail, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Reveal } from "@/components/portfolio/reveal";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contatti" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Card className="relative overflow-hidden border-white/10 bg-black/[0.96] p-10 sm:p-16">
            <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
            <div className="relative">
              <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Costruiamo qualcosa di{" "}
                <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  production-ready
                </span>
                .
              </h2>
              <p className="mt-5 max-w-lg text-neutral-400">
                Sei un&apos;azienda o un team alla ricerca di un full-stack
                developer che ragiona in termini di sistemi? Scrivimi.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  Marco-Pagnanini
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-neutral-500 sm:flex-row">
          <span>© {2026} {profile.name}. Costruito con Next.js & Spline.</span>
          <span className="font-mono text-xs">Full-Stack Developer</span>
        </div>
      </div>
    </section>
  );
}
