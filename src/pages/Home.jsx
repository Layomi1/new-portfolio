import React from "react";
import ThemeToggle from "./ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen  bg-background text-foreground overflow-x-hidden ">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background */}
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
