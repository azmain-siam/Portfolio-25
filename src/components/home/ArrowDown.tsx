"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const ArrowDown = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowRight className="h-6 w-6 rotate-90 text-purple" />
      </motion.div>
    </div>
  );
};

export default ArrowDown;
