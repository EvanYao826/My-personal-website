"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagneticCard } from "@/components/interactive";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SkillBadge } from "@/components/SkillBadge";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Backend: "border-l-blue-500",
  "AI / Agent": "border-l-purple-500",
  Frontend: "border-l-emerald-500",
  DevOps: "border-l-orange-500",
};

const gradientColors: Record<string, string> = {
  Backend: "from-blue-500/10 to-blue-500/5",
  "AI / Agent": "from-purple-500/10 to-purple-500/5",
  Frontend: "from-emerald-500/10 to-emerald-500/5",
  DevOps: "from-orange-500/10 to-orange-500/5",
};

export function TechStackSection() {
  return (
    <section>
      <ScrollReveal>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          🛠️ 技术栈
        </h2>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
        {skillCategories.map((cat, catIndex) => (
          <ScrollReveal key={cat.category} delay={catIndex * 100}>
            <MagneticCard intensity={0.1}>
              <Card
                className={cn(
                  "glass-card card-hover-lift overflow-hidden h-full",
                  "border-border/60 border-l-4",
                  categoryColors[cat.category]
                )}
              >
                {/* Background gradient */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-50",
                    gradientColors[cat.category]
                  )}
                />

                <CardHeader className="relative pb-2">
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <CardTitle className="text-base">{cat.category}</CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <SkillBadge key={skill} name={skill} category={cat.category} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MagneticCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
