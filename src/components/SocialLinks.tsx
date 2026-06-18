import Link from "next/link";
import { GitFork, FileText, Mail, Globe } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links: {
    github?: string;
    csdn?: string;
    email?: string;
    website?: string;
  };
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3">
      {links.github && (
        <Link
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          )}
        >
          <GitFork className="mr-1.5 h-4 w-4" />
          GitHub
        </Link>
      )}
      {links.csdn && (
        <Link
          href={links.csdn}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          )}
        >
          <FileText className="mr-1.5 h-4 w-4" />
          CSDN
        </Link>
      )}
      {links.email && (
        <Link
          href={`mailto:${links.email}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          )}
        >
          <Mail className="mr-1.5 h-4 w-4" />
          Email
        </Link>
      )}
      {links.website && (
        <Link
          href={links.website}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          )}
        >
          <Globe className="mr-1.5 h-4 w-4" />
          Website
        </Link>
      )}
    </div>
  );
}
