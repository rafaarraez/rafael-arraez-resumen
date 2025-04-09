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
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-purple-600 text-white": variant === "default",
          "border border-purple-600 text-purple-600": variant === "outline",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
