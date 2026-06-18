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
    title: "Agent 编排架构",
    description:
      "设计五层 Agent 编排架构，涵盖工作流调度、工具集成、记忆管理、上下文路由和响应流式传输。将 SSE 首字节延迟降低了近 90%。",
    tags: ["Java", "Agent", "SSE", "架构"],
    featured: true,
  },
  {
    id: "online-education",
    title: "在线教育平台",
    description:
      "全栈在线教育平台，包含课程管理、视频流媒体和用户认证功能。采用 Java SpringBoot 后端和 React 前端。",
    tags: ["Java", "SpringBoot", "MySQL", "Redis", "React"],
    featured: true,
  },
];
