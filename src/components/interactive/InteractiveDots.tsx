"use client";

import { useEffect, useRef, useCallback } from "react";

interface Dot {
  x: number;
  y: number;
  baseOpacity: number;
  currentOpacity: number;
}

export function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>(0);

  const initDots = useCallback((width: number, height: number) => {
    const spacing = 24;
    const dots: Dot[] = [];

    for (let x = spacing; x < width; x += spacing) {
      for (let y = spacing; y < height; y += spacing) {
        dots.push({
          x,
          y,
          baseOpacity: 0.08,
          currentOpacity: 0.08,
        });
      }
    }

    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initDots(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const isDark = document.documentElement.classList.contains("dark");
    const glowColor = isDark ? "129, 140, 248" : "67, 97, 238";
    const baseColor = isDark ? "148, 163, 184" : "100, 116, 139";

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      const mouse = mouseRef.current;
      const influenceRadius = 150;

      for (const dot of dotsRef.current) {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate target opacity based on distance
        let targetOpacity = dot.baseOpacity;
        if (distance < influenceRadius) {
          const factor = 1 - distance / influenceRadius;
          targetOpacity = dot.baseOpacity + factor * 0.5;
        }

        // Smooth interpolation
        dot.currentOpacity += (targetOpacity - dot.currentOpacity) * 0.1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(
          dot.x,
          dot.y,
          dot.currentOpacity > 0.2 ? 2 : 1.2,
          0,
          Math.PI * 2
        );

        if (dot.currentOpacity > 0.3) {
          ctx.fillStyle = `rgba(${glowColor}, ${dot.currentOpacity})`;
          // Add subtle glow for brighter dots
          ctx.shadowColor = `rgba(${glowColor}, 0.3)`;
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(${baseColor}, ${dot.currentOpacity})`;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initDots]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
