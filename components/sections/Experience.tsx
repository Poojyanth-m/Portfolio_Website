"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import BorderGlow from "@/components/ui/BorderGlow";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Aditya Birla Group",
    project: "Pramaan — AI Performance Evaluation Platform",
    period: "2025",
    tags: ["React", "FastAPI", "AI Scoring", "Enterprise Dashboard"],
    description:
      "Contributed to Pramaan — an enterprise-scale AI-powered performance evaluation platform processing review workflows for 28,000+ employees. Built scalable backend/frontend workflows, AI-powered scoring systems, SMART & VOOT goal evaluation modules, and document-processing orchestration pipelines.",
  },
  {
    role: "AI & Full Stack Developer",
    company: "Divum Corporate Services",
    project: "AI Studio — Agentic AI Platform",
    period: "2026",
    tags: ["Multi-Agent Systems", "LLMs", "FastAPI", "Axis Bank"],
    description:
      "Worked on an agentic AI platform for building intelligent 'Minds' using multi-agent systems. Built AI agents for Axis Bank Mutual Funds workflows, automated SMS communication, and AI voice-agent customer outcome capture. Designed composable AI execution pipelines with orchestration operators.",
  },
  {
    role: "Full Stack Developer",
    company: "Divum Corporate Services",
    project: "IZBA Enterprise Platform",
    period: "2026",
    tags: ["Node.js", "React", "REST APIs", "Agile"],
    description:
      "Contributed to enterprise-level assessment platform features — building scalable backend APIs and frontend workflows. Integrated APIs, implemented feature enhancements, and resolved performance bottlenecks across sprint-based delivery cycles.",
  },
  {
    role: "Full Stack Developer",
    company: "Daily Thanthi",
    project: "Daily Thanthi Digital Platform",
    period: "2026",
    tags: ["React", "Tamil NLP", "Text-to-Speech", "Accessibility"],
    description:
      "Replicated the complete Daily Thanthi digital platform UI with a highly accurate, responsive frontend. Implemented text-to-speech workflows for dynamically converting Tamil news content into audio playback for enhanced accessibility.",
  },
];

/** Card rendered inside each timeline row */
function ExperienceCard({
  exp,
  align,
}: {
  exp: (typeof experiences)[number];
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full"
    >
      <BorderGlow
        className="w-full h-full p-8 text-left transition-colors duration-500"
        backgroundColor="#101010"
        edgeSensitivity={40}
        glowColor="0 0 100"
        colors={['#ffffff', '#a3a3a3', '#525252']}
        animated={false}
        borderRadius={20}
      >
        <div className="flex flex-col h-full gap-6">
          {/* Header */}
          <div>
            <h3 className="text-xl md:text-2xl font-light text-white tracking-wide mb-2">
              {exp.role}
            </h3>
            <p className="text-sm text-white/50 font-medium mb-1">{exp.company}</p>
            <p className="text-xs text-white/35 italic">{exp.project}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-white/60 font-light leading-relaxed">
            {exp.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 text-white/50 tracking-wider font-medium bg-white/[0.02]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

export default function Experience() {
  // Build timeline data — title is the year, content is the card
  const timelineData = experiences.map((exp, i) => ({
    title: exp.period,
    content: (
      <ExperienceCard exp={exp} align={i % 2 === 0 ? "left" : "right"} />
    ),
  }));

  return (
    <section id="experience" className="bg-[#0e0e0e] pt-32 pb-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
            Where I&apos;ve worked
          </p>
          <h2 className="text-5xl md:text-6xl font-extralight">Experience</h2>
        </motion.div>

        {/* Centered timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
