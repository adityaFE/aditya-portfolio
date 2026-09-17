import ProjectReel from "../customComponents/ProjectReel";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background/50">
      <ProjectReel projects={projects} />
    </section>
  );
}
