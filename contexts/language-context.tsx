'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "es" | "en"

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
    "nav.timeline": "Trayectoria",
    "nav.skills": "Habilidades",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.description":
      `Ingeniero de Software enfocado en el desarrollo backend de aplicaciones web escalables y de alto rendimiento.
    
    🚀 Transformo ideas en productos digitales robustos.`,
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
    "contact.info.follow": "Sígueme",
    "contact.error.missingApiKey": "Falta la clave de API. Proporciona la clave RESEND_API_KEY en tus variables de entorno.",
    "contact.error.emailSend": "Error en el envío del correo.",
    "contact.error.general": "Ha ocurrido un error inesperado. Por favor, intenta nuevamente más tarde.",
    "contact.success.emailSent": "Correo enviado con éxito.",
    //form
    "form.nameRequired": "El campo nombre es obligatorio",
    "form.emailRequired": "El campo email es obligatorio",
    "form.emailInvalid": "El email no es válido",
    "form.subjectRequired": "El campo asunto es obligatorio",
    "form.messageRequired": "El campo mensaje es obligatorio",
    // Config
    "config.envSetup": "Por favor, asegúrate de que las variables de entorno estén configuradas correctamente.",
    "config.toEmail": "TO_EMAIL no está configurado. Por favor, verifica tu configuración.",

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
      `A Software Engineer focused on building scalable and high-performance backend applications.

    🚀 I turn ideas into robust digital products.`,
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
    "contact.info.follow": "Follow me",
    "contact.error.missingApiKey": "Missing API key. Please provide the RESEND_API_KEY in your environment variables.",
    "contact.error.emailSend": "Error in sending the email.",
    "contact.error.general": "An unexpected error occurred. Please try again later.",
    "contact.success.emailSent": "Email sent successfully.",
    //form
    "form.nameRequired": "The name field is required",
    "form.emailRequired": "The email field is required",
    "form.emailInvalid": "The email is not valid",
    "form.subjectRequired": "The subject field is required",
    "form.messageRequired": "The message field is required",
    // Config
    "config.envSetup": "Please ensure that the environment variables are set up correctly.",
    "config.toEmail": "TO_EMAIL is not set. Please check your configuration.",

    // Footer
    "footer.rights": "All rights reserved.",
  },
}

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
    const storedLang = localStorage.getItem("lang") as Language
    if (storedLang) {
      setLanguage(storedLang)
    }
    setMounted(true)
  }, [])

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
