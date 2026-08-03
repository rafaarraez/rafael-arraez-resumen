"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

gsap.registerPlugin(ScrollTrigger)

interface RevealProps {
  children: ReactNode
  className?: string
  /** Seconds added before the entrance starts */
  delay?: number
  /** Initial vertical offset in px */
  y?: number
  /** Stagger direct children instead of animating the wrapper as one block */
  stagger?: boolean
}

export function Reveal({ children, className, delay = 0, y = 28, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !ref.current) return

    const ctx = gsap.context(() => {
      const targets = stagger ? Array.from(ref.current!.children) : ref.current!
      if (stagger) gsap.set(ref.current, { opacity: 1 })
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [reduce, delay, y, stagger])

  // With reduced motion the content simply renders in place
  return (
    <div ref={ref} className={className} style={reduce ? undefined : { opacity: 0 }}>
      {children}
    </div>
  )
}
