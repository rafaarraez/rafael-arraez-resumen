"use client"

import { useEffect, useRef } from "react"

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

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		// Configurar canvas
		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		resizeCanvas()
		window.addEventListener("resize", resizeCanvas)

		// Crear partículas
		const createParticles = () => {
			const particles: Particle[] = []
			const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000))

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

		// Seguir el mouse
		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY }
		}

		window.addEventListener("mousemove", handleMouseMove)

		// Animar partículas
		const animate = () => {
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

				// Conectar partículas cercanas
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
			})

			animationRef.current = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			window.removeEventListener("resize", resizeCanvas)
			window.removeEventListener("mousemove", handleMouseMove)
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
		}
	}, [])

	return (
		<canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
	)
}
