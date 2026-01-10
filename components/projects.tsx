"use client"

import { useEffect, useRef } from "react"
import { Database, Cloud, Zap, Users, TrendingUp, Activity } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Button } from "@/components/ui-custom/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"
import { SectionId } from "@/lib/sections"

const projectsDataES = [
  {
    id: 1,
    title: "Plataforma de Asistencia en Tiempo Real",
    company: "SilverConnect",
    period: "2025",
    description:
      "Plataforma de asistencia y gestión de sesiones en tiempo real, diseñada con microservicios backend de alta disponibilidad y flujos event-driven.",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "Docker",
      "GitHub Actions",
      "GCP",
    ],
    achievements: [
      "Reducción de ≈30% en incidentes operativos mediante arquitectura modular y validaciones robustas",
      "Gestión de sesiones de asistencia en tiempo real con sincronización inmediata de estados",
      "Implementación de APIs REST seguras con JWT y control de acceso por roles",
      "Optimización de consultas PostgreSQL reduciendo hasta 40% los tiempos de respuesta",
      "Observabilidad y auditoría completa mediante logs estructurados y métricas",
    ],
    icon: <Activity className="h-6 w-6" />,
    metrics: {
      stability: "-30% incidentes",
      performance: "-40% latencia",
      realtime: "WebSockets",
    },
  },
  {
    id: 2,
    title: "Sistema de Integraciones CRM",
    company: "Magellan",
    period: "2024",
    description:
      "Integraciones en tiempo real entre HubSpot, Salesforce y SalesLoft, sincronizando millones de contactos mediante una arquitectura event-driven.",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "AWS Lambda",
      "SQS",
      "HubSpot API",
      "Salesforce API",
    ],
    achievements: [
      "Sincronización en tiempo real de +2M contactos",
      "Reducción del 15% en el tiempo de respuesta de dashboards",
      "Arquitectura event-driven altamente escalable",
      "Despliegues sin downtime (zero downtime deployments)",
    ],
    icon: <Database className="h-6 w-6" />,
    metrics: {
      performance: "-15% tiempo respuesta",
      scale: "2M+ contactos",
      uptime: "99.9%",
    },
  },
  {
    id: 3,
    title: "Plataforma E-commerce Multi-tienda",
    company: "WiTi",
    period: "2022 - 2024",
    description:
      "Sistema de control de pedidos multi-tienda procesando más de 1M de transacciones mensuales, con alta disponibilidad y trazabilidad completa.",
    technologies: [
      "NestJS",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Jest",
    ],
    achievements: [
      "+1M transacciones procesadas por mes",
      "85% de cobertura de pruebas automatizadas",
      "Sistema avanzado de roles y permisos",
      "Mentoría técnica a un equipo de 3 desarrolladores",
    ],
    icon: <Cloud className="h-6 w-6" />,
    metrics: {
      transactions: "1M+/mes",
      coverage: "85% tests",
      team: "3 devs mentoreados",
    },
  },
  {
    id: 4,
    title: "Email Marketing con IA",
    company: "Magellan",
    period: "2024",
    description:
      "Módulos de email marketing automatizado usando Django y OpenAI GPT para personalización de contenido y optimización de conversión.",
    technologies: [
      "Django",
      "Python",
      "OpenAI GPT",
      "PostgreSQL",
      "Celery",
      "Redis",
    ],
    achievements: [
      "Incremento del 25% en la tasa de conversión",
      "Personalización automática de contenido con IA",
      "Procesamiento asíncrono altamente escalable",
      "Sistema de A/B testing integrado",
    ],
    icon: <Zap className="h-6 w-6" />,
    metrics: {
      conversion: "+25%",
      automation: "100% IA",
      processing: "Asíncrono",
    },
  },
  {
    id: 5,
    title: "Sistema Omnicanal de Soporte",
    company: "AKB Fintech",
    period: "2020 - 2021",
    description:
      "Plataforma de soporte técnico con asignación automática de tickets, envíos masivos de SMS/email y dashboard de métricas en tiempo real.",
    technologies: [
      "Laravel",
      "Vue.js",
      "PostgreSQL",
      "Redis",
      "SMS APIs",
      "Email APIs",
    ],
    achievements: [
      "Asignación automática de tickets de soporte",
      "Incremento del 35% en la entregabilidad de SMS y email",
      "Reducción del 30% en la latencia de consultas",
      "Dashboard de métricas en tiempo real",
    ],
    icon: <Users className="h-6 w-6" />,
    metrics: {
      delivery: "+35%",
      latency: "-30%",
      automation: "100%",
    },
  },
];


const projectsDataEN = [
  {
    id: 1,
    title: "Real-Time Attendance Platform",
    company: "SilverConnect",
    period: "2025",
    description:
      "Real-time attendance and session management platform built with high-availability backend microservices and event-driven workflows.",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "Docker",
      "GitHub Actions",
      "GCP",
    ],
    achievements: [
      "≈30% reduction in operational incidents through modular architecture and robust validations",
      "Real-time attendance session management with immediate state synchronization",
      "Secure REST APIs implementation using JWT and role-based access control",
      "PostgreSQL query optimization reducing response times by up to 40%",
      "Full observability and auditing via structured logs and metrics",
    ],
    icon: <Activity className="h-6 w-6" />,
    metrics: {
      stability: "-30% incidents",
      performance: "-40% latency",
      realtime: "WebSockets",
    },
  },
  {
    id: 2,
    title: "CRM Integration System",
    company: "Magellan",
    period: "2024",
    description:
      "Real-time integrations between HubSpot, Salesforce, and SalesLoft, synchronizing millions of contacts using an event-driven architecture.",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "AWS Lambda",
      "SQS",
      "HubSpot API",
      "Salesforce API",
    ],
    achievements: [
      "Real-time synchronization of 2M+ contacts",
      "15% reduction in dashboard response times",
      "Highly scalable event-driven architecture",
      "Zero-downtime deployments",
    ],
    icon: <Database className="h-6 w-6" />,
    metrics: {
      performance: "-15% response time",
      scale: "2M+ contacts",
      uptime: "99.9%",
    },
  },
  {
    id: 3,
    title: "Multi-store E-commerce Platform",
    company: "WiTi",
    period: "2022 - 2024",
    description:
      "Multi-store order management system processing over 1M transactions per month, with high availability and full traceability.",
    technologies: [
      "NestJS",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Jest",
    ],
    achievements: [
      "1M+ transactions processed per month",
      "85% automated test coverage",
      "Advanced roles and permissions system",
      "Technical mentorship of a team of 3 developers",
    ],
    icon: <Cloud className="h-6 w-6" />,
    metrics: {
      transactions: "1M+/month",
      coverage: "85% tests",
      team: "3 devs mentored",
    },
  },
  {
    id: 4,
    title: "AI-Powered Email Marketing",
    company: "Magellan",
    period: "2024",
    description:
      "Automated email marketing modules built with Django and OpenAI GPT for content personalization and conversion optimization.",
    technologies: [
      "Django",
      "Python",
      "OpenAI GPT",
      "PostgreSQL",
      "Celery",
      "Redis",
    ],
    achievements: [
      "25% increase in conversion rate",
      "AI-driven automatic content personalization",
      "Highly scalable asynchronous processing",
      "Integrated A/B testing system",
    ],
    icon: <Zap className="h-6 w-6" />,
    metrics: {
      conversion: "+25%",
      automation: "100% AI",
      processing: "Async",
    },
  },
  {
    id: 5,
    title: "Omnichannel Support System",
    company: "AKB Fintech",
    period: "2020 - 2021",
    description:
      "Technical support platform with automatic ticket assignment, bulk SMS/email delivery, and a real-time metrics dashboard.",
    technologies: [
      "Laravel",
      "Vue.js",
      "PostgreSQL",
      "Redis",
      "SMS APIs",
      "Email APIs",
    ],
    achievements: [
      "Automatic support ticket assignment",
      "35% increase in SMS and email deliverability",
      "30% reduction in query latency",
      "Real-time metrics dashboard",
    ],
    icon: <Users className="h-6 w-6" />,
    metrics: {
      delivery: "+35%",
      latency: "-30%",
      automation: "100%",
    },
  },
];


export function Projects() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const projectsData = language === "es" ? projectsDataES : projectsDataEN

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
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[index] = el }}
              className="opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-600">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">{project.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-sm font-medium text-purple-600">
                          {project.company} • {project.period}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
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
                      {project.achievements.map((achievement, idx) => (
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
          ))}
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
