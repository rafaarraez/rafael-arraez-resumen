"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { throttleRAF } from "@/lib/performance"

interface Particle {
	x: number
	y: number
	vx: number
	vy: number
	size: number
	opacity: number
	color: string
}

export function FloatingParticles() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particlesRef = useRef<Particle[]>([])
	const mouseRef = useRef({ x: 0, y: 0 })
	const animationRef = useRef<number | null>(null)
	const [isVisible, setIsVisible] = useState(false)
	const prefersReducedMotion = useReducedMotion()

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		// Don't animate if user prefers reduced motion
		if (prefersReducedMotion) return

		const ctx = canvas.getContext("2d", { alpha: true })
		if (!ctx) return

		// Configurar canvas
		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		resizeCanvas()
		window.addEventListener("resize", resizeCanvas)

		// Crear partículas con optimización para móviles
		const createParticles = () => {
			const particles: Particle[] = []
			const isMobile = window.innerWidth < 768

			// Reducir partículas en móviles
			const baseParticleCount = Math.floor((canvas.width * canvas.height) / 15000)
			const particleCount = isMobile
				? Math.min(25, Math.floor(baseParticleCount * 0.5))
				: Math.min(50, baseParticleCount)

			for (let i = 0; i < particleCount; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * 0.5,
					vy: (Math.random() - 0.5) * 0.5,
					size: Math.random() * 2 + 1,
					opacity: Math.random() * 0.5 + 0.2,
					color: Math.random() > 0.5 ? "#8b5cf6" : "#06b6d4",
				})
			}
			return particles
		}

		particlesRef.current = createParticles()

		// Throttled mouse handler using RAF for 60fps
		const throttledMouseMove = throttleRAF((e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY }
		})

		window.addEventListener("mousemove", throttledMouseMove)

		// IntersectionObserver para pausar cuando no está visible
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsVisible(entry.isIntersecting)
				})
			},
			{ threshold: 0.01 }
		)

		observer.observe(canvas)

		// Animar partículas solo si es visible
		const animate = () => {
			if (!isVisible) {
				// Continuar el loop pero no renderizar
				animationRef.current = requestAnimationFrame(animate)
				return
			}

			ctx.clearRect(0, 0, canvas.width, canvas.height)

			particlesRef.current.forEach((particle, index) => {
				// Mover partícula
				particle.x += particle.vx
				particle.y += particle.vy

				// Atracción sutil hacia el mouse
				const dx = mouseRef.current.x - particle.x
				const dy = mouseRef.current.y - particle.y
				const distance = Math.sqrt(dx * dx + dy * dy)

				if (distance < 150) {
					const force = (150 - distance) / 150
					particle.vx += (dx / distance) * force * 0.01
					particle.vy += (dy / distance) * force * 0.01
				}

				// Límites del canvas
				if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
				if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

				// Mantener dentro del canvas
				particle.x = Math.max(0, Math.min(canvas.width, particle.x))
				particle.y = Math.max(0, Math.min(canvas.height, particle.y))

				// Dibujar partícula
				ctx.beginPath()
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
				ctx.fillStyle =
					particle.color +
					Math.floor(particle.opacity * 255)
						.toString(16)
						.padStart(2, "0")
				ctx.fill()

				// Conectar partículas cercanas (solo en desktop para mejor performance)
				if (window.innerWidth >= 768) {
					particlesRef.current.slice(index + 1).forEach((otherParticle) => {
						const dx = particle.x - otherParticle.x
						const dy = particle.y - otherParticle.y
						const distance = Math.sqrt(dx * dx + dy * dy)

						if (distance < 100) {
							ctx.beginPath()
							ctx.moveTo(particle.x, particle.y)
							ctx.lineTo(otherParticle.x, otherParticle.y)
							ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`
							ctx.lineWidth = 1
							ctx.stroke()
						}
					})
				}
			})

			animationRef.current = requestAnimationFrame(animate)
		}

		// Iniciar animación solo si está visible
		if (isVisible) {
			animate()
		}

		// Cleanup apropiado
		return () => {
			window.removeEventListener("resize", resizeCanvas)
			window.removeEventListener("mousemove", throttledMouseMove)
			observer.disconnect()

			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
				animationRef.current = null
			}

			// Limpiar canvas
			if (ctx) {
				ctx.clearRect(0, 0, canvas.width, canvas.height)
			}

			// Limpiar referencias
			particlesRef.current = []
		}
	}, [isVisible, prefersReducedMotion])

	// No renderizar canvas si el usuario prefiere movimiento reducido
	if (prefersReducedMotion) {
		return null
	}

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 pointer-events-none z-0"
			style={{ background: "transparent" }}
			aria-hidden="true"
		/>
	)
}
