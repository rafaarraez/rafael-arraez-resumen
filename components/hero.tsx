'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui-custom/button"

export function Hero() {
  const { t, language } = useLanguage()
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

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("trayectoria")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
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

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-6">
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
                  ? "/Rafael Arraez Resumen - [ES].pdf"
                  : "/Rafael Arraez Resumen - [EN].pdf";
              window.open(file, "_blank");
            }} size="lg" variant="outline" className="rounded-full">
              {t("hero.cta.cv")}
            </Button>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20 animate-pulse" />
          <div className="relative h-full w-full rounded-full border-2 border-purple-600/50 overflow-hidden">
            <Image src="https://avatars.githubusercontent.com/u/33111448?v=4" alt="Rafael Arraez." fill className="object-cover" priority />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-purple-600" />
      </button>
    </section>
  )
}
