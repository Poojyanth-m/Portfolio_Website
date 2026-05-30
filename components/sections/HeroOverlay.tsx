"use client";

import { motion, useTransform } from "framer-motion";
import { MotionValue } from "framer-motion";
import { Pinyon_Script } from "next/font/google";

const signatureFont = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // --- SECTION 1: Name & Title ---
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -80]);

  // --- SECTION 2: "Building products..." ---
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1.05]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.4], [80, -80]);

  // --- SECTION 3: "Because great engineering..." ---
  const opacity3 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.35, 0.65], [0.9, 1.05]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.65], [80, -80]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">

      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">

        {/* Section 1 — Name & Title */}
        <motion.div
          style={{ opacity: opacity1, scale: scale1, y: y1, willChange: "transform, opacity" }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
        >
          <h1
            className={`leading-none ${signatureFont.className}`}
            style={{
              fontSize: "clamp(1.8rem, 9.5vw, 10rem)",
              textShadow: "0 0 60px rgba(255,255,255,0.15)",
            }}
          >
            Poojyanth M.
          </h1>

          {/* Desktop subtitle — single line */}
          <p className="hidden sm:block text-xs sm:text-sm tracking-[0.45em] text-white/80 uppercase font-light mt-6">
            Full Stack Developer &nbsp;·&nbsp; AI & ML Engineer &nbsp;·&nbsp; React & React Native
          </p>

          {/* Mobile subtitle — stacked, tighter tracking */}
          <div className="flex sm:hidden flex-col items-center gap-1.5 mt-4">
            <span className="text-[10px] tracking-[0.18em] text-white/65 uppercase font-light">Full Stack Developer</span>
            <span className="text-[10px] tracking-[0.18em] text-white/65 uppercase font-light">AI & ML Engineer</span>
            <span className="text-[10px] tracking-[0.18em] text-white/65 uppercase font-light">React & React Native</span>
          </div>
        </motion.div>

        {/* Section 2 — Statement */}
        <motion.div
          style={{ opacity: opacity2, scale: scale2, y: y2, willChange: "transform, opacity" }}
          className="absolute inset-0 flex items-center justify-start px-6 sm:px-8 md:px-24 lg:px-32"
        >
          <div className="w-full max-w-2xl text-left">
            <h2
              className="font-semibold leading-[1.15] tracking-tight text-white"
              style={{ fontSize: "clamp(1.5rem, 5vw, 3.75rem)" }}
            >
              Building products that hide complexity behind simplicity.
            </h2>
            <div className="mt-6 w-10 h-[1px] bg-white/25" />
          </div>
        </motion.div>

        {/* Section 3 — Manifesto */}
        <motion.div
          style={{ opacity: opacity3, scale: scale3, y: y3, willChange: "transform, opacity" }}
          className="absolute inset-0 flex items-center justify-end px-6 sm:px-8 md:px-24 lg:px-32"
        >
          <div className="w-full max-w-3xl text-right flex flex-col items-end">
            <h2
              className="font-semibold leading-[1.2] tracking-tight text-white/90"
              style={{ fontSize: "clamp(1.25rem, 4.5vw, 3rem)" }}
            >
              Because great engineering
              <br />
              <span
                className="italic"
                style={{
                  backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,1))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                should feel invisible.
              </span>
            </h2>
            <div className="mt-6 w-10 h-[1px] bg-white/25" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
