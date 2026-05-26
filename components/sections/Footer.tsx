"use client";

import React from "react";
import { Linkedin, Github, Instagram, ArrowUpRight, FileText, MessageCircle, Mail, Users, Globe } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://linkedin.com/in/poojyanth-m-7838312a7" },
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/Poojyanth-m" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "https://www.instagram.com/poojyanth.m" },
  ];

  return (
    <footer id="contact" className="bg-[#0e0e0e] relative overflow-hidden pt-16 md:pt-24">
      {/* Explicit Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white z-50" />

      <div className="w-full px-8 md:px-16 lg:px-24 z-40 relative">

        {/* Top two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-16 md:pb-20">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-12"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-[0.45em] text-white/70 uppercase font-medium">THANKS FOR SCROLLING</span>
              <div className="h-[1px] w-24 bg-gradient-to-r from-white/40 to-transparent" />
            </div>

            {/* Big headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-white mb-4">
                Let's build systems that scale beyond expectations.
              </h2>
              {/* Role tags */}
              <p className="text-sm md:text-base text-white/40 font-light mt-6 tracking-wide">
                Full Stack Developer &nbsp;·&nbsp; AI & ML Engineer &nbsp;·&nbsp; React & React Native
              </p>
            </div>

          </motion.div>

          {/* ── RIGHT COLUMN — FIND ME ON ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-12 xl:gap-20 w-full justify-start lg:ml-8"
          >
            {/* First Separator Line (Replaces border-l so it matches the second line's height exactly) */}
            <div className="hidden lg:block w-[1px] bg-white/10" />

            {/* LET'S WORK TOGETHER (Moved to Right Column) */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-5 text-white/70">
                <Users size={16} />
                <p className="text-[10px] tracking-[0.45em] text-white uppercase font-medium whitespace-nowrap">LET'S WORK TOGETHER</p>
              </div>

              <div className="flex flex-col gap-3 w-full max-w-[320px]">
                <a
                  href="mailto:poojyanthm@gmail.com"
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm font-light hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <Mail size={18} className="text-white/70 group-hover:text-white transition-colors" />
                    <span>Send Email</span>
                  </div>
                  <ArrowUpRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="/Resume/Poojyanth_M_Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm font-light hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <FileText size={18} className="text-white/70 group-hover:text-white transition-colors" />
                    <span>View Resume</span>
                  </div>
                  <ArrowUpRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://wa.me/918660640338?text=Hi%20Poojyanth%2C%20I%20came%20across%20your%20portfolio%20and%20really%20liked%20your%20work.%20Would%20love%20to%20connect%20and%20discuss%20a%20potential%20opportunity%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm font-light hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle size={18} className="text-white/70 group-hover:text-white transition-colors" />
                    <span>Let's Talk</span>
                  </div>
                  <ArrowUpRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden sm:block w-[1px] bg-white/10" />
            <div className="block sm:hidden w-full h-[1px] bg-white/10" />

            {/* FIND ME ON (Moved beside Let's Work Together) */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-5 text-white/70">
                <Globe size={16} />
                <p className="text-[10px] tracking-[0.45em] text-white uppercase font-medium whitespace-nowrap">FIND ME ON</p>
              </div>
              <div className="flex flex-col gap-3 w-full max-w-[320px]">
                {socialLinks.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm font-light hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-white/70 group-hover:text-white transition-colors">{icon}</span>
                      <span>{label}</span>
                    </div>
                    <ArrowUpRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* POOJYANTH large text — unchanged */}
      <div className="flex w-full z-50 relative pointer-events-auto -mt-12 md:-mt-16 lg:-mt-24 translate-y-[22%]">
        <TextHoverEffect text="POOJYANTH" className="w-full z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
