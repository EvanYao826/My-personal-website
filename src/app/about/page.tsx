"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/ProjectCard";
import { MagneticCard } from "@/components/interactive";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { SkillBadge } from "@/components/SkillBadge";
import { Server, Brain, BookOpen, Monitor, Sparkles, GitBranch, PenLine } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-5 w-5" />,
  "git-branch": <GitBranch className="h-5 w-5" />,
  "pen-line": <PenLine className="h-5 w-5" />,
};

const whatIDo = [
  {
    icon: <Server className="h-5 w-5" />,
    title: "后端架构",
    techs: "Java / SpringBoot / Redis / MySQL",
    desc: "构建稳健、可扩展的后端系统，遵循清晰架构和最佳实践。",
    accent: "card-accent-blue",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "AI 与 Agent 系统",
    techs: "Python / LangChain / LangChain4j / Dify",
    desc: "设计多层 Agent 编排架构，专注于性能优化和流式传输。",
    accent: "card-accent-purple",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "开源与写作",
    techs: "Dify / LangChain4j / CSDN",
    desc: "参与开源项目贡献，通过 100+ 篇博客文章分享技术见解。",
    accent: "card-accent-green",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "前端开发",
    techs: "React / Next.js / TypeScript / Tailwind CSS",
    desc: "打造现代、响应式的用户界面，注重开发体验。",
    accent: "card-accent-blue",
  },
];

const accentColors: ("blue" | "purple" | "green")[] = ["blue", "purple"];

const highlightGradients = [
  "from-blue-500/10 to-blue-500/5",
  "from-purple-500/10 to-purple-500/5",
  "from-emerald-500/10 to-emerald-500/5",
];

export default function About() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* 头部信息 */}
      <section className="flex flex-col sm:flex-row items-start gap-8">
        <Avatar className="h-28 w-28 shrink-0 avatar-glow">
          <AvatarImage src={profile.avatar} alt={profile.nameEn} />
          <AvatarFallback className="text-3xl bg-primary/10 text-primary font-semibold">
            {profile.nameEn.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {profile.name}{" "}
            <span className="text-muted-foreground font-light">
              {profile.nameEn}
            </span>
          </h1>
          <p className="mt-1 text-primary font-medium">
            {profile.title} · {profile.subtitle}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.university} · {profile.major} · {profile.grade}
          </p>
          <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
            {profile.bio}
          </p>
        </div>
      </section>

      <div className="my-12 h-px bg-border/60" />

      {/* 亮点 */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 py-12 relative">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
              <Sparkles className="inline-block mr-2 h-5 w-5 text-primary animate-pulse-soft" />
              亮点
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {profile.highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 100}>
                <MagneticCard intensity={0.2}>
                  <Card
                    className={cn(
                      "group relative overflow-hidden glass-card card-hover-lift",
                      "border-border/60"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        highlightGradients[i]
                      )}
                    />

                    <CardHeader className="pb-3 relative">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
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
                </MagneticCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="my-12 h-px bg-border/60" />

      {/* 我在做什么 */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          我在做什么
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {whatIDo.map((item) => (
            <MagneticCard key={item.title} intensity={0.15}>
              <Card
                className={`${item.accent} border-border/60 hover:shadow-md transition-all hover:-translate-y-0.5`}
              >
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    {item.icon}
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-primary font-medium mb-2">
                    {item.techs}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </MagneticCard>
          ))}
        </div>
      </section>

      <div className="my-12 h-px bg-border/60" />

      {/* 精选项目 */}
      <section>
        <ScrollReveal>
          <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
            精选项目
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 150}>
              <MagneticCard intensity={0.15}>
                <ProjectCard
                  project={project}
                  accentColor={accentColors[i % accentColors.length]}
                />
              </MagneticCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="my-12 h-px bg-border/60" />

      {/* 技能 */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          技能
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

      <div className="my-12 h-px bg-border/60" />

      {/* 目标 */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
          目标
        </h2>
        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
            &ldquo;成为一名 AI 全栈工程师和独立开发者，致力于用优雅、可维护的代码构建实用的产品。&rdquo;
          </blockquote>
        </div>
      </section>
    </div>
  );
}
