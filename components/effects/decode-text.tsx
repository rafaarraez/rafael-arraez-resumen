"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const CHARS = "abcdefghjkmnpqrstwxyz<>/{}[]$#%&*+="

interface DecodeTextProps {
  text: string
  className?: string
}

/** Terminal-style scramble that resolves left to right on mount. */
export function DecodeText({ text, className }: DecodeTextProps) {
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (reduce) {
      setDisplay(text)
      return
    }

    let frame = 0
    const totalFrames = Math.max(24, Math.floor(text.length * 0.8))
    const interval = setInterval(() => {
      frame++
      const resolved = Math.floor((frame / totalFrames) * text.length)
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (i < resolved || ch === " " || ch === "·") return ch
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join(""),
      )
      if (resolved >= text.length) clearInterval(interval)
    }, 35)

    return () => clearInterval(interval)
  }, [text, reduce])

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  )
}
