"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagneticCard } from "@/components/interactive";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function LifePhilosophy() {
  const { life, quote } = profile;

  return (
    <section>
      <ScrollReveal>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          编程之外
        </h2>
      </ScrollReveal>

      {/* Three columns: Sports, Reading, Quote */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Sports */}
        <ScrollReveal delay={0}>
          <MagneticCard intensity={0.1}>
            <Card className="glass-card card-hover-lift h-full border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <span>⚽</span> 运动
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {life.sports.map((sport) => (
                    <span
                      key={sport}
                      className="text-sm px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MagneticCard>
        </ScrollReveal>

        {/* Reading */}
        <ScrollReveal delay={100}>
          <MagneticCard intensity={0.1}>
            <Card className="glass-card card-hover-lift h-full border-border/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <span>📖</span> 阅读
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  {life.reading.map((book) => (
                    <span
                      key={book}
                      className="text-sm px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {book}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MagneticCard>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal delay={200}>
          <MagneticCard intensity={0.1}>
            <Card className="glass-card card-hover-lift h-full border-border/60 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <span>💭</span> 思考
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="relative">
                  {/* Quote marks */}
                  <div className="text-4xl text-primary/20 font-serif leading-none mb-2">
                    &ldquo;
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic whitespace-pre-line">
                    {quote}
                  </p>
                  <div className="text-4xl text-primary/20 font-serif leading-none mt-2 text-right">
                    &rdquo;
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </MagneticCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
