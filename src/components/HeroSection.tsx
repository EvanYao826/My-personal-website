"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";
import { Sparkles, MapPin, GraduationCap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-gradient relative">
      {/* Floating decorative orbs */}
      <div className="floating-orb w-32 h-32 bg-primary/30 top-20 left-10" />
      <div className="floating-orb w-24 h-24 bg-purple-500/30 top-40 right-20 animation-delay-200" />
      <div className="floating-orb w-20 h-20 bg-emerald-500/20 bottom-20 left-1/3 animation-delay-400" />

      {/* Dots pattern overlay */}
      <div className="absolute inset-0 dots-pattern opacity-50" />

      <div className="relative flex flex-col items-center text-center py-28 px-6">
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
          <p className="mt-3 text-xl text-muted-foreground font-light tracking-wide">
            {profile.nameEn}
          </p>
        </div>

        {/* Title and info with icons */}
        <div className="animate-fade-in-up animation-delay-200 mt-8 flex flex-col items-center gap-2">
          <p className="text-lg text-primary font-medium">{profile.title}</p>
          <p className="text-lg text-muted-foreground">{profile.subtitle}</p>

          {/* Education info with icon */}
          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground/80">
            <GraduationCap className="h-4 w-4" />
            <span>{profile.university}</span>
            <span className="text-muted-foreground/50">·</span>
            <span>{profile.major}</span>
            <span className="text-muted-foreground/50">·</span>
            <span>{profile.grade}</span>
          </div>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up animation-delay-300 mt-10">
          <SocialLinks links={profile.social} />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-fade-in-up animation-delay-500">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <span className="text-xs">向下滚动探索</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
