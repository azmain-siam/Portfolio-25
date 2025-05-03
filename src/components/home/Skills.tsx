import React from "react";
import { ScrollReveal } from "../ui/scroll-reveal";
import { TextReveal } from "../ui/text-reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { SkillsGrid } from "./SkillsGrid";

const Skills = () => {
  return (
    <section id="skills" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <TextReveal
            text="My Skills"
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          />
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
            A comprehensive overview of my technical expertise and professional
            capabilities.
          </p>
        </ScrollReveal>

        <Tabs defaultValue="technical" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="technical">Development</TabsTrigger>
            <TabsTrigger value="advanced">Technologies</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="technical">
            <ScrollReveal>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-purple">
                  Frontend & Backend
                </h3>
                <SkillsGrid
                  skills={[
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "JavaScript" },
                    { name: "TypeScript" },
                    { name: "React.js" },
                    { name: "Next.js" },
                    { name: "Node.js" },
                    { name: "Express.js" },
                  ]}
                  columns={3}
                />
              </div>
            </ScrollReveal>
          </TabsContent>
          <TabsContent value="advanced">
            <ScrollReveal>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-purple">
                  Tools & Frameworks
                </h3>
                <SkillsGrid
                  skills={[
                    { name: "Tailwind CSS" },
                    { name: "Redux" },
                    { name: "MongoDB" },
                    { name: "Mongoose" },
                    { name: "Git" },
                    { name: "Firebase" },
                  ]}
                  columns={3}
                />
              </div>
            </ScrollReveal>
          </TabsContent>
          <TabsContent value="soft">
            <ScrollReveal>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-purple">
                  Professional Skills
                </h3>
                <SkillsGrid
                  skills={[
                    { name: "Communication" },
                    { name: "Teamwork" },
                    { name: "Problem Solving" },
                    { name: "Time Management" },
                    { name: "Adaptability" },
                    { name: "Leadership" },
                    { name: "Critical Thinking" },
                    { name: "Creativity" },
                    { name: "Attention to Detail" },
                  ]}
                  columns={3}
                />
              </div>
            </ScrollReveal>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
