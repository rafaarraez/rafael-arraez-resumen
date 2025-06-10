'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui-custom/button"
import { Input } from "@/components/ui-custom/input"
import { ArrowDown, Copy, Check, Mail } from "lucide-react"

export function Hero() {
  const { t, language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const [email] = useState("rafa.arraez.gue@gmail.com")

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
    const nextSection = document.getElementById("trayectoria")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const contactMessage = {
    es: "¡Mantengámonos en contacto!",
    en: "Let's stay in touch!",
  }

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white dark:from-gray-950/80 dark:via-gray-950/50 dark:to-gray-950 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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

          <div className="flex-1 text-center lg:text-left space-y-8 sm:my-9 xl:my-0 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">{t("hero.greeting")}</span>
              <span className="text-purple-600">Rafael Arraez.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => (window.open('https://github.com/rafaarraez', "_blank"))} size="lg" className="rounded-full">
                {t("hero.cta.work")}
              </Button>
              <Button onClick={() => {
                const file =
                  language === "es"
                    ? "/Rafael Arraez Resumen - [ES] Software Engineer.pdf"
                    : "/Rafael Arraez Resumen - [EN] Software Engineer.pdf";
                window.open(file, "_blank");
              }} size="lg" variant="outline" className="rounded-full">
                {t("hero.cta.cv")}
              </Button>
            </div>
            {/* Separador visual */}
            <div className="flex items-center gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {contactMessage[language as keyof typeof contactMessage]}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            </div>

            {/* Input de correo elegante */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                  <div className="flex items-center pl-4 pr-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    value={email}
                    readOnly
                    className="border-0 bg-transparent focus:ring-0 text-sm py-3 px-2 rounded-none"
                    placeholder="Correo de contacto"
                  />
                  <Button
                    onClick={copyEmail}
                    size="sm"
                    className={`m-1 rounded-full transition-all duration-300 ${copied
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                      }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        {language === "es" ? "¡Copiado!" : "Copied!"}
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        {language === "es" ? "Copiar" : "Copy"}
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Texto de ayuda sutil */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              {language === "es"
                ? "Copia mi correo para contacto directo y rápido"
                : "Copy my email for direct and quick contact"}
            </p>
          </div>
        </div>
      </div>

      {/* Botón de scroll hacia abajo */}

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 transform hidden xl:block -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-purple-600" />
      </button>
    </section>
  )
}
