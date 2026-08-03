import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  ref?: React.Ref<HTMLButtonElement>
}

export function Button({ className, variant = "default", size = "default", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
        {
          "bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400":
            variant === "default",
          "border border-zinc-300 bg-transparent text-foreground hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-900":
            variant === "outline",
          "bg-transparent text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800/60": variant === "ghost",
          "h-10 px-5 text-sm": size === "default",
          "h-9 px-4 text-sm": size === "sm",
          "h-12 px-7 text-base": size === "lg",
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
