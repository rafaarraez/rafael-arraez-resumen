"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Copy, Check, Mail, User, ExternalLink, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui-custom/button"
import { Badge } from "@/components/ui-custom/badge"
import { SectionId } from "@/lib/sections"

// Definir las formas con posiciones iniciales fijas
type Shape = {
  baseX: number | string
  baseY: number | string
  size: 20 | 24 | 28 | 32 | 40
  color: string
  blur: string
  right?: boolean
  bottom?: boolean
}
const shapes: Shape[] = [
  { baseX: 120, baseY: 160, size: 32, color: "bg-purple-500/10", blur: "blur-xl" },
  { baseX: -140, baseY: 200, size: 24, color: "bg-blue-500/10", blur: "blur-lg", right: true },
  { baseX: "25%", baseY: -200, size: 40, color: "bg-cyan-500/10", blur: "blur-2xl", bottom: true },
  { baseX: "66%", baseY: "33%", size: 20, color: "bg-pink-500/10", blur: "blur-lg" },
  { baseX: -100, baseY: "75%", size: 28, color: "bg-yellow-500/10", blur: "blur-xl", right: true, bottom: true },
]

// Tailwind-safe width/height classes for shapes
const sizeClassMap: Record<number, string> = {
  20: "w-20 h-20",
  24: "w-24 h-24",
  28: "w-28 h-28",
  32: "w-32 h-32",
  40: "w-40 h-40",
}

export function Hero() {
  const { t, language } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [email] = useState("rafa.arraez.gue@gmail.com")
  const heroRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<(HTMLDivElement | null)[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  // Seguir el mouse para el efecto de repulsión
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Efecto de repulsión para las formas
  useEffect(() => {
    shapesRef.current.forEach((shape, index) => {
      if (!shape) return

      const shapeRect = shape.getBoundingClientRect()
      const heroRect = heroRef.current?.getBoundingClientRect()

      if (!heroRect) return

      // Calcular el centro de la forma
      const shapeX = shapeRect.left - heroRect.left + shapeRect.width / 2
      const shapeY = shapeRect.top - heroRect.top + shapeRect.height / 2

      // Calcular la distancia entre el mouse y la forma
      const dx = mousePosition.x - shapeX
      const dy = mousePosition.y - shapeY
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Aplicar repulsión si está dentro del radio
      const repulsionRadius = 200
      const repulsionStrength = 60

      if (distance < repulsionRadius) {
        const repulsionForce = (repulsionRadius - distance) / repulsionRadius
        const angle = Math.atan2(dy, dx)
        const offsetX = -Math.cos(angle) * repulsionForce * repulsionStrength
        const offsetY = -Math.sin(angle) * repulsionForce * repulsionStrength

        shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`
        shape.style.transition = "transform 0.3s ease-out"
      } else {
        shape.style.transform = "translate(0px, 0px)"
        shape.style.transition = "transform 0.5s ease-out"
      }
    })
  }, [mousePosition])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  const scrollToNextSection = () => {
    const nextSection = document.getElementById(SectionId.projects)
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id={SectionId.home}
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center py-16 mt-8 opacity-0 overflow-hidden"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      {/* Fondo sin parallax */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white dark:from-gray-950/80 dark:via-gray-950/50 dark:to-gray-950 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div> */}

      {/* Formas geométricas flotantes con efecto de repulsión */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {shapes.map((shape, index) => {
          // Determinar la posición base
          const style: React.CSSProperties = {}

          if (shape.right) {
            style.right = shape.baseX
          } else {
            style.left = shape.baseX
          }

          if (shape.bottom) {
            style.bottom = shape.baseY
          } else {
            style.top = shape.baseY
          }

          return (
            <div
              key={index}
              ref={(el) => { shapesRef.current[index] = el }}
              className={`absolute ${sizeClassMap[shape.size] || ""} ${shape.color} rounded-full ${shape.blur}`}
              style={style}
            />
          )
        })}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12  mx-auto">
          {/* Foto de perfil sin parallax */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 order-1 lg:order-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20 animate-pulse" />
            <div className="relative h-full w-full rounded-full border-2 mt-4 xl:my-0 border-purple-600/50 overflow-hidden">
              <Image
                src="https://avatars.githubusercontent.com/u/33111448?v=4"
                alt="Rafael Arraez."
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">{t("hero.name")}</span>
                <span className="block text-purple-600 text-3xl md:text-4xl lg:text-5xl mt-2">{t("hero.title")}</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">{t("hero.subtitle")}</p>

              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            {/* Key metrics */}
            {/* <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
                {t("hero.experience")}
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
                {t("hero.transactions")}
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
                {t("hero.cost_optimization")}
              </Badge>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-lg px-8 hover:scale-105 transition-transform duration-200"
                onClick={() => document.getElementById(SectionId.projects)?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("hero.cta.projects")}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-lg px-8 hover:scale-105 transition-transform duration-200 bg-transparent"
                onClick={() => {
                  if (language === "es") {
                    window.open("/Rafael Arraez Resumen - [ES] Software Engineer.pdf", "_blank")
                  } else {
                    window.open("/Rafael Arraez Resumen - [EN] Software Engineer.pdf", "_blank")
                  }
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t("hero.cta.cv")}
              </Button>
            </div>

            {/* Email Contact Section - Redesigned */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-16"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {language === "es" ? "Contacto directo" : "Direct contact"}
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-16"></div>
              </div>

              {/* Beautiful Email Input */}
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="group relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

                  {/* Main container */}
                  <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                    {/* Email icon */}
                    <div className="flex items-center pl-4 pr-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Mail className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>

                    {/* Email text */}
                    <div className="flex-1 py-4 pr-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                        {language === "es" ? "Email" : "Email"}
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-0.5">{email}</div>
                    </div>

                    {/* Copy button */}
                    <Button
                      onClick={copyEmail}
                      size="sm"
                      className={`m-2 rounded-xl px-4 py-2 transition-all duration-300 ${copied
                        ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25"
                        : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40"
                        }`}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          {language === "es" ? "¡Copiado!" : "Copied!"}
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          {language === "es" ? "Copiar" : "Copy"}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Remote Status */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/rafael-arraez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 transition-colors" />
                </a>
                <a
                  href="https://github.com/rafaarraez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 transition-colors" />
                </a>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  {language === "es" ? "Disponible para trabajo remoto" : "Available for remote work"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-14 transform hidden xl:block -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-purple-600" />
      </button>
    </section>
  )
}
