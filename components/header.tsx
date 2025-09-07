"use client"

import { useState, useEffect } from "react"
import { Menu, Home, Clock, Code2, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui-custom/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { SectionId } from "@/lib/sections"

export function Header() {
  const { t, mounted } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const scrollToNextSection = (section: string) => {
    const nextSection = document.getElementById(section)
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Mapeo de iconos para los elementos de navegación
  const navIcons = {
    home: <Home className="w-5 h-5" />,
    projects: <Clock className="w-5 h-5" />,
    experience: <Clock className="w-5 h-5" />,
    skills: <Code2 className="w-5 h-5" />,
    contact: <Mail className="w-5 h-5" />,
  }

  // Elementos de navegación
  const navItems = [
    { key: "home", href: SectionId.home, label: t("nav.home"), icon: navIcons.home },
    { key: "projects", href: SectionId.projects, label: t("nav.projects"), icon: navIcons.projects },
    { key: "experience", href: SectionId.experience, label: t("nav.experience"), icon: navIcons.experience },
    { key: "skills", href: SectionId.skills, label: t("nav.skills"), icon: navIcons.skills },
    { key: "contact", href: SectionId.contact, label: t("nav.contact"), icon: navIcons.contact },
  ]

  if (!mounted) {
    // Renderizado inicial que coincide con el servidor
    return (
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md py-2 border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent py-4"
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button onClick={() => { scrollToNextSection(SectionId.home); }} className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-purple-600">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Image
                  src="https://avatars.githubusercontent.com/u/33111448?v=4"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <span className="font-bold text-xl">Rafael Arraez</span>
          </button>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />

            {/* Botón de menú móvil - siempre visible en el renderizado inicial */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>

            {/* Navegación desktop - oculta en móvil usando CSS */}
            <nav className="hidden md:flex items-center gap-6 ml-6">
              {navItems.map((item) => (
                <button onClick={() => { scrollToNextSection(item.href); }} key={item.key} className="hover:text-purple-600 transition-colors">
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md py-2 border-b border-gray-200 dark:border-gray-800"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button onClick={() => { scrollToNextSection(SectionId.home); }} className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-purple-600">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Image
                src="https://avatars.githubusercontent.com/u/33111448?v=4"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <span className="font-bold text-xl">Rafael Arraez</span>
        </button>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />

          {/* Botón de menú móvil */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden z-[60] relative overflow-hidden group w-10 h-10"
          >
            <div
              className={`absolute inset-0 bg-purple-600/10 dark:bg-purple-600/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ${isMenuOpen ? "scale-100" : ""
                }`}
            />
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isMenuOpen
                  ? "rotate-45 translate-y-0"
                  : "-translate-y-1.5"
                  }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isMenuOpen
                  ? "opacity-0 scale-0"
                  : "opacity-100 scale-100"
                  }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isMenuOpen
                  ? "-rotate-45 translate-y-0"
                  : "translate-y-1.5"
                  }`}
              />
            </div>
          </Button>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button onClick={() => { scrollToNextSection(item.href); }} key={item.key} className="hover:text-purple-600 transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Menú móvil overlay con animaciones */}
          <div
            className={`fixed inset-0 md:hidden z-50 transition-all duration-500 h-screen ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none delay-300"
              }`}
          >
            {/* Fondo con blur y gradiente */}
            <div
              className={`absolute inset-0 bg-white/80 dark:bg-gray-950/90 backdrop-blur-lg transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Formas decorativas */}
            <div
              className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-purple-500/20 to-blue-500/20 rounded-full blur-3xl transition-all duration-700 ${isMenuOpen
                ? "opacity-70 translate-x-1/3 -translate-y-1/3"
                : "opacity-0 translate-x-full -translate-y-full"
                }`}
            />
            <div
              className={`absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-t from-pink-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-700 ${isMenuOpen
                ? "opacity-70 -translate-x-1/3 translate-y-1/3"
                : "opacity-0 -translate-x-full translate-y-full"
                }`}
            />

            {/* Contenido del menú */}
            <div className="relative h-full flex flex-col justify-center items-center p-8">
              {/* Logo pequeño en la parte superior */}
              <div
                className={`absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                  }`}
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-purple-600">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <Image
                      src="https://avatars.githubusercontent.com/u/33111448?v=4"
                      alt="Profile Photo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Navegación MOVIL */}
              <nav className="flex flex-col items-center gap-6 w-full max-w-xs">
                {navItems.map((item, index) => (
                  <button onClick={() => { scrollToNextSection(item.href); toggleMenu(); }}
                    key={item.key}
                    className={`flex items-center gap-3 text-xl font-medium w-full px-6 py-3 rounded-xl relative overflow-hidden group transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    {/* Fondo hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                    {/* Icono con círculo */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>

                    {/* Texto */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {item.label}
                    </span>

                    {/* Indicador de flecha */}
                    <span className="ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </button>
                ))}
              </nav>

              {/* Decoración inferior */}
              <div
                className={`absolute bottom-8 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-700 ${isMenuOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
