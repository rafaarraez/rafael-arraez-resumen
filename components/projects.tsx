"use client"

import { Database, Cloud, Zap, Users, Activity, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { Button } from "@/components/ui-custom/button"
import { SectionId } from "@/lib/sections"
import { projectsData } from "@/data/projects"
import { contentTranslations } from "@/data/translations"
import { Reveal } from "@/components/effects/reveal"
import { cn } from "@/lib/utils"

const iconMap = {
  Activity: Activity,
  Database: Database,
  Cloud: Cloud,
  Zap: Zap,
  Users: Users,
}

export function Projects() {
  const { t, language } = useLanguage()

  // Escribe las coords del cursor como CSS vars; el borde spotlight vive en CSS
  const handleSpotlight = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`)
  }

  return (
    <section id={SectionId.projects} className="border-t border-zinc-200 py-24 dark:border-zinc-800">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("projects.title")}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{t("projects.description")}</p>
        </Reveal>

        <Reveal stagger className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projectsData.map((project, index) => {
            const content =
              contentTranslations[language].projects[project.id as keyof typeof contentTranslations.es.projects]
            const IconComponent = iconMap[project.iconName]
            const featured = index === 0

            return (
              <article
                key={project.id}
                onMouseMove={handleSpotlight}
                className={cn(
                  "spotlight-card group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-transform duration-300 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900/60",
                  featured && "lg:col-span-2",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-snug">{content.title}</h3>
                      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                        {project.company} · {project.period}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 flex-shrink-0 text-zinc-300 transition-colors group-hover:text-emerald-700 dark:text-zinc-700 dark:group-hover:text-emerald-400"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {content.description}
                </p>

                {featured && (
                  <ul className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-2">
                    {content.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-mono text-xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
                        {value}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {content.metricsLabels[key as keyof typeof content.metricsLabels]}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            )
          })}
        </Reveal>

        <Reveal className="mt-14 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            {language === "es"
              ? "¿Interesado en ver más detalles técnicos o discutir un proyecto similar?"
              : "Interested in seeing more technical details or discussing a similar project?"}
          </p>
          <Button
            size="lg"
            className="mt-5"
            onClick={() => document.getElementById(SectionId.contact)?.scrollIntoView({ behavior: "smooth" })}
          >
            {language === "es" ? "Hablemos" : "Let's Talk"}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
