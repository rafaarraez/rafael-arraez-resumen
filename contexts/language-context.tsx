'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "es" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  mounted: boolean
}

const translations = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "nav.services": "Servicios",

    // Hero
    "hero.name": "Rafael Arraez",
    "hero.title": "Software Backend Engineer",
    "hero.subtitle": "TypeScript, NestJS, AWS, PostgreSQL | Remote-first",
    "hero.description":
      "Ingeniero de Software con +6 años de experiencia desarrollando y escalando plataformas backend. Especialista en integraciones complejas y arquitecturas serverless de alto rendimiento, gestionando sistemas de +1M transacciones mensuales.",
    "hero.cta.projects": "Ver Proyectos",
    "hero.cta.cv": "Descargar CV",
    "hero.experience": "+6 años de experiencia",
    "hero.transactions": "+1M transacciones/mes",
    "hero.cost_optimization": "30% reducción de costos",

    // Projects
    "projects.badge": "Proyectos Destacados",
    "projects.title": "Sistemas que he Construido",
    "projects.description": "Proyectos reales con impacto medible en performance, escalabilidad y conversión.",
    "projects.stack": "Stack Tecnológico:",
    "projects.achievements": "Logros Clave:",

    // Experience
    "experience.badge": "Experiencia Profesional",
    "experience.title": "Mi Trayectoria",
    "experience.description": "6+ años construyendo sistemas backend escalables en empresas de USA, Chile y Venezuela.",
    "experience.achievements": "Logros Clave:",
    "experience.technologies": "Tecnologías:",

    // Skills
    "skills.badge": "Stack Tecnológico",
    "skills.title": "Tecnologías y Herramientas",
    "skills.description":
      "Especializado en backend con NestJS/TypeScript y cloud con AWS. Experiencia full-stack cuando es necesario.",
    "skills.backend": "Backend & APIs",
    "skills.cloud": "Cloud & DevOps",
    "skills.databases": "Bases de Datos",
    "skills.frontend": "Frontend",
    "skills.tools": "APIs y Herramientas",
    "skills.years": "años",
    "skills.year": "año",
    "skills.expert": "Experto",
    "skills.advanced": "Avanzado",
    "skills.intermediate": "Intermedio",
    "skills.beginner": "Principiante",

    // Services
    "services.badge": "Servicios",
    "services.title": "¿Cómo puedo ayudarte?",
    "services.description": "Arquitectura backend, APIs y microservicios, e integración full-stack para productos escalables.",

    // Contact
    "contact.badge": "Contacto",
    "contact.title": "¿Hablamos de tu próximo proyecto?",
    "contact.description":
      "Disponible para oportunidades remotas. Especializado en backend escalable y integraciones complejas.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.nameRequired": "El nombre es obligatorio",
    "contact.form.emailRequired": "El email es obligatorio",
    "contact.form.emailInvalid": "El email no es válido",
    "contact.form.subjectRequired": "El asunto es obligatorio",
    "contact.form.messageRequired": "El mensaje es obligatorio",
    "contact.success.emailSent": "Tu mensaje ha sido enviado con éxito.",
    "contact.error.emailSend": "Error al enviar el correo.",
    "contact.error.general": "Ocurrió un error.",
    "contact.info.title": "Información de contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.location": "Ubicación",
    "contact.info.availability": "Disponibilidad",
    "contact.info.follow": "Sígueme en mis redes sociales",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.services": "Services",

    // Hero
    "hero.name": "Rafael Arraez",
    "hero.title": "Software Backend Engineer",
    "hero.subtitle": "TypeScript, NestJS, AWS, PostgreSQL | Remote-first",
    "hero.description":
      "Software Engineer with +6 years of experience developing and scaling backend platforms. Specialist in complex integrations and high-performance serverless architectures, managing systems with +1M monthly transactions.",
    "hero.cta.projects": "View Projects",
    "hero.cta.cv": "Download CV",
    "hero.experience": "+6 years experience",
    "hero.transactions": "+1M transactions/month",
    "hero.cost_optimization": "30% cost reduction",

    // Projects
    "projects.badge": "Featured Projects",
    "projects.title": "Systems I've Built",
    "projects.description": "Real projects with measurable impact on performance, scalability, and conversion.",
    "projects.stack": "Tech Stack:",
    "projects.achievements": "Key Achievements:",

    // Experience
    "experience.badge": "Professional Experience",
    "experience.title": "My Journey",
    "experience.description":
      "6+ years building scalable backend systems in companies across USA, Chile, and Venezuela.",
    "experience.achievements": "Key Achievements:",
    "experience.technologies": "Technologies:",

    // Skills
    "skills.badge": "Tech Stack",
    "skills.title": "Technologies & Tools",
    "skills.description":
      "Specialized in backend with NestJS/TypeScript and cloud with AWS. Full-stack experience when needed.",
    "skills.backend": "Backend & APIs",
    "skills.cloud": "Cloud & DevOps",
    "skills.databases": "Databases",
    "skills.frontend": "Frontend",
    "skills.tools": "APIs & Tools",
    "skills.years": "years",
    "skills.year": "year",
    "skills.expert": "Expert",
    "skills.advanced": "Advanced",
    "skills.intermediate": "Intermediate",
    "skills.beginner": "Beginner",

    // Services
    "services.badge": "Services",
    "services.title": "How can I help?",
    "services.description": "Backend architecture, APIs and microservices, and full-stack integration for scalable products.",

    // Contact
    "contact.badge": "Contact",
    "contact.title": "Let's talk about your next project?",
    "contact.description":
      "Available for remote opportunities. Specialized in scalable backend and complex integrations.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.sending": "Sending...",
    "contact.form.nameRequired": "Name is required",
    "contact.form.emailRequired": "Email is required",
    "contact.form.emailInvalid": "Email is invalid",
    "contact.form.subjectRequired": "Subject is required",
    "contact.form.messageRequired": "Message is required",
    "contact.success.emailSent": "Your message has been sent successfully.",
    "contact.error.emailSend": "Error sending email.",
    "contact.error.general": "An error occurred.",
    "contact.info.title": "Contact information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.info.availability": "Availability",
    "contact.info.follow": "Follow me on social media",

    // Footer
    "footer.rights": "All rights reserved.",
  },
} as const

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Intenta leer el idioma guardado o por defecto "es"
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang")
      if (stored === "es" || stored === "en") return stored
    }
    return "es"
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language
    }
  }, [language])

  const updateLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang)
    }
  }
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t, mounted }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
