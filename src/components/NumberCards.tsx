"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MagneticCard } from "@/components/interactive";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const gradients = [
  "from-blue-500/10 to-blue-500/5",
  "from-purple-500/10 to-purple-500/5",
  "from-emerald-500/10 to-emerald-500/5",
  "from-orange-500/10 to-orange-500/5",
];

export function NumberCards() {
  const numbers = profile.numbers;

  return (
    <section>
      <ScrollReveal>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          值得记录
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {numbers.map((item, index) => (
          <ScrollReveal key={item.label} delay={index * 80}>
            <MagneticCard intensity={0.2}>
              <Card
                className={cn(
                  "group relative overflow-hidden glass-card card-hover-lift text-center",
                  "border-border/60 py-8"
                )}
              >
                {/* Background gradient */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    gradients[index]
                  )}
                />

                <CardContent className="relative">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.label}
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
