"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagneticCard } from "@/components/interactive";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";

const cardGradients = [
  "from-green-500/[0.07] to-transparent",
  "from-blue-500/[0.07] to-transparent",
  "from-purple-500/[0.07] to-transparent",
  "from-orange-500/[0.07] to-transparent",
  "from-red-500/[0.07] to-transparent",
];

function renderContent(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function LifePhilosophy() {
  const { thoughts } = profile;

  return (
    <section>
      <ScrollReveal>
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          💭 编程之外
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        {/* Row 1: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[780px] mx-auto">
          {thoughts.slice(0, 2).map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <MagneticCard intensity={0.1}>
                <Card className="glass-card card-hover-lift h-full border-border/60 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index]} pointer-events-none`} />
                  <CardHeader className="relative pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span>{item.icon}</span> {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {renderContent(item.content)}
                    </p>
                  </CardContent>
                </Card>
              </MagneticCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: 3 cards, wider container so each card is same width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {thoughts.slice(2).map((item, index) => (
            <ScrollReveal key={item.title} delay={(index + 2) * 100}>
              <MagneticCard intensity={0.1}>
                <Card className="glass-card card-hover-lift h-full border-border/60 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index + 2]} pointer-events-none`} />
                  <CardHeader className="relative pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span>{item.icon}</span> {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {renderContent(item.content)}
                    </p>
                  </CardContent>
                </Card>
              </MagneticCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
