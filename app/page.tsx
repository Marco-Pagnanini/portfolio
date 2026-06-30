import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { TechStack } from "@/components/portfolio/tech-stack";
import { Projects } from "@/components/portfolio/projects";
import { Architecture } from "@/components/portfolio/architecture";
import { Growth } from "@/components/portfolio/growth";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <Hero />
        <TechStack />
        <Projects />
        <Architecture />
        <Growth />
        <Contact />
      </main>
    </>
  );
}
