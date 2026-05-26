"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!isLoaded) return;

    const getActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Find which section's top is closest above the center of the viewport
      let currentSection = "";
      let minDistance = Infinity;

      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const absoluteTop = rect.top + scrollY;
        const distance = Math.abs(scrollY + windowHeight * 0.3 - absoluteTop);

        if (absoluteTop <= scrollY + windowHeight * 0.6 && distance < minDistance) {
          minDistance = distance;
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Run once immediately after load
    getActiveSection();
    window.addEventListener("scroll", getActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", getActiveSection);
  }, [isLoaded]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id); // Immediately set active on click
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`relative px-5 py-2 text-sm font-light tracking-wide rounded-full transition-all duration-400 group ${
                isActive
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {/* Active pill indicator — animated */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </AnimatePresence>

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
