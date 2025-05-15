import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 flex-col"
    >
      <article className="container max-x-4xl mx-auto text-center z-10">
        <article className="space-y-6">
          <h1 className="text-4xl mx-auto md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Oluwalayomi
            </span>
            <span className="text-gradient block md:inline opacity-0 animate-fade-in-delay-2 ml-2">
              Lawore
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I am create amazing web experience with modern frontend
            technologies. Specializing in frontend development. I build
            interfaces that are appealing and functional.
          </p>
          <article className=" pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </article>
        </article>
      </article>
      <article className="absolute bottom-8 left-1/2 traansform -translate-x-1/2 flex flex-col animate-bounce ">
        <span className="text-sm text-muted-foreground mb-2">Scroll </span>
        <ArrowDown className="w-5 h-5 text-primary mx-auto" />
      </article>
    </section>
  );
};

export default Hero;
