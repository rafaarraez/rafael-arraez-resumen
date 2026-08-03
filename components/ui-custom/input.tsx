import type React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm text-foreground placeholder:text-zinc-500 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:ring-emerald-500",
        className,
      )}
      {...props}
    />
  )
}
