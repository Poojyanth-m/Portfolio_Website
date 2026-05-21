"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValue, motion } from "framer-motion";
import HeroOverlay from "./HeroOverlay";

const TOTAL_FRAMES = 120;

function getFrameSrc(i: number) {
  return `/sequence/frame_${String(i).padStart(3, "0")}_delay-0.066s.webp`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0); // smooth interpolated frame
  const targetFrameRef = useRef<number>(0);  // scroll-driven target

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Draw a specific frame using object-fit: cover math
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;

    let sw = iw, sh = ih, sx = 0, sy = 0;

    if (imgRatio > canvasRatio) {
      // image is wider — crop sides
      sw = ih * canvasRatio;
      sx = (iw - sw) / 2;
    } else {
      // image is taller — crop top/bottom
      sh = iw / canvasRatio;
      sy = (ih - sh) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  };

  // Resize canvas to match device pixel ratio
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    // canvas CSS size stays 100% via Tailwind
    drawFrame(Math.round(currentFrameRef.current));
  };

  // Main RAF loop — interpolate toward target for silky smoothness
  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const LERP_FACTOR = 0.12; // lower = smoother but slower

    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.1) {
        currentFrameRef.current = lerp(currentFrameRef.current, targetFrameRef.current, LERP_FACTOR);
        drawFrame(Math.round(currentFrameRef.current));
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Update target frame from scroll progress
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      targetFrameRef.current = Math.min(TOTAL_FRAMES - 1, Math.max(0, v * (TOTAL_FRAMES - 1)));
    });
  }, [scrollYProgress]);

  // Preload all frames
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      await Promise.all(
        Array.from({ length: TOTAL_FRAMES }, (_, i) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = getFrameSrc(i);
            img.onload = img.onerror = () => {
              if (mounted) imagesRef.current[i] = img;
              resolve();
            };
          })
        )
      );
      // Draw first frame once loaded
      drawFrame(0);
    };
    load();
    return () => { mounted = false; };
  }, []);

  // Resize handler
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      {/* Sticky fullscreen canvas */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Text overlays — position absolute over the 500vh container */}
      <HeroOverlay />
    </div>
  );
}
