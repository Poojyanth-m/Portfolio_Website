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
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Work", href: "#work", id: "work" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ isLoaded = false }: { isLoaded?: boolean }) {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!isLoaded) return; // Don't observe until page is fully visible

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
        threshold: [0.1, 0.2, 0.3],
        rootMargin: "-60px 0px -30% 0px",
      }
    );

    // Give DOM a tick to settle after loader fade
    const timeout = setTimeout(() => {
      const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      sections.forEach((section) => observerRef.current?.observe(section));
    }, 300);

    return () => {
      clearTimeout(timeout);
      observerRef.current?.disconnect();
    };
  }, [isLoaded]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-10 left-0 right-0 z-40 flex items-center justify-center px-6 md:px-12 pointer-events-none"
    >
      {/* Nav links — absolutely centered glass pill with scrollspy */}
      <div className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full border border-white/[0.08] bg-[#121212]/20 backdrop-blur-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(125,249,255,0.04)] pointer-events-auto">
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
    </motion.nav>
  );
}
