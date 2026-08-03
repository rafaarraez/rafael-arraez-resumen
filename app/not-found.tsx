"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export default function NotFound() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const es = language === "es"

  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/[0.07]"
      />

      <main className="relative z-10 w-full max-w-2xl">
        <div className="glass overflow-hidden rounded-2xl">
          {/* Barra de terminal */}
          <div className="flex items-center gap-2 border-b border-zinc-200/60 px-4 py-3 dark:border-zinc-800">
            <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
              rafael-arraez.vercel.app
            </span>
          </div>

          <div className="space-y-4 p-6 font-mono text-sm md:p-8">
            <p className="text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-700 dark:text-emerald-400">$</span> GET {pathname}
            </p>
            <p className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              404
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {es ? "error: ruta no encontrada" : "error: route not found"}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {es
                ? "Esta ruta no existe, pero mi backend sí devuelve 200. Palabra."
                : "This route does not exist, but my backends do return 200. I promise."}
            </p>
            <p className="pt-2 text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-700 dark:text-emerald-400">$</span>{" "}
              <Link
                href="/"
                className="rounded underline decoration-emerald-600/50 underline-offset-4 transition-colors hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:hover:text-emerald-400"
              >
                cd ~
              </Link>
              <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
            </p>
          </div>
        </div>

        <p className="mt-6 text-center font-mono text-xs text-zinc-400 dark:text-zinc-600">
          {es ? "tip: prueba el código Konami en el inicio" : "tip: try the Konami code on the home page"}
        </p>
      </main>
    </div>
  )
}
