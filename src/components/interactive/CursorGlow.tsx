"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationId: number;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      // Smooth interpolation
      const animate = () => {
        currentX += (e.clientX - currentX) * 0.15;
        currentY += (e.clientY - currentY) * 0.15;
        setPosition({ x: currentX, y: currentY });
        animationId = requestAnimationFrame(animate);
      };

      cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Main glow */}
      <div
        className="absolute rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: 400,
          height: 400,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(67, 97, 238, 0.08) 0%, rgba(147, 51, 234, 0.04) 40%, transparent 70%)",
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Small center dot */}
      <div
        className="absolute rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: 6,
          height: 6,
          transform: "translate(-50%, -50%)",
          background: "rgba(67, 97, 238, 0.3)",
          boxShadow: "0 0 20px rgba(67, 97, 238, 0.2)",
        }}
      />
    </div>
  );
}
