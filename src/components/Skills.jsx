import React, { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "HTML/CSS",
    level: "90",
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: "70",
    category: "frontend",
  },
  {
    name: "React",
    level: "70",
    category: "frontend",
  },
  {
    name: "Angular",
    level: "40",
    category: "frontend",
  },
  {
    name: "Redux",
    level: "50",
    category: "frontend",
  },
  {
    name: "Context API",
    level: "70",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    level: "60",
    category: "frontend",
  },
  {
    name: "TypeScript",
    level: "40",
    category: "frontend",
  },
  {
    name: "GraphQL",
    level: "30",
    category: "tools",
  },
  {
    name: "Firebase",
    level: "30",
    category: "tools",
  },

  {
    name: "Git",
    level: "40",
    category: "tools",
  },
];

const categories = ["all", "frontend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategory = skills.filter(
    (skill) => activeCategory === "all" || activeCategory === skill.category
  );

  return (
    <section id="skills" className="py-24 px-4 rekative bg-secondary/30">
      <article className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4  text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <article className="flex flex-wrap justify-center gap-4   mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </article>
        <article className="grid md: grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategory.map((skill, index) => (
            <article
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <article className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </article>
              <article className="w-full bg-secondary/50 h-2 rounded-full  overflow-hidden" />
              <article
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.65s_ease-out]"
                style={{ width: skill.level + "%" }}
              />
              <article className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </article>
            </article>
          ))}
        </article>
      </article>
    </section>
  );
};

export default Skills;
