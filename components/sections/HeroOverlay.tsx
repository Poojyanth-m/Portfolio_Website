"use client";

import { motion } from "framer-motion";
import { Pinyon_Script } from "next/font/google";

// Same signature font as the navbar logo — consistent brand identity
const signatureFont = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
});

// Hero name: gentle upward reveal
const nameVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
  },
};

// Sections 2 & 3: emerge from DEPTH — scale up with blur, no Y drop
// Creates the illusion of materializing from behind the canvas scene
const depthVariant = {
  hidden: { opacity: 0, scale: 0.88, filter: "blur(16px)" },
  visible: {
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function CinematicText({ children, className = "", depth = false }: {
  children: React.ReactNode;
  className?: string;
  depth?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={depth ? depthVariant : nameVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroOverlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">

      {/* Section 1 — 0–100vh: Name & Title (Centered) */}
      <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
        <CinematicText>
          {/* Hero name — matches navbar Pinyon Script signature */}
          <h1
            className={`text-7xl sm:text-9xl md:text-[10rem] leading-none mb-4 ${signatureFont.className}`}
            style={{ textShadow: "0 0 60px rgba(255,255,255,0.15)" }}
          >
            Poojyanth M.
          </h1>
          {/* Role — clean Inter caps underneath */}
          <p className="text-xs sm:text-sm tracking-[0.45em] text-white/80 uppercase font-light mt-6">
            Full Stack Developer &nbsp;·&nbsp; AI & ML Engineer &nbsp;·&nbsp; React & React Native
          </p>
        </CinematicText>
      </div>

      {/* Section 2 — 100–200vh: Statement (Left-aligned) */}
      <div className="h-screen flex items-center justify-start px-8 md:px-24 lg:px-32">
        <CinematicText depth className="max-w-2xl text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-white">
            I build{" "}
            <span className="font-semibold italic text-white/75">intelligent</span>
            {" "}digital experiences.
          </h2>
          <div className="mt-8 w-14 h-[1px] bg-white/25" />
        </CinematicText>
      </div>

      {/* Section 3 — 200–300vh: Manifesto (Right-aligned) */}
      <div className="h-screen flex items-center justify-end px-8 md:px-24 lg:px-32">
        <CinematicText depth className="max-w-3xl text-right flex flex-col items-end">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white/90">
            Bridging AI, engineering &amp;{" "}<br />
            <span
              className="italic font-semibold"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              cinematic interfaces.
            </span>
          </h2>
          <div className="mt-8 w-14 h-[1px] bg-white/25" />
        </CinematicText>
      </div>

      {/* Section 4 — 300–500vh: empty (canvas plays out) */}
      <div className="h-[200vh]" />
    </div>
  );
}
