"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-20 bg-[#121212] pt-32 pb-12 px-8 md:px-16 lg:px-24 border-t border-white/5"
    >
      <div className="w-full">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-8">Get in touch</p>
          <h2 className="text-5xl md:text-7xl font-extralight leading-tight mb-12 max-w-3xl">
            Let&apos;s build something{" "}
            <span className="italic font-light text-white/80">extraordinary.</span>
          </h2>
          <a
            href="mailto:poojyanthm@gmail.com"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-medium text-white/80 border-b border-white/20 pb-1 hover:text-white hover:border-white transition-all duration-300"
          >
            poojyanthm@gmail.com
          </a>
        </motion.div>

        {/* Contact details grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/8 pt-12 mb-16"
        >
          {[
            { label: "Location", value: "Bengaluru, India" },
            { label: "Phone", value: "+91 86606 40338" },
            { label: "LinkedIn", value: "poojyanth-m", href: "https://linkedin.com/in/poojyanth-m-7838312a7" },
            { label: "GitHub", value: "Poojyanth-m", href: "https://github.com/Poojyanth-m" },
          ].map(({ label, value, href }) => (
            <div key={label}>
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">{label}</p>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm text-white/60">{value}</p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Poojyanth M. All rights reserved.</p>
          <p className="font-mono">Full Stack Developer · AI & ML Engineer · Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
