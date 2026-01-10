"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent } from "@/components/ui-custom/card"
import { SectionId } from "@/lib/sections"

interface Testimonial {
  id: number
  quote: { es: string; en: string }
  author: string
  role: { es: string; en: string }
  company: string
  image: string
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: {
      es: "Trabajar con Rafael fue excepcional. Su dominio de NestJS y arquitectura de microservicios permitió reducir significativamente los incidentes operativos. Su capacidad para diseñar sistemas escalables y mantener código limpio es admirable.",
      en: "Working with Rafael was exceptional. His mastery of NestJS and microservices architecture significantly reduced operational incidents. His ability to design scalable systems and maintain clean code is admirable.",
    },
    author: "María González",
    role: {
      es: "Tech Lead",
      en: "Tech Lead",
    },
    company: "Tech Innovators Inc.",
    image: "/placeholder-user.jpg",
  },
  {
    id: 2,
    quote: {
      es: "Rafael demostró habilidades excepcionales en optimización de sistemas backend. Implementó integraciones complejas que sincronizaban millones de registros sin problemas. Su enfoque en la calidad del código y las mejores prácticas es ejemplar.",
      en: "Rafael demonstrated exceptional skills in backend systems optimization. He implemented complex integrations that synchronized millions of records seamlessly. His focus on code quality and best practices is exemplary.",
    },
    author: "Carlos Mendoza",
    role: {
      es: "Ingeniero Senior",
      en: "Senior Engineer",
    },
    company: "Global Solutions Ltd.",
    image: "/placeholder-user.jpg",
  },
  {
    id: 3,
    quote: {
      es: "El impacto de Rafael en nuestro equipo fue notable. No solo desarrolló APIs escalables que procesaban más de 1M de transacciones mensuales, sino que también mentoró al equipo junior, mejorando significativamente nuestras prácticas de desarrollo.",
      en: "Rafael's impact on our team was remarkable. He not only developed scalable APIs processing over 1M monthly transactions but also mentored junior developers, significantly improving our development practices.",
    },
    author: "Laura Ramírez",
    role: {
      es: "Engineering Manager",
      en: "Engineering Manager",
    },
    company: "E-commerce Solutions",
    image: "/placeholder-user.jpg",
  },
  {
    id: 4,
    quote: {
      es: "Su experiencia en arquitectura distribuida y patrones de diseño transformó la manera en que construimos nuestros sistemas. La reducción del 30% en costos operativos tras sus optimizaciones fue un resultado tangible y medible.",
      en: "His expertise in distributed architecture and design patterns transformed how we build our systems. The 30% reduction in operational costs following his optimizations was a tangible and measurable result.",
    },
    author: "David Silva",
    role: {
      es: "CTO",
      en: "CTO",
    },
    company: "StartupScale",
    image: "/placeholder-user.jpg",
  },
]

export function Testimonials() {
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
      id={SectionId.testimonials}
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900/50 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("testimonials.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("testimonials.description")}</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => { cardRefs.current[index] = el }}
              className="opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 relative">
                    <Quote className="h-10 w-10 text-purple-600/20 absolute -top-2 -left-2" />
                    <Quote className="h-10 w-10 text-purple-600/20 absolute -top-2 -left-2 transform rotate-180 translate-x-4 translate-y-4" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic relative z-10 pl-6">
                      "{testimonial.quote[language]}"
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                          {testimonial.author.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role[language]}
                        </p>
                        <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
