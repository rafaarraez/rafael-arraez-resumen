"use client"

import { Moon } from "lucide-react"
import { Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui-custom/button"
import { useLanguage } from "@/contexts/language-context"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const ariaLabel = theme === "dark"
    ? (language === "es" ? "Cambiar a tema claro" : "Switch to light theme")
    : (language === "es" ? "Cambiar a tema oscuro" : "Switch to dark theme")

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      aria-label={ariaLabel}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
      <span className="sr-only">{ariaLabel}</span>
    </Button>
  )
}
