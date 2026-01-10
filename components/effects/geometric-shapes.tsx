"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { throttleRAF } from "@/lib/performance"

type Shape = {
  baseX: number | string
  baseY: number | string
  size: 20 | 24 | 28 | 32 | 40
  color: string
  blur: string
  right?: boolean
  bottom?: boolean
}

const shapes: Shape[] = [
  { baseX: 120, baseY: 160, size: 32, color: "bg-purple-500/10", blur: "blur-xl" },
  { baseX: -140, baseY: 200, size: 24, color: "bg-blue-500/10", blur: "blur-lg", right: true },
  { baseX: "25%", baseY: -200, size: 40, color: "bg-cyan-500/10", blur: "blur-2xl", bottom: true },
  { baseX: "66%", baseY: "33%", size: 20, color: "bg-pink-500/10", blur: "blur-lg" },
  { baseX: -100, baseY: "75%", size: 28, color: "bg-yellow-500/10", blur: "blur-xl", right: true, bottom: true },
]

const sizeClassMap: Record<number, string> = {
  20: "w-20 h-20",
  24: "w-24 h-24",
  28: "w-28 h-28",
  32: "w-32 h-32",
  40: "w-40 h-40",
}

interface GeometricShapesProps {
  containerRef: React.RefObject<HTMLElement | HTMLDivElement | null>
}

export function GeometricShapes({ containerRef }: GeometricShapesProps) {
  const shapesRef = useRef<(HTMLDivElement | null)[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()

  // Track mouse movement
  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = throttleRAF((e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    })

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion, containerRef])

  // Apply repulsion effect
  useEffect(() => {
    if (prefersReducedMotion) return

    let rafId: number | null = null

    const updateShapes = () => {
      shapesRef.current.forEach((shape) => {
        if (!shape || !containerRef.current) return

        const shapeRect = shape.getBoundingClientRect()
        const containerRect = containerRef.current.getBoundingClientRect()

        const shapeX = shapeRect.left - containerRect.left + shapeRect.width / 2
        const shapeY = shapeRect.top - containerRect.top + shapeRect.height / 2

        const dx = mousePosition.x - shapeX
        const dy = mousePosition.y - shapeY
        const distance = Math.sqrt(dx * dx + dy * dy)

        const repulsionRadius = 200
        const repulsionStrength = 60

        if (distance < repulsionRadius) {
          const repulsionForce = (repulsionRadius - distance) / repulsionRadius
          const angle = Math.atan2(dy, dx)
          const offsetX = -Math.cos(angle) * repulsionForce * repulsionStrength
          const offsetY = -Math.sin(angle) * repulsionForce * repulsionStrength

          shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`
          shape.style.transition = "transform 0.3s ease-out"
        } else {
          shape.style.transform = "translate(0px, 0px)"
          shape.style.transition = "transform 0.5s ease-out"
        }
      })
    }

    rafId = requestAnimationFrame(updateShapes)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [mousePosition, prefersReducedMotion, containerRef])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {shapes.map((shape, index) => {
        const style: React.CSSProperties = {}

        if (shape.right) {
          style.right = shape.baseX
        } else {
          style.left = shape.baseX
        }

        if (shape.bottom) {
          style.bottom = shape.baseY
        } else {
          style.top = shape.baseY
        }

        return (
          <div
            key={index}
            ref={(el) => { shapesRef.current[index] = el }}
            className={`absolute ${sizeClassMap[shape.size] || ""} ${shape.color} rounded-full ${shape.blur}`}
            style={style}
          />
        )
      })}
    </div>
  )
}
