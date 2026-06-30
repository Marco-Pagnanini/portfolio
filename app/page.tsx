import { SplineSceneBasic } from "@/components/spline-scene-basic";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight">marco.dev</span>
        <nav className="hidden gap-8 text-sm text-neutral-400 md:flex">
          <a href="#work" className="transition-colors hover:text-white">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero with the Spline 3D scene */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-6">
        <SplineSceneBasic />
      </section>
    </main>
  );
}
