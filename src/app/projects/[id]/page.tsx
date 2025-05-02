"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import { NavBar } from "@/components/nav-bar";
// import { Footer } from "@/components/footer";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextReveal } from "@/components/ui/text-reveal";
import { ParallaxLayers, ParallaxLayer } from "@/components/ui/parallax-layers";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = Number(params.id);
  const [project, setProject] = useState(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
        longDescription: `
          This e-commerce platform provides a complete solution for online stores. It features a responsive design, 
          user authentication, product catalog, shopping cart, checkout process with Stripe integration, and an 
          admin dashboard for managing products, orders, and customers.
          
          The frontend is built with React and Redux for state management, while the backend uses Node.js, Express, 
          and MongoDB. The application is fully responsive and provides a seamless shopping experience across all devices.
          
          Key features include:
          - User authentication and profile management
          - Product search and filtering
          - Shopping cart and wishlist functionality
          - Secure checkout with Stripe
          - Order tracking and history
          - Admin dashboard for inventory management
          - Sales analytics and reporting
        `,
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
        github: "#",
        demo: "#",
        date: "January 2023",
        challenges: [
          "Implementing a secure payment system with Stripe",
          "Designing a scalable database schema for products, orders, and users",
          "Creating an intuitive admin dashboard for store management",
        ],
        solutions: [
          "Used Stripe's official SDK and followed best practices for secure payment processing",
          "Implemented MongoDB with proper indexing and data validation",
          "Designed a modular admin interface with role-based access control",
        ],
        technologies: {
          frontend: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
          backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
          deployment: ["AWS", "Docker", "CI/CD Pipeline"],
        },
        screenshots: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: 2,
        title: "AI Content Generator",
        description:
          "An AI-powered application that generates content based on user prompts using OpenAI's GPT models.",
        longDescription: `
          This AI content generator leverages OpenAI's GPT models to create high-quality content based on user prompts. 
          The application allows users to generate blog posts, marketing copy, product descriptions, and more with just 
          a few clicks.
          
          Built with Next.js and TypeScript, the application provides a clean and intuitive interface for interacting 
          with AI models. It includes features like prompt templates, content history, and the ability to edit and 
          refine generated content.
          
          Key features include:
          - Multiple content generation modes (blog, social media, email, etc.)
          - Customizable tone and style settings
          - Content history and favorites
          - Export options (Markdown, HTML, plain text)
          - User authentication and subscription management
        `,
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
        github: "#",
        demo: "#",
        date: "March 2023",
        challenges: [
          "Managing API rate limits and costs",
          "Designing an intuitive interface for prompt engineering",
          "Implementing efficient content storage and retrieval",
        ],
        solutions: [
          "Created a token-based system with usage quotas and caching",
          "Developed a template system with guided prompts and examples",
          "Used efficient database indexing and pagination for content history",
        ],
        technologies: {
          frontend: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
          backend: ["Next.js API Routes", "Prisma", "PostgreSQL"],
          deployment: ["Vercel", "Supabase"],
        },
        screenshots: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: 3,
        title: "Real-time Chat Application",
        description:
          "A real-time chat application with features like message encryption, file sharing, and user presence.",
        longDescription: `
          This real-time chat application provides secure communication channels for individuals and teams. It features 
          end-to-end encryption, file sharing capabilities, user presence indicators, and support for both direct 
          messages and group chats.
          
          The application is built with React and Firebase, utilizing Firestore for real-time data synchronization and Firebase Authentication for user management. WebSockets ensure instant message delivery and updates.
          
          Key features include:
          - End-to-end encryption for secure messaging
          - Real-time typing indicators and read receipts
          - File sharing with preview support
          - User presence indicators (online, away, offline)
          - Push notifications for new messages
          - Message search and history
        `,
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Firebase", "WebSockets", "Material UI"],
        github: "#",
        demo: "#",
        date: "June 2023",
        challenges: [
          "Implementing secure end-to-end encryption",
          "Managing real-time connections efficiently",
          "Creating a responsive UI that works across all devices",
        ],
        solutions: [
          "Used the Web Crypto API for client-side encryption",
          "Implemented connection pooling and optimized Firebase queries",
          "Designed a flexible layout system with Material UI and CSS Grid",
        ],
        technologies: {
          frontend: ["React", "Material UI", "Redux"],
          backend: ["Firebase", "Cloud Functions", "WebSockets"],
          deployment: ["Firebase Hosting", "GitHub Actions"],
        },
        screenshots: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ];

    const foundProject = projects.find((p) => p.id === projectId);
    setProject(foundProject);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading project details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 relative overflow-hidden">
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
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 -ml-4"
            >
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <div ref={headerRef}>
              <motion.div style={{ scale: imageScale, opacity: imageOpacity }}>
                <BackgroundGradient className="rounded-[22px] max-w-full p-1 bg-slate-900">
                  <div className="rounded-[20px] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full object-cover"
                    />
                  </div>
                </BackgroundGradient>
              </motion.div>

              <motion.div
                style={{ y: titleY }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <TextReveal
                  text={project.title}
                  className="text-3xl md:text-4xl font-bold"
                />
                <div className="flex gap-2 ml-auto">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="gap-2 bg-purple-600 hover:bg-purple-700"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </motion.div>

              <div className="flex items-center gap-2 mt-4 text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <TracingBeam className="mt-12">
              <div className="space-y-8">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <div className="prose prose-invert max-w-none">
                    {project.longDescription
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-300">
                          {paragraph.trim()}
                        </p>
                      ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-black/40 border-purple-500/20">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
                          <Code className="h-5 w-5 mr-2" /> Frontend
                        </h3>
                        <ul className="space-y-2">
                          {project.technologies.frontend.map((tech, index) => (
                            <li key={index} className="text-gray-300">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/40 border-purple-500/20">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
                          <Code className="h-5 w-5 mr-2" /> Backend
                        </h3>
                        <ul className="space-y-2">
                          {project.technologies.backend.map((tech, index) => (
                            <li key={index} className="text-gray-300">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/40 border-purple-500/20">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
                          <Code className="h-5 w-5 mr-2" /> Deployment
                        </h3>
                        <ul className="space-y-2">
                          {project.technologies.deployment.map(
                            (tech, index) => (
                              <li key={index} className="text-gray-300">
                                {tech}
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <h2 className="text-2xl font-bold mb-4">
                    Challenges & Solutions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-black/40 border-purple-500/20">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-400">
                          Challenges
                        </h3>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="text-gray-300">
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/40 border-purple-500/20">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-400">
                          Solutions
                        </h3>
                        <ul className="space-y-2">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="text-gray-300">
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <BackgroundGradient
                        key={index}
                        className="rounded-lg p-1 bg-slate-900"
                      >
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={screenshot || "/placeholder.svg"}
                            alt={`${project.title} screenshot ${index + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      </BackgroundGradient>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </TracingBeam>
          </div>
        </div>
      </section>
    </div>
  );
}
