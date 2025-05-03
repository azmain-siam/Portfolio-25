"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import MagicButton from "../ui/MagicButton";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { TextReveal } from "../ui/text-reveal";
import { Card, CardContent } from "../ui/card";

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
        <section
          ref={ref}
          className="relative flex justify-between items-center w-full py-24 overflow-hidden"
        >
          {/* SVG Icon with path drawing */}
          <div>
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
              <TextReveal
                text="Let’s Work Together"
                className="text-3xl md:text-4xl font-bold mb-4 text-center"
              ></TextReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              <p className="text-gray-400 mb-8">
                Have a project or just want to say hello? Fill out the form
                below.
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
          </div>

          <Card className="bg-black-100/7 border-purple-500/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple mr-3" />
                  <a
                    href="mailto:siam.hossain.dev@gmail.com"
                    className="text-gray-300 hover:text-purple transition-colors"
                  >
                    siam.hossain.dev@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-purple mr-3" />
                  <a
                    href="https://www.linkedin.com/in/azmain-siam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple transition-colors"
                  >
                    linkedin.com/in/azmain-siam
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-purple mr-3" />
                  <a
                    href="https://github.com/azmain-siam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple transition-colors"
                  >
                    github.com/azmain-siam
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
