"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineRow key={index} item={item} index={index} />
        ))}

        {/* Centered vertical line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent overflow-hidden"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-white/60 via-white/30 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

function TimelineRow({
  item,
  index,
}: {
  item: TimelineEntry;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start mb-16 md:mb-24">
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[calc(50%-28px)] pr-8 flex flex-col items-end text-right"
      >
        {isLeft ? (
          <>
            <span className="text-xs font-mono tracking-[0.25em] text-white/35 uppercase mb-2">
              {item.title}
            </span>
            <div className="w-full">{item.content}</div>
          </>
        ) : (
          <div className="opacity-0 pointer-events-none" aria-hidden>
            {/* spacer */}
          </div>
        )}
      </motion.div>

      {/* Centre dot */}
      <div className="flex-shrink-0 w-14 flex flex-col items-center z-10">
        <div className="w-4 h-4 rounded-full bg-white/20 border-2 border-white/50 shadow-[0_0_12px_rgba(255,255,255,0.25)] mt-1" />
      </div>

      {/* Right column */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[calc(50%-28px)] pl-8 flex flex-col items-start text-left"
      >
        {!isLeft ? (
          <>
            <span className="text-xs font-mono tracking-[0.25em] text-white/35 uppercase mb-2">
              {item.title}
            </span>
            <div className="w-full">{item.content}</div>
          </>
        ) : (
          <div className="opacity-0 pointer-events-none" aria-hidden>
            {/* spacer */}
          </div>
        )}
      </motion.div>
    </div>
  );
}
