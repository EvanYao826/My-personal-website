import Link from "next/link";
import { GitFork, FileText, Mail, Globe } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: profile.social.email,
    href: `mailto:${profile.social.email}`,
    accent: "card-accent-blue",
  },
  {
    icon: <GitFork className="h-5 w-5" />,
    label: "GitHub",
    value: "EvanYao826",
    href: profile.social.github,
    accent: "card-accent-purple",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "CSDN",
    value: "100+ articles, 100k+ views",
    href: profile.social.csdn,
    accent: "card-accent-green",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: "Website",
    value: profile.domain,
    href: profile.social.website,
    accent: "card-accent-blue",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Get in Touch
        </h1>
        <p className="text-muted-foreground">
          Feel free to reach out for collaboration, opportunities, or just a
          chat.
        </p>
      </div>

      <div className="grid gap-4">
        {contactItems.map((item) => (
          <Card
            key={item.label}
            className={`${item.accent} border-border/60 hover:shadow-md transition-all hover:-translate-y-0.5`}
          >
            <CardContent className="flex items-center gap-4 py-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-full hover:bg-primary hover:text-primary-foreground"
                )}
              >
                Visit →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`mailto:${profile.social.email}`}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-8"
          )}
        >
          <Mail className="mr-2 h-4 w-4" />
          Send me an email
        </Link>
      </div>
    </div>
  );
}
