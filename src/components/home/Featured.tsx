// import { HoverEffect } from "../ui/card-hover-effect";
import { Spotlight } from "../ui/spotlight";

export function SpotlightCustomColor() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {featuredContent.map((feature) => (
        <div
          key={feature.title}
          className="relative aspect-video h-[200px] overflow-hidden rounded-xl bg-zinc-300/30 p-[2px] dark:bg-zinc-700/30"
        >
          <Spotlight
            className="bg-gradient-to-r from-[#3c00ff] to-purple-500"
            size={124}
          />
          <div className="relative h-full w-full rounded-xl bg-white dark:bg-black-100">
            <h1>{feature.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

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
  // {
  //   title: "Contact",
  //   description:
  //     "Get in touch for collaboration, job opportunities, or just to say hello.",
  //   link: "#contact",
  // },
  // {
  //   title: "Blog",
  //   description:
  //     "Read my latest thoughts on web development, technology trends, and coding tips.",
  //   link: "/blog",
  // },
];
