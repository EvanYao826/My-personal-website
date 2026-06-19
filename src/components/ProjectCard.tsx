"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, GitFork } from "lucide-react";
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

const accentGradientMap = {
  blue: "from-blue-500/20 via-blue-500/5 to-transparent",
  purple: "from-purple-500/20 via-purple-500/5 to-transparent",
  green: "from-emerald-500/20 via-emerald-500/5 to-transparent",
};

export function ProjectCard({
  project,
  accentColor = "blue",
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden glass-card card-hover-lift gradient-border",
        accentMap[accentColor]
      )}
    >
      {/* Gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          accentGradientMap[accentColor]
        )}
      />

      <CardHeader className="relative">
        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal transition-all duration-300 group-hover:scale-105"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-4 flex gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                  "text-sm font-medium text-muted-foreground",
                  "bg-secondary/50 hover:bg-primary hover:text-primary-foreground",
                  "transition-all duration-300 hover:scale-105"
                )}
              >
                <GitFork className="h-4 w-4" />
                Source
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                  "text-sm font-medium text-muted-foreground",
                  "bg-secondary/50 hover:bg-primary hover:text-primary-foreground",
                  "transition-all duration-300 hover:scale-105"
                )}
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
