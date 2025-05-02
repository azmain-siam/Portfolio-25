"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TracingBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50]);

  return (
    <motion.div ref={ref} className={`relative ${className}`}>
      <div className="absolute left-8 top-0 -ml-px h-full w-0.5">
        <svg
          className="h-full w-6 -ml-3"
          width="20"
          height={svgHeight}
          viewBox={`0 0 20 ${svgHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10"
            y1="0"
            x2="10"
            y2={svgHeight}
            stroke="#27272a"
            strokeWidth="1"
          />
          <motion.line
            x1="10"
            y1={y1}
            x2="10"
            y2={y2}
            stroke="#a78bfa"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <motion.circle
            cx="10"
            cy={y1}
            r="5"
            fill="#a78bfa"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            filter="drop-shadow(0 0 8px rgba(167, 139, 250, 0.5))"
          />
        </svg>
      </div>
      <div ref={contentRef} className="ml-16">
        {children}
      </div>
    </motion.div>
  );
}
