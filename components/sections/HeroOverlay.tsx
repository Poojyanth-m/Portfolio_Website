"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Pinyon_Script } from "next/font/google";
import { useRef } from "react";

// Same signature font as the navbar logo — consistent brand identity
const signatureFont = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
});

import { MotionValue } from "framer-motion";

export default function HeroOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // --- SECTION 1: Name & Title (0 to 100vh) ---
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const blur1 = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(12px)"]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -150]);

  // --- SECTION 2: "Building products..." (100vh to 200vh) ---
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1.05]);
  const blur2 = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.4], [150, -150]);

  // --- SECTION 3: "Because great engineering..." (200vh to 300vh) ---
  const opacity3 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.35, 0.65], [0.9, 1.05]);
  const blur3 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.65], [150, -150]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">

      {/* Sticky container ensures text stays fixed on screen and only scales/fades in place */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">

        {/* Section 1 — Name & Title */}
        <motion.div
          style={{ opacity: opacity1, scale: scale1, filter: blur1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <h1
            className={`text-7xl sm:text-9xl md:text-[10rem] leading-none mb-4 ${signatureFont.className}`}
            style={{ textShadow: "0 0 60px rgba(255,255,255,0.15)" }}
          >
            Poojyanth M.
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.45em] text-white/80 uppercase font-light mt-6">
            Full Stack Developer &nbsp;·&nbsp; AI & ML Engineer &nbsp;·&nbsp; React & React Native
          </p>
        </motion.div>

        {/* Section 2 — Statement */}
        <motion.div
          style={{ opacity: opacity2, scale: scale2, filter: blur2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-24 lg:px-32"
        >
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-white">
              Building products that hide complexity behind simplicity.
            </h2>
            <div className="mt-8 w-14 h-[1px] bg-white/25" />
          </div>
        </motion.div>

        {/* Section 3 — Manifesto */}
        <motion.div
          style={{ opacity: opacity3, scale: scale3, filter: blur3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end px-8 md:px-24 lg:px-32"
        >
          <div className="max-w-3xl text-right flex flex-col items-end">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white/90">
              Because great engineering<br />
              <span
                className="italic font-semibold"
                style={{
                  backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,1))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                should feel invisible.
              </span>
            </h2>
            <div className="mt-8 w-14 h-[1px] bg-white/25" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
