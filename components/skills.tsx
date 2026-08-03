"use client"

import { useLanguage } from "@/contexts/language-context"
import { SectionId } from "@/lib/sections"
import { Reveal } from "@/components/effects/reveal"

type SkillCategory = "technical" | "cloud" | "tools"

interface Skill {
  name: string
  years: number
  level: string
}

const skillsData: Record<SkillCategory, Skill[]> = {
  technical: [
    { name: "NestJS", years: 4, level: "expert" },
    { name: "TypeScript", years: 5, level: "expert" },
    { name: "Node.js", years: 6, level: "expert" },
    { name: "PostgreSQL", years: 6, level: "advanced" },
    { name: "Python", years: 2, level: "intermediate" },
    { name: "Django", years: 1, level: "intermediate" },
    { name: "PHP", years: 4, level: "advanced" },
    { name: "Laravel", years: 4, level: "advanced" },
    { name: "Next.js", years: 3, level: "advanced" },
    { name: "React", years: 4, level: "advanced" },
    { name: "Vue.js", years: 3, level: "advanced" },
    { name: "Redis", years: 3, level: "intermediate" },
  ],
  cloud: [
    { name: "AWS Lambda", years: 3, level: "advanced" },
    { name: "API Gateway", years: 3, level: "advanced" },
    { name: "DynamoDB", years: 2, level: "intermediate" },
    { name: "S3", years: 4, level: "advanced" },
    { name: "RDS", years: 3, level: "advanced" },
    { name: "SQS/SNS", years: 2, level: "intermediate" },
    { name: "Docker", years: 4, level: "advanced" },
    { name: "GitHub Actions", years: 3, level: "advanced" },
  ],
  tools: [
    { name: "Jest", years: 4, level: "advanced" },
    { name: "Git", years: 6, level: "expert" },
    { name: "New Relic", years: 2, level: "intermediate" },
    { name: "OpenAI API", years: 1, level: "intermediate" },
    { name: "HubSpot API", years: 1, level: "advanced" },
    { name: "Salesforce API", years: 1, level: "advanced" },
  ],
}

export function Skills() {
  const { t } = useLanguage()

  const categories: { key: SkillCategory; label: string }[] = [
    { key: "technical", label: t("skills.backend") },
    { key: "cloud", label: t("skills.cloud") },
    { key: "tools", label: t("skills.tools") },
  ]

  return (
    <section id={SectionId.skills} className="border-t border-zinc-200 py-24 dark:border-zinc-800">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("skills.title")}</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">{t("skills.description")}</p>
        </Reveal>

        <div className="mt-12 divide-y divide-zinc-200 dark:divide-zinc-800">
          {categories.map(({ key, label }) => (
            <Reveal key={key} className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 md:col-span-3 md:pt-2">
                {label}
              </h3>
              <ul className="flex flex-wrap gap-2 md:col-span-9" role="list">
                {skillsData[key].map((skill) => {
                  const yearsText =
                    skill.years === 1 ? `1 ${t("skills.year")}` : `${skill.years}+ ${t("skills.years")}`
                  return (
                    <li
                      key={skill.name}
                      className="glass-subtle inline-flex items-baseline gap-2 rounded-full px-4 py-2 transition-colors hover:border-emerald-600/40 dark:hover:border-emerald-400/30"
                      aria-label={`${skill.name}: ${yearsText}, ${t(`skills.${skill.level}`)}`}
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{yearsText}</span>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
