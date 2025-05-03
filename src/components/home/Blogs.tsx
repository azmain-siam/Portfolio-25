import React from "react";
import { ScrollReveal } from "../ui/scroll-reveal";
import { ParallaxLayer, ParallaxLayers } from "../ui/parallax-layers";
import { TextReveal } from "../ui/text-reveal";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import { BlogPostCard } from "./BlogCard";
// import MagicButton from "../ui/MagicButton";

const Blogs = () => {
  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <ParallaxLayers className="absolute inset-0 z-0">
        <ParallaxLayer speed={-0.2} className="opacity-5">
          <div className="absolute top-40 left-40 w-80 h-80 rounded-full bg-purple-500/30 blur-3xl"></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.3} className="opacity-5">
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-indigo-500/30 blur-3xl"></div>
        </ParallaxLayer>
      </ParallaxLayers>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <TextReveal
            text="From My Blog"
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          />
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Thoughts, tutorials, and insights on web development, design, and
            technology.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={0.1 * index}>
              <BlogPostCard post={post} />
            </ScrollReveal>
          ))}
        </div>

        {/* <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link href="/projects">
            <MagicButton
              position="right"
              title="Read More Articles"
              icon={<ArrowRight size={16} />}
            ></MagicButton>
          </Link>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default Blogs;

const blogPosts = [
  {
    id: 1,
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn how to create web applications that are accessible to everyone, including people with disabilities.",
    image:
      "https://res.cloudinary.com/db0ecop7c/image/upload/v1746255079/taplwtmvedu6rwfhsyp2.webp",
    date: "April 15, 2023",
    readTime: "8 min read",
    author: "John Doe",
    categories: ["Accessibility", "Frontend", "Best Practices"],
  },
  {
    id: 2,
    title: "The Future of React: What's Coming in React 19",
    excerpt:
      "Explore the upcoming features and improvements in React 19 and how they will change the way we build applications.",
    image:
      "https://res.cloudinary.com/db0ecop7c/image/upload/v1746255152/ctodwhol8xzx4aq4ckmu.jpg",
    date: "May 22, 2023",
    readTime: "10 min read",
    author: "John Doe",
    categories: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "Discover techniques and best practices for improving the performance of your Next.js applications.",
    image:
      "https://res.cloudinary.com/db0ecop7c/image/upload/v1746255216/xcgrbqro1jwctjcsu1yk.png",
    date: "June 10, 2023",
    readTime: "12 min read",
    author: "John Doe",
    categories: ["Next.js", "Performance", "Web Development"],
  },
];
