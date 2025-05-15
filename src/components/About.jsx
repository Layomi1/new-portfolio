import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <article className=" container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <article className="space-y-6 mx-auto md:max-w-2/3">
          <h3 className="text-2xl font-semibold">Passionate Developer</h3>
          <p className="text-muted-foreground">
            With over 2 Years of experience in web development. I specialize in
            creating accessible and performant web application using modern
            technologies
          </p>

          <article className="flex flex-col md:flex-row gap-4 justify-center pt-4 ">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href=""
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Download CV here
            </a>
          </article>
        </article>
      </article>
    </section>
  );
};

export default About;
