"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, MapPin, Calendar, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-custom/card"
import { useMobile } from "@/hooks/use-mobile"
import { SectionId } from "@/lib/sections"
import { experienceData } from "@/data/experience"
import { contentTranslations } from "@/data/translations"

export function Experience() {
  const { t, language } = useLanguage()
  const isMobile = useMobile()
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineProgress, setLineProgress] = useState(0)

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

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  // Experience animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const windowHeight = window.innerHeight

      const startOffset = windowHeight * 0.8
      const endOffset = windowHeight * 0.2

      let progress = 0

      if (sectionTop <= startOffset && sectionTop >= -sectionHeight + endOffset) {
        const visibleHeight = Math.min(startOffset - sectionTop, sectionHeight - endOffset)
        const totalScrollableHeight = sectionHeight - endOffset
        progress = Math.max(0, Math.min(1, visibleHeight / totalScrollableHeight))
      } else if (sectionTop < -sectionHeight + endOffset) {
        progress = 1
      }

      setLineProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const renderMobileExperience = () => {
    return (
      <div className="space-y-8 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
        <div
          ref={lineRef}
          className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-purple-600/80 via-purple-600/50 to-purple-600/20 transition-all duration-300 ease-out"
          style={{ height: `${lineProgress * 100}%` }}
        />

        {experienceData.map((item, index) => {
          const content = contentTranslations[language].experience[item.id as keyof typeof contentTranslations.es.experience]

          return (
            <div
              key={item.id}
              ref={(el) => { itemRefs.current[index] = el }}
              className="opacity-0 relative pl-12"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div
                className={`absolute left-0 top-3 w-8 h-8 rounded-full bg-white dark:bg-gray-950 border-2 flex items-center justify-center z-10 transition-all duration-500 ${lineProgress > (index + 0.5) / experienceData.length
                  ? "border-purple-600 scale-110"
                  : "border-gray-300 dark:border-gray-600"
                  }`}
              >
                {item.type === "work" ? (
                  <Briefcase
                    className={`h-4 w-4 transition-colors duration-500 ${lineProgress > (index + 0.5) / experienceData.length ? "text-purple-600" : "text-gray-400"
                      }`}
                  />
                ) : (
                  <GraduationCap
                    className={`h-4 w-4 transition-colors duration-500 ${lineProgress > (index + 0.5) / experienceData.length ? "text-purple-600" : "text-gray-400"
                      }`}
                  />
                )}
              </div>

              <Card className="overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-10" />
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{content.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-purple-600">
                      <Briefcase className="h-3 w-3" />
                      {item.company}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {item.period[language]}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{content.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">{t("experience.achievements")}</h4>
                    <ul className="space-y-1">
                      {content.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 group/achievement">
                          <TrendingUp className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/achievement:scale-125 group-hover/achievement:text-green-600" />
                          <span className="group-hover/achievement:text-gray-900 dark:group-hover/achievement:text-gray-200 transition-colors">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">{t("experience.technologies")}</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>
    )
  }

  const renderDesktopExperience = () => {
    return (
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600/80 via-purple-600/50 to-purple-600/20 transition-all duration-300 ease-out"
          style={{ height: `${lineProgress * 100}%` }}
        />

        {experienceData.map((item, index) => {
          const content = contentTranslations[language].experience[item.id as keyof typeof contentTranslations.es.experience]

          return (
            <div
              key={item.id}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`relative flex items-center mb-12 opacity-0`}
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 ml-auto"}`}>
                <Card className="overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-10" />
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-left">{content.title}</CardTitle>
                    <CardDescription className="space-y-2">
                      <div className="flex text-left items-center gap-2 text-sm font-medium text-purple-600">
                        <Briefcase className="h-4 w-4" />
                        {item.company}
                      </div>
                      <div className="flex text-left items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {item.period[language]}
                      </div>
                      <div className="flex text-left items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-left dark:text-gray-400 leading-relaxed">{content.description}</p>

                    <div>
                      <h4 className="text-sm text-left font-semibold mb-3 text-gray-700 dark:text-gray-300">{t("experience.achievements")}</h4>
                      <ul className="space-y-2">
                        {content.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex text-left items-start gap-2 text-sm text-gray-600 dark:text-gray-400 group/achievement">
                            <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/achievement:scale-125 group-hover/achievement:text-green-600" />
                            <span className="group-hover/achievement:text-gray-900 dark:group-hover/achievement:text-gray-200 transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm text-left font-semibold mb-3 text-gray-700 dark:text-gray-300">{t("experience.technologies")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-950 border-2 flex items-center justify-center z-10 transition-all duration-500 ${lineProgress > (index + 0.5) / experienceData.length
                  ? "border-purple-600 scale-110"
                  : "border-gray-300 dark:border-gray-600"
                  }`}
              >
                {item.type === "work" ? (
                  <Briefcase
                    className={`h-5 w-5 transition-colors duration-500 ${lineProgress > (index + 0.5) / experienceData.length ? "text-purple-600" : "text-gray-400"
                      }`}
                  />
                ) : (
                  <GraduationCap
                    className={`h-5 w-5 transition-colors duration-500 ${lineProgress > (index + 0.5) / experienceData.length ? "text-purple-600" : "text-gray-400"
                      }`}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <section
      id={SectionId.experience}
      ref={sectionRef}
      className="py-20 opacity-0"
      style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">
            {t("experience.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("experience.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("experience.description")}</p>
        </div>

        {isMobile ? renderMobileExperience() : renderDesktopExperience()}
      </div>
    </section>
  )
}
