"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { Button } from "@/components/ui-custom/button"
import { useLanguage } from "@/contexts/language-context"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark"

    // Círculo expansivo desde el botón vía View Transitions API
    const supportsViewTransition = "startViewTransition" in document
    if (reduce || !supportsViewTransition || !buttonRef.current) {
      setTheme(next)
      return
    }

    const rect = buttonRef.current.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    // El keyframe vt-circle-reveal (globals.css) lee estas variables
    const root = document.documentElement
    root.style.setProperty("--vt-x", `${x}px`)
    root.style.setProperty("--vt-y", `${y}px`)
    root.style.setProperty("--vt-r", `${maxRadius}px`)

    ;(document as Document & {
      startViewTransition: (cb: () => void) => unknown
    }).startViewTransition(() => {
      flushSync(() => setTheme(next))
    })
  }

  const ariaLabel = resolvedTheme === "dark"
    ? (language === "es" ? "Cambiar a tema claro" : "Switch to light theme")
    : (language === "es" ? "Cambiar a tema oscuro" : "Switch to dark theme")

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full"
      aria-label={ariaLabel}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
      <span className="sr-only">{ariaLabel}</span>
    </Button>
  )
}
