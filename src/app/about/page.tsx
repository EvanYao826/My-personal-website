"use client";

import { AboutHero } from "@/components/AboutHero";
import { TimelineStory } from "@/components/TimelineStory";
import { BentoGrid } from "@/components/BentoGrid";
import { TechStackSection } from "@/components/TechStackSection";
import { LifePhilosophy } from "@/components/LifePhilosophy";
import { FutureSection } from "@/components/FutureSection";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-8 sm:py-12">
      {/* Hero */}
      <AboutHero />

      <div className="my-12 h-px bg-border/60" />

      {/* Timeline Story */}
      <ScrollReveal>
        <TimelineStory />
      </ScrollReveal>

      <div className="my-16 h-px bg-border/60" />

      {/* Bento Grid - Now */}
      <ScrollReveal>
        <BentoGrid />
      </ScrollReveal>

      <div className="my-16 h-px bg-border/60" />

      {/* Tech Stack */}
      <ScrollReveal>
        <TechStackSection />
      </ScrollReveal>

      <div className="my-16 h-px bg-border/60" />

      {/* Life & Philosophy */}
      <ScrollReveal>
        <LifePhilosophy />
      </ScrollReveal>

      <div className="my-16 h-px bg-border/60" />

      {/* Future */}
      <ScrollReveal>
        <FutureSection />
      </ScrollReveal>
    </div>
  );
}
