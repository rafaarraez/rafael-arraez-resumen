"use client"

import { useEffect, useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"

// Datos de ejemplo - reemplaza con tu información real
const timelineDataES = [
  {
    id: 1,
    title: "Cargo Actual",
    company: "Empresa Actual",
    period: "2021 - Presente",
    description: "Descripción de tus responsabilidades y logros en tu posición actual.",
    type: "work",
  },
  {
    id: 2,
    title: "Cargo Anterior",
    company: "Empresa Anterior",
    period: "2018 - 2021",
    description: "Descripción de tus responsabilidades y logros en esta posición.",
    type: "work",
  },
  {
    id: 3,
    title: "Título Universitario",
    company: "Universidad",
    period: "2014 - 2018",
    description: "Detalles sobre tu educación, especialización y logros académicos.",
    type: "education",
  },
  {
    id: 4,
    title: "Primer Trabajo",
    company: "Empresa Inicial",
    period: "2012 - 2014",
    description: "Descripción de tus responsabilidades y experiencia en tu primer trabajo.",
    type: "work",
  },
]

const timelineDataEN = [
  {
    id: 1,
    title: "Current Position",
    company: "Current Company",
    period: "2021 - Present",
    description: "Description of your responsibilities and achievements in your current position.",
    type: "work",
  },
  {
    id: 2,
    title: "Previous Position",
    company: "Previous Company",
    period: "2018 - 2021",
    description: "Description of your responsibilities and achievements in this position.",
    type: "work",
  },
  {
    id: 3,
    title: "University Degree",
    company: "University",
    period: "2014 - 2018",
    description: "Details about your education, specialization, and academic achievements.",
    type: "education",
  },
  {
    id: 4,
    title: "First Job",
    company: "Initial Company",
    period: "2012 - 2014",
    description: "Description of your responsibilities and experience in your first job.",
    type: "work",
  },
]

export function Timeline() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const timelineData = language === "es" ? timelineDataES : timelineDataEN

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

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section
      id="trayectoria"
      ref={sectionRef}
      className="py-20 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("timeline.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("timeline.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("timeline.description")}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Línea vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600/80 via-purple-600/50 to-purple-600/20" />

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`relative flex items-center mb-12 opacity-0`}
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 ml-auto"}`}>
                <Card className="overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>
                      {item.company} | {item.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-950 border-2 border-purple-600 flex items-center justify-center z-10">
                {item.type === "work" ? (
                  <Briefcase className="h-5 w-5 text-purple-600" />
                ) : (
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
