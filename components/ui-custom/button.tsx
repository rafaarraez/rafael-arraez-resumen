import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
}

export function Button({ className, variant = "default", size = "default", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-purple-600 text-white hover:bg-purple-700": variant === "default",
          "border border-purple-600 bg-transparent text-foreground hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-950":
            variant === "outline",
          "bg-transparent text-foreground hover:bg-purple-100 dark:hover:bg-purple-950": variant === "ghost",
          "h-10 px-4 py-2": size === "default",
          "h-9 px-3": size === "sm",
          "h-11 px-8": size === "lg",
          "h-10 w-10 p-0": size === "icon",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
