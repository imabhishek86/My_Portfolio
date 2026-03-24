import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import MotionWrapper from "./MotionWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 bg-gray-100/80 dark:bg-[#090917]/80 backdrop-blur-sm border-t border-black/5 dark:border-purple-500/20 mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <MotionWrapper key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-white/70 font-medium tracking-wide hover:text-accent transition-colors"
              >
                {item}
              </a>
            </MotionWrapper>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-x-8 mb-8">
          {[
            { href: "https://www.linkedin.com/in/iamabhishek86/", icon: <FaLinkedin />, color: "#0077b5", glow: "rgba(0,119,181,0.8)" },
            { href: "https://github.com/imabhishek86", icon: <FaGithub />, color: "#ffffff", glow: "rgba(255,255,255,0.8)" },
            { href: "https://mail.google.com/mail/u/0/#inbox", icon: <FaEnvelope />, color: "#f87171", glow: "rgba(248,113,113,0.8)" }
          ].map((social, index) => (
            <MotionWrapper key={index}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 dark:text-white/60 text-2xl hover:text-accent transition-colors"
              >
                {social.icon}
              </a>
            </MotionWrapper>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-400 dark:text-white/40 tracking-widest font-light">
            &copy; {currentYear} ABHISHEK PRASAD. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-2 w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
