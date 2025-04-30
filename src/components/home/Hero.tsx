import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import MagicButton from "../ui/MagicButton";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
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
            "[background-size:90px_90px]",
            "dark:[background-image:linear-gradient(to_right,#bec1dd10_2px,transparent_2px),linear-gradient(to_bottom,#bec1dd10_2px,transparent_2px)]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-sm text-center text-blue-100">
            Full-stack solutions with modern technologies
          </h2>

          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-5xl max-w-[700px]"
            words="Transforming Ideas into Powerful Digital Experiences."
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Siam, a Full-Stack Developer based in Bangladesh.
          </p>

          <MagicButton
            title="Show my works"
            icon={<ArrowRight size={16} />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
