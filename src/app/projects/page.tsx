"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/home/ProjectCard";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextReveal } from "@/components/ui/text-reveal";
import { ParallaxLayers, ParallaxLayer } from "@/components/ui/parallax-layers";

export default function ProjectsPage() {
  // const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const allProjects = [
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

  // const filteredProjects = allProjects.filter(
  //   (project) =>
  //     project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     project.tags.some((tag) =>
  //       tag.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  // );

  return (
    <div className="min-h-screen">
      <section className="py-20 relative">
        {/* <BackgroundBeams className="absolute inset-0" /> */}
        <ParallaxLayers className="absolute inset-0 z-0">
          <ParallaxLayer speed={-0.2} className="opacity-5">
            <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl"></div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.3} className="opacity-5">
            <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl"></div>
          </ParallaxLayer>
        </ParallaxLayers>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="text-purple hover:text-purple-300 hover:bg-purple-500/10 -ml-4"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>

          <motion.div
            ref={headerRef}
            style={{ y: headerY, opacity: headerOpacity }}
            className="text-center mb-12"
          >
            <TextReveal
              text="My Projects"
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive collection of my work, showcasing my skills and
              experience in web development.
            </p>
          </motion.div>

          {/* <ScrollReveal>
            <div className="max-w-md mx-auto mb-12">
              <Input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-black/50 border-purple-500/30 focus-visible:ring-purple-500"
              />
            </div>
          </ScrollReveal> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={0.1 * index}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          {allProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">
                No projects found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
