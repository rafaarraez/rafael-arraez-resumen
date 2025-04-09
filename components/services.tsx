"use client"

import { useEffect, useRef } from "react"
import { Code, Lightbulb, PenTool, Presentation } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"

// Datos de ejemplo - reemplaza con tus servicios reales
const servicesDataES = [
  {
    icon: <Code className="h-10 w-10 text-purple-600" />,
    title: "Servicio 1",
    description: "Descripción detallada del servicio que ofreces, destacando los beneficios para tus clientes.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-purple-600" />,
    title: "Servicio 2",
    description: "Descripción detallada del servicio que ofreces, destacando los beneficios para tus clientes.",
  },
  {
    icon: <Presentation className="h-10 w-10 text-purple-600" />,
    title: "Servicio 3",
    description: "Descripción detallada del servicio que ofreces, destacando los beneficios para tus clientes.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-purple-600" />,
    title: "Servicio 4",
    description: "Descripción detallada del servicio que ofreces, destacando los beneficios para tus clientes.",
  },
]

const servicesDataEN = [
  {
    icon: <Code className="h-10 w-10 text-purple-600" />,
    title: "Service 1",
    description: "Detailed description of the service you offer, highlighting the benefits for your clients.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-purple-600" />,
    title: "Service 2",
    description: "Detailed description of the service you offer, highlighting the benefits for your clients.",
  },
  {
    icon: <Presentation className="h-10 w-10 text-purple-600" />,
    title: "Service 3",
    description: "Detailed description of the service you offer, highlighting the benefits for your clients.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-purple-600" />,
    title: "Service 4",
    description: "Detailed description of the service you offer, highlighting the benefits for your clients.",
  },
]

export function Services() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const servicesData = language === "es" ? servicesDataES : servicesDataEN

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
      id="servicios"
      ref={sectionRef}
      className="py-20 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("services.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("services.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <Card className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/20">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
