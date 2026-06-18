import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
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

const accentColors: ("blue" | "purple" | "green")[] = ["blue", "purple"];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <HeroSection />

      {/* 亮点 */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-10 text-center">
          亮点
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {profile.highlights.map((h) => (
            <Card
              key={h.title}
              className="border-border/60 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {iconMap[h.icon]}
                </div>
                <CardTitle className="text-base">{h.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {h.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 精选项目 */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-10 text-center">
            精选项目
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                accentColor={accentColors[i % accentColors.length]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-10 text-center">
          技术栈
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    category={cat.category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
