"use client"

import { Coins, Activity, ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui-custom/badge"
import { sideProjectsData } from "@/data/side-projects"
import { contentTranslations } from "@/data/translations"
import { Reveal } from "@/components/effects/reveal"
import { setSpotlightPosition } from "@/lib/utils"

const iconMap = {
  Coins: Coins,
  Activity: Activity,
}

const linkClass =
  "inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"

export function SideProjects() {
  const { t, language } = useLanguage()

  return (
    <section id="side-projects" className="border-t border-zinc-200 py-24 dark:border-zinc-800">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("sideProjects.title")}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{t("sideProjects.description")}</p>
        </Reveal>

        <Reveal stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {sideProjectsData.map((project) => {
            const content =
              contentTranslations[language].sideProjects[
                project.id as keyof typeof contentTranslations.es.sideProjects
              ]
            const IconComponent = iconMap[project.iconName]

            return (
              <article
                key={project.id}
                onMouseMove={setSpotlightPosition}
                className="spotlight-card group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-snug">{content.title}</h3>
                      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{content.tagline}</p>
                    </div>
                  </div>
                  <span
                    className="flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-zinc-500 dark:text-zinc-400"
                    title={t("sideProjects.live")}
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    {t("sideProjects.live")}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {content.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 flex gap-2 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} border border-zinc-300 text-foreground hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-900`}
                  >
                    {t("sideProjects.visit")}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60`}
                  >
                    {t("sideProjects.code")}
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </Reveal>

        <p className="mt-8 text-center font-mono text-xs text-zinc-400 dark:text-zinc-600">
          $ {t("sideProjects.credit")}
        </p>
      </div>
    </section>
  )
}
