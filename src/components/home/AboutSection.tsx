import React from "react";
import { ParallaxLayer, ParallaxLayers } from "../ui/parallax-layers";
import { TracingBeam } from "../ui/tracing-beam";
import { ScrollReveal } from "../ui/scroll-reveal";
import { TextReveal } from "../ui/text-reveal";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 overflow-hidden w-full">
      <div className="relative">
        <ParallaxLayers className="absolute inset-0 z-0">
          <ParallaxLayer speed={-0.2} className="opacity-5">
            <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl"></div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.3} className="opacity-5">
            <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl"></div>
          </ParallaxLayer>
        </ParallaxLayers>

        <TracingBeam>
          <div className="max-w-4xl mx-auto relative z-10">
            <ScrollReveal>
              <TextReveal
                text="About Me"
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
              />
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-6">
                  I&apos;m a dedicated Web Developer with 1+ years of
                  professional experience, specializing in building modern,
                  scalable, and user-friendly web applications. I work primarily
                  with React, Next.js, TypeScript, and Tailwind CSS, and have
                  hands-on experience with backend tools like Node.js, Express,
                  and MongoDB. I care deeply about writing clean, maintainable
                  code and crafting seamless user experiences. My goal is to
                  turn ideas into reliable digital products while constantly
                  learning and improving as a developer.
                </p>
              </div>
            </ScrollReveal>

            {/* Work Experience */}
            <ScrollReveal delay={0.3} className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
              <Card className="bg-black/25 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-8 last:mb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-purple-300">
                        Web Developer
                      </h4>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        Current
                      </Badge>
                    </div>
                    <p className="text-gray-300">HAMS Fly Limited</p>
                    <p className="text-sm text-gray-500 mb-3">
                      Nov 2024 - Present
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        Built and maintained dynamic web pages using React.js
                        and Next.js for the company’s flight booking platform.
                      </li>
                      <li>
                        Integrated backend APIs of GDS (eg. Sabre, Amadeus) to
                        fetch real-time flight availability and pricing.
                      </li>
                      <li>
                        Improved website performance by optimizing assets and
                        implementing lazy loading.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300">
                      Front-End Developer Intern
                    </h4>
                    <p className="text-gray-300">HAMS Fly Limited</p>
                    <p className="text-sm text-gray-500 mb-3">
                      Aug 2024 - Oct 2024
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        Assisted in developing key features of the booking UI
                        using Next.js and Tailwind CSS.
                      </li>
                      <li>
                        Fixed layout issues and bugs to improve cross-browser
                        compatibility.
                      </li>
                      <li>
                        Learned and applied Git best practices for version
                        control in a collaborative environment.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal delay={0.2} className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <Card className="bg-black/25 backdrop-blur-lg border-purple-500/20">
                <CardContent className="p-6">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300">
                      Bachelor of Business Administration in Accounting
                    </h4>
                    <p className="text-gray-300">National University</p>
                    <p className="text-sm text-gray-500">2022 - Present</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};

export default AboutSection;
