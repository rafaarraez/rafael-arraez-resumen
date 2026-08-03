"use client"

import { useEffect, useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { SectionId } from "@/lib/sections"
import { experienceData } from "@/data/experience"
import { contentTranslations } from "@/data/translations"
import { Reveal } from "@/components/effects/reveal"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const { t, language } = useLanguage()
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  // La línea de progreso acompaña la lectura de la trayectoria
  useEffect(() => {
    if (reduce || !timelineRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        },
      )
    }, timelineRef)

    return () => ctx.revert()
  }, [reduce])

  return (
    <section id={SectionId.experience} className="border-t border-zinc-200 py-24 dark:border-zinc-800">
      <div className="container mx-auto max-w-4xl px-4">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("experience.title")}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{t("experience.description")}</p>
        </Reveal>

        <div ref={timelineRef} className="relative mt-14">
          {/* Riel + progreso */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
          <div
            ref={lineRef}
            className="absolute bottom-0 left-[15px] top-0 w-px bg-emerald-600 dark:bg-emerald-400"
            style={reduce ? undefined : { transform: "scaleY(0)" }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experienceData.map((item) => {
              const content =
                contentTranslations[language].experience[item.id as keyof typeof contentTranslations.es.experience]

              return (
                <Reveal key={item.id} className="relative pl-14">
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-background dark:border-zinc-700">
                    {item.type === "work" ? (
                      <Briefcase className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                    ) : (
                      <GraduationCap className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                    )}
                  </div>

                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {item.period[language]} · {item.location}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{content.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">{item.company}</p>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {content.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {content.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
