"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-between px-5 sm:px-8 pt-2 sm:pt-4 pb-2">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Contact me
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base sm:whitespace-nowrap">
          如果你对技术、开源项目或者有趣的想法感兴趣，欢迎与我交流。
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/60 w-full max-w-3xl my-6" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {/* Email */}
        <Card className="glass-card card-hover-lift h-full border-border/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.07] to-transparent pointer-events-none" />
          <CardContent className="relative p-5 flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xl">📧</span>
              <h3 className="font-semibold text-base">Email</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{profile.social.email}</p>
            <p className="text-xs text-muted-foreground/70 mb-4">
              欢迎交流技术、开源项目和实习机会。
            </p>
            <button
              onClick={handleCopy}
              className={cn(
                "mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-fit",
                copied
                  ? "bg-green-500/10 text-green-600 border border-green-500/20"
                  : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/10"
              )}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "已复制" : "复制邮箱"}
            </button>
          </CardContent>
        </Card>

        {/* Github */}
        <Link href={profile.social.github} target="_blank" rel="noopener noreferrer">
          <Card className="glass-card card-hover-lift h-full border-border/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.07] to-transparent pointer-events-none" />
            <CardContent className="relative p-5 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xl">🐱</span>
                <h3 className="font-semibold text-base">GitHub</h3>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">github.com/EvanYao826</p>
              <p className="text-xs text-muted-foreground/70">
                项目、代码和开源贡献。
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* CSDN */}
        <Link href={profile.social.csdn} target="_blank" rel="noopener noreferrer">
          <Card className="glass-card card-hover-lift h-full border-border/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.07] to-transparent pointer-events-none" />
            <CardContent className="relative p-5 flex flex-col h-full">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xl">📝</span>
                <h3 className="font-semibold text-base">Blog</h3>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">blog.csdn.net</p>
              <p className="text-xs text-muted-foreground/70">
                持续记录学习与实践。
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Resume */}
        <Card className="glass-card card-hover-lift h-full border-border/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.07] to-transparent pointer-events-none" />
          <CardContent className="relative p-5 flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xl">💼</span>
              <h3 className="font-semibold text-base">简历</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-1">PDF 简历</p>
            <p className="text-xs text-muted-foreground/70 mb-4">
              最新版本简历。
            </p>
            <a
              href={profile.resumeUrl}
              download
              className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 border border-primary/10 transition-all duration-200 w-fit"
            >
              <Download className="h-4 w-4" />
              下载简历
            </a>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="glass-card card-hover-lift h-full border-border/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.07] to-transparent pointer-events-none" />
          <CardContent className="relative p-5 flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xl">📍</span>
              <h3 className="font-semibold text-base">所在地</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{profile.location}</p>
            <p className="text-xs text-muted-foreground/70">
              辽宁科技大学
            </p>
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card className="glass-card card-hover-lift h-full border-border/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.07] to-transparent pointer-events-none" />
          <CardContent className="relative p-5 flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xl">🌱</span>
              <h3 className="font-semibold text-base">当前状态</h3>
            </div>
            <div className="space-y-1.5">
              {profile.currentStatus.map((status) => (
                <p key={status} className="text-xs text-muted-foreground">
                  {status}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/60 w-full max-w-3xl my-4" />

      {/* Footer */}
      <p className="text-xs text-muted-foreground/50">
        感谢访问。
      </p>
    </div>
  );
}
