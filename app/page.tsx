"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";
import ScrollyCanvas from "@/components/sections/ScrollyCanvas";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="bg-[#121212] text-white selection:bg-white/20 selection:text-white">
      {/* Fullscreen Loader */}
      <Loader onLoadComplete={() => setIsLoaded(true)} />

      {/* Main content — fades in after load */}
      <div
        className="transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Navbar />

        {/* Hero Scrollytelling Canvas */}
        <ScrollyCanvas />

        {/* Layered Content — slides OVER the hero like a book */}
        <div className="relative z-20 -mt-[100vh] bg-[#121212] rounded-t-[3rem] shadow-[0_-30px_60px_rgba(0,0,0,0.6)] pt-12 overflow-hidden">
          {/* About + Skills */}
          <About />

          {/* Experience */}
          <Experience />

          {/* Projects */}
          <Projects />

          {/* Education + Certifications */}
          <Education />

          {/* Contact + Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
