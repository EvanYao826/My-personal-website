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
  },
  {
    icon: <GitFork className="h-5 w-5" />,
    label: "GitHub",
    value: "EvanYao826",
    href: profile.social.github,
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "CSDN",
    value: "100+ articles, 100k+ views",
    href: profile.social.csdn,
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: "Website",
    value: profile.domain,
    href: profile.social.website,
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight mb-2">Get in Touch</h1>
      <p className="text-muted-foreground mb-8">
        Feel free to reach out for collaboration, opportunities, or just a chat.
      </p>

      <div className="grid gap-4">
        {contactItems.map((item) => (
          <Card key={item.label}>
            <CardContent className="flex items-center gap-4 py-4">
              <div className="text-muted-foreground">{item.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" })
                )}
              >
                Visit →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href={`mailto:${profile.social.email}`}
          className={cn(buttonVariants({ size: "default" }))}
        >
          <Mail className="mr-2 h-4 w-4" />
          Send me an email
        </Link>
      </div>
    </div>
  );
}
