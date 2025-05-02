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
                  I&apos;m a passionate web developer with over 5 years of
                  experience building modern, responsive, and user-friendly web
                  applications. My journey in web development started with a
                  curiosity about how websites work, which quickly evolved into
                  a deep passion for creating digital experiences that make a
                  difference.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  I specialize in frontend development with React and Next.js,
                  but I&apos;m also proficient in backend technologies like
                  Node.js and Express. I believe in writing clean, maintainable
                  code and staying up-to-date with the latest industry trends
                  and best practices.
                </p>
                <p className="text-lg text-gray-300">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and tutorials.
                </p>
              </div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal delay={0.2} className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <Card className="bg-black/40 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-6 last:mb-0">
                    <h4 className="text-xl font-semibold text-purple-400">
                      Master of Computer Science
                    </h4>
                    <p className="text-gray-400">Stanford University</p>
                    <p className="text-sm text-gray-500">2018 - 2020</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400">
                      Bachelor of Science in Computer Engineering
                    </h4>
                    <p className="text-gray-400">
                      Massachusetts Institute of Technology
                    </p>
                    <p className="text-sm text-gray-500">2014 - 2018</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Work Experience */}
            <ScrollReveal delay={0.3} className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
              <Card className="bg-black/40 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="mb-8 last:mb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-purple-400">
                        Senior Frontend Developer
                      </h4>
                      <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">
                        Current
                      </Badge>
                    </div>
                    <p className="text-gray-400">Tech Innovations Inc.</p>
                    <p className="text-sm text-gray-500 mb-3">2021 - Present</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        Lead a team of 5 frontend developers in building a SaaS
                        platform
                      </li>
                      <li>
                        Implemented CI/CD pipelines that reduced deployment time
                        by 40%
                      </li>
                      <li>
                        Architected and developed reusable component library
                        used across multiple projects
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400">
                      Frontend Developer
                    </h4>
                    <p className="text-gray-400">Digital Solutions LLC</p>
                    <p className="text-sm text-gray-500 mb-3">2018 - 2021</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        Developed responsive web applications using React and
                        Redux
                      </li>
                      <li>
                        Collaborated with UX/UI designers to implement
                        pixel-perfect designs
                      </li>
                      <li>
                        Optimized application performance, improving load times
                        by 30%
                      </li>
                    </ul>
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
