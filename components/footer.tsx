'use client'

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Rafael Arraez. {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
