import React from "react";
import { ParallaxLayer, ParallaxLayers } from "../ui/parallax-layers";
import { ScrollReveal } from "../ui/scroll-reveal";
import { TextReveal } from "../ui/text-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import MagicButton from "../ui/MagicButton";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 overflow-hidden w-full">
      <div className="container mx-auto px-4 relative">
        <ParallaxLayers className="absolute inset-0 z-0">
          <ParallaxLayer speed={-0.3} className="opacity-5">
            <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl"></div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} className="opacity-5">
            <div className="absolute bottom-20 left-40 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl"></div>
          </ParallaxLayer>
        </ParallaxLayers>

        <div className="relative z-10">
          <ScrollReveal>
            <TextReveal
              text="Featured Projects"
              className="text-3xl md:text-4xl font-bold mb-4 text-center"
            />
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
              A selection of my recent work. Each project represents a unique
              challenge and solution.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={0.1 * index}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-12">
            <Link href="/projects">
              <MagicButton
                position="right"
                title="View All Projects"
                icon={<ArrowRight size={16} />}
              ></MagicButton>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

const projects = [
  {
    id: 1,
    title: "SwapSpot",
    description:
      "A full-stack re-commerce platform with payment integration, user authentication, and admin dashboard.",
    image:
      "https://res.cloudinary.com/db0ecop7c/image/upload/v1746240052/htytlpc8g8k2jnlauf7w.png",
    tags: ["TypeScript", "Next.js", "Node.js", "MongoDB", "Redux", "Stripe"],
    github: "https://github.com/azmain-siam/SwapSpot-Client",
    demo: "https://next-client-eta.vercel.app/",
  },
  {
    id: 2,
    title: "PaperNest",
    description:
      "PaperNest is a specialized e-commerce platform offering a curated selection of high-quality stationery items with a focus on student accessibility.",
    image:
      "https://res.cloudinary.com/db0ecop7c/image/upload/v1746241356/tvns21tc2ufza9jqzihz.png",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redux", "Stripe"],
    github: "https://github.com/azmain-siam/PaperNest-Client",
    demo: "https://papernext-client.vercel.app/",
  },
  {
    id: 3,
    title: "BloodBond",
    description:
      "BloodBond is a purpose-driven digital platform connecting blood donors with those in need.",
    image:
      "https://res.cloudinary.com/db0ecop7c/image/upload/v1746241707/mavejwkluj4p9h604bhs.png",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Material UI"],
    github: "https://github.com/azmain-siam/BloodBond-Client",
    demo: "https://blood-bond-f0feb.web.app/",
  },
];
