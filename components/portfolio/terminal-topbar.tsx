import Link from "next/link";

export function TerminalTopbar() {
  return (
    <div className="sticky top-0 z-50 flex h-12 items-center justify-between border-b border-white/10 bg-black/80 px-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-1 font-mono text-sm text-neutral-400">
          marco@portfolio:
          <span className="text-emerald-400">~/projects</span>
        </span>
      </div>

      <nav className="flex items-center gap-5 font-mono text-sm text-neutral-400">
        <Link href="/" className="transition-colors hover:text-white">
          ~/home
        </Link>
        <Link href="/#stack" className="transition-colors hover:text-white">
          stack
        </Link>
        <Link
          href="/#architettura"
          className="hidden transition-colors hover:text-white sm:inline"
        >
          architecture
        </Link>
        <span className="rounded border border-emerald-400/40 bg-emerald-400/10 px-1.5 py-0.5 text-xs text-emerald-400">
          IT
        </span>
      </nav>
    </div>
  );
}
