import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { SkillBadge } from "@/components/SkillBadge";
import { Server, Brain, BookOpen, Monitor } from "lucide-react";

const whatIDo = [
  {
    icon: <Server className="h-5 w-5" />,
    title: "Backend Architecture",
    techs: "Java / SpringBoot / Redis / MySQL",
    desc: "Building robust, scalable backend systems with clean architecture and best practices.",
    accent: "card-accent-blue",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "AI & Agent Systems",
    techs: "Python / LangChain / LangChain4j / Dify",
    desc: "Designing multi-layer Agent orchestration architectures with focus on performance and streaming.",
    accent: "card-accent-purple",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Open Source & Writing",
    techs: "Dify / LangChain4j / CSDN",
    desc: "Contributing to open-source projects and sharing technical insights through 100+ blog articles.",
    accent: "card-accent-green",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Frontend Development",
    techs: "React / Next.js / TypeScript / Tailwind CSS",
    desc: "Crafting modern, responsive user interfaces with a focus on developer experience.",
    accent: "card-accent-blue",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
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

      {/* What I Do */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          What I Do
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {whatIDo.map((item) => (
            <Card
              key={item.title}
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
          ))}
        </div>
      </section>

      <div className="my-12 h-px bg-border/60" />

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          Skills
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

      {/* Goals */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
          Goals
        </h2>
        <div className="bg-muted/40 rounded-xl p-8 text-center">
          <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
            &ldquo;Becoming an AI full-stack engineer and independent developer
            who builds practical products with elegant, maintainable code.&rdquo;
          </blockquote>
        </div>
      </section>
    </div>
  );
}
