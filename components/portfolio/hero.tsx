"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { profile, stats, orbitingTech, type Tech } from "@/lib/portfolio-data";

// Fixed positions (in %) so the floating logos stay deterministic and
// ring the robot without covering its center.
const chipPositions = [
  { top: "6%", left: "4%" },
  { top: "2%", left: "40%" },
  { top: "8%", left: "72%" },
  { top: "22%", left: "90%" },
  { top: "40%", left: "2%" },
  { top: "50%", left: "92%" },
  { top: "68%", left: "6%" },
  { top: "84%", left: "20%" },
  { top: "88%", left: "54%" },
  { top: "72%", left: "84%" },
  { top: "30%", left: "20%" },
  { top: "58%", left: "30%" },
  { top: "18%", left: "56%" },
];

function FloatingLogo({
  tech,
  position,
  index,
}: {
  tech: Tech;
  position: { top: string; left: string };
  index: number;
}) {
  return (
    <motion.div
      className="group pointer-events-auto absolute hidden lg:block"
      style={{ top: position.top, left: position.left }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, index % 2 === 0 ? -10 : 10, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: 0.9 + index * 0.07 },
        scale: { duration: 0.6, delay: 0.9 + index * 0.07 },
        y: {
          duration: 4 + (index % 4),
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        },
      }}
    >
      <div className="flex items-center gap-2">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-white/30 group-hover:bg-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tech.logo}
            alt={tech.name}
            className="h-6 w-6 object-contain"
            loading="lazy"
          />
        </span>
        <span className="whitespace-nowrap rounded-full border border-white/10 bg-black/60 px-2 py-0.5 text-[11px] font-medium text-neutral-200 opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-black pt-24"
    >
      {/* Grid + glow background (full bleed) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_at_60%_40%,black_55%,transparent_90%)]" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-20" fill="white" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-[88rem] grid-cols-1 items-center gap-8 px-6 pb-12 sm:px-10 lg:grid-cols-12 lg:gap-6">
        {/* Left — intro */}
        <div className="z-10 lg:col-span-5">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Disponibile per nuove opportunità
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md text-neutral-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#progetti"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Guarda i progetti
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contattami
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-white">{s.value}</dt>
                <dd className="mt-0.5 text-xs text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right — large 3D robot with the stack logos floating around it */}
        <div className="relative h-[460px] w-full sm:h-[560px] lg:col-span-7 lg:h-[78vh]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />

          {/* Floating tech logos */}
          {orbitingTech.map((tech, i) => (
            <FloatingLogo
              key={tech.name}
              tech={tech}
              position={chipPositions[i % chipPositions.length]}
              index={i}
            />
          ))}

          <span className="pointer-events-none absolute bottom-2 right-2 hidden text-[11px] font-mono uppercase tracking-widest text-neutral-600 lg:block">
            il mio stack, in azione →
          </span>
        </div>
      </div>
    </section>
  );
}
