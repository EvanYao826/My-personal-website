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

        <div className="space-y-10">
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
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.items && item.items.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.items.map((listItem) => (
                          <span
                            key={listItem}
                            className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10"
                          >
                            {listItem}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.highlight && (
                      <blockquote className="text-sm text-muted-foreground/80 italic border-l-2 border-primary/40 pl-3 py-1">
                        {item.highlight}
                      </blockquote>
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
