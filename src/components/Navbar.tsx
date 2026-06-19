"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export function Navbar({ fixed = false }: { fixed?: boolean }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        fixed ? "fixed" : "sticky",
        "top-0 z-50 w-full",
        isHome
          ? "bg-transparent"
          : "border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <nav className="flex h-16 items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2 name-artistic text-2xl hover:opacity-80 transition-all duration-300"
        >
          <Sparkles className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-soft" />
          EvanYao
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-base font-medium",
                  "transition-all duration-300 ease-out",
                  isHome
                    ? pathname === link.href
                      ? "text-primary bg-white/20"
                      : "text-foreground/80 hover:text-foreground hover:bg-white/10"
                    : pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {link.label}
                {/* Active indicator */}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-pulse-soft" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu links={navLinks} />
      </nav>
    </header>
  );
}
