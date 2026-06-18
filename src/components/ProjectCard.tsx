import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  accentColor?: "blue" | "purple" | "green";
}

const accentMap = {
  blue: "card-accent-blue",
  purple: "card-accent-purple",
  green: "card-accent-green",
};

export function ProjectCard({
  project,
  accentColor = "blue",
}: ProjectCardProps) {
  return (
    <Card
      className={`transition-all hover:shadow-lg hover:-translate-y-1 border-border/60 ${accentMap[accentColor]}`}
    >
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        {(project.github || project.demo) && (
          <div className="mt-4 flex gap-4 text-sm">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 transition-colors"
              >
                Source →
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 transition-colors"
              >
                Demo →
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
