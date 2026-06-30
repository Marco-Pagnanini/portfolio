"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#stack", label: "Stack" },
  { href: "/#progetti", label: "Progetti" },
  { href: "/#architettura", label: "Architettura" },
  { href: "/#percorso", label: "Percorso" },
  { href: "/#contatti", label: "Contatti" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-white to-neutral-400 font-bold text-black">
            M
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            Marco Pagnanini
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contatti"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Parliamone
        </a>
      </div>
    </header>
  );
}
