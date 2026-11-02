export interface ProjectItem {
  id: number
  company: string
  period: string
  iconName: "Activity" | "Database" | "Cloud" | "Zap" | "Users" | "Bot"
  technologies: string[]
  metrics: {
    [key: string]: string
  }
}

export const projectsData: ProjectItem[] = [
  {
    id: 6,
    company: "WeSpeak",
    period: "2026",
    iconName: "Bot",
    technologies: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "LangGraph",
      "WhatsApp Cloud API",
      "MySQL",
      "Redis",
      "Inngest",
    ],
    metrics: {
      hotels: "700+",
      integrations: "10+",
      channels: "WhatsApp + Web",
    },
  },
  {
    id: 1,
    company: "SilverConnect",
    period: "2025 - 2026",
    iconName: "Activity",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "Docker",
      "Google Cloud",
    ],
    metrics: {
      launch: "iOS + Android",
      realtime: "WebRTC",
      security: "2FA",
    },
  },
  {
    id: 2,
    company: "Magellan",
    period: "2024",
    iconName: "Database",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "AWS Lambda",
      "SQS",
      "HubSpot API",
      "Salesforce API",
    ],
    metrics: {
      performance: "-60%",
      scale: "1M+",
      deploys: "2h → 15m",
    },
  },
  {
    id: 3,
    company: "WiTi",
    period: "2022 - 2024",
    iconName: "Cloud",
    technologies: [
      "NestJS",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Jest",
    ],
    metrics: {
      transactions: "1M+/mes",
      coverage: "85%",
      team: "3 devs",
    },
  },
  {
    id: 4,
    company: "Magellan",
    period: "2024",
    iconName: "Zap",
    technologies: [
      "Django",
      "Python",
      "OpenAI GPT",
      "PostgreSQL",
      "Celery",
      "Redis",
    ],
    metrics: {
      conversion: "+25%",
      automation: "100%",
      processing: "Async",
    },
  },
  {
    id: 5,
    company: "AKB Fintech",
    period: "2020 - 2021",
    iconName: "Users",
    technologies: [
      "Laravel",
      "Vue.js",
      "PostgreSQL",
      "Redis",
      "SMS APIs",
      "Email APIs",
    ],
    metrics: {
      delivery: "+35%",
      latency: "-30%",
      automation: "100%",
    },
  },
]
