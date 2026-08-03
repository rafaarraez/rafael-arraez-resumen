'use client'

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Rafael Arraez. {t("footer.rights")}
        </p>
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          Next.js · Tailwind · GSAP
        </p>
      </div>
    </footer>
  )
}
