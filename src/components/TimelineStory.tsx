"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";

export function TimelineStory() {
  const timeline = profile.timeline;

  return (
    <section className="relative">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          📖 我的故事
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

        <div className="space-y-6 sm:space-y-10">
          {timeline.map((item, index) => (
            <ScrollReveal key={item.year} delay={index * 100}>
              <div className="relative flex gap-6">
                {/* Timeline dot + year */}
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <div className="relative">
                    <div className="w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_10px_var(--primary)] shrink-0" />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-muted-foreground tracking-wider">
                    {item.year}
                  </span>
                </div>

                {/* Card */}
                <Card className="flex-1 relative glass-card card-hover-lift">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-sm text-primary/80 mb-4">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.content}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
