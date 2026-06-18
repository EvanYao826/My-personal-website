import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-20">
      <Avatar className="h-24 w-24 mb-6">
        <AvatarImage src={profile.avatar} alt={profile.nameEn} />
        <AvatarFallback className="text-2xl">
          {profile.nameEn.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {profile.name}{" "}
        <span className="text-muted-foreground font-normal">
          {profile.nameEn}
        </span>
      </h1>

      <p className="mt-3 text-lg text-muted-foreground">{profile.title}</p>
      <p className="text-lg text-muted-foreground">{profile.subtitle}</p>
      <p className="mt-1 text-sm text-muted-foreground">
        {profile.university} · {profile.major} · {profile.grade}
      </p>

      <div className="mt-6">
        <SocialLinks links={profile.social} />
      </div>
    </section>
  );
}
