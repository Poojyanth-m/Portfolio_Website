"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Pinyon_Script } from "next/font/google";

const signatureFont = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
});

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Work", href: "#work", id: "work" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use IntersectionObserver for smooth, performant scrollspy
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Fire when 20% of the section is visible
        threshold: [0.2],
        // -80px from top to account for the navbar height
        rootMargin: "-80px 0px -20% 0px",
      }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12"
    >
      {/* Signature Logo */}
      <Link
        href="/"
        className={`text-4xl md:text-5xl text-white hover:text-white/80 transition-all duration-500 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.5)] hover:scale-105 origin-left ${signatureFont.className}`}
      >
        Poojyanth
      </Link>

      {/* Nav links — absolutely centered glass pill with scrollspy */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 px-3 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-5 py-2 text-sm font-light tracking-wide rounded-full transition-all duration-400 group ${
                isActive
                  ? "text-white bg-white/12 shadow-[0_0_18px_rgba(255,255,255,0.1)]"
                  : "text-white/50 hover:text-white hover:bg-white/8"
              }`}
            >
              {/* Active pill indicator — animated */}
              {isActive && (
                <motion.span
                  layoutId="activeNavPill"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}

              {/* Hover underline for non-active items */}
              {!isActive && (
                <span className="absolute inset-x-5 bottom-1.5 h-[1px] bg-white/35 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              )}

              <span className="relative z-10">{item.name}</span>
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <a
        href="mailto:poojyanthm@gmail.com"
        className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 tracking-wide"
      >
        Hire Me
      </a>
    </motion.nav>
  );
}
