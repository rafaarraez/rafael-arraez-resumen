"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui-custom/button"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui-custom/dropdown-menu"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const menuId = "language-menu"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild onClick={() => setIsOpen(!isOpen)}>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label="Change language"
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent id={menuId} align="end">
          <DropdownMenuItem
            onClick={() => {
              setLanguage("es")
              setIsOpen(false)
            }}
            className={language === "es" ? "bg-gray-100 dark:bg-gray-800" : ""}
            role="menuitemradio"
            aria-checked={language === "es"}
          >
            Español
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setLanguage("en")
              setIsOpen(false)
            }}
            className={language === "en" ? "bg-gray-100 dark:bg-gray-800" : ""}
            role="menuitemradio"
            aria-checked={language === "en"}
          >
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}
