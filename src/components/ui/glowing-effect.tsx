"use client";

import type React from "react";

import { useRef } from "react";
import { motion } from "framer-motion";

interface GlowingCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  sharedMouse?: {
    position: { x: number; y: number };
    active: boolean;
  };
  parentRef?: React.RefObject<HTMLDivElement>;
}

export const GlowingCard = ({
  title,
  description,
  icon,
  className = "",
  sharedMouse,
  parentRef,
}: GlowingCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { position, active } = sharedMouse ?? {
    position: { x: 0, y: 0 },
    active: false,
  };
  const opacity = active ? 1 : 0;

  // Card's own position
  const cardRect = divRef.current?.getBoundingClientRect();
  const parentRect = parentRef?.current?.getBoundingClientRect();

  let localX = 0;
  let localY = 0;
  if (cardRect && parentRect) {
    localX = position.x - (cardRect.left - parentRect.left);
    localY = position.y - (cardRect.top - parentRect.top);
  }

  return (
    <motion.div
      ref={divRef}
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-black p-8 transition-colors hover:border-white/20 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${localX}px ${localY}px, rgba(168, 85, 247, 0.17), transparent 40%)`,
          boxShadow: `0 0 40px rgba(168, 85, 247, ${opacity})`,
          border: `1px solid rgba(168, 85, 247, ${opacity})`,
        }}
      />

      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/20 text-purple-400">
          {icon}
        </div>
      )}

      <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </motion.div>
  );
};
