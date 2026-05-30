"use client";

import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import BorderGlow from "@/components/ui/BorderGlow";

import {
  SiJavascript, SiPython, SiCplusplus, SiHtml5,
  SiReact, SiAngular, SiNextdotjs, SiTailwindcss, SiFramer, SiBootstrap,
  SiNodedotjs, SiExpress, SiFastapi, SiFlask, SiJsonwebtokens,
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiRedis, SiSupabase,
  SiTensorflow, SiKeras, SiOpencv, SiScikitlearn, SiNumpy, SiPandas,
  SiGit, SiGithub, SiDocker, SiPostman, SiFigma, SiJupyter, SiAndroidstudio, SiGooglecolab, SiExpo, SiFlutter
} from "react-icons/si";
import { TbApi, TbBrain, TbRobot, TbMessageLanguage, TbBrandVscode, TbChartLine, TbChartScatter, TbCode, TbLayout, TbServer, TbDeviceMobile, TbDatabase, TbSettings } from "react-icons/tb";
import { FaServer, FaJava, FaCss3Alt, FaNetworkWired } from "react-icons/fa";
import { GoWorkflow } from "react-icons/go";

const skills = {
  "Languages": {
    icon: <TbCode size={28} strokeWidth={1.5} />,
    description: "Core programming languages for building robust, scalable logic and high-performance algorithms.",
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
    icon: <TbLayout size={28} strokeWidth={1.5} />,
    description: "Modern frameworks for crafting highly interactive, responsive, and cinematic user interfaces.",
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
    icon: <TbServer size={28} strokeWidth={1.5} />,
    description: "Server-side architectures, RESTful API design, and robust microservice orchestration.",
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
    icon: <TbDeviceMobile size={28} strokeWidth={1.5} />,
    description: "Cross-platform frameworks for delivering seamless, native-like mobile applications.",
    items: [
      { name: "React Native (Expo)", icon: <SiExpo className="text-white" /> },
      { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> }
    ]
  },
  "Databases": {
    icon: <TbDatabase size={28} strokeWidth={1.5} />,
    description: "Scalable data storage solutions spanning relational schemas and NoSQL document stores.",
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
    icon: <TbBrain size={28} strokeWidth={1.5} />,
    description: "Designing intelligent systems, training models, and building autonomous multi-agent workflows.",
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
    icon: <TbSettings size={28} strokeWidth={1.5} />,
    description: "Version control, containerization, and continuous integration pipelines for agile delivery.",
    items: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
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
          blurAmount={0}
          className="w-full"
        >
          {Object.entries(skills).map(([category, data], i) => (
            <ScrollStackItem
              key={category}
              itemClassName="relative w-full !max-w-5xl !mx-auto flex flex-col !h-[500px] group !p-0 !rounded-[32px] overflow-hidden"
            >
              <BorderGlow
                className="w-full h-full p-8 md:p-12 text-left transition-colors duration-500 flex flex-col bg-[#0a0a0a]"
                backgroundColor="#0a0a0a"
                edgeSensitivity={40}
                glowColor="0 0 100"
                colors={['#ffffff', '#d97757', '#525252']}
                animated={false}
                borderRadius={32}
              >
                {/* Large faded icon in the background to fill space */}
                <div className="absolute -bottom-12 -right-12 w-96 h-96 opacity-[0.05] pointer-events-none flex items-center justify-center transition-opacity duration-1000 group-hover:opacity-[0.15]">
                  <div className="scale-[8] md:scale-[10] text-white/50">
                    {data.icon}
                  </div>
                </div>

                <div className="absolute -top-32 left-1/4 w-1/2 h-64 bg-[#d97757]/[0.03] blur-[80px] pointer-events-none" />

                {/* Card content */}
                <div className="relative z-10 w-full flex flex-col h-full">

                  {/* Header Area */}
                  <div className="flex flex-col gap-6 mb-8">
                    <div className="flex items-center gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-[#d97757]">
                        {data.icon}
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[11px] font-mono tracking-widest text-[#d97757]/80 uppercase mb-1.5 block">
                          {String(i + 1).padStart(2, "0")} / TECH STACK
                        </span>
                        <h3 className="text-3xl md:text-4xl font-light text-white/90 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {category} <span className="text-[13px] md:text-[14px] text-white/40 hidden md:inline font-sans tracking-normal whitespace-nowrap"> — {data.description}</span>
                        </h3>
                      </div>
                    </div>

                    {/* Description for mobile where inline is hidden */}
                    <p className="text-[14px] font-light text-white/50 leading-relaxed md:hidden">
                      {data.description}
                    </p>
                  </div>

                  {/* Tapered Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.08] to-transparent mb-8" />

                  {/* Technologies — 4-column grid, uniform across all cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {data.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 px-3.5 py-3 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group/skill cursor-default min-w-0"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 opacity-70 group-hover/skill:opacity-100 transition-opacity">
                          {skill.icon}
                        </div>
                        <span className="text-[12.5px] font-medium text-white/60 group-hover/skill:text-white/90 transition-colors tracking-wide truncate">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

    </section>
  );
}
