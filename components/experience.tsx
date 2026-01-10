"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, MapPin, Calendar, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"
import { useMobile } from "@/hooks/use-mobile"
import { SectionId } from "@/lib/sections"

const experienceDataES = [
  {
    id: 1,
    title: "Senior Backend Software Engineer",
    company: "SilverConnect",
    period: "Octubre 2025 - Actualidad",
    location: "USA, Remoto",
    description:
      "Diseño y desarrollo de microservicios backend de alta disponibilidad para una aplicación de asistencia en tiempo real.",
    achievements: [
      "Diseñé y desarrollé microservicios backend en NestJS aplicando Clean Architecture, DDD y patrones de diseño, reduciendo incidentes operativos en ≈30%",
      "Implementé APIs REST escalables y flujos event-driven asegurando integridad de datos, control de accesos (JWT, roles) y trazabilidad completa de eventos de negocio",
      "Desarrollé comunicación en tiempo real con WebSockets para sincronización de estados y gestión de sesiones activas en flujos críticos de negocio",
      "Optimicé consultas y modelos de datos en PostgreSQL usando TypeORM, reduciendo hasta 40% los tiempos de respuesta en endpoints críticos",
      "Implementé observabilidad y auditoría mediante logs estructurados y métricas, facilitando monitoreo proactivo y detección temprana de incidentes",
      "Containericé servicios con Docker y gestioné pipelines CI/CD con GitHub Actions, mejorando la confiabilidad y velocidad de despliegue en cloud",
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "AWS",
      "Docker",
      "WebSockets",
      "GitHub Actions",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Magellan",
    period: "Febrero 2024 - Octubre 2025",
    location: "USA, Remoto",
    description:
      "Desarrollo de integraciones a gran escala y sistemas backend orientados a marketing automation y business analytics.",
    achievements: [
      "Diseñé e implementé integraciones a gran escala entre HubSpot, Salesforce y SalesLoft, sincronizando millones de registros de marketing y ventas",
      "Optimicé consultas complejas en PostgreSQL, reduciendo en 15% el tiempo de respuesta de dashboards críticos de business analytics",
      "Desarrollé módulos backend con Django + OpenAI API para automatización de campañas de email marketing, logrando +25% de conversión",
      "Implementé CI/CD con GitHub Actions y Docker, reduciendo fallos de despliegue en ≈40%",
    ],
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "OpenAI API",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    company: "WiTi",
    period: "Noviembre 2022 - Febrero 2024",
    location: "Chile, Remoto",
    description:
      "Desarrollo de sistemas backend escalables para e-commerce y liderazgo técnico de equipo.",
    achievements: [
      "Implementé un sistema de control de pedidos multi-tienda en NestJS y AWS, procesando +1M transacciones por mes",
      "Aumenté la cobertura de pruebas al 85% con Jest en backend (NestJS) y frontend (Next.js)",
      "Diseñé autenticación basada en roles y trazabilidad avanzada, fortaleciendo la seguridad del sistema",
      "Mentoricé a un equipo de 3 desarrolladores junior, mejorando sus prácticas de desarrollo y acelerando su rampa de aprendizaje en 40%",
    ],
    technologies: [
      "NestJS",
      "AWS",
      "PostgreSQL",
      "Next.js",
      "Jest",
      "Docker",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "FullStack Developer",
    company: "Raxo Creative",
    period: "Febrero 2021 - Noviembre 2022",
    location: "USA, Remoto",
    description:
      "Desarrollo de plataformas web y APIs REST para productos digitales y redes sociales.",
    achievements: [
      "Construí APIs REST en NestJS para plataformas inmobiliarias y de contenido viral",
      "Lideré el desarrollo de una red social en Next.js y NestJS con notificaciones en tiempo real y roles administrativos",
      "Implementé autenticación JWT y middleware dinámico de permisos",
    ],
    technologies: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "JWT",
      "WebSockets",
    ],
    type: "work",
  },
  {
    id: 5,
    title: "FullStack Developer",
    company: "AKB Fintech",
    period: "Enero 2020 - Febrero 2021",
    location: "USA, Remoto",
    description:
      "Desarrollo de sistemas fintech y plataformas de comunicación omnicanal.",
    achievements: [
      "Creé un sistema omnicanal de soporte técnico en Laravel y Vue.js, automatizando la asignación de tickets",
      "Desarrollé backend para envíos masivos SMS y email, aumentando la entregabilidad en 35%",
      "Refactoricé PostgreSQL, reduciendo la latencia de consultas en 30%",
    ],
    technologies: ["Laravel", "Vue.js", "PostgreSQL"],
    type: "work",
  },
  {
    id: 6,
    title: "FullStack Developer",
    company: "Impulsa Creativos",
    period: "Julio 2018 - Diciembre 2019",
    location: "Valencia, Venezuela",
    description:
      "Desarrollo de soluciones web para campañas digitales y plataformas e-commerce.",
    achievements: [
      "Desarrollé landing pages interactivas en Vue.js para campañas digitales con mayor conversión",
      "Construí APIs REST en Laravel para e-commerce B2B y B2C",
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "JavaScript", "CSS3"],
    type: "work",
  },
  {
    id: 7,
    title: "Ingeniero en Computación",
    company: "Universidad José Antonio Páez",
    period: "2014 - Julio 2019",
    location: "Valencia, Venezuela",
    description:
      "Formación en ingeniería de software, algoritmos, estructuras de datos y desarrollo web.",
    achievements: [
      "Proyecto de grado: Sistema de verificación de identidad biométrica",
      "Especialización en desarrollo web y bases de datos",
    ],
    technologies: ["Java", "Python", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "education",
  },
];


const experienceDataEN = [
  {
    id: 1,
    title: "Senior Backend Software Engineer",
    company: "SilverConnect",
    period: "October 2025 - Present",
    location: "USA, Remote",
    description:
      "Design and development of high-availability backend microservices for a real-time assistance application.",
    achievements: [
      "Designed and developed backend microservices in NestJS applying Clean Architecture, DDD, and design patterns, reducing operational incidents by ~30%",
      "Implemented scalable REST APIs and event-driven flows ensuring data integrity, access control (JWT, role-based authorization), and full business-event traceability",
      "Developed real-time communication using WebSockets for state synchronization and active session management in critical business workflows",
      "Optimized PostgreSQL queries and data models using TypeORM, reducing response times by up to 40% on critical endpoints",
      "Implemented observability and audit logging with structured logs and metrics, enabling proactive monitoring and early incident detection",
      "Containerized services with Docker and managed CI/CD pipelines using GitHub Actions, improving deployment reliability and speed in cloud environments",
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "AWS",
      "Docker",
      "WebSockets",
      "GitHub Actions",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Magellan",
    period: "February 2024 - October 2025",
    location: "USA, Remote",
    description:
      "Development of large-scale integrations and backend systems for marketing automation and business analytics.",
    achievements: [
      "Designed and implemented large-scale integrations between HubSpot, Salesforce, and SalesLoft, synchronizing millions of marketing and sales records",
      "Optimized complex PostgreSQL queries, reducing response times by 15% on critical business analytics dashboards",
      "Developed backend modules using Django and the OpenAI API for email marketing automation, achieving a +25% conversion increase",
      "Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment failures by ~40%",
    ],
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "OpenAI API",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    company: "WiTi",
    period: "November 2022 - February 2024",
    location: "Chile, Remote",
    description:
      "Development of scalable backend systems for e-commerce platforms and technical leadership.",
    achievements: [
      "Implemented a multi-store order management system using NestJS and AWS, processing over 1M transactions per month",
      "Increased test coverage to 85% using Jest across backend (NestJS) and frontend (Next.js)",
      "Designed role-based authentication and advanced traceability, significantly strengthening system security",
      "Mentored a team of 3 junior developers, improving engineering practices and accelerating ramp-up time by 40%",
    ],
    technologies: [
      "NestJS",
      "AWS",
      "PostgreSQL",
      "Next.js",
      "Jest",
      "Docker",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "FullStack Developer",
    company: "Raxo Creative",
    period: "February 2021 - November 2022",
    location: "USA, Remote",
    description:
      "Development of web platforms and REST APIs for digital products and social applications.",
    achievements: [
      "Built REST APIs in NestJS for real estate platforms and viral content products",
      "Led the development of a social network using Next.js and NestJS with real-time notifications and administrative roles",
      "Implemented JWT authentication and dynamic permission-based middleware",
    ],
    technologies: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "JWT",
      "WebSockets",
    ],
    type: "work",
  },
  {
    id: 5,
    title: "FullStack Developer",
    company: "AKB Fintech",
    period: "January 2020 - February 2021",
    location: "USA, Remote",
    description:
      "Development of fintech systems and omnichannel communication platforms.",
    achievements: [
      "Built an omnichannel customer support system using Laravel and Vue.js with automated ticket assignment",
      "Developed backend services for bulk SMS and email delivery, increasing deliverability by 35%",
      "Refactored PostgreSQL queries and schema, reducing query latency by 30%",
    ],
    technologies: ["Laravel", "Vue.js", "PostgreSQL"],
    type: "work",
  },
  {
    id: 6,
    title: "FullStack Developer",
    company: "Impulsa Creativos",
    period: "July 2018 - December 2019",
    location: "Valencia, Venezuela",
    description:
      "Development of web solutions for digital campaigns and e-commerce platforms.",
    achievements: [
      "Developed interactive landing pages using Vue.js for digital marketing campaigns with high conversion rates",
      "Built REST APIs in Laravel for B2B and B2C e-commerce platforms",
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "JavaScript", "CSS3"],
    type: "work",
  },
  {
    id: 7,
    title: "Computer Engineering",
    company: "Universidad José Antonio Páez",
    period: "2014 - July 2019",
    location: "Valencia, Venezuela",
    description:
      "Education in software engineering, algorithms, data structures, and web development.",
    achievements: [
      "Thesis project: Biometric identity verification system",
      "Specialization in web development and databases",
    ],
    technologies: ["Java", "Python", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "education",
  },
];


export function Experience() {
  const { t, language } = useLanguage()
  const isMobile = useMobile()
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineProgress, setLineProgress] = useState(0)

  const experienceData = language === "es" ? experienceDataES : experienceDataEN

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

  // Experience animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const windowHeight = window.innerHeight

      const startOffset = windowHeight * 0.8
      const endOffset = windowHeight * 0.2

      let progress = 0

      if (sectionTop <= startOffset && sectionTop >= -sectionHeight + endOffset) {
        const visibleHeight = Math.min(startOffset - sectionTop, sectionHeight - endOffset)
        const totalScrollableHeight = sectionHeight - endOffset
        progress = Math.max(0, Math.min(1, visibleHeight / totalScrollableHeight))
      } else if (sectionTop < -sectionHeight + endOffset) {
        progress = 1
      }

      setLineProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const renderMobileExperience = () => {
    return (
      <div className="space-y-8 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
        <div
          ref={lineRef}
          className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-purple-600/80 via-purple-600/50 to-purple-600/20 transition-all duration-300 ease-out"
          style={{ height: `${lineProgress * 100}%` }}
        />

        {experienceData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => { itemRefs.current[index] = el }}
            className="opacity-0 relative pl-12"
            style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
          >
            <div
              className={`absolute left-0 top-3 w-8 h-8 rounded-full bg-white dark:bg-gray-950 border-2 flex items-center justify-center z-10 transition-all duration-500 ${lineProgress > (index + 0.5) / experienceData.length
                ? "border-purple-600 scale-110"
                : "border-gray-300 dark:border-gray-600"
                }`}
            >
              {item.type === "work" ? (
                <Briefcase
                  className={`h-4 w-4 transition-colors duration-500 ${lineProgress > (index + 0.5) / experienceData.length ? "text-purple-600" : "text-gray-400"
                    }`}
                />
              ) : (
                <GraduationCap
                  className={`h-4 w-4 transition-colors duration-500 ${lineProgress > (index + 0.5) / experienceData.length ? "text-purple-600" : "text-gray-400"
                    }`}
                />
              )}
            </div>

            <Card className="overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-10" />
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-purple-600">
                    <Briefcase className="h-3 w-3" />
                    {item.company}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {item.period}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>

                <div>
                  <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">{t("experience.achievements")}</h4>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <TrendingUp className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">{t("experience.technologies")}</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    )
  }

  const renderDesktopExperience = () => {
    return (
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600/80 via-purple-600/50 to-purple-600/20 transition-all duration-300 ease-out"
          style={{ height: `${lineProgress * 100}%` }}
        />

        {experienceData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => { itemRefs.current[index] = el }}
            className={`relative flex items-center mb-12 opacity-0`}
            style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 ml-auto"}`}>
              <Card className="overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-10" />
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-left">{item.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex text-left items-center gap-2 text-sm font-medium text-purple-600">
                      <Briefcase className="h-4 w-4" />
                      {item.company}
                    </div>
                    <div className="flex text-left items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </div>
                    <div className="flex text-left items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-left dark:text-gray-400 leading-relaxed">{item.description}</p>

                  <div>
                    <h4 className="text-sm text-left font-semibold mb-3 text-gray-700 dark:text-gray-300">{t("experience.achievements")}</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex text-left items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm text-left font-semibold mb-3 text-gray-700 dark:text-gray-300">{t("experience.technologies")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-950 border-2 flex items-center justify-center z-10 transition-all duration-500 ${lineProgress > (index + 0.5) / experienceData.length
                ? "border-purple-600 scale-110"
                : "border-gray-300 dark:border-gray-600"
                }`}
            >
              {item.type === "work" ? (
                <Briefcase
                  className={`h-5 w-5 transition-colors duration-500 ${lineProgress > (index + 0.5) / experienceData.length ? "text-purple-600" : "text-gray-400"
                    }`}
                />
              ) : (
                <GraduationCap
                  className={`h-5 w-5 transition-colors duration-500 ${lineProgress > (index + 0.5) / experienceData.length ? "text-purple-600" : "text-gray-400"
                    }`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section
      id={SectionId.experience}
      ref={sectionRef}
      className="py-20 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("experience.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("experience.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("experience.description")}</p>
        </div>

        {isMobile ? renderMobileExperience() : renderDesktopExperience()}
      </div>
    </section>
  )
}
