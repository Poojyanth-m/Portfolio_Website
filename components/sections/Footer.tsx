"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Facebook,
  Instagram,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export default function Footer() {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#work" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/poojyanth-m-7838312a7" },
        { label: "GitHub", href: "https://github.com/Poojyanth-m" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-white/50" />,
      text: "poojyanthm@gmail.com",
      href: "mailto:poojyanthm@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-white/50" />,
      text: "+91 86606 40338",
      href: "tel:+918660640338",
    },
    {
      icon: <MapPin size={18} className="text-white/50" />,
      text: "Bengaluru, India",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/share/1BStBLjTNR/?mibextid=wwXIfr" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/poojyanth.m?igsh=MXhveXF1aTAxd3RlZQ%3D%3D&utm_source=qr" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/poojyanth-m-7838312a7" },
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/Poojyanth-m" },
  ];

  return (
    <footer id="contact" className="bg-[#0e0e0e] relative overflow-hidden border-t border-white/5 pt-16 md:pt-24">
      <div className="w-full px-8 md:px-16 lg:px-24 pb-12 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-4xl md:text-5xl font-extralight tracking-widest uppercase">Poojyanth</span>
            </div>
            <p className="text-base text-white/50 leading-relaxed font-light mt-2">
              Full Stack Developer &amp; AI/ML Engineer crafting cinematic digital experiences and scalable systems.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-xl font-light mb-6 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a
                      href={link.href}
                      className="text-base text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-xl font-light mb-6 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4 text-base text-white/50">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-white transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex justify-center items-center text-sm">
          {/* Social icons */}
          <div className="flex space-x-8 text-white/40">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-white hover:scale-110 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Text hover effect — sits BELOW all content with no negative top margin */}
      <div className="flex w-full mt-4 z-50 relative pointer-events-auto">
        <TextHoverEffect text="POOJYANTH" className="w-full z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
