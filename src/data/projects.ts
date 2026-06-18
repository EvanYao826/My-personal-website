export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "agent-orchestration",
    title: "Agent Orchestration Architecture",
    description:
      "Designed a five-layer Agent orchestration architecture covering workflow scheduling, tool integration, memory management, context routing, and response streaming. Reduced SSE first-byte latency by nearly 90%.",
    tags: ["Java", "Agent", "SSE", "Architecture"],
    featured: true,
  },
  {
    id: "online-education",
    title: "Online Education Platform",
    description:
      "A full-stack online education platform with course management, video streaming, and user authentication. Built with Java SpringBoot backend and React frontend.",
    tags: ["Java", "SpringBoot", "MySQL", "Redis", "React"],
    featured: true,
  },
];
