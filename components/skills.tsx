"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent } from "@/components/ui-custom/card"
import {
  MessageCircle,
  Users,
  Lightbulb,
  Clock,
  Target,
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

type SkillCategory = "technical" | "soft" | "tools"

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

  // Soft Skills
  Communication: MessageCircle,
  Teamwork: Users,
  "Problem Solving": Lightbulb,
  "Time Management": Clock,
  Leadership: Target,

  // Tools
  Docker: Container,
  AWS: Cloud,
  Git: GitBranch,
  Github: Github,
  Linux: Terminal,
  Vscode: Code2,
  Postman: Send,
}

const skillsData: Record<SkillCategory, { name: string; nameEn: string; icon: keyof typeof icons }[]> = {
  technical: [
    { name: "Node.js", nameEn: "Node.js", icon: "Nodejs" },
    { name: "NestJS", nameEn: "NestJS", icon: "Nestjs" },
    { name: "Next.js", nameEn: "Next.js", icon: "Nextjs" },
    { name: "React", nameEn: "React", icon: "React" },
    { name: "TypeScript", nameEn: "TypeScript", icon: "Typescript" },
    { name: "JavaScript", nameEn: "JavaScript", icon: "Javascript" },
    { name: "PHP", nameEn: "PHP", icon: "Php" },
    { name: "Laravel", nameEn: "Laravel", icon: "Laravel" },
    { name: "Python", nameEn: "Python", icon: "Python" },
    { name: "Django", nameEn: "Django", icon: "Django" },
    { name: "SQL", nameEn: "SQL", icon: "Mysql" },
    { name: "PostgreSQL", nameEn: "PostgreSQL", icon: "Postgresql" },
    { name: "MongoDB", nameEn: "MongoDB", icon: "MongoDB" },
    { name: "Redis", nameEn: "Redis", icon: "Redis" },
  ],
  soft: [
    { name: "Comunicación", nameEn: "Communication", icon: "Communication" },
    { name: "Trabajo en equipo", nameEn: "Teamwork", icon: "Teamwork" },
    { name: "Resolución de problemas", nameEn: "Problem Solving", icon: "Problem Solving" },
    { name: "Gestión del tiempo", nameEn: "Time Management", icon: "Time Management" },
    { name: "Liderazgo", nameEn: "Leadership", icon: "Leadership" },
  ],
  tools: [
    { name: "Docker", nameEn: "Docker", icon: "Docker" },
    { name: "AWS", nameEn: "AWS", icon: "AWS" },
    { name: "Git", nameEn: "Git", icon: "Git" },
    { name: "GitHub", nameEn: "GitHub", icon: "Github" },
    { name: "Linux", nameEn: "Linux", icon: "Linux" },
    { name: "VS Code", nameEn: "VS Code", icon: "Vscode" },
    { name: "Postman", nameEn: "Postman", icon: "Postman" },
  ],
}

// Colores específicos para cada tecnología
const skillColors: Record<string, string> = {
  // Technical - colores representativos de cada tecnología
  "Node.js": "bg-green-600 hover:bg-green-700",
  NestJS: "bg-red-600 hover:bg-red-700",
  "Next.js": "bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
  React: "bg-blue-500 hover:bg-blue-600",
  TypeScript: "bg-blue-700 hover:bg-blue-800",
  JavaScript: "bg-yellow-500 hover:bg-yellow-600 text-black",
  PHP: "bg-purple-600 hover:bg-purple-700",
  Laravel: "bg-red-500 hover:bg-red-600",
  Python: "bg-blue-600 hover:bg-blue-700",
  Django: "bg-green-700 hover:bg-green-800",
  SQL: "bg-orange-600 hover:bg-orange-700",
  PostgreSQL: "bg-blue-800 hover:bg-blue-900",
  MongoDB: "bg-green-500 hover:bg-green-600",
  Redis: "bg-red-700 hover:bg-red-800",

  // Soft Skills - colores cálidos y profesionales
  Comunicación: "bg-emerald-500 hover:bg-emerald-600",
  Communication: "bg-emerald-500 hover:bg-emerald-600",
  "Trabajo en equipo": "bg-orange-500 hover:bg-orange-600",
  Teamwork: "bg-orange-500 hover:bg-orange-600",
  "Resolución de problemas": "bg-amber-500 hover:bg-amber-600",
  "Problem Solving": "bg-amber-500 hover:bg-amber-600",
  "Gestión del tiempo": "bg-indigo-500 hover:bg-indigo-600",
  "Time Management": "bg-indigo-500 hover:bg-indigo-600",
  Liderazgo: "bg-red-500 hover:bg-red-600",
  Leadership: "bg-red-500 hover:bg-red-600",

  // Tools - colores representativos
  Docker: "bg-blue-600 hover:bg-blue-700",
  AWS: "bg-orange-600 hover:bg-orange-700",
  Git: "bg-orange-700 hover:bg-orange-800",
  GitHub: "bg-gray-800 hover:bg-gray-900",
  Linux: "bg-yellow-600 hover:bg-yellow-700 text-black",
  "VS Code": "bg-blue-500 hover:bg-blue-600",
  Postman: "bg-orange-500 hover:bg-orange-600",
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
    skill: { name: string; nameEn: string; icon: keyof typeof icons },
    index: number
  ) => {
    const IconComponent = icons[skill.icon]
    const skillName = language === "es" ? skill.name : skill.nameEn
    const colorClass = skillColors[skillName] || "bg-gray-600 hover:bg-gray-700"

    return (
      <div
        key={skill.name}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-default ${colorClass}`}
        style={{
          animationDelay: `${index * 0.1}s`,
          animationFillMode: "forwards",
        }}
      >
        <IconComponent className="h-4 w-4" />
        <span>{skillName}</span>
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
                  {t("skills.technical")}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillsData.technical.map((skill, index) => renderSkillPill(skill, index))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Habilidades Blandas */}
          <div
            ref={(el) => { cardRefs.current[1] = el }}
            className="opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                  {t("skills.soft")}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillsData.soft.map((skill, index) => renderSkillPill(skill, index))}
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
                  {t("skills.tools")}
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
