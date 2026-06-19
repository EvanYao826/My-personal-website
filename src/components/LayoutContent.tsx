"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";
import { BackToTop } from "./BackToTop";
import { InteractiveBackground } from "./interactive";

export function LayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <div className="h-screen overflow-hidden relative">
        <InteractiveBackground />
        <Navbar fixed />
        <PageTransition>{children}</PageTransition>
      </div>
    );
  }

  const isContact = pathname === "/contact";

  return (
    <>
      <InteractiveBackground />
      <Navbar fixed />
      <main className="relative z-10 pt-16">
        <PageTransition>{children}</PageTransition>
      </main>
      {!isContact && <Footer />}
      {!isContact && <BackToTop />}
    </>
  );
}
