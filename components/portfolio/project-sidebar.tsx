import Link from "next/link";
import { cn } from "@/lib/utils";
import { projects, profile } from "@/lib/portfolio-data";

export function ProjectSidebar({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="flex shrink-0 flex-col border-b border-white/10 px-4 py-6 lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
        <span>
          // {String(projects.length).padStart(2, "0")} projects
        </span>
        <span className="hidden lg:inline">↑↓ nav</span>
      </div>

      <nav className="mt-5 flex flex-col gap-2">
        {projects.map((p) => {
          const active = p.slug === activeSlug;
          return (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={cn(
                "rounded-lg border px-4 py-3 transition-colors",
                active
                  ? "border-emerald-400/40 bg-emerald-400/[0.06]"
                  : "border-transparent hover:border-white/10 hover:bg-white/[0.03]"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-neutral-600">
                  {p.index}
                </span>
                <span className="flex items-center gap-2 font-semibold text-white">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      active ? "bg-emerald-400" : "bg-neutral-600"
                    )}
                  />
                  {p.name}
                </span>
              </div>
              <p className="mt-1.5 pl-7 font-mono text-[11px] leading-relaxed text-neutral-500">
                {p.categories.join(" · ")}
              </p>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto hidden pt-8 font-mono text-xs text-neutral-600 lg:block">
        <p className="flex items-center gap-2 text-emerald-400/80">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          all systems live
        </p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-block transition-colors hover:text-neutral-400"
        >
          {profile.githubHandle}
        </a>
      </div>
    </aside>
  );
}
