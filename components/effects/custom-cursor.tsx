"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { throttleRAF } from "@/lib/performance"

export function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [isVisible, setIsVisible] = useState(false)
	const [isClicking, setIsClicking] = useState(false)
	const [cursorType, setCursorType] = useState<"default" | "hover" | "code">("default")
	const prefersReducedMotion = useReducedMotion()

	useEffect(() => {
		// No renderizar cursor personalizado si el usuario prefiere movimiento reducido
		if (prefersReducedMotion) return

		const updatePosition = throttleRAF((e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY })
			setIsVisible(true)
		})

		const handleMouseDown = () => setIsClicking(true)
		const handleMouseUp = () => setIsClicking(false)
		const handleMouseLeave = () => setIsVisible(false)
		const handleMouseEnter = () => setIsVisible(true)

		// Detectar elementos interactivos
		const handleMouseOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement
			if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")) {
				setCursorType("hover")
			} else if (target.closest("#habilidades") || target.closest("code") || target.closest("pre")) {
				setCursorType("code")
			} else {
				setCursorType("default")
			}
		}

		document.addEventListener("mousemove", updatePosition)
		document.addEventListener("mousemove", handleMouseOver)
		document.addEventListener("mousedown", handleMouseDown)
		document.addEventListener("mouseup", handleMouseUp)
		document.addEventListener("mouseleave", handleMouseLeave)
		document.addEventListener("mouseenter", handleMouseEnter)

		// Ocultar cursor por defecto solo en desktop, no en móvil para mejor accesibilidad
		// También permitir que el cursor nativo sea visible en inputs y elementos select
		document.body.style.cursor = "none"

		// Asegurar que ciertos elementos mantengan su cursor nativo para accesibilidad
		const style = document.createElement('style')
		style.textContent = `
			input, textarea, select, [contenteditable="true"] {
				cursor: text !important;
			}
		`
		document.head.appendChild(style)

		return () => {
			document.head.removeChild(style)
			document.removeEventListener("mousemove", updatePosition)
			document.removeEventListener("mousemove", handleMouseOver)
			document.removeEventListener("mousedown", handleMouseDown)
			document.removeEventListener("mouseup", handleMouseUp)
			document.removeEventListener("mouseleave", handleMouseLeave)
			document.removeEventListener("mouseenter", handleMouseEnter)
			document.body.style.cursor = "auto"
		}
	}, [prefersReducedMotion])

	// No renderizar si el usuario prefiere movimiento reducido
	if (prefersReducedMotion || !isVisible) return null

	return (
		<>
			{/* Screen reader only announcement for cursor state changes */}
			<div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
				{cursorType === "hover" && "Interactive element"}
				{cursorType === "code" && "Code section"}
			</div>

			<div
				className="hidden md:block fixed pointer-events-none z-[9999] mix-blend-difference"
				style={{
					left: position.x,
					top: position.y,
					transform: "translate(-50%, -50%)",
				}}
				aria-hidden="true"
			>
				{/* Cursor principal */}
				<div
					className={`transition-all duration-150 ease-out ${isClicking ? "scale-75" : "scale-100"} ${cursorType === "hover"
						? "w-12 h-12 bg-purple-500"
						: cursorType === "code"
							? "w-8 h-8 bg-green-500"
							: "w-6 h-6 bg-white"
						} rounded-full`}
				/>

				{/* Anillo exterior */}
				<div
					className={`absolute inset-0 transition-all duration-300 ease-out border-2 rounded-full ${cursorType === "hover"
						? "w-16 h-16 border-purple-300 -translate-x-2 -translate-y-2"
						: cursorType === "code"
							? "w-12 h-12 border-green-300 -translate-x-1 -translate-y-1"
							: "w-10 h-10 border-white/50 -translate-x-1 -translate-y-1"
						} ${isClicking ? "scale-150" : "scale-100"}`}
				/>

				{/* Texto para cursor hover */}
				{cursorType === "hover" && (
					<div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium whitespace-nowrap bg-black/50 px-2 py-1 rounded">
						Click me!
					</div>
				)}

				{/* Símbolo para cursor code */}
				{cursorType === "code" && (
					<div className="absolute inset-0 flex items-center justify-center text-white text-xs font-mono">{"</>"}</div>
				)}
			</div>
		</>
	)
}
