"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { SkillCard } from "@/components/ui-custom/SkillCard"
import { MessageCircle, Users, Puzzle, Award, Clock } from "lucide-react"

// Simplificación del objeto iconos
import {
  NodejsPlainWordmark,
  NestjsOriginal,
  NextjsOriginalWordmark,
  ReactOriginalWordmark,
  TypescriptOriginal,
  JavascriptOriginal,
  PhpOriginal,
  LaravelOriginal,
  PythonOriginalWordmark,
  DjangoPlain,
  MysqlOriginal,
  PostgresqlOriginalWordmark,
  MongodbOriginalWordmark,
  RedisPlainWordmark,
  DockerOriginalWordmark,
  AmazonwebservicesOriginalWordmark,
  GitOriginal,
  GithubOriginalWordmark,
  LinuxOriginal,
  VscodeOriginal,
  PostmanPlain,
} from "devicons-react";

const icons = {
  Nodejs: NodejsPlainWordmark,
  Nestjs: NestjsOriginal,
  Nextjs: NextjsOriginalWordmark,
  React: ReactOriginalWordmark,
  Typescript: TypescriptOriginal,
  Javascript: JavascriptOriginal,
  Php: PhpOriginal,
  Laravel: LaravelOriginal,
  Python: PythonOriginalWordmark,
  Django: DjangoPlain,
  Mysql: MysqlOriginal,
  Postgresql: PostgresqlOriginalWordmark,
  MongoDB: MongodbOriginalWordmark,
  Redis: RedisPlainWordmark,
  Docker: DockerOriginalWordmark,
  AWS: AmazonwebservicesOriginalWordmark,
  Git: GitOriginal,
  Github: GithubOriginalWordmark,
  Linux: LinuxOriginal,
  Vscode: VscodeOriginal,
  Postman: PostmanPlain,
  // Habilidades blandas
  Communication: MessageCircle,
  Teamwork: Users,
  "Problem Solving": Puzzle,
  "Time Management": Clock,
  Leadership: Award,
};
type SkillCategory = "technical" | "soft" | "tools";

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
  ]
};

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

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-900 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("skills.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("skills.description")}</p>
        </div>

        <div className="flex gap-2 max-w-5xl mx-auto">
          {(["technical", "soft", "tools"] as Array<keyof typeof skillsData>).map((category, idx) => (
            <div
              key={category}
              ref={(el) => { cardRefs.current[idx] = el }}
              className={`opacity-0 ${idx === 2 ? 'w-full md:w-1/2' : 'w-full md:w-1/2'}`}
              style={{ animationDelay: `${0.3 + 0.1 * idx}s`, animationFillMode: "forwards" }}
            >
              <SkillCard
                title={t(`skills.${category}`)}
                skills={skillsData[category]}
                icons={icons}
                language={language}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
