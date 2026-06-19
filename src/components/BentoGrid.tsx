"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MagneticCard } from "@/components/interactive";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const bentoStyles = [
  {
    gradient: "from-blue-500/8 to-blue-500/[0.02]",
    hoverGradient: "from-blue-500/15 to-blue-500/5",
    dot: "bg-blue-500",
    span: "",
  },
  {
    gradient: "from-violet-500/8 to-violet-500/[0.02]",
    hoverGradient: "from-violet-500/15 to-violet-500/5",
    dot: "bg-violet-500",
    span: "",
  },
  {
    gradient: "from-emerald-500/8 to-emerald-500/[0.02]",
    hoverGradient: "from-emerald-500/15 to-emerald-500/5",
    dot: "bg-emerald-500",
    span: "col-span-2",
  },
  {
    gradient: "from-amber-500/8 to-amber-500/[0.02]",
    hoverGradient: "from-amber-500/15 to-amber-500/5",
    dot: "bg-amber-500",
    span: "col-span-2",
  },
];

export function BentoGrid() {
  const bentoItems = profile.bento;

  return (
    <section>
      <ScrollReveal>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          🚀 现在正在做什么
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        {bentoItems.map((item, index) => {
          const style = bentoStyles[index];
          return (
            <ScrollReveal key={item.title} delay={index * 80}>
              <MagneticCard intensity={0.12}>
                <Card
                  className={cn(
                    "group relative overflow-hidden border-border/40",
                    "glass-card card-hover-lift",
                    style.span
                  )}
                >
                  {/* Base gradient background */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
                      style.gradient,
                      "group-hover:opacity-0"
                    )}
                  />
                  {/* Hover gradient */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      style.hoverGradient
                    )}
                  />

                  <CardContent className="relative p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className={cn("w-2 h-2 rounded-full", style.dot)} />
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="font-bold text-base tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className={cn(
                      index === 1 ? "grid grid-cols-3 gap-2.5" : "space-y-3"
                    )}>
                      {item.items.map((subItem) => (
                        <div
                          key={subItem.name}
                          className={cn(
                            index === 1 && "rounded-lg bg-muted/40 p-2.5 border border-border/30"
                          )}
                        >
                          <span className={cn(
                            "font-semibold text-sm",
                            index === 1 ? "text-violet-600 dark:text-violet-400" : "text-foreground/90"
                          )}>
                            {subItem.name}
                          </span>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {subItem.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MagneticCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
