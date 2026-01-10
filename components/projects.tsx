"use client"

import { useEffect, useRef } from "react"
import { Database, Cloud, Zap, Users, TrendingUp, Activity } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Button } from "@/components/ui-custom/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"
import { SectionId } from "@/lib/sections"
import { projectsData } from "@/data/projects"
import { contentTranslations } from "@/data/translations"

const iconMap = {
  Activity: Activity,
  Database: Database,
  Cloud: Cloud,
  Zap: Zap,
  Users: Users,
}

export function Projects() {
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
      id={SectionId.projects}
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900/50 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("projects.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("projects.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => {
            const content = contentTranslations[language].projects[project.id as keyof typeof contentTranslations.es.projects]
            const IconComponent = iconMap[project.iconName]

            return (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el }}
                className="opacity-0"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-600 group/card">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg transition-all duration-300 group-hover/card:bg-purple-200 dark:group-hover/card:bg-purple-900/50 group-hover/card:scale-110">
                          <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover/card:rotate-12" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{content.title}</CardTitle>
                          <CardDescription className="text-sm font-medium text-purple-600">
                            {project.company} • {project.period}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{content.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105 cursor-default group/metric">
                          <div className="text-lg font-bold text-purple-600 group-hover/metric:scale-110 transition-transform">{value}</div>
                          <div className="text-xs text-gray-500 capitalize group-hover/metric:text-gray-700 dark:group-hover/metric:text-gray-300 transition-colors">
                            {content.metricsLabels[key as keyof typeof content.metricsLabels]}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">{t("projects.stack")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">{t("projects.achievements")}</h4>
                      <ul className="space-y-2">
                        {content.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {language === "es"
              ? "¿Interesado en ver más detalles técnicos o discutir un proyecto similar?"
              : "Interested in seeing more technical details or discussing a similar project?"}
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById(SectionId.contact)?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-lg px-8"
          >
            {language === "es" ? "Hablemos" : "Let's Talk"}
          </Button>
        </div>
      </div>
    </section>
  )
}
