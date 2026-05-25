"use client";

import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

import {
  SiJavascript, SiPython, SiCplusplus, SiHtml5,
  SiReact, SiAngular, SiNextdotjs, SiTailwindcss, SiFramer, SiBootstrap,
  SiNodedotjs, SiExpress, SiFastapi, SiFlask, SiJsonwebtokens,
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiRedis, SiSupabase,
  SiTensorflow, SiKeras, SiOpencv, SiScikitlearn, SiNumpy, SiPandas,
  SiGit, SiGithub, SiDocker, SiPostman, SiFigma, SiJupyter, SiAndroidstudio, SiGooglecolab, SiExpo, SiFlutter
} from "react-icons/si";
import { TbApi, TbBrain, TbRobot, TbMessageLanguage, TbBrandVscode, TbChartLine, TbChartScatter } from "react-icons/tb";
import { FaServer, FaJava, FaCss3Alt, FaNetworkWired } from "react-icons/fa";
import { GoWorkflow } from "react-icons/go";

const skills = {
  "Languages": {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    description: "Core programming languages I use to build robust, efficient and scalable applications.",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> }
    ]
  },
  "Frontend": {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    description: "Modern frameworks and tools for creating highly interactive and responsive web interfaces.",
    items: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-white" /> }
    ]
  },
  "Backend": {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    description: "Server-side architectures, API design, and robust database management systems.",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { name: "Flask", icon: <SiFlask className="text-white" /> },
      { name: "REST APIs", icon: <TbApi className="text-white/70" /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens className="text-[#d63aff]" /> },
      { name: "Microservices", icon: <FaServer className="text-white/70" /> }
    ]
  },
  "Mobile": {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    description: "Cross-platform mobile application development for iOS and Android.",
    items: [
      { name: "React Native (Expo)", icon: <SiExpo className="text-white" /> },
      { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> }
    ]
  },
  "Databases": {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    description: "Scalable data storage solutions spanning relational and NoSQL databases.",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase Firestore", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> }
    ]
  },
  "AI / ML": {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
    description: "Designing intelligent systems, training models, and building multi-agent workflows.",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "Keras", icon: <SiKeras className="text-[#D00000]" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-[#5C3EE8]" /> },
      { name: "NumPy", icon: <SiNumpy className="text-[#4DABCF]" /> },
      { name: "Pandas", icon: <SiPandas className="text-white" /> },
      { name: "RAG", icon: <TbBrain className="text-white/70" /> },
      { name: "Large Language Models", icon: <TbRobot className="text-white/70" /> },
      { name: "Natural Language Processing", icon: <TbMessageLanguage className="text-white/70" /> },
      { name: "Prompt Engineering", icon: <TbBrain className="text-white/70" /> },
      { name: "Multi-Agent Systems", icon: <FaNetworkWired className="text-white/70" /> },
      { name: "Vector Embeddings", icon: <TbApi className="text-white/70" /> }
    ]
  },
  "DevOps & Tools": {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    description: "Version control, containerization, and continuous integration pipelines.",
    items: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "CI/CD", icon: <GoWorkflow className="text-white/70" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="text-[#3DDC84]" /> },
      { name: "Google Colab", icon: <SiGooglecolab className="text-[#F9AB00]" /> },
      { name: "Jupyter Notebook", icon: <SiJupyter className="text-[#F37626]" /> }
    ]
  }
};

const skillCount = Object.keys(skills).length;

export default function About() {
  return (
    <section id="about" className="relative z-20 overflow-hidden">

      {/* ─── Hero Bio Strip ─── */}
      <div className="relative min-h-screen flex flex-col md:flex-row items-stretch">

        {/* Cinematic Noise */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Subtle noise grain for filmic texture */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Left: Full-height image column */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full md:w-[50%] lg:w-[48%] flex-shrink-0 min-h-[60vh] md:min-h-[85vh] z-10"
        >
          <img
            src="/images/about_me.png"
            alt="Poojyanth M."
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              maskImage: "linear-gradient(to right, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          {/* Seamless blending gradients to match the #050505 background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Right: Editorial floating text column */}
        <div className="relative flex-1 flex flex-col justify-center px-8 md:pl-10 lg:pl-16 md:pr-16 lg:pr-24 pb-24 md:pb-32 pt-8 md:pt-20 z-20">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 20, skewY: 2, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, skewY: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-medium whitespace-nowrap">THE ARCHITECT</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50, skewY: 4, scale: 0.95, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, skewY: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Poojyanth <span className="italic text-white/90">M.</span>
          </motion.h2>

          {/* Headline Copy */}
          <motion.p
            initial={{ opacity: 0, y: 40, skewY: 2, scale: 0.98, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, skewY: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl font-light text-white/90 leading-[1.6] max-w-xl mb-10"
          >Balancing AI models, deadlines, and gym sessions.
          </motion.p>

          {/* Body Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40, skewY: 2, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, skewY: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 text-[15px] font-light text-white/40 leading-[2.1] max-w-xl"
          >
            <p>
              From full stack platforms to AI-powered systems, I enjoy turning complex engineering into experiences that actually feel exciting to use.
            </p>
            <p>
              My work combines scalable backend systems, AI-powered workflows, and modern application development with a focus on execution and impact.
            </p>
          </motion.div>

          {/* Horizontal Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-white/10 to-transparent my-10 origin-left"
          />

          {/* Metadata Section - 3 Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30, skewY: 1, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, skewY: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-start gap-8 md:gap-0 max-w-3xl"
          >
            {/* Stat 1 */}
            <div className="flex-1 flex flex-col items-start gap-2.5 md:pr-6">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span className="text-[13.5px] font-medium text-white/90 tracking-wide">Full Stack Engineering</span>
              </div>
              <span className="text-[12px] text-white/40 font-light leading-[1.6]">Building robust, maintainable and scalable web platforms.</span>
            </div>

            {/* Stat 2 */}
            <div className="flex-1 flex flex-col items-start gap-2.5 md:border-l md:border-white/5 md:px-6">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                </svg>
                <span className="text-[13.5px] font-medium text-white/90 tracking-wide">AI & Automation</span>
              </div>
              <span className="text-[12px] text-white/40 font-light leading-[1.6]">Designing intelligent systems, agents and automation workflows.</span>
            </div>

            {/* Stat 3 */}
            <div className="flex-1 flex flex-col items-start gap-2.5 md:border-l md:border-white/5 md:pl-6">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span className="text-[13.5px] font-medium text-white/90 tracking-wide">Product Development</span>
              </div>
              <span className="text-[12px] text-white/40 font-light leading-[1.6]">Crafting high-performance apps with focus on experience.</span>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Technical Arsenal — ScrollStack */}
      <div className="w-full pb-32 pt-8 md:pt-16">
        <div className="flex items-center justify-center gap-6 mb-8 px-8 md:px-16 lg:px-24">
            <div className="w-12 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-white" />
            <p className="text-sm md:text-base tracking-[0.4em] text-white uppercase font-light text-center whitespace-nowrap">Core Technologies</p>
            <div className="w-12 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-white" />
          </div>

          <ScrollStack
            useWindowScroll={true}
            itemDistance={120}
            itemScale={0.03}
            itemStackDistance={20}
            stackPosition="12%"
            scaleEndPosition="5%"
            baseScale={0.82}
            blurAmount={1.2}
            className="w-full"
          >
            {Object.entries(skills).map(([category, data], i) => (
              <ScrollStackItem
                key={category}
                itemClassName="relative bg-[#111111] border border-white/[0.07] flex flex-col overflow-hidden !h-[520px] !rounded-[28px] !mx-auto !w-full !max-w-4xl"
              >
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                {/* Card content */}
                <div className="relative z-10 w-full p-10 h-full flex flex-col">

                  {/* Top left 01 */}
                  <span className="text-[11px] font-mono tracking-widest text-white/40 mb-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Header row: Icon, Title, Description */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-10">

                    {/* Icon Box */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl border border-[#d97757]/20 bg-[#d97757]/[0.03] flex items-center justify-center">
                      {data.icon}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 flex-1">
                      <h3 className="text-3xl md:text-4xl font-light text-white/90 tracking-tight whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {category}
                      </h3>
                      <p className="text-[14px] font-light text-white/50 leading-relaxed max-w-sm">
                        {data.description}
                      </p>
                    </div>

                  </div>

                  {/* Subtle Divider */}
                  <div className="w-full h-[1px] bg-white/[0.05] mb-6" />

                  {/* Skill chips (Pills) — scrollable if overflow */}
                  <div className="flex flex-wrap gap-2.5 overflow-y-auto" style={{ maxHeight: '200px', scrollbarWidth: 'none' }}>
                    {data.items.map((skill) => (
                      <span
                        key={skill.name}
                        className="text-[13px] md:text-[14px] px-4 py-2 rounded-full bg-transparent border border-white/10 text-white/70 hover:bg-white/[0.05] hover:border-white/20 hover:text-white transition-all duration-300 flex items-center gap-2.5"
                      >
                        <div className="flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                          {skill.icon}
                        </div>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
      </div>

    </section>
  );
}
