"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  icon?: string;
}

interface SkillsGridProps {
  skills: Skill[];
  columns?: number;
}

export function SkillsGrid({ skills, columns = 3 }: SkillsGridProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${columns} gap-4`}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="bg-black/40 border border-purple-500/20 rounded-lg p-4 flex items-center justify-center"
        >
          <div className="text-center">
            <h4 className="font-medium text-white">{skill.name}</h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
