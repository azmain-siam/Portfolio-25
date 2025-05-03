import React from "react";
import { ScrollReveal } from "../ui/scroll-reveal";
import { HoverEffect } from "../ui/card-hover-effect";

const Blogs = () => {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <HoverEffect items={featuredContent} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Blogs;

const featuredContent = [
  {
    title: "About Me",
    description:
      "Learn more about my journey, skills, and what drives me as a developer.",
    link: "#about",
  },
  {
    title: "My Projects",
    description:
      "Explore my portfolio of web applications, from e-commerce to AI-powered tools.",
    link: "#projects",
  },
  {
    title: "Contact",
    description:
      "Get in touch for collaboration, job opportunities, or just to say hello.",
    link: "#contact",
  },
  {
    title: "Blog",
    description:
      "Read my latest thoughts on web development, technology trends, and coding tips.",
    link: "/blog",
  },
];
