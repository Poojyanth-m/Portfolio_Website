"use client";

import { motion } from "framer-motion";
import { InteractiveTravelCard } from "@/components/ui/3d-card";
import MagicBento from "@/components/ui/MagicBento";

const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    institution: "Dayananda Sagar University, Bengaluru",
    period: "2022 – 2026",
    badge: "Current",
    actionText: "AI & ML Specialization",
    href: "https://www.dsu.edu.in/",
    image: "/Educational/Dayananda_Sagar_University.png",
    tagline: "Where engineering met creativity",
  },
  {
    degree: "Pre-University College (PUC)",
    institution: "Anantha PU College, Arsikere",
    period: "2020 – 2022",
    badge: "Completed",
    actionText: "Science Stream",
    href: undefined,
    image: "/Educational/Anantha_Pu_college.png",
    tagline: "The beginning of analytical thinking",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Anantha International School, Arsikere",
    period: "2020",
    badge: "Completed",
    actionText: "ICSE Board",
    href: undefined,
    image: "/Educational/Anantha_International_School.jpeg",
    tagline: "Curiosity started here",
  },
];

const certData = [
  {
    title: "Crash Course on Python",
    description: "Programming fundamentals and automation via Python",
    label: "Google",
    imageUrl: "/certifications/crash_course_on_python.png"
  },
  {
    title: "Solutions Architecture",
    description: "Job simulation covering cloud computing and AWS services",
    label: "AWS",
    imageUrl: "/certifications/Solutions_Architecture_Job_Simulation.png"
  },
  {
    title: "JS Algorithms & Data Structures",
    description: "Algorithmic problem solving and data structure optimization",
    label: "freeCodeCamp",
    imageUrl: "/certifications/Legacy_JS_Algorithms_and_DS.png"
  },
  {
    title: "Frontend for Java Full Stack",
    description: "Frontend architecture and UI development principles",
    label: "Coursera",
    imageUrl: "/certifications/Frontend_for_Java_FullStack_Development.png"
  },
  {
    title: "API Fundamentals",
    description: "Student Expert Certification in API design and testing",
    label: "Postman",
    imageUrl: "/certifications/API_Fundamentals.png"
  },
  {
    title: "Practical GitHub Actions",
    description: "CI/CD workflows, automation, and deployment pipelines",
    label: "LinkedIn",
    imageUrl: "/certifications/Practical_github_actions.png"
  }
];

export default function Education() {
  return (
    <section id="education" className="relative z-20 bg-[#0e0e0e] pt-16 pb-32 px-8 md:px-16 lg:px-24">
      <div className="w-full">

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">Academia</p>
          <h2 className="text-5xl md:text-6xl font-extralight mb-16">Education</h2>

          {/* 3D Cards Grid — perspective wrapper is required */}
          <div className="grid md:grid-cols-3 gap-8 w-full" style={{ perspective: "1200px" }}>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <InteractiveTravelCard
                  title={edu.degree}
                  subtitle={edu.institution}
                  imageUrl={edu.image}
                  actionText={edu.actionText}
                  href={edu.href}
                  badge={edu.badge}
                  meta={edu.period}
                  tagline={edu.tagline}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="w-full h-[1px] bg-white/10 mb-16" />
          <p className="text-sm md:text-base tracking-[0.4em] text-white uppercase font-light text-center whitespace-nowrap mb-8">Certifications</p>
          <div className="w-full flex justify-center">
            <MagicBento
              cards={certData}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="125, 249, 255"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
