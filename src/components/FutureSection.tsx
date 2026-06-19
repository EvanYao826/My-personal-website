"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const iconMap: Record<string, string> = {
  Github: "github",
  CSDN: "book",
  Email: "mail",
};

export function FutureSection() {
  const { future } = profile;

  return (
    <section className="relative">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto">
          {/* Tagline */}
          <h2 className="text-2xl font-semibold mb-8">
            {future.tagline} <span className="animate-pulse-soft">🌟</span>
          </h2>

          {/* CTA */}
          <p className="text-base sm:text-lg text-muted-foreground italic sm:whitespace-nowrap">
            {future.cta}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
