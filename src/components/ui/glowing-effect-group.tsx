"use client";

import { useRef, useState, useCallback } from "react";
import React from "react";

interface GlowingCardGroupProps {
  children: React.ReactElement[];
}

export const GlowingCardGroup = ({ children }: GlowingCardGroupProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovering(true);
  }, []);

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {children.map((child, index) =>
        React.cloneElement(child, {
          sharedMouse: { position: mousePosition, active: isHovering },
          parentRef: containerRef,
          key: index,
        })
      )}
    </div>
  );
};
