"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  actionText: string;
  href?: string;
  badge?: string;
  meta?: string;
  className?: string;
}

export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(({ title, subtitle, imageUrl, actionText, href, badge, meta, className }, ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height, left, top } = rect;
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "relative h-[30rem] w-full rounded-2xl bg-transparent shadow-2xl",
        className
      )}
    >
      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="absolute inset-3 grid h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] grid-rows-[1fr_auto] rounded-xl shadow-lg"
      >
        {/* Background Image or CSS Fallback */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
          />
        ) : (
          <div className="absolute inset-0 h-full w-full rounded-xl bg-[#080808] overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_14px]" />
            {/* Ambient Glows */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#7df9ff]/10 blur-[80px] rounded-full" />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-black/20 via-black/10 to-black/80" />

        {/* Card Content */}
        <div className="relative flex flex-col justify-between rounded-xl p-5 text-white h-full" style={{ transformStyle: "preserve-3d" }}>

          {/* Header */}
          <div className="flex items-start justify-between" style={{ transformStyle: "preserve-3d" }}>
            <div className="flex flex-col gap-1" style={{ transformStyle: "preserve-3d" }}>
              {badge && (
                <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit" style={{ transform: "translateZ(40px)" }}>
                  {badge}
                </span>
              )}
            </div>
            {href && (
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: "2.5deg" }}
                whileTap={{ scale: 0.9 }}
                style={{ transform: "translateZ(60px)" }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-inset ring-white/30 hover:bg-white/30 transition-colors"
              >
                <ArrowUpRight className="h-4 w-4 text-white" />
              </motion.a>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4" style={{ transformStyle: "preserve-3d" }}>
            <div style={{ transformStyle: "preserve-3d" }}>
              <motion.h2
                style={{ transform: "translateZ(50px)" }}
                className="text-2xl font-bold leading-tight mb-1"
              >
                {title}
              </motion.h2>
              <motion.p
                style={{ transform: "translateZ(40px)" }}
                className="text-sm font-light text-white/70 leading-relaxed"
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Bottom info + button row */}
            <div className="flex items-center justify-between gap-3" style={{ transformStyle: "preserve-3d" }}>
              {meta && (
                <span className="text-xs font-mono text-white/50 tracking-widest uppercase" style={{ transform: "translateZ(30px)" }}>
                  {meta}
                </span>
              )}
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{ transform: "translateZ(60px)" }}
                className="ml-auto text-center text-sm font-semibold text-white bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors px-5 py-2.5 rounded-lg cursor-default select-none"
              >
                {actionText}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

InteractiveTravelCard.displayName = "InteractiveTravelCard";
