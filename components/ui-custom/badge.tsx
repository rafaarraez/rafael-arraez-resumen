import type React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
  children: React.ReactNode
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-emerald-600/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400": variant === "default",
          "border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400": variant === "outline",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
