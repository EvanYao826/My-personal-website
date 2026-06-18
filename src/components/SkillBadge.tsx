import { cn } from "@/lib/utils";

const categoryStyles: Record<string, string> = {
  Backend: "skill-backend",
  "AI / Agent": "skill-ai",
  Frontend: "skill-frontend",
  DevOps: "skill-devops",
};

interface SkillBadgeProps {
  name: string;
  category?: string;
}

export function SkillBadge({ name, category }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border transition-transform hover:scale-105",
        category
          ? categoryStyles[category]
          : "bg-secondary text-secondary-foreground border-border"
      )}
    >
      {name}
    </span>
  );
}
