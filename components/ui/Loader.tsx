"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onLoadComplete: () => void;
}

export default function Loader({ onLoadComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const totalFrames = 120;
      let loadedFrames = 0;

      const promises = Array.from({ length: totalFrames }, (_, i) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          const frameIndex = String(i).padStart(3, "0");
          img.src = `/sequence/frame_${frameIndex}_delay-0.066s.webp`;

          img.onload = () => {
            loadedFrames++;
            setProgress(Math.round((loadedFrames / totalFrames) * 100));
            resolve();
          };

          img.onerror = () => {
            console.error(`Failed to load frame ${frameIndex}`);
            loadedFrames++;
            setProgress(Math.round((loadedFrames / totalFrames) * 100));
            resolve(); // Resolve anyway to not block the loader forever
          };
        });
      });

      await Promise.all(promises);

      // Add a slight delay for cinematic effect
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onLoadComplete, 1000); // Wait for fade out animation
      }, 500);
    };

    preloadImages();
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] text-white"
        >
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-sm font-medium tracking-[0.2em] text-white/70 uppercase">
              Loading Experience
            </h1>
            <div className="relative overflow-hidden w-64 h-[2px] bg-white/10 rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            <p className="text-xs font-mono text-white/50">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
