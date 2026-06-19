"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profile } from "@/data/profile";

export function AboutHero() {
  return (
    <section className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 mb-12">
      <Avatar className="h-36 w-36 shrink-0 avatar-glow">
        <AvatarImage src={profile.avatar} alt={profile.name} />
        <AvatarFallback className="text-5xl bg-primary/10 text-primary font-semibold">
          {profile.name.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 pt-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          {profile.name}
        </h1>

        <p className="text-primary font-medium mb-3">
          {profile.title} · {profile.subtitle}
        </p>

        <p className="text-sm text-muted-foreground mb-6">
          {profile.university} · {profile.major} · {profile.grade}
        </p>

        <p className="text-sm text-muted-foreground leading-loose whitespace-pre-line">
          {profile.bio}
        </p>
      </div>
    </section>
  );
}
