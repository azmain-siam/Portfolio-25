"use client";

import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight1";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import MagicButton from "../ui/MagicButton";
import { ArrowRight } from "lucide-react";
import ArrowDown from "./ArrowDown";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
  return (
    <div className="flex relative flex-col justify-center items-center h-screen w-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-10 h-screen"
          fill="white"
        ></Spotlight>
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        ></Spotlight>
        <Spotlight
          className="-top-28 left-80 h-[80vh] w-[50vh]"
          fill="blue"
        ></Spotlight>
      </div>

      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center dark:bg-black-100 bg-white">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:70px_70px]",
            "dark:[background-image:linear-gradient(to_right,#bec1dd10_2px,transparent_2px),linear-gradient(to_bottom,#bec1dd10_2px,transparent_2px)]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex justify-center relative my-20 z-10"
      >
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.h2
            variants={childVariants}
            className="uppercase tracking-widest text-sm text-center text-blue-100"
          >
            Full-stack solutions with modern technologies
          </motion.h2>

          <motion.div variants={childVariants}>
            <TextGenerateEffect
              className="text-center text-4xl md:text-5xl lg:text-5xl max-w-[700px]"
              words="Transforming Ideas into Powerful Digital Experiences."
            />
          </motion.div>

          <motion.p
            variants={childVariants}
            className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl"
          >
            Hi! I&apos;m Siam, a Full-Stack Developer based in Bangladesh.
          </motion.p>

          <motion.div variants={childVariants}>
            <Link href={"#projects"}>
              <MagicButton
                title="View my works"
                icon={<ArrowRight size={16} />}
                position="right"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <ArrowDown />
    </div>
  );
};

export default Hero;
