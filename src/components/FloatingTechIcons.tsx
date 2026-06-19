"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TechIcon {
  name: string;
  src: string;
  size: number;
  isSvg?: boolean;
  top: number;
  side: "left" | "right";
  sidePos: number;
  delay: number;
  floatDuration: number;
}

// 技术栈图标布局 - 错落分布，靠近中间，放大尺寸
const iconsLayout: TechIcon[] = [
  // 左侧图标 (6个) - 错落排列，靠近中间
  { name: "Java", src: "/skills/icons8-java-96.png", size: 76, top: 12, side: "left", sidePos: 22, delay: 0.1, floatDuration: 5 },
  { name: "Python", src: "/skills/icons8-python-96.png", size: 68, top: 28, side: "left", sidePos: 28, delay: 0.2, floatDuration: 4.5 },
  { name: "Spring", src: "/skills/spring-icon-256px.png", size: 72, top: 45, side: "left", sidePos: 20, delay: 0.3, floatDuration: 5.5 },
  { name: "Redis", src: "/skills/redis.png", size: 64, top: 62, side: "left", sidePos: 26, delay: 0.4, floatDuration: 4.8 },
  { name: "Git", src: "/skills/icons8-git-96.png", size: 70, top: 78, side: "left", sidePos: 24, delay: 0.5, floatDuration: 5.2 },
  { name: "Linux", src: "/skills/icons8-linux-52.png", size: 62, top: 20, side: "left", sidePos: 34, delay: 0.6, floatDuration: 4.6 },
  
  // 右侧图标 (6个) - 错落排列
  { name: "React", src: "/skills/react.png", size: 74, top: 15, side: "right", sidePos: 20, delay: 0.15, floatDuration: 4.7 },
  { name: "Vue", src: "/skills/icons8-vuejs-96.png", size: 64, top: 32, side: "right", sidePos: 32, delay: 0.25, floatDuration: 5.1 },
  { name: "TypeScript", src: "/skills/ts.png", size: 70, top: 50, side: "right", sidePos: 18, delay: 0.35, floatDuration: 4.9 },
  { name: "Next.js", src: "/skills/icons8-next-48.png", size: 66, top: 68, side: "right", sidePos: 24, delay: 0.45, floatDuration: 5.4 },
  { name: "MySQL", src: "/skills/mysql.png", size: 68, top: 78, side: "right", sidePos: 16, delay: 0.55, floatDuration: 5.3 },
  { name: "Docker", src: "/skills/docker.png", size: 78, top: 58, side: "right", sidePos: 34, delay: 0.65, floatDuration: 4.8 },
];

function FloatingIcon({ icon }: { icon: TechIcon }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), icon.delay * 500 + 500);
    return () => clearTimeout(timer);
  }, [icon.delay]);

  return (
    <div
      className="absolute transition-all duration-1000 ease-out"
      style={{
        [icon.side]: `${icon.sidePos}%`,
        top: `${icon.top}%`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.8)",
      }}
    >
      <div
        className="group relative"
        style={{
          animation: isVisible
            ? `float-custom ${icon.floatDuration}s ease-in-out ${icon.delay}s infinite`
            : "none",
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle, rgba(129, 140, 248, 0.8), rgba(192, 132, 252, 0.4))",
            transform: "scale(3)",
          }}
        />

        {/* Icon */}
        <div className="relative">
          {icon.isSvg ? (
            <div
              style={{ width: icon.size, height: icon.size }}
              className="transition-transform duration-300 group-hover:scale-125"
            >
              <img
                src={icon.src}
                alt={icon.name}
                width={icon.size}
                height={icon.size}
                className="w-full h-full"
                style={{
                  filter: "brightness(1.4) drop-shadow(0 0 8px rgba(129, 140, 248, 0.5))",
                }}
              />
            </div>
          ) : (
            <Image
              src={icon.src}
              alt={icon.name}
              width={icon.size}
              height={icon.size}
              className="transition-transform duration-300 group-hover:scale-125"
              style={{
                filter: "brightness(1.2) drop-shadow(0 0 8px rgba(129, 140, 248, 0.4))",
              }}
            />
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
          <span className="text-xs text-foreground whitespace-nowrap bg-background/90 px-2 py-1 rounded-md shadow-lg border border-border/50">
            {icon.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export function FloatingTechIcons() {
  // 手机端放射状布局的图标数据 - 8个图标均匀分布在圆周上
  const mobileIcons = iconsLayout.slice(0, 8);
  const radius = 100; // 放射半径（像素）
  
  return (
    <>
      {/* 大屏幕显示所有图标 */}
      <div className="hidden lg:block">
        {iconsLayout.map((icon) => (
          <FloatingIcon key={icon.name} icon={icon} />
        ))}
      </div>

      {/* 中等屏幕（平板）显示部分图标 */}
      <div className="hidden md:block lg:hidden">
        {iconsLayout.filter((_, index) => index % 2 === 0).map((icon) => (
          <FloatingIcon 
            key={icon.name} 
            icon={{ ...icon, size: icon.size * 0.7 }} 
          />
        ))}
      </div>

      {/* 小屏幕（手机）- 围绕头像放射状展开 */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative" style={{ width: radius * 2 + 40, height: radius * 2 + 40 }}>
          {mobileIcons.map((icon, index) => {
            // 8个图标均匀分布，从顶部开始，顺时针排列
            const angle = (index * 45 - 90) * (Math.PI / 180); // 从顶部(-90度)开始
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={icon.name}
                className="absolute transition-all duration-1000 ease-out pointer-events-auto"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="group relative animate-float">
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={32}
                    height={32}
                    className="transition-transform duration-300 group-hover:scale-120"
                    style={{
                      filter: "brightness(1.1) drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))",
                    }}
                  />
                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap"
                    style={{ 
                      top: y > 0 ? 'auto' : '-24px',
                      bottom: y > 0 ? '-24px' : 'auto',
                    }}>
                    <span className="text-xs text-foreground bg-background/95 px-2 py-1 rounded-md shadow-lg border border-border/50">
                      {icon.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-custom {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }
      `}</style>
    </>
  );
}
