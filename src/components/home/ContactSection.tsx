"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import MagicButton from "../ui/MagicButton";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div id="contact" className="w-full px-4 relative">
      <BackgroundBeamsWithCollision>
        <section ref={ref} className="relative w-full py-24 overflow-hidden">
          {/* SVG Icon with path drawing */}
          <div className="flex justify-center mb-8">
            <motion.svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                d="M22 16.92v3a2 2 0 0 1-2.18 2A19.77 19.77 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.77 19.77 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
            </motion.svg>
          </div>

          {/* Content */}
          <motion.div
            className="max-w-xl mx-auto px-6 text-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let’s Work Together
            </h2>
            <p className="text-gray-400 mb-8">
              Have a project or just want to say hello? Fill out the form below.
            </p>

            <form className="space-y-6">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Textarea placeholder="Your Message..." />
              <MagicButton
                position="right"
                title="Send Message"
                icon={<ArrowRight size={16} />}
              />
            </form>
          </motion.div>
        </section>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
