"use client"

import { ExternalLink, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui-custom/button"
import { SectionId } from "@/lib/sections"
import { Reveal } from "@/components/effects/reveal"
import { DecodeText } from "@/components/effects/decode-text"
import { Magnetic } from "@/components/effects/magnetic"
import profilePhoto from "@/public/rafael-arraez.png"

export function Hero() {
  const { t, language } = useLanguage()

  return (
    <section
      id={SectionId.home}
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Soft static glow, the only "atmosphere" the page needs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/[0.07]"
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Contenido */}
          <Reveal stagger className="order-2 space-y-7 lg:order-1 lg:col-span-7">
            <div className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {language === "es" ? "Disponible para trabajo remoto" : "Available for remote work"}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-semibold tracking-tighter leading-none md:text-6xl lg:text-7xl">
                {t("hero.name")}
              </h1>
              <p className="font-mono text-sm text-emerald-700 dark:text-emerald-400 md:text-base">
                <DecodeText text={`${t("hero.title")} · ${t("hero.subtitle")}`} />
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <Button
                  size="lg"
                  onClick={() => document.getElementById(SectionId.projects)?.scrollIntoView({ behavior: "smooth" })}
                  aria-label={language === "es" ? "Ver proyectos destacados" : "View featured projects"}
                >
                  {t("hero.cta.projects")}
                </Button>
              </Magnetic>

              <Magnetic>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    if (language === "es") {
                      window.open("/Rafael-Arraez-CV-ES.pdf", "_blank")
                    } else {
                      window.open("/Rafael-Arraez-CV-EN.pdf", "_blank")
                    }
                  }}
                  aria-label={language === "es" ? "Descargar currículum en PDF" : "Download resume in PDF"}
                >
                  <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("hero.cta.cv")}
                </Button>
              </Magnetic>

              <div className="ml-1 flex gap-2">
                <a
                  href="https://linkedin.com/in/rafael-arraez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={language === "es" ? "Visitar perfil de LinkedIn" : "Visit LinkedIn profile"}
                  className="glass-subtle flex h-12 w-12 items-center justify-center rounded-full text-zinc-600 transition-colors hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/rafaarraez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={language === "es" ? "Visitar perfil de GitHub" : "Visit GitHub profile"}
                  className="glass-subtle flex h-12 w-12 items-center justify-center rounded-full text-zinc-600 transition-colors hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Foto */}
          <Reveal delay={0.15} className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto w-56 md:w-72 lg:w-full lg:max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <Image
                  src={profilePhoto}
                  alt="Rafael Arraez"
                  fill
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
                  className="object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
