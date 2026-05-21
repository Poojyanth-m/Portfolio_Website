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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0e0e]"
        >
          <style>{`
            .uiverse-loader {
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              cursor: not-allowed;
              scale: 0.7;
            }
            .uiverse-central {
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              width: 10em;
              height: 10em;
              border-radius: 50%;
              box-shadow: 0.5em 1em 1em red,
                -0.5em 0.5em 1em orange,
                0.5em -0.5em 1em orangered,
                -0.5em -0.5em 1em yellow;
            }
            .uiverse-external-shadow {
              width: 10em;
              height: 10em;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              box-shadow: 0.5em 0.5em 3em red,
                -0.5em 0.5em 3em orange,
                0.5em -0.5em 3em orangered,
                -0.5em -0.5em 3em yellow;
              z-index: 99;
              animation: uiverse-rotate 3s linear infinite;
              background-color: #212121;
            }
            .uiverse-intern {
              position: absolute;
              color: white;
              z-index: 999;
              font-family: monospace;
              font-size: 1.5rem;
              font-weight: bold;
              text-shadow: 0 0 10px rgba(255,255,255,0.5);
            }
            @keyframes uiverse-rotate {
              0% { transform: rotate(0deg); }
              50% { transform: rotate(180deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          
          <div className="uiverse-loader">
            <div className="uiverse-intern">{progress}%</div>
            <div className="uiverse-external-shadow">
              <div className="uiverse-central"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
