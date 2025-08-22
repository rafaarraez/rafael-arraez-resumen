"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, MapPin, Calendar, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"
import { useMobile } from "@/hooks/use-mobile"

const experienceDataES = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Magellan",
    period: "Febrero 2024 - Febrero 2025",
    location: "USA, Remoto",
    description: "Lideré el desarrollo de integraciones complejas y optimización de sistemas de alto rendimiento.",
    achievements: [
      "Diseñé integraciones en tiempo real HubSpot, Salesforce y SalesLoft",
      "Optimicé consultas PostgreSQL, reduciendo 15% tiempo de respuesta",
      "Desarrollé módulos Django + OpenAI GPT con +25% conversión",
      "Implementé CI/CD con GitHub Actions, reduciendo fallas 40%",
    ],
    technologies: ["NestJS", "TypeScript", "Django", "PostgreSQL", "AWS", "OpenAI GPT"],
    type: "work",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "WiTi",
    period: "Noviembre 2022 - Febrero 2024",
    location: "Chile, Remoto",
    description: "Desarrollé sistema de e-commerce multi-tienda y lideré equipo de desarrollo.",
    achievements: [
      "Implementé sistema control pedidos procesando +1M transacciones/mes",
      "Aumenté cobertura de pruebas al 85% con Jest",
      "Diseñé autenticación basada en roles y trazabilidad avanzada",
      "Mentoricé equipo de 3 developers junior, mejorando rampa 40%",
    ],
    technologies: ["NestJS", "AWS", "PostgreSQL", "Next.js", "Jest", "Docker"],
    type: "work",
  },
  {
    id: 3,
    title: "FullStack Developer",
    company: "Raxo Creative",
    period: "Febrero 2021 - Noviembre 2022",
    location: "USA, Remoto",
    description: "Construí APIs REST y desarrollé aplicaciones full-stack para diversos sectores.",
    achievements: [
      "Construí APIs REST para plataformas inmobiliarias y contenido viral",
      "Lideré desarrollo red social con notificaciones tiempo real",
      "Implementé autenticación JWT y middleware dinámico",
      "Desarrollé roles administrativos y sistema de permisos",
    ],
    technologies: ["NestJS", "Next.js", "PostgreSQL", "JWT", "WebSockets"],
    type: "work",
  },
  {
    id: 4,
    title: "FullStack Developer",
    company: "AKB Fintech",
    period: "Enero 2020 - Febrero 2021",
    location: "USA, Remoto",
    description: "Desarrollé sistemas fintech y plataformas de comunicación masiva.",
    achievements: [
      "Creé sistema omnicanal soporte técnico con asignación automática",
      "Desarrollé backend envíos masivos SMS/email, +35% entregabilidad",
      "Refactoricé PostgreSQL, reduciendo latencia consultas 30%",
      "Implementé dashboard métricas tiempo real",
    ],
    technologies: ["Laravel", "Vue.js", "PostgreSQL", "Redis", "SMS/Email APIs"],
    type: "work",
  },
  {
    id: 5,
    title: "FullStack Developer",
    company: "Impulsa Creativos",
    period: "Julio 2018 - Diciembre 2019",
    location: "Valencia, Venezuela",
    description: "Desarrollé soluciones web para campañas digitales y e-commerce.",
    achievements: [
      "Desarrollé landing pages interactivas con alta conversión",
      "Construí APIs REST para e-commerce B2B y B2C",
      "Participé en discovery sessions definiendo MVPs",
      "Implementé integraciones con pasarelas de pago",
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "JavaScript", "CSS3"],
    type: "work",
  },
  {
    id: 6,
    title: "Ingeniero en Computación",
    company: "Universidad José Antonio Páez",
    period: "2014 - Julio 2019",
    location: "Valencia, Venezuela",
    description: "Formación en ingeniería de software, algoritmos, estructuras de datos y desarrollo web.",
    achievements: [
      "Graduado con honores en Ingeniería en Computación",
      "Proyecto de grado: Sistema de gestión académica web",
      "Especialización en desarrollo web y bases de datos",
      "Participación en hackathons y competencias de programación",
    ],
    technologies: ["Java", "C++", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "education",
  },
]

const experienceDataEN = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Magellan",
    period: "February 2024 - February 2025",
    location: "USA, Remote",
    description: "Led development of complex integrations and high-performance system optimization.",
    achievements: [
      "Designed real-time integrations HubSpot, Salesforce and SalesLoft",
      "Optimized PostgreSQL queries, reducing response time by 15%",
      "Developed Django + OpenAI GPT modules with +25% conversion",
      "Implemented CI/CD with GitHub Actions, reducing failures by 40%",
    ],
    technologies: ["NestJS", "TypeScript", "Django", "PostgreSQL", "AWS", "OpenAI GPT"],
    type: "work",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "WiTi",
    period: "November 2022 - February 2024",
    location: "Chile, Remote",
    description: "Developed multi-store e-commerce system and led development team.",
    achievements: [
      "Implemented order control system processing +1M transactions/month",
      "Increased test coverage to 85% with Jest",
      "Designed role-based authentication and advanced traceability",
      "Mentored team of 3 junior developers, improving ramp-up by 40%",
    ],
    technologies: ["NestJS", "AWS", "PostgreSQL", "Next.js", "Jest", "Docker"],
    type: "work",
  },
  {
    id: 3,
    title: "FullStack Developer",
    company: "Raxo Creative",
    period: "February 2021 - November 2022",
    location: "USA, Remote",
    description: "Built REST APIs and developed full-stack applications for various sectors.",
    achievements: [
      "Built REST APIs for real estate and viral content platforms",
      "Led social network development with real-time notifications",
      "Implemented JWT authentication and dynamic middleware",
      "Developed administrative roles and permissions system",
    ],
    technologies: ["NestJS", "Next.js", "PostgreSQL", "JWT", "WebSockets"],
    type: "work",
  },
  {
    id: 4,
    title: "FullStack Developer",
    company: "AKB Fintech",
    period: "January 2020 - February 2021",
    location: "USA, Remote",
    description: "Developed fintech systems and mass communication platforms.",
    achievements: [
      "Created omnichannel technical support system with automatic assignment",
      "Developed bulk SMS/email backend, +35% deliverability",
      "Refactored PostgreSQL, reducing query latency by 30%",
      "Implemented real-time metrics dashboard",
    ],
    technologies: ["Laravel", "Vue.js", "PostgreSQL", "Redis", "SMS/Email APIs"],
    type: "work",
  },
  {
    id: 5,
    title: "FullStack Developer",
    company: "Impulsa Creativos",
    period: "July 2018 - December 2019",
    location: "Valencia, Venezuela",
    description: "Developed web solutions for digital campaigns and e-commerce.",
    achievements: [
      "Developed interactive landing pages with high conversion",
      "Built REST APIs for B2B and B2C e-commerce",
      "Participated in discovery sessions defining MVPs",
      "Implemented payment gateway integrations",
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "JavaScript", "CSS3"],
    type: "work",
  },
  {
    id: 6,
    title: "Computer Engineering",
    company: "Universidad José Antonio Páez",
    period: "2014 - July 2019",
    location: "Valencia, Venezuela",
    description: "Training in software engineering, algorithms, data structures and web development.",
    achievements: [
      "Graduated with honors in Computer Engineering",
      "Thesis project: Web academic management system",
      "Specialization in web development and databases",
      "Participation in hackathons and programming competitions",
    ],
    technologies: ["Java", "C++", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    type: "education",
  },
]

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
                  <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Logros Clave:</h4>
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
                  <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Tecnologías:</h4>
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
                    <h4 className="text-smv text-left font-semibold mb-3 text-gray-700 dark:text-gray-300">Logros Clave:</h4>
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
                    <h4 className="text-sm text-left font-semibold mb-3 text-gray-700 dark:text-gray-300">Tecnologías:</h4>
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
      id="experiencia"
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
