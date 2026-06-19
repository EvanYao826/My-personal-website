"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { FloatingTechIcons } from "./FloatingTechIcons";
import { profile } from "@/data/profile";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-gradient relative h-screen flex items-center justify-center overflow-hidden">
      {/* Floating decorative orbs */}
      <div className="floating-orb w-32 h-32 bg-primary/30 top-20 left-10" />
      <div className="floating-orb w-24 h-24 bg-purple-500/30 top-40 right-20 animation-delay-200" />
      <div className="floating-orb w-20 h-20 bg-emerald-500/20 bottom-20 left-1/3 animation-delay-400" />

      {/* Dots pattern overlay */}
      <div className="absolute inset-0 dots-pattern opacity-50" />

      {/* Floating tech icons */}
      <FloatingTechIcons />

      <div className="relative flex flex-col items-center text-center py-16 px-6">
        {/* Avatar with enhanced animation */}
        <div className="animate-fade-in-up animate-float">
          <div className="relative">
            <Avatar className="h-32 w-32 mb-8 avatar-glow ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
              <AvatarImage src={profile.avatar} alt={profile.nameEn} />
              <AvatarFallback className="text-3xl bg-primary/10 text-primary font-semibold">
                {profile.nameEn.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {/* Sparkle decoration */}
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-primary animate-pulse-soft" />
          </div>
        </div>

        {/* Name with gradient animation */}
        <div className="animate-fade-in-up animation-delay-100">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient-animate">
            {profile.name}
          </h1>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up animation-delay-300 mt-10">
          <SocialLinks links={profile.social} />
        </div>
      </div>
    </section>
  );
}
