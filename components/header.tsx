"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui-custom/button"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Header() {

  const { t } = useLanguage()

  // if (!mounted) return null

  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md py-2 border-b border-gray-200 dark:border-gray-800"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-purple-600">
            <Image
              src="https://avatars.githubusercontent.com/u/33111448?v=4"
              alt="Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-bold text-xl">Rafael Arraez</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="z-50">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              {isMenuOpen && (
                <div className="fixed inset-0 bg-white/95 dark:bg-gray-950/95 flex flex-col items-center justify-center">
                  <nav className="flex flex-col items-center gap-8 text-xl">
                    <Link href="#inicio" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">
                      {t("nav.home")}
                    </Link>
                    <Link href="#trayectoria" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">
                      {t("nav.timeline")}
                    </Link>
                    <Link href="#habilidades" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">
                      {t("nav.skills")}
                    </Link>
                    <Link href="#servicios" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">
                      {t("nav.services")}
                    </Link>
                    <Link href="#contacto" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">
                      {t("nav.contact")}
                    </Link>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="flex items-center gap-6 ml-6">
              <Link href="#inicio" className="hover:text-purple-600 transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="#trayectoria" className="hover:text-purple-600 transition-colors">
                {t("nav.timeline")}
              </Link>
              <Link href="#habilidades" className="hover:text-purple-600 transition-colors">
                {t("nav.skills")}
              </Link>
              <Link href="#servicios" className="hover:text-purple-600 transition-colors">
                {t("nav.services")}
              </Link>
              <Link href="#contacto" className="hover:text-purple-600 transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
