"use client";

import { profile } from "@/data/profile";
import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-50" />

      <div className="relative mx-auto max-w-4xl px-6 py-10 text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary animate-pulse-soft" />
          <span>
            &copy; {new Date().getFullYear()} {profile.nameEn}
          </span>
          <span className="text-muted-foreground/50">·</span>
          <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400 animate-pulse-soft" />
        </p>

        <p className="mt-3 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300">
          {profile.domain}
        </p>
      </div>
    </footer>
  );
}
