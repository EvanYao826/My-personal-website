"use client";

import { useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number; // 0-1, how strong the magnetic effect is
}

export function MagneticCard({
  children,
  className,
  intensity = 0.3,
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate(0, 0)");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;

    setTransform(`translate(${deltaX}px, ${deltaY}px)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("translate(0, 0)");
  };

  return (
    <div
      ref={cardRef}
      className={cn("transition-transform duration-300 ease-out", className)}
      style={{
        transform: isHovered ? transform : "translate(0, 0)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
