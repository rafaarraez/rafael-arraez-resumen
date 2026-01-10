"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Copy, Check, Mail, ExternalLink, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui-custom/button"
import { Badge } from "@/components/ui-custom/badge"
import { SectionId } from "@/lib/sections"
import { GeometricShapes } from "@/components/effects/geometric-shapes"

export function Hero() {
  const { t, language } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [email] = useState("rafa.arraez.gue@gmail.com")
  const heroRef = useRef<HTMLDivElement>(null)

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
      {/* Geometric shapes with repulsion effect */}
      <GeometricShapes containerRef={heroRef} />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mx-auto">
          {/* Profile photo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 order-1 lg:order-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20 animate-pulse" />
            <div className="relative h-full w-full rounded-full border-2 mt-4 xl:my-0 border-purple-600/50 overflow-hidden">
              <Image
                src="/rafael-arraez.png"
                alt="Rafael Arraez."
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Main content */}
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
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
                {t("hero.experience")}
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
                {t("hero.transactions")}
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
                {t("hero.cost_optimization")}
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-lg px-8 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                onClick={() => document.getElementById(SectionId.projects)?.scrollIntoView({ behavior: "smooth" })}
                aria-label={language === "es" ? "Ver proyectos destacados" : "View featured projects"}
              >
                {t("hero.cta.projects")}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-lg px-8 hover:scale-105 transition-transform duration-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                onClick={() => {
                  if (language === "es") {
                    window.open("/Rafael Arraez Resumen - [ES] Software Engineer.pdf", "_blank")
                  } else {
                    window.open("/Rafael Arraez Resumen - [EN] Software Engineer.pdf", "_blank")
                  }
                }}
                aria-label={language === "es" ? "Descargar currículum en PDF" : "Download resume in PDF"}
              >
                <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                {t("hero.cta.cv")}
              </Button>
            </div>

            {/* Email Contact Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-16"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {language === "es" ? "Contacto directo" : "Direct contact"}
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-16"></div>
              </div>

              <div className="max-w-md mx-auto lg:mx-0">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

                  <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                    <div className="flex items-center pl-4 pr-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Mail className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>

                    <div className="flex-1 py-4 pr-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                        {language === "es" ? "Email" : "Email"}
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-0.5">{email}</div>
                    </div>

                    <Button
                      onClick={copyEmail}
                      size="sm"
                      aria-label={copied
                        ? (language === "es" ? "Email copiado al portapapeles" : "Email copied to clipboard")
                        : (language === "es" ? "Copiar email al portapapeles" : "Copy email to clipboard")
                      }
                      className={`m-2 rounded-xl px-4 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${copied
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
                  aria-label={language === "es" ? "Visitar perfil de LinkedIn" : "Visit LinkedIn profile"}
                  className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 transition-colors" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/rafaarraez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={language === "es" ? "Visitar perfil de GitHub" : "Visit GitHub profile"}
                  className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 transition-colors" aria-hidden="true" />
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
        className="absolute bottom-14 transform hidden xl:block -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-full p-2"
        aria-label={language === "es" ? "Desplazar a la siguiente sección" : "Scroll to next section"}
      >
        <ArrowDown className="h-8 w-8 text-purple-600" aria-hidden="true" />
      </button>
    </section>
  )
}
