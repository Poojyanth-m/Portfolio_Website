"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "AI Urban Mobility Platform",
    description:
      "Production-grade smart city platform for Bengaluru with real-time dashboards, cross-platform mobile apps, XGBoost PM2.5 prediction, T-GCN traffic forecasting, and pollution-aware routing using OpenStreetMap and Redis.",
    stack: ["React.js", "React Native", "Node.js", "PostgreSQL", "Redis", "FastAPI", "XGBoost", "T-GCN"],
    type: "Full Stack · AI/ML",
  },
  {
    index: "02",
    title: "SpotIt — Lost & Found Portal",
    description:
      "Cross-platform Lost & Found platform with real-time Firebase synchronization. QR/barcode-based pre-registration, reward-based claiming, identity verification, and intelligent item tracking workflows.",
    stack: ["Flutter", "Firebase Firestore", "Firebase Storage", "QR Systems"],
    type: "Mobile · Full Stack",
  },
  {
    index: "03",
    title: "Simple-RAG Application",
    description:
      "Retrieval-Augmented Generation pipeline integrating vector embeddings, semantic document retrieval, and LLM-powered contextual response generation. Exploring embedding-based similarity retrieval for context-aware AI responses.",
    stack: ["Python", "FastAPI", "Vector Embeddings", "LLM Integration"],
    type: "AI · Backend",
  },
  {
    index: "04",
    title: "Travel Assistant Chatbot",
    description:
      "NLP-based intelligent travel assistant chatbot with React.js frontend providing personalized travel recommendations and real-time conversational query handling.",
    stack: ["Python", "NLP", "React.js"],
    type: "AI · Frontend",
  },
  {
    index: "05",
    title: "Flood Detection & Prediction System",
    description:
      "Flood detection and early-warning prediction system using environmental datasets and OpenCV-based image analysis, supporting disaster management decision workflows.",
    stack: ["Python", "Machine Learning", "OpenCV"],
    type: "AI · Computer Vision",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative z-20 bg-[#121212] py-32 px-8 md:px-16 lg:px-24">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">What I&apos;ve built</p>
          <h2 className="text-5xl md:text-6xl font-extralight">Selected Work</h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-white/8 py-10 md:py-12 flex flex-col md:flex-row md:items-start gap-6 hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              {/* Index */}
              <span className="text-xs font-mono text-white/25 w-10 shrink-0 mt-1">{project.index}</span>

              {/* Main */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs text-white/40 mb-2 font-light">{project.type}</p>
                    <h3 className="text-2xl md:text-3xl font-light group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 group-hover:text-black transition-colors duration-500" />
                  </div>
                </div>
                <p className="text-white/50 leading-relaxed font-light max-w-2xl mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
