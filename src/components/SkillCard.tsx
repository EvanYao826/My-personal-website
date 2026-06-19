"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  Dock,
  GitBranch,
  Globe,
  Leaf,
  Server,
  Terminal,
  Cpu,
  Bot,
  FileCode,
} from "lucide-react";

interface SkillIconProps {
  name: string;
  className?: string;
}

const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Java: Cpu,
  SpringBoot: Server,
  Redis: Database,
  MySQL: Database,
  Python: FileCode,
  React: Leaf,
  "Next.js": Globe,
  TypeScript: Code,
  Git: GitBranch,
  Docker: Dock,
  Linux: Terminal,
  LangChain: Bot,
  LangChain4j: Bot,
  Dify: Bot,
};

export function SkillIcon({ name, className }: SkillIconProps) {
  const IconComponent = skillIconMap[name] || Code;

  return <IconComponent className={cn("h-5 w-5", className)} />;
}

interface SkillCardProps {
  name: string;
  category?: string;
}

const categoryStyles: Record<string, string> = {
  Backend: "bg-blue-500/10 text-blue-600 border-blue-200",
  "AI / Agent": "bg-purple-500/10 text-purple-600 border-purple-200",
  Frontend: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  DevOps: "bg-orange-500/10 text-orange-600 border-orange-200",
};

const categoryHoverStyles: Record<string, string> = {
  Backend: "hover:bg-blue-500/20 hover:shadow-blue-500/20",
  "AI / Agent": "hover:bg-purple-500/20 hover:shadow-purple-500/20",
  Frontend: "hover:bg-emerald-500/20 hover:shadow-emerald-500/20",
  DevOps: "hover:bg-orange-500/20 hover:shadow-orange-500/20",
};

export function SkillCard({ name, category }: SkillCardProps) {
  return (
    <div
      className={cn(
        "group inline-flex flex-col items-center gap-2 px-4 py-3 rounded-xl",
        "border transition-all duration-300 ease-out",
        "hover:scale-110 hover:shadow-lg",
        "cursor-default",
        category
          ? categoryStyles[category]
          : "bg-secondary text-secondary-foreground border-border",
        category ? categoryHoverStyles[category] : "hover:bg-secondary/80"
      )}
    >
      <SkillIcon name={name} className="transition-transform duration-300 group-hover:scale-125" />
      <span className="text-xs font-medium">{name}</span>
    </div>
  );
}