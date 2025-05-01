"use client";

import { Code, Layers, Rocket } from "lucide-react";
import { GlowingCard } from "../ui/glowing-effect";
import { GlowingCardGroup } from "../ui/glowing-effect-group";

export default function FeaturedContentSec() {
  return (
    <section className="mt-20">
      <GlowingCardGroup>
        <GlowingCard
          title="Modern Development"
          description="Utilizing cutting-edge technologies to build responsive and performant applications."
          icon={<Code className="h-6 w-6" />}
        />

        <GlowingCard
          title="Full-Stack Solutions"
          description="End-to-end development from database design to beautiful user interfaces."
          icon={<Layers className="h-6 w-6" />}
        />

        <GlowingCard
          title="Digital Experiences"
          description="Creating memorable digital experiences that engage and delight users."
          icon={<Rocket className="h-6 w-6" />}
        />
      </GlowingCardGroup>
    </section>
  );
}
