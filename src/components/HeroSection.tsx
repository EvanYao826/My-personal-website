import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="hero-gradient">
      <div className="flex flex-col items-center text-center py-24 px-6">
        <div className="animate-fade-in-up">
          <Avatar className="h-28 w-28 mb-8 avatar-glow">
            <AvatarImage src={profile.avatar} alt={profile.nameEn} />
            <AvatarFallback className="text-3xl bg-primary/10 text-primary font-semibold">
              {profile.nameEn.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="animate-fade-in-up animation-delay-100">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-xl text-muted-foreground font-light">
            {profile.nameEn}
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-200 mt-6 flex flex-col items-center gap-1">
          <p className="text-lg text-primary font-medium">{profile.title}</p>
          <p className="text-lg text-muted-foreground">{profile.subtitle}</p>
          <p className="mt-2 text-sm text-muted-foreground/80">
            {profile.university} · {profile.major} · {profile.grade}
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-300 mt-8">
          <SocialLinks links={profile.social} />
        </div>
      </div>
    </section>
  );
}
