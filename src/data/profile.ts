export const profile = {
  name: "姚昆鹏",
  nameEn: "Evan Yao",
  title: "Java 后端工程师",
  subtitle: "AI 全栈应用开发者",
  university: "辽宁科技大学",
  major: "软件工程",
  grade: "大三",
  avatar: "/avatar.jpg",
  domain: "evanyao826324.vercel.app",
  bio: `我的主要编程语言是 Java，长期关注后端架构、AI 应用和 Agent 系统。近期设计了一套五层 Agent 编排架构，涵盖工作流调度、工具集成、记忆管理、上下文路由和响应流式传输，将 SSE 首字节延迟降低了近 90%。

我正在努力成为一名 AI 全栈工程师和独立开发者，致力于用优雅、可维护的代码构建实用的产品。在工程之外，我喜欢参与开源社区，并通过写作分享技术见解。`,
  social: {
    github: "https://github.com/EvanYao826",
    csdn: "https://blog.csdn.net/2503_93374004?type=blog",
    email: "2869018789@qq.com",
    website: "https://evanyao826324.vercel.app",
  },

  // Timeline Story
  timeline: [
    {
      year: "2023",
      title: "与编程结缘",
      description: "开始接触 Java，从最基础的语法、集合框架到 Web 开发，一步步进入软件开发的世界。",
      highlight: "原来代码真的可以创造出一些有价值的东西。",
    },
    {
      year: "2025",
      title: "进入辽宁科技大学",
      description: "通过专升本考试进入辽宁科技大学软件工程专业，开始更加系统地学习。",
      items: ["数据结构", "操作系统", "计算机网络", "Java 后端开发"],
      highlight: "也逐渐对系统设计、工程化和架构产生兴趣。",
    },
    {
      year: "2026",
      title: "从后端走向 AI",
      description: "在掌握 Spring Boot、Redis、MySQL 等技术栈之后，开始关注 AI 应用开发。从 RAG 到 Agent，从 LangChain 到多智能体协作系统。",
      highlight: "完成了 AgentCraft 智能体知识协作平台，并参与 AI 全栈挑战赛。",
    },
    {
      year: "Future",
      title: "未来",
      description: "希望持续深耕：",
      items: ["Java 后端", "AI 应用开发", "Agent 系统", "软件架构"],
      highlight: "构建真正能够解决实际问题的产品。",
    },
  ],

  // Bento Grid - 正在做什么
  bento: [
    {
      icon: "📚",
      title: "学习",
      items: [
        { name: "系统设计", desc: "持续学习分布式系统、缓存、高并发以及架构设计。" },
        { name: "AI 应用", desc: "关注 Agent、RAG、多模态以及 AI 工程化方向。" },
      ],
    },
    {
      icon: "🔨",
      title: "开发",
      items: [
        { name: "Evan Portfolio", desc: "属于自己的数字空间。" },
        { name: "ShopAgent-X", desc: "多模态智能导购系统。" },
        { name: "Agent 系统", desc: "探索智能体协作与长期记忆。" },
      ],
    },
    {
      icon: "✍️",
      title: "输出",
      items: [
        { name: "技术博客", desc: "累计发布 100+ 篇技术文章，阅读量超过 10 万。" },
        { name: "开源贡献", desc: "曾向 Dify、LangChain4j 等开源项目提交 PR 并被合并。" },
        { name: "持续记录", desc: "保持写日记和技术总结的习惯。" },
      ],
    },
    {
      icon: "🏃",
      title: "生活",
      items: [
        { name: "篮球、跑步、健身", desc: "在代码之外，也享受运动带来的快乐。" },
      ],
    },
  ],

  // Numbers - 值得记录
  numbers: [
    {
      value: "100+",
      label: "博客",
    },
    {
      value: "10W+",
      label: "阅读",
    },
    {
      value: "10+",
      label: "PR Merged",
    },
    {
      value: "持续",
      label: "学习",
    },
  ],

  // Life - 编程之外
  life: {
    sports: ["🏀 篮球", "🏃 跑步", "💪 健身", "⚽ 足球"],
    reading: ["📚 唐诗宋词", "📖 毛泽东诗词", "☕ 技术书籍"],
  },

  // Quote
  quote: `在正确的道路上，
以长期主义的眼光看待暂时性的困难和挫折。
因为一切都会过去，
只管向前走。`,

  // Future
  future: {
    current: ["Java 后端", "AI 应用", "Agent 系统", "系统设计"],
    tagline: "目标",
    links: ["Github", "CSDN", "Email"],
    cta: "成为一名 AI 全栈工程师和独立开发者，致力于用优雅、可维护的代码构建实用的产品。",
  },
};
