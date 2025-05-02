"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  width?: "full" | "auto"
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function ScrollReveal({
  children,
  width = "full",
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const directionVariants = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  }

  const initialVariant = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      initial={initialVariant}
      animate={isInView ? { y: 0, x: 0, opacity: 1 } : initialVariant}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${width === "full" ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  )
}
