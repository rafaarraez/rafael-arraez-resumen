import type React from "react"
import { cn } from "@/lib/utils"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-foreground placeholder:text-zinc-500 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:ring-emerald-500",
        className,
      )}
      {...props}
    />
  )
}
