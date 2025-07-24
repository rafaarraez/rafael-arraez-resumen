"use client"

import { useEffect, useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"
import { useMobile } from "@/hooks/use-mobile"

// Data for the Spanish version of the timeline
const timelineDataES = [
  {
    id: 0,
    title: "Desarrollador WordPress Freelance",
    company: "Freelance",
    period: "Febrero 2023 - Actualidad",
    description: "Desde 2023, trabajo en la creación de tiendas online con WooCommerce, desarrollo de plugins a medida, personalización de temas y diseño de landing pages optimizadas para conversión, rendimiento y SEO. Trabajo con maquetadores como Elementor y WPBakery, enfocándome siempre en ofrecer soluciones a medida, rápidas y adaptadas a cada cliente.",
    type: "work",
  },
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Magellan",
    period: "Feb 2024 - Feb 2025",
    description: "Desarrollé herramientas de email marketing personalizadas con IA usando Django y OpenAI. Integré plataformas CRM (Hubspot, Salesforce, SalesLoft) y mejoré el rendimiento de consultas PostgreSQL en un 15%. Administré infraestructura escalable en AWS (ECS y RDS).",
    type: "work",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "WiTi (Cencosud)",
    period: "Nov 2022 - Feb 2024",
    description: "Lideré el desarrollo backend para rastreo de pedidos en tiempo real con NestJS y AWS (Lambda, API Gateway, SQS, DynamoDB). Reduje la latencia de consultas SQL en un 20% y diseñé microservicios seguros y escalables.",
    type: "work",
  },
  {
    id: 3,
    title: "FullStack Developer",
    company: "Raxo Creative",
    period: "Feb 2021 - Nov 2022",
    description: "Construí APIs REST con NestJS y PostgreSQL para plataformas inmobiliarias y de noticias. Lideré el desarrollo fullstack de una red social usando Next.js y NestJS, enfocada en experiencia de usuario y rendimiento.",
    type: "work",
  },
  {
    id: 4,
    title: "FullStack Developer",
    company: "AKB Fintech",
    period: "Ene 2020 - Feb 2021",
    description: "Desarrollé módulos de pagos y tickets de soporte con Laravel y VueJS. Implementé envíos masivos de SMS y correos, y optimicé bases de datos PostgreSQL mejorando el rendimiento en un 30%.",
    type: "work",
  },
  {
    id: 5,
    title: "Ingeniero en Computación",
    company: "Universidad José Antonio Páez",
    period: "2014 - 2019",
    description: "Graduado en la carrera de Ingeniería en Computación, con un enfoque en desarrollo de software y gestión bases de datos",
    type: "education",
  },
  {
    id: 6,
    title: "FullStack Developer",
    company: "Impulsa Creativos",
    period: "Jul 2018 - Dic 2019",
    description: "Desarrollé landing pages interactivas con Vue.js, mejorando el SEO y la experiencia del usuario. Implementé APIs REST con Laravel y PostgreSQL para gestionar catálogos de productos en plataformas e-commerce.",
    type: "work",
  },
]
// Data for the English version of the timeline
const timelineDataEN = [
  {
    id: 0,
    title: "Freelance WordPress Developer",
    company: "Freelance",
    period: "February 2023 - Present",
    description: "Since 2023, I’ve been building custom online stores with WooCommerce, developing tailored plugins, customizing themes, and designing high-converting landing pages optimized for performance, SEO, and mobile. I work with page builders like Elementor and WPBakery, always focused on delivering fast, custom solutions that match each client's needs.",
    type: "work",
  },
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Magellan",
    period: "Feb 2024 - Feb 2025",
    description: "Developed AI-powered email marketing tools with Django and OpenAI. Integrated CRM platforms (Hubspot, Salesforce, SalesLoft) and improved PostgreSQL query performance by 15%. Managed scalable AWS ECS and RDS infrastructure.",
    type: "work",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "WiTi (Cencosud)",
    period: "Nov 2022 - Feb 2024",
    description: "Led backend development for real-time order tracking using NestJS and AWS (Lambda, API Gateway, SQS, DynamoDB). Reduced SQL query latency by 20% and implemented secure, scalable microservices architecture.",
    type: "work",
  },
  {
    id: 3,
    title: "FullStack Developer",
    company: "Raxo Creative",
    period: "Feb 2021 - Nov 2022",
    description: "Built REST APIs with NestJS and PostgreSQL for real estate and news platforms. I worked on frontend/backend development of a social platform using Next.js and NestJS, focusing on usability and performance.",
    type: "work",
  },
  {
    id: 4,
    title: "FullStack Developer",
    company: "AKB Fintech",
    period: "Jan 2020 - Feb 2021",
    description: "Developed payment and support ticket modules using Laravel and VueJS. Implemented mass SMS and email modules, and boosted PostgreSQL performance by 30%.",
    type: "work",
  },
  {
    id: 5,
    title: "Bachelor of Computer Engineering",
    company: "Universidad José Antonio Páez",
    period: "2014 - 2019",
    description: "Graduated in Computer Engineering with a focus on software development and database management.",
    type: "education",
  },
  {
    id: 6,
    title: "FullStack Developer",
    company: "Impulsa Creativos",
    period: "Jul 2018 - Dec 2019",
    description: "Built interactive landing pages with Vue.js, enhancing SEO and user experience. Developed REST APIs using Laravel and PostgreSQL to manage product catalogs for e-commerce platforms.",
    type: "work",
  },
]


export function Timeline() {
  const { t, language } = useLanguage()
  const isMobile = useMobile()

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

  // Renderizado para dispositivos móviles
  const renderMobileTimeline = () => {
    return (
      <div className="space-y-8 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600/80 via-purple-600/50 to-purple-600/20" />

        {timelineData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="opacity-0 relative pl-12"
            style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
          >
            <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-white dark:bg-gray-950 border-2 border-purple-600 flex items-center justify-center z-10">
              {item.type === "work" ? (
                <Briefcase className="h-4 w-4 text-purple-600" />
              ) : (
                <GraduationCap className="h-4 w-4 text-purple-600" />
              )}
            </div>

            <Card className="overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm">
                  {item.company} | {item.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    )
  }

  // Renderizado para escritorio
  const renderDesktopTimeline = () => {
    return (
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
    )
  }

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

        {isMobile ? renderMobileTimeline() : renderDesktopTimeline()}
      </div>
    </section>
  )
}
