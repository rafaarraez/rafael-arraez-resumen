export interface ExperienceItem {
  id: number
  company: string
  period: {
    es: string
    en: string
  }
  location: string
  technologies: string[]
  type: "work" | "education"
}

export const experienceData: ExperienceItem[] = [
  {
    id: 8,
    company: "WeSpeak",
    period: {
      es: "Abril 2026 - Actualidad",
      en: "April 2026 - Present",
    },
    location: "Remoto",
    technologies: [
      "Node.js",
      "Express.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Cloud Run",
      "Upstash",
      "Inngest",
    ],
    type: "work",
  },
  {
    id: 1,
    company: "SilverConnect",
    period: {
      es: "Octubre 2025 - Abril 2026",
      en: "October 2025 - April 2026",
    },
    location: "USA, Remoto",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "AWS",
      "Docker",
      "WebSockets",
      "GitHub Actions",
    ],
    type: "work",
  },
  {
    id: 2,
    company: "Magellan",
    period: {
      es: "Febrero 2024 - Octubre 2025",
      en: "February 2024 - October 2025",
    },
    location: "USA, Remoto",
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "OpenAI API",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    type: "work",
  },
  {
    id: 3,
    company: "WiTi",
    period: {
      es: "Noviembre 2022 - Febrero 2024",
      en: "November 2022 - February 2024",
    },
    location: "Chile, Remoto",
    technologies: [
      "NestJS",
      "AWS",
      "PostgreSQL",
      "Next.js",
      "Jest",
      "Docker",
    ],
    type: "work",
  },
  {
    id: 4,
    company: "Raxo Creative",
    period: {
      es: "Febrero 2021 - Noviembre 2022",
      en: "February 2021 - November 2022",
    },
    location: "USA, Remoto",
    technologies: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "JWT",
      "WebSockets",
    ],
    type: "work",
  },
  {
    id: 5,
    company: "AKB Fintech",
    period: {
      es: "Enero 2020 - Febrero 2021",
      en: "January 2020 - February 2021",
    },
    location: "USA, Remoto",
    technologies: ["Laravel", "Vue.js", "PostgreSQL"],
    type: "work",
  },
  {
    id: 6,
    company: "Impulsa Creativos",
    period: {
      es: "Julio 2018 - Diciembre 2019",
      en: "July 2018 - December 2019",
    },
    location: "Valencia, Venezuela",
    technologies: ["Laravel", "Vue.js", "MySQL", "JavaScript", "CSS3"],
    type: "work",
  },
  {
    id: 7,
    company: "Universidad José Antonio Páez",
    period: {
      es: "2014 - Julio 2019",
      en: "2014 - July 2019",
    },
    location: "Valencia, Venezuela",
    technologies: ["Java", "Python", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "education",
  },
]
