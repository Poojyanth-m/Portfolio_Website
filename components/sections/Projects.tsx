"use client";

import { motion } from "framer-motion";
import FlowingMenu from "@/components/ui/FlowingMenu";

const projectItems = [
  { link: "", text: "AI Urban Mobility Platform", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop" },
  { link: "", text: "SpotIt Lost & Found", image: "/images/spotit.png" },
  { link: "https://github.com/Poojyanth-m/Simple-RAG", text: "Simple-RAG Application", image: "/images/rag.png" },
  { link: "https://github.com/Poojyanth-m/Travel-Assistant-Chatbot", text: "Travel Assistant Chatbot", image: "/images/travel_assistant.png" },
  { link: "https://github.com/Poojyanth-m/Flood-Detection-and-Prediction", text: "Flood Detection System", image: "/images/flood.png" },
];

export default function Projects() {
  return (
    <section id="work" className="relative z-20 bg-[#121212] pt-16 pb-16 px-4 md:px-16 lg:px-24">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-24 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">What I&apos;ve built</p>
          <h2 className="text-5xl md:text-6xl font-extralight">Selected Work</h2>
        </motion.div>

        {/* ── Mobile: touch-friendly project list ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden border-y border-white/10 divide-y divide-white/10"
        >
          {projectItems.map((item, i) => {
            const isLink = Boolean(item.link);
            const Tag = isLink ? "a" : "div";
            const linkProps = isLink
              ? { href: item.link, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <Tag
                key={i}
                {...linkProps}
                className="flex items-center gap-4 px-4 py-4 active:bg-white/[0.04] transition-colors"
              >
                <span className="text-[10px] font-mono text-white/30 tracking-wider w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="w-14 h-10 rounded-lg flex-shrink-0 bg-cover bg-center bg-white/5"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <span className="flex-1 min-w-0 text-[13px] font-semibold uppercase tracking-wide text-white/90 leading-tight">
                  {item.text}
                </span>
                {isLink && (
                  <svg className="w-4 h-4 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </Tag>
            );
          })}
        </motion.div>

        {/* ── Desktop: hover-driven FlowingMenu ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block w-full h-[55vh] min-h-[400px] border-y border-white/10"
        >
          <FlowingMenu
            items={projectItems}
            bgColor="#121212"
            textColor="#ffffff"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#121212"
            borderColor="rgba(255,255,255,0.08)"
          />
        </motion.div>
      </div>
    </section>
  );
}
