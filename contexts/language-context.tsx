"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.timeline": "Trayectoria",
    "nav.skills": "Habilidades",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.description":
      "Software Engineer. Ayudo a empresas a lograr sus objetivos mediante soluciones innovadoras y efectivas.",
    "hero.cta.work": "Ver mi trabajo",
    "hero.cta.cv": "Descargar CV",

    // Timeline
    "timeline.badge": "Mi Trayectoria",
    "timeline.title": "Experiencia Profesional",
    "timeline.description":
      "Un recorrido por mi carrera profesional, destacando mis principales logros y experiencias.",

    // Skills
    "skills.badge": "Mis Habilidades",
    "skills.title": "Competencias Profesionales",
    "skills.description":
      "Un conjunto de habilidades técnicas y personales que he desarrollado a lo largo de mi carrera.",
    "skills.technical": "Habilidades Técnicas",
    "skills.soft": "Habilidades Blandas",
    "skills.tools": "Herramientas y Tecnologías",

    // Services
    "services.badge": "Mis Servicios",
    "services.title": "Lo Que Puedo Ofrecer",
    "services.description": "Servicios profesionales diseñados para ayudar a tu empresa a alcanzar sus objetivos.",

    // Contact
    "contact.badge": "Contacto",
    "contact.title": "¿Hablamos?",
    "contact.description": "Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",
    "contact.info.title": "Información de contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.location": "Ubicación",
    "contact.info.follow": "Sígueme",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.timeline": "Timeline",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.description":
      "Software Engineer. I help companies achieve their goals through innovative and effective solutions.",
    "hero.cta.work": "View my work",
    "hero.cta.cv": "Download CV",

    // Timeline
    "timeline.badge": "My Journey",
    "timeline.title": "Professional Experience",
    "timeline.description":
      "A journey through my professional career, highlighting my main achievements and experiences.",

    // Skills
    "skills.badge": "My Skills",
    "skills.title": "Professional Competencies",
    "skills.description": "A set of technical and personal skills that I have developed throughout my career.",
    "skills.technical": "Technical Skills",
    "skills.soft": "Soft Skills",
    "skills.tools": "Tools & Technologies",

    // Services
    "services.badge": "My Services",
    "services.title": "What I Can Offer",
    "services.description": "Professional services designed to help your company achieve its goals.",

    // Contact
    "contact.badge": "Contact",
    "contact.title": "Let's Talk?",
    "contact.description": "I'm available for new projects and opportunities. Feel free to contact me.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.sending": "Sending...",
    "contact.info.title": "Contact information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.info.follow": "Follow me",

    // Footer
    "footer.rights": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
