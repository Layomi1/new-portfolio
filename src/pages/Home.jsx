import React from "react";
import ThemeToggle from "./ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <div className="min-h-screen  bg-background text-foreground overflow-x-hidden ">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background */}
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Home;
