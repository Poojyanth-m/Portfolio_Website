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
        <Navbar isLoaded={isLoaded} />

        {/* Hero Scrollytelling Canvas */}
        <ScrollyCanvas />

        {/* Layered Content — slides OVER the hero with a cinematic fog transition */}
        <div className="relative z-20 -mt-[100vh]">
          
          {/* Cinematic Top Fade: this sits right ABOVE the solid background, acting as a fog that smoothly transitions the hero into darkness before the content arrives */}
          <div className="absolute top-0 left-0 w-full h-[25vh] -translate-y-full bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none" />
          
          <div className="bg-[#050505] relative z-10 w-full overflow-hidden">
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
      </div>
    </main>
  );
}
