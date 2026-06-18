import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { SkillBadge } from "@/components/SkillBadge";

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <section className="flex flex-col sm:flex-row items-start gap-8">
        <Avatar className="h-28 w-28 shrink-0">
          <AvatarImage src={profile.avatar} alt={profile.nameEn} />
          <AvatarFallback className="text-3xl">
            {profile.nameEn.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {profile.name}{" "}
            <span className="text-muted-foreground font-normal">
              {profile.nameEn}
            </span>
          </h1>
          <p className="mt-1 text-muted-foreground">
            {profile.title} · {profile.subtitle}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.university} · {profile.major} · {profile.grade}
          </p>
          <p className="mt-4 text-sm leading-relaxed whitespace-pre-line">
            {profile.bio}
          </p>
        </div>
      </section>

      <Separator className="my-12" />

      {/* What I Do */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-6">
          What I Do
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Backend Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Java / SpringBoot / Redis / MySQL
              </p>
              <p className="text-sm text-muted-foreground">
                Building robust, scalable backend systems with clean
                architecture and best practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                AI &amp; Agent Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Python / LangChain / LangChain4j / Dify
              </p>
              <p className="text-sm text-muted-foreground">
                Designing multi-layer Agent orchestration architectures with
                focus on performance and streaming.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Open Source &amp; Writing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Dify / LangChain4j / CSDN
              </p>
              <p className="text-sm text-muted-foreground">
                Contributing to open-source projects and sharing technical
                insights through 100+ blog articles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Frontend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                React / Next.js / TypeScript / Tailwind CSS
              </p>
              <p className="text-sm text-muted-foreground">
                Crafting modern, responsive user interfaces with a focus on
                developer experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-6">
          Skills
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

      <Separator className="my-12" />

      {/* Goals */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-4">Goals</h2>
        <blockquote className="border-l-2 pl-4 text-muted-foreground italic">
          &ldquo;Becoming an AI full-stack engineer and independent developer
          who builds practical products with elegant, maintainable code.&rdquo;
        </blockquote>
      </section>
    </div>
  );
}
