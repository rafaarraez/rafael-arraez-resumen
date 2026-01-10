"use client"

import { useEffect, useRef } from "react"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent } from "@/components/ui-custom/card"
import { SectionId } from "@/lib/sections"

interface Certification {
  id: number
  name: string
  issuer: string
  date: string
  credentialId?: string
  icon: string
  color: string
  url?: string
}

const certificationsData: Certification[] = [
  {
    id: 1,
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: "☁️",
    color: "from-orange-500 to-orange-600",
    credentialId: "AWS-SAA-2023-XXXXX",
    url: "#",
  },
  {
    id: 2,
    name: "NestJS Fundamentals",
    issuer: "NestJS Official",
    date: "2022",
    icon: "🚀",
    color: "from-red-500 to-red-600",
    credentialId: "NEST-FUND-2022-XXXXX",
  },
  {
    id: 3,
    name: "TypeScript Advanced",
    issuer: "Microsoft Learn",
    date: "2022",
    icon: "💎",
    color: "from-blue-500 to-blue-600",
    credentialId: "TS-ADV-2022-XXXXX",
  },
  {
    id: 4,
    name: "Docker & Kubernetes",
    issuer: "Docker Inc.",
    date: "2023",
    icon: "🐳",
    color: "from-blue-400 to-blue-500",
    credentialId: "DK8S-2023-XXXXX",
  },
  {
    id: 5,
    name: "PostgreSQL Performance Tuning",
    issuer: "PostgreSQL Community",
    date: "2022",
    icon: "🐘",
    color: "from-blue-600 to-blue-700",
    credentialId: "PSQL-PERF-2022-XXXXX",
  },
  {
    id: 6,
    name: "Microservices Architecture",
    issuer: "Cloud Academy",
    date: "2023",
    icon: "🔧",
    color: "from-purple-500 to-purple-600",
    credentialId: "MICRO-ARCH-2023-XXXXX",
  },
]

export function Certifications() {
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
      id={SectionId.certifications}
      ref={sectionRef}
      className="py-20 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("certifications.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("certifications.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("certifications.description")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => { cardRefs.current[index] = el }}
              className="opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden relative">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <CardContent className="p-6 flex flex-col h-full relative z-10">
                  {/* Icon Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>
                    <Award className="h-6 w-6 text-purple-600 dark:text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    {cert.issuer}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-3">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                  )}

                  {/* View Credential Link */}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
                    >
                      {t("certifications.viewCredential")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
