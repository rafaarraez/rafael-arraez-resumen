"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { contentTranslations } from "@/data/translations"
import { Reveal } from "@/components/effects/reveal"

export function About() {
  const { language } = useLanguage()
  const content = contentTranslations[language].about

  return (
    <section id="about" className="border-t border-zinc-200 py-24 dark:border-zinc-800">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Bio + filosofía */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{content.title}</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>{content.bio1}</p>
              <p>{content.bio2}</p>
              <p>{content.bio3}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-10 lg:col-span-6 lg:col-start-7">
            <div>
              <h3 className="text-lg font-semibold">{content.philosophy.title}</h3>
              <ul className="mt-4 space-y-3">
                {content.philosophy.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <h3 className="text-lg font-semibold">{content.highlights.title}</h3>
              <ul className="mt-4 space-y-3">
                {content.highlights.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
