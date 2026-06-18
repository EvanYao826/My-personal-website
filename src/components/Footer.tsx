import { profile } from "@/data/profile";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1.5">
          &copy; {new Date().getFullYear()} {profile.nameEn} · 使用{" "}
          <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" /> 和
          Next.js &amp; Tailwind CSS 构建
        </p>
        <p className="mt-2 text-xs opacity-60">{profile.domain}</p>
      </div>
    </footer>
  );
}
