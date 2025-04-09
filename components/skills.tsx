"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent } from "@/components/ui-custom/card"

// Datos de ejemplo - reemplaza con tus habilidades reales
const skillsData = {
  technical: [
    { name: "Habilidad 1", nameEn: "Skill 1", level: 90, icon: "/placeholder.svg?height=80&width=80" },
    { name: "Habilidad 2", nameEn: "Skill 2", level: 85, icon: "/placeholder.svg?height=80&width=80" },
    { name: "Habilidad 3", nameEn: "Skill 3", level: 75, icon: "/placeholder.svg?height=80&width=80" },
    { name: "Habilidad 4", nameEn: "Skill 4", level: 80, icon: "/placeholder.svg?height=80&width=80" },
    { name: "Habilidad 5", nameEn: "Skill 5", level: 70, icon: "/placeholder.svg?height=80&width=80" },
  ],
  soft: [
    { name: "Comunicación", nameEn: "Communication", level: 95, icon: "/placeholder.svg?height=80&width=80" },
    { name: "Trabajo en equipo", nameEn: "Teamwork", level: 90, icon: "/placeholder.svg?height=80&width=80" },
    {
      name: "Resolución de problemas",
      nameEn: "Problem Solving",
      level: 85,
      icon: "/placeholder.svg?height=80&width=80",
    },
    { name: "Liderazgo", nameEn: "Leadership", level: 80, icon: "/placeholder.svg?height=80&width=80" },
    { name: "Gestión del tiempo", nameEn: "Time Management", level: 85, icon: "/placeholder.svg?height=80&width=80" },
  ],
  tools: [
    { name: "Herramienta 1", nameEn: "Tool 1", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Herramienta 2", nameEn: "Tool 2", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Herramienta 3", nameEn: "Tool 3", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Herramienta 4", nameEn: "Tool 4", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Herramienta 5", nameEn: "Tool 5", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Herramienta 6", nameEn: "Tool 6", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Herramienta 7", nameEn: "Tool 7", icon: "/placeholder.svg?height=60&width=60" },
    { name: "Herramienta 8", nameEn: "Tool 8", icon: "/placeholder.svg?height=60&width=60" },
  ],
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

  // Función para renderizar estrellas basadas en el nivel de habilidad
  const renderStars = (level: number) => {
    const maxStars = 5
    const filledStars = Math.round((level / 100) * maxStars)

    return (
      <div className="flex gap-1">
        {[...Array(maxStars)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < filledStars ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={i < filledStars ? "text-purple-600" : "text-gray-400 dark:text-gray-600"}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    )
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            ref={(el) => {
              cardRefs.current[0] = el
            }}
            className="opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6 text-center">{t("skills.technical")}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {skillsData.technical.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="mb-3 bg-gray-200 dark:bg-gray-800 p-4 rounded-full">
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={language === "es" ? skill.name : skill.nameEn}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      </div>
                      <h4 className="font-medium mb-1">{language === "es" ? skill.name : skill.nameEn}</h4>
                      {renderStars(skill.level)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            ref={(el) => {
              cardRefs.current[1] = el
            }}
            className="opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6 text-center">{t("skills.soft")}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {skillsData.soft.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="mb-3 bg-gray-200 dark:bg-gray-800 p-4 rounded-full">
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={language === "es" ? skill.name : skill.nameEn}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      </div>
                      <h4 className="font-medium mb-1">{language === "es" ? skill.name : skill.nameEn}</h4>
                      {renderStars(skill.level)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            ref={(el) => {
              cardRefs.current[2] = el
            }}
            className="md:col-span-2 opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6 text-center">{t("skills.tools")}</h3>
                <div className="flex flex-wrap gap-6 justify-center">
                  {skillsData.tools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="mb-2 bg-gray-200 dark:bg-gray-800 p-3 rounded-full transition-transform hover:scale-110">
                        <Image
                          src={tool.icon || "/placeholder.svg"}
                          alt={language === "es" ? tool.name : tool.nameEn}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {language === "es" ? tool.name : tool.nameEn}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
