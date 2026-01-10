export interface ProjectItem {
  id: number
  company: string
  period: string
  iconName: "Activity" | "Database" | "Cloud" | "Zap" | "Users"
  technologies: string[]
  metrics: {
    [key: string]: string
  }
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    company: "SilverConnect",
    period: "2025",
    iconName: "Activity",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "Docker",
      "GitHub Actions",
      "GCP",
    ],
    metrics: {
      stability: "-30%",
      performance: "-40%",
      realtime: "WebSockets",
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
      performance: "-15%",
      scale: "2M+",
      uptime: "99.9%",
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
