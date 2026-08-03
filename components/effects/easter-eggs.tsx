"use client"

import { useEffect, useRef } from "react"
import toast from "react-hot-toast"
import { useLanguage } from "@/contexts/language-context"
import { celebrate } from "@/lib/utils"

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
]

export function EasterEggs() {
  const { language } = useLanguage()
  const progress = useRef(0)

  // Hidden message for devs peeking at the console
  useEffect(() => {
    console.log(
      "%crafael-arraez %c$ %cwhoami",
      "color:#10b981;font-family:monospace;font-size:12px",
      "color:#71717a;font-family:monospace;font-size:12px",
      "color:inherit;font-family:monospace;font-size:12px",
    )
    console.log(
      "%cBackend engineer. Si llegaste hasta aquí, ya me caes bien.\nEscríbeme: rafa.arraez.gue@gmail.com\nTip: prueba el código Konami en la página (↑↑↓↓←→←→BA)",
      "color:#71717a;font-family:monospace;font-size:12px;line-height:1.6",
    )
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const expected = KONAMI[progress.current]
      if (e.key === expected || e.key.toLowerCase() === expected) {
        progress.current += 1
        if (progress.current === KONAMI.length) {
          progress.current = 0
          celebrate()
          toast(
            language === "es"
              ? "Código Konami desbloqueado. Claramente deberíamos trabajar juntos."
              : "Konami code unlocked. We should clearly work together.",
            { icon: "🕹️", duration: 5000 },
          )
        }
      } else {
        progress.current = e.key === KONAMI[0] ? 1 : 0
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [language])

  return null
}
