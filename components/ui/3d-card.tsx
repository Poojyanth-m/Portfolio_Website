"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
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
  tagline?: string;
  className?: string;
}

export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(({ title, subtitle, imageUrl, actionText, href, badge, meta, tagline, className }, ref) => {
  return (
    <motion.div
      ref={ref}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "relative w-full rounded-2xl group cursor-default",
        className
      )}
    >
      {/* Glow ring on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="relative flex flex-col rounded-2xl overflow-hidden border border-white/8 shadow-2xl"
      >
        {/* Image Section — full bleed, fixed height */}
        <div className="relative w-full h-64 overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#0e0e0e]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>
          )}
          {/* Subtle bottom fade so image blends into the info panel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />

          {/* Period pill — top right, floating above image */}
          {meta && (
            <motion.span
              style={{ transform: "translateZ(60px)" }}
              className="absolute top-4 right-4 text-[10px] font-mono tracking-[0.25em] uppercase text-white/70 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full"
            >
              {meta}
            </motion.span>
          )}
        </div>

        {/* Info Panel — frosted glass, consistent across all 3 */}
        <motion.div
          style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
          className="relative bg-[#0d0d0d] border-t border-white/8 px-6 py-5 flex flex-col gap-4"
        >
          {/* Institution + Degree */}
          <div className="flex flex-col gap-1">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
              {subtitle}
            </p>
            <h3 className="text-xl font-light text-white/95 leading-snug tracking-tight">
              {title}
            </h3>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/8" />

          {/* Tagline & Badge */}
          <div className="flex items-center justify-between gap-3">
            {tagline ? (
              <div className="flex items-center gap-2">
                <Quote className="w-3 h-3 text-white/50 flex-shrink-0" />
                <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/50 font-light mt-[1px]">
                  {tagline}
                </p>
              </div>
            ) : (
              <span className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7df9ff]/50 inline-block" />
                Focus Area
              </span>
            )}
            
            <motion.span
              whileHover={{ scale: 1.04 }}
              style={{ transform: "translateZ(20px)" }}
              className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-light text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 px-3 sm:px-4 py-2 rounded-full cursor-default flex-shrink-0"
            >
              {actionText}
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

InteractiveTravelCard.displayName = "InteractiveTravelCard";
