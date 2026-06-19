"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center group"
          aria-label="返回顶部"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${scrollProgress * 1.256} 125.6`}
              className="text-primary-foreground/30 transition-all duration-300"
            />
          </svg>

          {/* Icon */}
          <ArrowUp className="h-5 w-5 relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300" />

          {/* Sparkle effect on hover */}
          <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-soft" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
