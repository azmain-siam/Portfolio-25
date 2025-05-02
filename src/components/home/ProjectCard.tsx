"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BackgroundGradient } from "../ui/background-gradient";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative inline-flex overflow-hidden rounded-[22px] "
    >
      {/* <span className="absolute -z-10 inset-[-1000%] animate-[spin_5s_linear_infinite] blur-2xl bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_50%,#393BB2_50%,#E2CBFF_100%)]" /> */}
      <BackgroundGradient className="rounded-[22px] p-1 bg-black-100">
        <Card className="border-t-0 border-indigo-400/50 bg-black-100 rounded-[20px] overflow-hidden h-full flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={
                // project.image ||
                "https://images01.nicepagecdn.com/page/35/45/website-design-preview-3545756.jpg"
              }
              alt={project.title}
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <CardContent className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge className="bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex justify-between">
            <div className="flex space-x-2">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="h-8 w-8 border-indigo-500/30 hover:bg-indigo-500/10"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="h-8 w-8 border-indigo-500/30 hover:bg-indigo-500/10"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live Demo</span>
                </a>
              </Button>
            </div>
            <Button
              asChild
              variant="ghost"
              className="text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10"
            >
              <Link href={`/projects/${project.id}`}>
                Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </BackgroundGradient>
    </motion.div>
  );
}
