"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2, Sparkles, Target } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent } from "@/components/ui-custom/card"
import { contentTranslations } from "@/data/translations"

export function About() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const content = contentTranslations[language].about

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Photo and greeting */}
            <div className="space-y-6">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-20" />
                <div className="relative aspect-square rounded-2xl border-2 border-purple-600/50 overflow-hidden">
                  <Image
                    src="https://avatars.githubusercontent.com/u/33111448?v=4"
                    alt="Rafael Arraez"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.greeting}</h2>
                <Badge variant="outline" className="inline-flex items-center gap-2">
                  <Sparkles className="h-3 w-3" />
                  {language === "es" ? "Ingeniero de Software" : "Software Engineer"}
                </Badge>
              </div>
            </div>

            {/* Right side: Bio and philosophy */}
            <div className="space-y-6">
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900 dark:text-white">{content.title}</span>
                </h1>
                <p>{content.bio1}</p>
                <p>{content.bio2}</p>
                <p>{content.bio3}</p>
              </div>
            </div>
          </div>

          {/* Philosophy and Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* Philosophy */}
            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-5 w-5 text-purple-600" />
                  <h3 className="text-xl font-semibold">{content.philosophy.title}</h3>
                </div>
                <ul className="space-y-3">
                  {content.philosophy.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-semibold">{content.highlights.title}</h3>
                </div>
                <ul className="space-y-3">
                  {content.highlights.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
