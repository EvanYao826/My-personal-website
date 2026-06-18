"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/projects", label: "项目" },
  { href: "/contact", label: "联系" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight hover:text-primary transition-colors"
        >
          Evan Yao
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm transition-all",
                  pathname === link.href
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu links={navLinks} />
      </nav>
    </header>
  );
}
