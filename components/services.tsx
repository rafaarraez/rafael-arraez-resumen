"use client"

import { useEffect, useRef } from "react"
import { Code, Lightbulb, PlugZap, LayoutPanelTop } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"

// Datos de ejemplo - reemplaza con tus servicios reales
const servicesDataES = [
  {
    icon: <Code className="h-10 w-10 text-purple-600" />,
    title: "Arquitectura y Desarrollo Backend",
    description: `Diseño e implementación de arquitecturas escalables y eficientes, 
    utilizando tecnologías como Node.js, NestJS, Laravel y Django. Ideal para productos digitales que 
    requieren alto rendimiento y buena organización del código.`,
  },
  {
    icon: <PlugZap className="h-10 w-10 text-purple-600" />,
    title: "APIs y Microservicios",
    description: `Construcción de APIs RESTful y microservicios robustos y seguros, conectando distintas 
    plataformas o servicios entre sí. Trabajo con PostgreSQL, Redis, Docker y AWS para garantizar 
    escalabilidad y mantenibilidad.`,
  },
  {
    icon: <LayoutPanelTop className="h-10 w-10 text-purple-600" />,
    title: "Integración Web Full-Stack",
    description: `Integración completa entre frontend y backend, asegurando una comunicación fluida entre componentes. 
    Ideal para productos que usan Next.js o React en el frontend y requieren una lógica sólida detrás.`,
  },
]

const servicesDataEN = [
  {
    icon: <Code className="h-10 w-10 text-purple-600" />,
    title: "Backend Architecture and Development",
    description: `Design and implementation of scalable and efficient architectures, 
    using technologies like Node.js, NestJS, Laravel, and Django. Perfect for digital products 
    that require high performance and well-structured codebases.`,
  },
  {
    icon: <PlugZap className="h-10 w-10 text-purple-600" />,
    title: "APIs and Microservices",
    description: `Development of robust and secure RESTful APIs and microservices, 
    connecting various platforms and services. I work with PostgreSQL, Redis, Docker, and AWS 
    to ensure scalability and maintainability.`,
  },
  {
    icon: <LayoutPanelTop className="h-10 w-10 text-purple-600" />,
    title: "Full-Stack Web Integration",
    description: `End-to-end integration between frontend and backend, ensuring smooth communication 
    across components. Ideal for products using Next.js or React on the frontend backed by solid logic.`,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
