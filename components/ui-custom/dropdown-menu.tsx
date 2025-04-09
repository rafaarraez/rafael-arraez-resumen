"use client"

import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface DropdownMenuProps {
  children: React.ReactNode
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div className="relative inline-block text-left">{children}</div>
}

interface DropdownMenuTriggerProps {
  asChild?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export function DropdownMenuTrigger({ asChild, children, onClick }: DropdownMenuTriggerProps) {
  if (asChild) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick,
    })
  }

  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  align?: "start" | "end" | "center"
}

export function DropdownMenuContent({ children, className, align = "center", ...props }: DropdownMenuContentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setIsOpen(true)
  }, [])

  if (!isOpen) return null

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md animate-in fade-in-80 dark:border-gray-800 dark:bg-gray-950",
        {
          "left-0": align === "start",
          "right-0": align === "end",
          "left-1/2 -translate-x-1/2": align === "center",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function DropdownMenuItem({ className, children, ...props }: DropdownMenuItemProps) {
  return (
    <button
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
