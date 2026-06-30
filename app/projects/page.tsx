import { redirect } from "next/navigation";
import { projects } from "@/lib/portfolio-data";

export default function ProjectsIndex() {
  redirect(`/projects/${projects[0].slug}`);
}
