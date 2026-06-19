export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Java", "SpringBoot", "Redis", "MySQL", "RabbitMQ", "MongoDB"],
  },
  {
    category: "AI / Agent",
    icon: "🤖",
    skills: ["Python", "LangChain", "LangChain4j", "FastAPI", "RAG", "Agent"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Vue"],
  },
  {
    category: "DevOps",
    icon: "🚀",
    skills: ["Git", "Docker", "Linux", "Nginx", "CI/CD"],
  },
];
