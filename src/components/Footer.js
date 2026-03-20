import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 bg-[#090917]/80 backdrop-blur-sm border-t border-purple-500/20 mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <a href="#home" className="text-white/70 hover:text-purple-400 hover:glow-purple transition-all duration-300 font-medium tracking-wide">
            Home
          </a>
          <a href="#about" className="text-white/70 hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] transition-all duration-300 font-medium tracking-wide">
            About
          </a>
          <a href="#projects" className="text-white/70 hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] transition-all duration-300 font-medium tracking-wide">
            Projects
          </a>
          <a href="#contact" className="text-white/70 hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] transition-all duration-300 font-medium tracking-wide">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-x-8 mb-8">
          <a 
            href="https://www.linkedin.com/in/iamabhishek86/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white/60 hover:text-[#0077b5] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.8)] transition-all duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/imabhishek86" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white/60 hover:text-white hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a 
            href="https://mail.google.com/mail/u/0/#inbox" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white/60 hover:text-red-400 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.8)] transition-all duration-300 text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-white/40 tracking-widest font-light">
            &copy; {currentYear} ABHISHEK PRASAD. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-2 w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
