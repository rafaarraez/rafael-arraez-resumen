"use client"

import { useRef, type ReactNode, type MouseEvent } from "react"
import { gsap } from "gsap"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

interface MagneticProps {
  children: ReactNode
  /** Fraction of the cursor offset the element follows */
  strength?: number
  className?: string
}

export function Magnetic({ children, strength = 0.25, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    gsap.to(ref.current, { x: x * strength, y: y * strength, duration: 0.3, ease: "power2.out" })
  }

  const onMouseLeave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" })
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={cn("inline-block", className)}>
      {children}
    </div>
  )
}
