import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const accentColors: ("blue" | "purple" | "green")[] = [
  "blue",
  "purple",
  "green",
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Projects</h1>
        <p className="text-muted-foreground">
          A selection of projects I&apos;ve worked on.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            accentColor={accentColors[i % accentColors.length]}
          />
        ))}
      </div>
    </div>
  );
}
