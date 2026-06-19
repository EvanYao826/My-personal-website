"use client";

import { useEffect, useState } from "react";

// 编程相关的成功消息
const successMessages = [
  "Build successful",
  "Tests passed",
  "Deployed successfully",
  "No errors found",
  "Compilation complete",
  "All checks passed",
  "Ready in 2.3s",
  "Server running",
  "Dependencies installed",
  "Hot reload complete",
  "Git push successful",
  "PR merged",
  "Code reviewed",
  "Lint passed",
  "Type check passed",
  "Bundle optimized",
  "Cache cleared",
  "Database connected",
  "API response 200",
  "Authentication verified",
];

interface FloatingMessage {
  id: number;
  text: string;
  top: number;
  duration: number;
  delay: number;
}

export function SuccessMessages() {
  const [messages, setMessages] = useState<FloatingMessage[]>([]);

  useEffect(() => {
    // 初始添加一些消息
    const initialMessages: FloatingMessage[] = successMessages
      .slice(0, 10)
      .map((text, index) => ({
        id: index,
        text,
        top: 5 + index * 9,
        duration: 12 + Math.random() * 6,
        delay: index * 0.5,
      }));
    setMessages(initialMessages);

    // 定期添加新消息
    const interval = setInterval(() => {
      const newMessage: FloatingMessage = {
        id: Date.now(),
        text: successMessages[Math.floor(Math.random() * successMessages.length)],
        top: 5 + Math.random() * 90,
        duration: 12 + Math.random() * 6,
        delay: 0,
      };
      setMessages((prev) => [...prev.slice(-15), newMessage]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="floating-message"
          style={{
            top: `${msg.top}%`,
            animationDuration: `${msg.duration}s`,
            animationDelay: `${msg.delay}s`,
            // 中间区域（40%-60%）的消息z-index更低，从个人信息下方飘过
            zIndex: msg.top >= 40 && msg.top <= 60 ? 0 : 1,
          }}
        >
          <span className="meteor-text">
            {msg.text}...
          </span>
        </div>
      ))}
    </div>
  );
}