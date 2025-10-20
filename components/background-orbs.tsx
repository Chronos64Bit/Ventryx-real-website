"use client"

import { useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

interface BackgroundOrbsProps {
  className?: string
  includeCenter?: boolean
  animated?: boolean
}

export function BackgroundOrbs({ className, includeCenter, animated = true }: BackgroundOrbsProps) {
  const prefersReducedMotion = useReducedMotion()
  const animationClass = animated && !prefersReducedMotion ? "animate-glow" : ""

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden blur-0",
        className
      )}
    >
      <div
        className={cn(
          "absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl md:-left-32 lg:-left-24",
          animationClass
        )}
      />
      <div
        className={cn(
          "absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl md:-right-32 lg:-right-24 delay-1000",
          animationClass
        )}
      />
      {includeCenter ? (
        <div
          className={cn(
            "absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-3xl delay-2000",
            animationClass
          )}
        />
      ) : null}
    </div>
  )
}
