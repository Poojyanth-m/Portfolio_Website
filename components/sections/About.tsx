"use client";

import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { 
  Code2, 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  BrainCircuit, 
  Wrench 
} from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    description: "Core programming languages for building robust, high-performance software systems.",
    items: ["JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    icon: Layout,
    description: "Architecting interactive, pixel-perfect user interfaces with modern web frameworks.",
    items: ["React.js", "React Native", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Server,
    description: "Designing scalable microservices, RESTful APIs, and secure authentication flows.",
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "JWT Authentication", "Microservices"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    description: "Developing cross-platform mobile applications with native-like performance.",
    items: ["React Native (Expo)", "Flutter"]
  },
  {
    category: "Databases",
    icon: Database,
    description: "Managing relational and NoSQL databases for high availability and efficient data retrieval.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Redis", "Supabase"]
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    description: "Engineering intelligent systems, training models, and integrating advanced language models.",
    items: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Matplotlib", "RAG", "Large Language Models", "Natural Language Processing", "Prompt Engineering", "Multi-Agent Systems", "Model Training & Evaluation", "Vector Embeddings"]
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    description: "Streamlining development workflows with containerization, CI/CD pipelines, and version control.",
    items: ["Git", "GitHub", "VS Code", "Docker", "CI/CD", "Postman", "Figma", "Android Studio", "Google Colab", "Jupyter Notebook"]
  }
];

const skillCount = skills.length;

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#121212] py-32 px-4 md:px-16 lg:px-24">
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
            itemScale={0.04}
            itemStackDistance={30}
            stackPosition="18%"
            scaleEndPosition="10%"
            baseScale={0.88}
            blurAmount={1.5}
            className="w-full max-w-5xl mx-auto"
          >
            {skills.map((skillGroup, i) => {
              const Icon = skillGroup.icon;
              return (
                <ScrollStackItem
                  key={skillGroup.category}
                  itemClassName="bg-[#0a0a0a] border border-white/[0.08] shadow-[0_-4px_40px_rgba(0,0,0,0.8)] flex flex-col justify-center h-auto min-h-[420px] overflow-hidden group"
                >
                  {/* Subtle animated inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent rounded-[40px] opacity-100 transition-opacity duration-500" />
                  
                  {/* Giant faint watermark icon */}
                  <div className="absolute -right-8 -bottom-8 text-white/[0.02] transform rotate-[-15deg] transition-transform duration-700 group-hover:scale-110 group-hover:text-white/[0.04] pointer-events-none">
                    <Icon size={340} strokeWidth={1} />
                  </div>

                  {/* Card content */}
                  <div className="relative z-10 w-full h-full flex flex-col pt-2">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-start md:items-center gap-5 flex-col md:flex-row">
                        <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.1] shrink-0">
                          <Icon className="w-8 h-8 text-white/80" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-2">
                            {skillGroup.category}
                          </h3>
                          <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                            {skillGroup.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs tracking-[0.3em] text-white/20 uppercase font-mono mt-2 hidden sm:block shrink-0">
                        {String(i + 1).padStart(2, "0")} / {String(skillCount).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.1] to-transparent mb-8" />

                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-[13px] px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 tracking-wide hover:bg-white/[0.08] hover:text-white hover:border-white/30 transition-all duration-300 cursor-default shadow-sm backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </motion.div>

      </div>
    </section>
  );
}
