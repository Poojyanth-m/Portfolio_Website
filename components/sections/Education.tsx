"use client";

import { motion } from "framer-motion";

const certs = [
  "Google — Crash Course on Python",
  "AWS — Solutions Architecture Job Simulation",
  "freeCodeCamp — JavaScript Algorithms & Data Structures",
  "Coursera — Frontend for Java Full Stack Development",
  "LinkedIn Learning — Practical GitHub Actions",
  "Postman — API Fundamentals Student Expert",
  "TCS iON — Career Edge",
];

const education = [
  {
    degree: "B.Tech — Computer Science Engineering (AI & ML Specialization)",
    institution: "Dayananda Sagar University, Bengaluru",
    period: "2022 – 2026",
  },
  {
    degree: "Pre-University College (PUC)",
    institution: "Anantha PU College, Arsikere",
    period: "2020 – 2022",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Anantha International School, Arsikere",
    period: "2020",
  },
];

export default function Education() {
  return (
    <section className="relative z-20 bg-[#0e0e0e] py-32 px-8 md:px-16 lg:px-24">
      <div className="w-full">

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">Academia</p>
          <h2 className="text-5xl md:text-6xl font-extralight mb-16">Education</h2>

          <div className="space-y-0">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/8 py-8 grid md:grid-cols-[200px_1fr] gap-4"
              >
                <p className="text-xs font-mono text-white/40">{edu.period}</p>
                <div>
                  <h3 className="text-lg font-light text-white/90 mb-1">{edu.degree}</h3>
                  <p className="text-sm text-white/40">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full h-[1px] bg-white/8 mb-16" />
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-12">Credentials</p>
          <div className="flex flex-wrap gap-3">
            {certs.map((cert, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm px-4 py-2 rounded-full border border-white/10 text-white/50 hover:border-white/25 hover:text-white/80 transition-all duration-300 cursor-default"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
