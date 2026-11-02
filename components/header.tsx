"use client"

import { useState, useEffect, useRef } from "react"
import { Home, FolderGit2, Briefcase, Code2, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import profilePhoto from "@/public/rafael-arraez.png"
import { SectionId } from "@/lib/sections"
import { cn } from "@/lib/utils"

export function Header() {
  const { t, mounted, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Resalta en la nav la sección que cruza la banda central del viewport
  useEffect(() => {
    const sections = Object.values(SectionId)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Focus trap y manejo de teclado para el menú móvil
  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (e.key === "Tab") {
        const focusableElements = mobileMenuRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )

        if (!focusableElements || focusableElements.length === 0) return

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (section: string) => {
    const target = document.getElementById(section)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navIcons = {
    home: <Home className="w-5 h-5" />,
    projects: <FolderGit2 className="w-5 h-5" />,
    experience: <Briefcase className="w-5 h-5" />,
    skills: <Code2 className="w-5 h-5" />,
    contact: <Mail className="w-5 h-5" />,
  }

  const navItems = [
    { key: "home", href: SectionId.home, label: t("nav.home"), icon: navIcons.home },
    { key: "projects", href: SectionId.projects, label: t("nav.projects"), icon: navIcons.projects },
    { key: "experience", href: SectionId.experience, label: t("nav.experience"), icon: navIcons.experience },
    { key: "skills", href: SectionId.skills, label: t("nav.skills"), icon: navIcons.skills },
    { key: "contact", href: SectionId.contact, label: t("nav.contact"), icon: navIcons.contact },
  ]

  const brand = (
    <button
      onClick={() => scrollToSection(SectionId.home)}
      className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
      aria-label={language === "es" ? "Ir al inicio" : "Go to home"}
    >
      <span className="relative h-9 w-9 overflow-hidden rounded-full">
        <Image src={profilePhoto} alt="" fill sizes="36px" className="object-cover" priority />
      </span>
      <span className="font-semibold tracking-tight">Rafael Arraez</span>
    </button>
  )

  // Renderizado inicial que coincide con el servidor
  if (!mounted) {
    return (
      <header className="fixed top-3 inset-x-0 z-50 px-3">
        <div className="glass mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full pl-1.5 pr-2">
          {brand}
          <div className="flex items-center gap-1">
            <nav className="hidden md:flex items-center mr-1">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="rounded-full px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3">
      <div className="glass mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full pl-1.5 pr-2">
        {brand}

        <div className="flex items-center gap-1">
          {/* Navegación desktop */}
          <nav
            className="hidden md:flex items-center mr-1"
            aria-label={language === "es" ? "Navegación principal" : "Main navigation"}
          >
            {navItems.slice(1).map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                aria-current={activeSection === item.href ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
                  activeSection === item.href
                    ? "bg-zinc-950/[0.06] text-zinc-950 dark:bg-white/10 dark:text-white"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <ThemeToggle />
          <LanguageToggle />

          {/* Botón de menú móvil */}
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="md:hidden z-[60] relative w-10 h-10 inline-flex items-center justify-center rounded-full text-foreground transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            aria-label={isMenuOpen
              ? (language === "es" ? "Cerrar menú" : "Close menu")
              : (language === "es" ? "Abrir menú" : "Open menu")
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative w-5 h-5 flex items-center justify-center">
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>

          {/* Menú móvil overlay */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={language === "es" ? "Menú de navegación principal" : "Main navigation menu"}
            className={`fixed inset-0 md:hidden z-50 h-[100dvh] transition-all duration-300 ${
              isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`absolute inset-0 bg-white/85 backdrop-blur-xl transition-opacity duration-300 dark:bg-zinc-950/90 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="relative h-full flex flex-col justify-center items-center p-8">
              <nav
                className="flex flex-col items-stretch gap-2 w-full max-w-xs"
                aria-label={language === "es" ? "Navegación principal móvil" : "Mobile main navigation"}
              >
                {navItems.map((item, index) => (
                  <button
                    onClick={() => { scrollToSection(item.href); toggleMenu(); }}
                    key={item.key}
                    className={`flex items-center gap-4 text-lg font-medium w-full px-5 py-3.5 rounded-2xl transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                      isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 60}ms` : "0ms",
                    }}
                  >
                    <span className="text-emerald-700 dark:text-emerald-400">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
