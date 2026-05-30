"use client";

import { useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";
import HeroOverlay from "./HeroOverlay";
import SplashCursor from "@/components/ui/SplashCursor";

const TOTAL_FRAMES = 120;

function getFrameSrc(i: number) {
  return `/sequence/frame_${String(i).padStart(3, "0")}_delay-0.066s.webp`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);

  // Use a motion value so HeroOverlay still gets scroll progress
  const scrollYProgress = useMotionValue(0);

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
      sw = ih * canvasRatio;
      sx = (iw - sw) / 2;
    } else {
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
    drawFrame(Math.round(currentFrameRef.current));
  };

  // Main RAF loop — snap directly to target frame, no lerp lag
  useEffect(() => {
    const loop = () => {
      const target = Math.round(targetFrameRef.current);
      if (target !== Math.round(currentFrameRef.current)) {
        currentFrameRef.current = target;
        drawFrame(target);
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Drive scroll progress directly from native scroll events — no Lenis dependency
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // progress 0→1 as container scrolls from top to bottom of viewport
      const scrolled = -rect.top;
      const total = containerHeight - viewportHeight;
      const progress = Math.min(1, Math.max(0, scrolled / total));

      scrollYProgress.set(progress);
      targetFrameRef.current = Math.min(TOTAL_FRAMES - 1, Math.max(0, progress * (TOTAL_FRAMES - 1)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
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
        <SplashCursor
          SIM_RESOLUTION={64}
          DYE_RESOLUTION={1024}
          PRESSURE_ITERATIONS={15}
          COLOR="#ffffff"
          RAINBOW_MODE={false}
        />
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Text overlays */}
      <HeroOverlay scrollYProgress={scrollYProgress} />
    </div>
  );
}
