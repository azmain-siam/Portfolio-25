// import FeaturedContentSec from "@/components/home/FeaturedContentSec";
import { SpotlightCustomColor } from "@/components/home/Featured";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <Hero />
        {/* <FeaturedContentSec /> */}
        <SpotlightCustomColor />
      </main>
    </>
  );
}
