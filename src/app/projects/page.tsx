import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight mb-2">Projects</h1>
      <p className="text-muted-foreground mb-8">
        A selection of projects I&apos;ve worked on.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
