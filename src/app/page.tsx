import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { profile } from "@/data/profile";
import { Brain, GitBranch, PenLine } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-5 w-5" />,
  "git-branch": <GitBranch className="h-5 w-5" />,
  "pen-line": <PenLine className="h-5 w-5" />,
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <HeroSection />

      <Separator />

      {/* Highlights */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-xl font-semibold tracking-tight mb-8">
          Highlights
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {profile.highlights.map((h) => (
            <Card key={h.title}>
              <CardHeader className="pb-2">
                <div className="text-muted-foreground mb-1">
                  {iconMap[h.icon]}
                </div>
                <CardTitle className="text-base">{h.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {h.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Selected Projects */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-xl font-semibold tracking-tight mb-8">
          Selected Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      {/* Tech Stack */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-xl font-semibold tracking-tight mb-8">
          Tech Stack
        </h2>
        <div className="space-y-6">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
