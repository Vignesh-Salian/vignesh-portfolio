"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gamepad2, 
  Sparkles, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Download, 
  Terminal, 
  Layers, 
  Cpu, 
  Eye, 
  Send,
  Radio,
  Palette,
  User,
  FolderGit2,
  Briefcase
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { sounds } from "@/lib/soundFx";

const navLinks = [
  { href: "#overview", label: "01 // COMMAND", icon: Gamepad2 },
  { href: "#about", label: "02 // CHARACTER", icon: User },
  { href: "#skills", label: "03 // ARSENAL", icon: Cpu },
  { href: "#projects", label: "04 // LIBRARY", icon: FolderGit2 },
  { href: "#experience", label: "05 // MISSIONS", icon: Briefcase },
  { href: "#beyond-algorithms", label: "06 // ART VAULT", icon: Palette },
  { href: "#cv-lab", label: "07 // CV RADAR", icon: Eye },
  { href: "#ml-lab", label: "08 // ML ARENA", icon: Layers },
  { href: "#studio", label: "09 // 3D HOLO", icon: Sparkles },
  { href: "#terminal", label: "10 // CLI", icon: Terminal },
  { href: "#contact", label: "11 // COMMS", icon: Send },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [activeSection, setActiveSection] = useState("#overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section observer
      const scrollPos = window.scrollY + 250;
      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const next = sounds.toggleSound();
    setSoundOn(next);
  };

  const handleLinkHover = () => {
    sounds.playHover();
  };

  const handleActionClick = () => {
    sounds.playClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2.5 sm:p-4 transition-all duration-300">
      <nav
        className={`w-full max-w-7xl px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl flex items-center justify-between transition-all duration-300 border ${
          scrolled
            ? "bg-[#050814]/90 backdrop-blur-2xl border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.15)]"
            : "bg-[#050814]/65 backdrop-blur-md border-white/[0.08]"
        }`}
      >
        {/* Logo / Player Identifier */}
        <a 
          href="#overview" 
          onClick={handleActionClick}
          onMouseEnter={handleLinkHover}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] via-[#8a2be2] to-[#ff007f] p-[1.5px] shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_30px_rgba(255,0,127,0.6)] transition-all">
            <div className="w-full h-full bg-[#070c18] rounded-[10px] flex items-center justify-center text-white font-bold text-xs sm:text-sm tracking-wider font-mono">
              VS
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffa3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ffa3]"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-[#00f0ff] transition-colors font-mono">
                VIGNESH SALIAN
              </span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-[#ff007f]/20 border border-[#ff007f]/40 text-[#ff007f]">
                LVL.99
              </span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
              <span className="text-[#00f0ff]">AI & SYSTEMS ARCHITECT</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden 2xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.02] border border-[#00f0ff]/20 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={handleLinkHover}
                onClick={handleActionClick}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-full transition-all tracking-wider ${
                  isActive
                    ? "bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.3)] font-bold"
                    : "text-gray-300 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls & CTAs */}
        <div className="flex items-center gap-2">
          {/* Sound FX Switch */}
          <button
            onClick={toggleSound}
            onMouseEnter={handleLinkHover}
            className={`p-2 rounded-xl border transition-all flex items-center gap-1 text-xs font-mono cursor-pointer ${
              soundOn 
                ? "bg-[#00f0ff]/20 border-[#00f0ff]/50 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.4)] animate-pulse" 
                : "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:border-[#00f0ff]/30"
            }`}
            title="Toggle Retro Cyber SFX Synthesizer"
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="text-[10px] font-bold hidden sm:inline">{soundOn ? "SFX:ON" : "SFX"}</span>
          </button>

          <a
            href="https://github.com/Vignesh-Salian"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleLinkHover}
            onClick={handleActionClick}
            className="hidden sm:flex p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
            title="GitHub Mainframe"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-salian/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleLinkHover}
            onClick={handleActionClick}
            className="hidden sm:flex p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:text-[#ff007f] hover:border-[#ff007f]/40 hover:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all"
            title="LinkedIn Uplink"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Quick Resume Download CTA */}
          <a
            href="https://drive.google.com/uc?export=download&id=1NhFSD90dW_mvw9rTMBn1zl_g7mLEdHnC"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleLinkHover}
            onClick={() => sounds.playSuccess()}
            className="px-3 sm:px-3.5 py-2 text-xs font-bold font-mono rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,127,0.6)] hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
          >
            <Download className="w-3.5 h-3.5 animate-bounce" />
            <span>RESUME_PDF</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="2xl:hidden p-2 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="absolute top-18 left-3 right-3 p-4 sm:p-5 rounded-2xl bg-[#050814]/98 backdrop-blur-2xl border border-[#00f0ff]/30 shadow-[0_0_40px_rgba(0,240,255,0.25)] flex flex-col gap-2.5 2xl:hidden z-50 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-[#00f0ff] flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#00ffa3]" />
                <span>SYSTEM MENU // SELECT STAGE</span>
              </span>
              <button
                onClick={toggleSound}
                className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[10px] font-mono text-gray-300 flex items-center gap-1"
              >
                {soundOn ? <Volume2 className="w-3 h-3 text-[#00ffa3]" /> : <VolumeX className="w-3 h-3" />}
                <span>{soundOn ? "AUDIO: ON" : "AUDIO: OFF"}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      sounds.playClick();
                      setMobileMenuOpen(false);
                    }}
                    className="px-3 py-2 text-xs font-mono text-gray-300 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 rounded-xl border border-white/[0.04] transition-all flex items-center gap-2"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 mt-1 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://drive.google.com/uc?export=download&id=1NhFSD90dW_mvw9rTMBn1zl_g7mLEdHnC"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playSuccess()}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs font-mono font-bold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#00ffa3]" />
                <span>TRANSMIT COMMS</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
