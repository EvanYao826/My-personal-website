"use client";

import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { profile } from "@/data/profile";
import { Brain, GitBranch, PenLine, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-5 w-5" />,
  "git-branch": <GitBranch className="h-5 w-5" />,
  "pen-line": <PenLine className="h-5 w-5" />,
};

const accentColors: ("blue" | "purple" | "green")[] = ["blue", "purple"];

const highlightGradients = [
  "from-blue-500/10 to-blue-500/5",
  "from-purple-500/10 to-purple-500/5",
  "from-emerald-500/10 to-emerald-500/5",
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="page-content-gradient">
      <HeroSection />

      {/* 亮点 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <div className="mx-auto max-w-4xl px-6 py-24 relative">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight mb-12 text-center">
              <Sparkles className="inline-block mr-2 h-5 w-5 text-primary animate-pulse-soft" />
              亮点
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {profile.highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 100}>
                <Card
                  className={cn(
                    "group relative overflow-hidden glass-card card-hover-lift",
                    "border-border/60"
                  )}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      highlightGradients[i]
                    )}
                  />

                  <CardHeader className="pb-3 relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {iconMap[h.icon]}
                    </div>
                    <CardTitle className="text-base group-hover:text-primary transition-colors duration-300">
                      {h.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {h.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 精选项目 */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight mb-12 text-center">
              精选项目
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 150}>
                <ProjectCard
                  project={project}
                  accentColor={accentColors[i % accentColors.length]}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <div className="mx-auto max-w-4xl px-6 py-24 relative">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight mb-12 text-center">
              技术栈
            </h2>
          </ScrollReveal>

          <div className="grid gap-10 sm:grid-cols-2">
            {skillCategories.map((cat, i) => (
              <ScrollReveal key={cat.category} delay={i * 100}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, j) => (
                      <SkillCard
                        key={skill}
                        name={skill}
                        category={cat.category}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
