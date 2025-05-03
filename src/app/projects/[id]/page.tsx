/* eslint-disable @typescript-eslint/no-explicit-any */
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
  interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    date: string;
    challenges: string[];
    solutions: string[];
    technologies: {
      frontend: string[];
      backend: string[];
      deployment: string[];
    };
    screenshots: string[];
  }

  const [project, setProject] = useState<Project | null>(null);
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
        title: "SwapSpot",
        description:
          "A user-friendly marketplace for buying and selling pre-owned items with secure payments, fast delivery, and quality guarantees.",
        longDescription: `
            SwapSpot represents a comprehensive solution for the circular economy, offering a dedicated platform where the lifecycle of products is extended through thoughtful resale. The marketplace is built on four core pillars that instill confidence in every transaction: secure payment processing, expedited delivery options, hassle-free return policies, and stringent quality assurance.
      
            The platform features an intuitive interface that welcomes users with a clean, modern design highlighting the dual value proposition of finding deals and monetizing unused possessions. New items are added daily, ensuring the marketplace remains fresh and engaging for repeat visitors.
      
            SwapSpot's community-centric approach fosters connections between buyers and sellers, creating an ecosystem where sustainable consumption is not just encouraged but celebrated. The platform's commitment to quality is evident in its guarantee system, which protects buyers while providing sellers with a trusted channel to reach potential customers.
      
            Key features include:
            - Secure payment processing for safe transactions
            - Fast delivery options for purchased items
            - Easy returns with a customer-friendly policy
            - Quality guarantee on all listed products
            - User profiles for buyers and sellers
            - Featured items section highlighting popular products
            - New items added daily to keep inventory fresh
            - Discount indicators showing potential savings
          `,
        image:
          "https://res.cloudinary.com/db0ecop7c/image/upload/v1746240052/htytlpc8g8k2jnlauf7w.png",
        tags: [
          "TypeScript",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Redux",
          "Stripe",
        ],
        github: "https://github.com/azmain-siam/SwapSpot-Client",
        demo: "https://next-client-eta.vercel.app/",
        date: "March 2025",
        challenges: [
          "Building a trustworthy platform for second-hand item transactions",
          "Implementing a secure payment system between buyers and sellers",
          "Creating an efficient listing and discovery system for used items",
          "Ensuring quality control for second-hand products",
        ],
        solutions: [
          "Developed a robust review and rating system for both buyers and sellers",
          "Integrated escrow-style payment processing that releases funds after buyer approval",
          "Implemented advanced search and filtering with category-based organization",
          "Created a quality verification process with clear condition indicators for all items",
        ],
        technologies: {
          frontend: [
            "TypeScript",
            "Next.js",
            "Redux",
            "Context API",
            "Shadcn",
            "Framer Motion",
          ],
          backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
          deployment: ["Vercel"],
        },
        screenshots: [
          "https://res.cloudinary.com/db0ecop7c/image/upload/v1746240052/htytlpc8g8k2jnlauf7w.png",
        ],
      },
      {
        id: 2,
        title: "PaperNest",
        description:
          "A specialized e-commerce platform for high-quality stationery items with student discounts, free shipping, and a seamless shopping experience.",
        longDescription: `
            PaperNest represents a comprehensive solution for stationery needs, thoughtfully designed to cater specifically to students and stationery aficionados seeking quality products at accessible price points. The platform stands out in the e-commerce landscape through its dedicated focus on academic and creative supplies.
      
            The website's vibrant, intuitive interface welcomes visitors with a striking hero section highlighting the platform's commitment to student affordability through substantial discounts of up to 50% off with valid student identification. This student-centric approach demonstrates PaperNest's understanding of its core demographic.
      
            Customer experience is prioritized through four key service pillars prominently displayed on the homepage: complimentary shipping on orders exceeding $50, ensuring cost-effective delivery; 100% secure payment processing, building trust in online transactions; dedicated 24/7 customer support, providing assistance whenever needed; and a generous 30-day return policy, offering peace of mind with every purchase.
      
            Key features include:
            - Student discounts up to 50% off with valid ID
            - Free shipping on orders over $50
            - Secure payment processing
            - 24/7 dedicated customer support
            - 30-day hassle-free return policy
            - Curated selection of high-quality stationery
            - Featured products section highlighting popular items
            - Theme toggle for comfortable browsing
          `,
        image:
          "https://res.cloudinary.com/db0ecop7c/image/upload/v1746241356/tvns21tc2ufza9jqzihz.png",
        tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redux", "Stripe"],
        github: "https://github.com/azmain-siam/PaperNest-Client",
        demo: "https://papernext-client.vercel.app/",
        date: "Feb 2025",
        challenges: [
          "Creating an efficient student verification system for discounts",
          "Designing a visually appealing interface that showcases stationery products effectively",
          "Implementing a robust inventory management system for diverse product categories",
          "Balancing competitive pricing with quality product offerings",
        ],
        solutions: [
          "Developed a secure student ID verification process with privacy protection",
          "Used high-quality product photography and category-based visual organization",
          "Created a real-time inventory tracking system with low-stock alerts",
          "Implemented strategic supplier relationships to maintain quality while offering student discounts",
        ],
        technologies: {
          frontend: [
            "TypeScript",
            "React",
            "Redux",
            "Framer Motion",
            "Context API",
            "Shadcn",
          ],
          backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
          deployment: ["Vercel"],
        },
        screenshots: [
          "https://res.cloudinary.com/db0ecop7c/image/upload/v1746241356/tvns21tc2ufza9jqzihz.png",
        ],
      },
      {
        id: 3,
        title: "BloodBond",
        description:
          "A purpose-driven platform connecting blood donors with recipients, featuring donation scheduling, history tracking, and community engagement.",
        longDescription: `
            BloodBond represents a transformative approach to blood donation management, leveraging technology to address one of healthcare's most persistent challenges: ensuring a reliable and timely supply of blood for medical emergencies and treatments. This comprehensive platform serves as a vital bridge between donors and recipients, creating an ecosystem where the gift of life is efficiently coordinated, tracked, and celebrated.
      
            At its core, BloodBond offers three interconnected pillars of functionality that revolutionize the traditional blood donation experience. The Effortless Scheduling system eliminates the friction typically associated with donation appointments, allowing donors to select convenient times and locations through an intuitive interface that respects their availability and preferences.
      
            The Donation History Tracking feature provides donors with a detailed record of their contributions, creating a visual representation of their impact while serving practical medical documentation needs. This comprehensive history allows donors to monitor their donation patterns, track recovery periods, and understand how their specific blood type has helped recipients.
      
            Key features include:
            - Effortless scheduling of blood donation appointments
            - Comprehensive donation history tracking
            - Community engagement between donors and recipients
            - Donor search functionality for those in need
            - Real-time updates on blood donation drives
            - User profiles for donors with blood type information
            - Blog section with health information and donation tips
            - Secure authentication for user privacy
          `,
        image:
          "https://res.cloudinary.com/db0ecop7c/image/upload/v1746241707/mavejwkluj4p9h604bhs.png",
        tags: ["React", "Node.js", "MongoDB", "Firebase", "Material UI"],
        github: "https://github.com/username/bloodbond",
        demo: "https://blood-bond-f0feb.web.app/",
        date: "October 2024",
        challenges: [
          "Creating a secure system for handling sensitive medical information",
          "Developing an efficient donor-recipient matching algorithm",
          "Building a reliable scheduling system for donation appointments",
          "Fostering community engagement while maintaining privacy",
        ],
        solutions: [
          "Implemented HIPAA-compliant data handling with encryption and access controls",
          "Created a multi-factor matching system based on blood type, location, and availability",
          "Developed a calendar system with automated reminders and eligibility tracking",
          "Built an anonymous communication system with optional identity disclosure",
        ],
        technologies: {
          frontend: ["React", "Material UI", "Context API", "Framer Motion"],
          backend: [
            "Firebase",
            "Cloud Firestore",
            "Firebase Authentication",
            "Cloud Functions",
          ],
          deployment: ["Firebase Hosting", "GitHub Actions"],
        },
        screenshots: [
          "https://res.cloudinary.com/db0ecop7c/image/upload/v1746241707/mavejwkluj4p9h604bhs.png",
        ],
      },
    ];

    const foundProject: any = projects.find((p) => p.id === projectId);
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
    <div className="min-h-screen bg-black-100 text-white">
      <section className="py-20 relative overflow-hidden">
        <ParallaxLayers className="absolute inset-0 z-0">
          <ParallaxLayer speed={-0.2} className="opacity-5">
            <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl"></div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.3} className="opacity-5">
            <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl"></div>
          </ParallaxLayer>
        </ParallaxLayers>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="text-purple hover:text-purple-300 hover:bg-purple-500/10 -ml-4"
            >
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
          </div>

          <div className="max-w-6xl mx-auto">
            <div ref={headerRef}>
              <motion.div style={{ scale: imageScale, opacity: imageOpacity }}>
                <BackgroundGradient className="rounded-[22px] max-w-full p-2 bg-slate-900">
                  <div className="rounded-[20px] h-[700px] overflow-hidden">
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
                    className="gap-2 bg-purple-400 hover:bg-purple-700"
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

              <div className="flex items-center gap-2 mt-4 text-gray">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-purple-500/10 text-purple hover:bg-purple-500/20"
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
                        <h3 className="text-lg font-semibold mb-3 text-purple flex items-center">
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
                        <h3 className="text-lg font-semibold mb-3 text-purple flex items-center">
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
                        <h3 className="text-lg font-semibold mb-3 text-purple flex items-center">
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
                        <h3 className="text-lg font-semibold mb-3 text-purple">
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
                        <h3 className="text-lg font-semibold mb-3 text-purple">
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
