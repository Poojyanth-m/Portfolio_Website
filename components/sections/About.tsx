"use client";

import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

const skills = {
  "Languages": ["JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"],
  "Frontend": ["React.js", "React Native", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  "Backend": ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "JWT Authentication", "Microservices"],
  "Mobile": ["React Native (Expo)", "Flutter"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Redis", "Supabase"],
  "AI / ML": ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Matplotlib", "RAG", "Large Language Models", "Natural Language Processing", "Prompt Engineering", "Multi-Agent Systems", "Model Training & Evaluation", "Vector Embeddings"],
  "DevOps & Tools": ["Git", "GitHub", "VS Code", "Docker", "CI/CD", "Postman", "Figma", "Android Studio", "Google Colab", "Jupyter Notebook"]
};

const skillCount = Object.keys(skills).length;

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#121212] py-32 px-8 md:px-16 lg:px-24">
      <div className="w-full">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-white/30" />
            <p className="text-sm tracking-[0.4em] text-white/50 uppercase font-light">The Architect</p>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight max-w-5xl text-white/90">
            CS Engineer specializing in <br />
            <span className="italic font-medium text-white" style={{ textShadow: "0 0 40px rgba(255,255,255,0.2)" }}>
              AI &amp; Machine Learning.
            </span>
          </h2>
        </motion.div>

        {/* Summary - Editorial Layout */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 mb-40">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 leading-[1.4] font-light tracking-tight">
              Computer Science Engineering graduate from{" "}
              <span className="font-medium text-white">Dayananda Sagar University</span>,
              Bengaluru — focused on the intersection of deep tech and elegant user interfaces.
            </p>
          </motion.div>
          <motion.div
            className="md:col-span-5 flex items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
              I have extensive experience designing and shipping{" "}
              <span className="text-white/80">production-grade full stack applications</span> and
              scalable AI-powered platforms. I am deeply passionate about solving high-impact
              problems by bridging complex software engineering with artificial intelligence.
            </p>
          </motion.div>
        </div>

        {/* Technical Arsenal — ScrollStack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-12">
            <p className="text-sm tracking-[0.4em] text-white/50 uppercase font-light">Technical Arsenal</p>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <ScrollStack
            useWindowScroll={true}
            itemDistance={150}
            itemScale={0.03}
            itemStackDistance={20}
            stackPosition="10%"
            scaleEndPosition="5%"
            baseScale={0.82}
            blurAmount={1.2}
            className="w-full max-w-5xl mx-auto"
          >
            {Object.entries(skills).map(([category, items], i) => (
              <ScrollStackItem
                key={category}
                itemClassName="relative bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col overflow-hidden !h-[480px] !rounded-[32px]"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

                {/* Giant watermark number to fill space */}
                <div className="absolute -right-4 -bottom-8 text-[180px] md:text-[240px] font-bold text-white/[0.02] leading-none select-none pointer-events-none tracking-tighter">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Card content */}
                <div className="relative z-10 w-full p-8 md:p-12 h-full flex flex-col">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl md:text-5xl font-light text-white/90 tracking-tight">
                      {category}
                    </h3>
                    <span className="text-xs tracking-[0.3em] text-white/40 uppercase font-mono mt-2 bg-white/[0.05] px-4 py-1.5 rounded-full border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      {String(i + 1).padStart(2, "0")} / {String(skillCount).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.15] to-transparent mb-8" />

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-3 mt-auto mb-auto">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm md:text-[15px] px-4 py-2.5 rounded-xl bg-[#121212]/80 border border-white/[0.08] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:bg-white/[0.08] hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-default flex items-center gap-2.5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </motion.div>

      </div>
    </section>
  );
}
