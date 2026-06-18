import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-4xl px-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {profile.nameEn}. Built with
          Next.js &amp; Tailwind CSS.
        </p>
        <p className="mt-1">{profile.domain}</p>
      </div>
    </footer>
  );
}
