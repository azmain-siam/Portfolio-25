// import FeaturedContentSec from "@/components/home/FeaturedContentSec";
import AboutSection from "@/components/home/AboutSection";
// import Blogs from "@/components/home/Blogs";
import ContactSection from "@/components/home/ContactSection";
// import { SpotlightCustomColor } from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <Hero />
        {/* <FeaturedContentSec /> */}
        {/* <SpotlightCustomColor /> */}

        <AboutSection />

        <Skills />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
