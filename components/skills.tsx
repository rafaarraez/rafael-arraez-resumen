"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent } from "@/components/ui-custom/card"
import {
  Server,
  Globe,
  Code2,
  Database,
  Container,
  Cloud,
  GitBranch,
  Github,
  Terminal,
  FileCode,
  Send,
} from "lucide-react"

type SkillCategory = "technical" | "cloud" | "tools"

// Mapeo de iconos personalizados y de Lucide
const icons = {
  // Technical
  Nodejs: Server,
  Nestjs: Server,
  Nextjs: Globe,
  React: Globe,
  Typescript: Code2,
  Javascript: Code2,
  Php: FileCode,
  Laravel: FileCode,
  Python: FileCode,
  Django: FileCode,
  Mysql: Database,
  Postgresql: Database,
  MongoDB: Database,
  Redis: Database,
  Vuejs: Globe,

  // Tools
  Docker: Container,
  AWS: Cloud,
  Git: GitBranch,
  Github: Github,
  Linux: Terminal,
  Vscode: Code2,
  Postman: Send,
  Jest: Code2,
  NewRelic: Code2,
  OpenAI: Code2,
  HubSpot: Code2,
  Salesforce: Code2,
}

const skillsData: Record<
  SkillCategory,
  { name: string; nameEn: string; icon: keyof typeof icons; years: number; level: string }[]
> = {
  technical: [
    { name: "NestJS", nameEn: "NestJS", icon: "Nestjs", years: 4, level: "expert" },
    { name: "TypeScript", nameEn: "TypeScript", icon: "Typescript", years: 5, level: "expert" },
    { name: "Node.js", nameEn: "Node.js", icon: "Nodejs", years: 6, level: "expert" },
    { name: "PostgreSQL", nameEn: "PostgreSQL", icon: "Postgresql", years: 6, level: "advanced" },
    { name: "Python", nameEn: "Python", icon: "Python", years: 2, level: "intermediate" },
    { name: "Django", nameEn: "Django", icon: "Django", years: 1, level: "intermediate" },
    { name: "PHP", nameEn: "PHP", icon: "Php", years: 4, level: "advanced" },
    { name: "Laravel", nameEn: "Laravel", icon: "Laravel", years: 4, level: "advanced" },
    { name: "Next.js", nameEn: "Next.js", icon: "Nextjs", years: 3, level: "advanced" },
    { name: "React", nameEn: "React", icon: "React", years: 4, level: "advanced" },
    { name: "Vue.js", nameEn: "Vue.js", icon: "Vuejs", years: 3, level: "advanced" },
    { name: "Redis", nameEn: "Redis", icon: "Redis", years: 3, level: "intermediate" },
  ],
  cloud: [
    { name: "AWS Lambda", nameEn: "AWS Lambda", icon: "AWS", years: 3, level: "advanced" },
    { name: "API Gateway", nameEn: "API Gateway", icon: "AWS", years: 3, level: "advanced" },
    { name: "DynamoDB", nameEn: "DynamoDB", icon: "AWS", years: 2, level: "intermediate" },
    { name: "S3", nameEn: "S3", icon: "AWS", years: 4, level: "advanced" },
    { name: "RDS", nameEn: "RDS", icon: "AWS", years: 3, level: "advanced" },
    { name: "SQS/SNS", nameEn: "SQS/SNS", icon: "AWS", years: 2, level: "intermediate" },
    { name: "Docker", nameEn: "Docker", icon: "Docker", years: 4, level: "advanced" },
    { name: "GitHub Actions", nameEn: "GitHub Actions", icon: "Github", years: 3, level: "advanced" },
  ],
  tools: [
    { name: "Jest", nameEn: "Jest", icon: "Vscode", years: 4, level: "advanced" },
    { name: "Git", nameEn: "Git", icon: "Git", years: 6, level: "expert" },
    { name: "New Relic", nameEn: "New Relic", icon: "NewRelic", years: 2, level: "intermediate" },
    { name: "OpenAI API", nameEn: "OpenAI API", icon: "OpenAI", years: 1, level: "intermediate" },
    { name: "HubSpot API", nameEn: "HubSpot API", icon: "HubSpot", years: 1, level: "advanced" },
    { name: "Salesforce API", nameEn: "Salesforce API", icon: "Salesforce", years: 1, level: "advanced" },
  ],
}

// Colores mejorados para mejor contraste en ambos temas
const skillColors: Record<string, string> = {
  // Technical - colores con mejor contraste
  "Node.js": "bg-green-600 text-white hover:bg-green-700",
  NestJS: "bg-red-600 text-white hover:bg-red-700",
  "Next.js": "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200",
  React: "bg-blue-600 text-white hover:bg-blue-700",
  TypeScript: "bg-blue-700 text-white hover:bg-blue-800",
  JavaScript: "bg-yellow-600 text-gray-900 hover:bg-yellow-700",
  PHP: "bg-purple-700 text-white hover:bg-purple-800",
  Laravel: "bg-red-600 text-white hover:bg-red-700",
  Python: "bg-blue-700 text-white hover:bg-blue-800",
  Django: "bg-green-800 text-white hover:bg-green-900",
  PostgreSQL: "bg-blue-800 text-white hover:bg-blue-900",
  MongoDB: "bg-green-600 text-white hover:bg-green-700",
  Redis: "bg-red-700 text-white hover:bg-red-800",
  "Vue.js": "bg-green-600 text-white hover:bg-green-700",

  // Cloud & DevOps - colores distintivos
  "AWS Lambda": "bg-orange-600 text-white hover:bg-orange-700",
  "API Gateway": "bg-orange-700 text-white hover:bg-orange-800",
  DynamoDB: "bg-orange-800 text-white hover:bg-orange-900",
  S3: "bg-orange-600 text-white hover:bg-orange-700",
  RDS: "bg-orange-700 text-white hover:bg-orange-800",
  "SQS/SNS": "bg-orange-800 text-white hover:bg-orange-900",
  Docker: "bg-blue-600 text-white hover:bg-blue-700",
  "GitHub Actions": "bg-gray-800 text-white hover:bg-gray-900",

  // Tools - colores variados
  Jest: "bg-red-600 text-white hover:bg-red-700",
  Git: "bg-orange-700 text-white hover:bg-orange-800",
  "New Relic": "bg-teal-600 text-white hover:bg-teal-700",
  "OpenAI API": "bg-green-700 text-white hover:bg-green-800",
  "HubSpot API": "bg-orange-600 text-white hover:bg-orange-700",
  "Salesforce API": "bg-blue-700 text-white hover:bg-blue-800",
}

export function Skills() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const renderSkillPill = (
    skill: { name: string; nameEn: string; icon: keyof typeof icons; years: number; level: string },
    index: number
  ) => {
    const IconComponent = icons[skill.icon]
    const skillName = language === "es" ? skill.name : skill.nameEn
    const colorClass = skillColors[skillName] || "bg-gray-700 text-white hover:bg-gray-800"

    // Formatear años con traducción
    const yearsText = skill.years === 1 ? `1 ${t("skills.year")}` : `${skill.years}+ ${t("skills.years")}`

    // Traducir nivel
    const levelText = t(`skills.${skill.level}`)

    return (
      <div
        key={skill.name}
        className={`group relative inline-flex flex-col items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-default ${colorClass}`}
        style={{
          animationDelay: `${index * 0.1}s`,
          animationFillMode: "forwards",
        }}
      >
        <div className="flex items-center gap-2">
          <IconComponent className="h-4 w-4" />
          <span className="font-semibold">{skillName}</span>
        </div>
        <div className="text-xs opacity-90 text-center">
          <div className="font-medium">{yearsText}</div>
          <div className="font-bold">{levelText}</div>
        </div>

        {/* Tooltip on hover */}
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 shadow-lg">
          <div className="font-semibold">{skillName}</div>
          <div>
            {yearsText} • {levelText}
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
        </div>
      </div>
    )
  }

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-900/50 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">
            {t("skills.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("skills.description")}</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Habilidades Técnicas */}
          <div
            ref={(el) => { cardRefs.current[0] = el }}
            className="opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  {t("skills.backend")}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillsData.technical.map((skill, index) => renderSkillPill(skill, index))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Habilidades en la Nube */}
          <div
            ref={(el) => { cardRefs.current[1] = el }}
            className="opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  {t("skills.cloud")}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillsData.cloud.map((skill, index) => renderSkillPill(skill, index))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Herramientas y Tecnologías */}
          <div
            ref={(el) => { cardRefs.current[2] = el }}
            className="opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                  APIs & Tools
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillsData.tools.map((skill, index) => renderSkillPill(skill, index))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
