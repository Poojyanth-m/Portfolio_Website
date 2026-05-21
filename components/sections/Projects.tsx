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
    <section id="work" className="relative z-20 bg-[#121212] py-32 px-4 md:px-16 lg:px-24">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">What I&apos;ve built</p>
          <h2 className="text-5xl md:text-6xl font-extralight">Selected Work</h2>
        </motion.div>

        {/* Flowing Menu Component */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[45vh] md:h-[55vh] min-h-[400px] border-y border-white/10"
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
