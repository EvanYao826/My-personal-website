export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["Java", "SpringBoot", "Redis", "MySQL"],
  },
  {
    category: "AI / Agent",
    skills: ["Python", "LangChain", "LangChain4j", "Dify"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    category: "DevOps",
    skills: ["Git", "Docker", "Linux"],
  },
];
