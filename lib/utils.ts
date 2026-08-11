import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import confetti from 'canvas-confetti';
import type { MouseEvent } from "react"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

/** Writes cursor position as CSS vars consumed by the `.spotlight-card` border. */
export const setSpotlightPosition = (e: MouseEvent<HTMLElement>) => {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`)
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`)
}

export const celebrate = () => {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#10b981', '#34d399', '#a7f3d0', '#fafafa']
  });
};