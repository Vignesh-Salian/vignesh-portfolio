"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Trophy, BookOpen, Terminal } from "lucide-react";
import Image from "next/image";
import { sounds } from "@/lib/soundFx";

/* ━━━━━ SVG Icons ━━━━━ */

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

/* ━━━━━ Constants ━━━━━ */

const titles = [
  "AI Engineer",
  "Computer Vision Researcher",
  "Full Stack Developer",
  "ML Enthusiast",
  "Problem Solver",
];

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  const advanceTitle = useCallback(() => {
    setTitleIndex((prev) => (prev + 1) % titles.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advanceTitle, 3000);
    return () => clearInterval(interval);
  }, [advanceTitle]);

  const scrollTo = (id: string) => {
    sounds.playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-0 lg:min-h-screen flex flex-col justify-center py-6 lg:py-8 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-[#00f0ff]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[#8a2be2]/12 blur-[150px] pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full relative z-10">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            LEFT COLUMN — 7 of 12 cols (Order 1 everywhere)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 order-1 lg:order-1 relative">
          
          {/* Welcome Badge / HUD Status */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="self-start relative z-10"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#070c18]/90 border border-[#00f0ff]/30 text-xs font-mono font-medium text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-[#00ffa3] animate-ping" />
              <span>Welcome to my portfolio</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
            className="font-mono font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight relative z-10"
          >
            <span className="text-white">Vignesh </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#c084fc] to-[#ff007f] drop-shadow-[0_0_16px_rgba(0,240,255,0.5)] drop-shadow-[0_0_32px_rgba(192,132,252,0.35)]">
              N Salian
            </span>
          </motion.h1>

          {/* Typing Animation — High Contrast Neon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-9 flex items-center relative z-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={titleIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="font-mono font-bold text-lg sm:text-xl lg:text-2xl text-[#00ffa3] flex items-center gap-2 drop-shadow-[0_0_10px_rgba(0,255,163,0.6)]"
              >
                <span className="text-[#00f0ff] font-extrabold">&gt;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] via-[#00f0ff] to-[#38bdf8] font-extrabold">
                  {titles[titleIndex]}
                </span>
                <span className="w-1.5 h-4 bg-[#00f0ff] animate-pulse inline-block shadow-[0_0_8px_#00f0ff]" />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: smoothEase }}
            className="font-mono text-xs sm:text-sm lg:text-[14px] leading-relaxed text-gray-300 max-w-xl relative z-10"
          >
            I am an Information Science Engineering student passionate about
            Artificial Intelligence, Computer Vision, and Full Stack Development.
            I build intelligent systems, research-driven applications, and
            scalable software solutions to solve real-world problems.
          </motion.p>

          {/* Gamified Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: smoothEase }}
            className="flex flex-col sm:flex-row flex-wrap items-center relative z-10 gap-3.5 pt-1"
          >
            {/* 1. View Projects Button */}
            <motion.button
              onClick={() => scrollTo("projects")}
              onMouseEnter={() => sounds.playHover()}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="relative group/btn w-full sm:w-auto px-6 h-[46px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] text-white font-mono font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(255,0,127,0.55)] transition-all flex justify-center items-center gap-2 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/60 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/60 pointer-events-none" />
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </motion.button>

            {/* 2. Download Resume Button (Gamified Cyber HUD) */}
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playSuccess()}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="relative group/btn w-full sm:w-auto px-5 h-[46px] rounded-xl bg-[#070c18] hover:bg-[#0c1322] border border-[#00f0ff]/40 hover:border-[#00ffa3] text-white font-mono font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(0,240,255,0.18)] hover:shadow-[0_0_25px_rgba(0,255,163,0.4)] transition-all flex justify-center items-center gap-2.5 cursor-pointer overflow-hidden"
            >
              {/* Cyber Corner HUD Brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff] group-hover/btn:border-[#00ffa3] transition-colors pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00ffa3] pointer-events-none" />
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#00ffa3]/15 to-transparent pointer-events-none" />
              
              <div className="w-5 h-5 rounded-lg bg-[#00ffa3]/15 border border-[#00ffa3]/30 flex items-center justify-center text-[#00ffa3] group-hover/btn:scale-110 transition-transform">
                <Download className="w-3 h-3 animate-bounce" />
              </div>
              <span className="text-gray-200 group-hover/btn:text-[#00ffa3] transition-colors">Download Resume</span>
            </motion.a>

            {/* 3. Contact Me Button (Gamified Cyber HUD) */}
            <motion.button
              onClick={() => scrollTo("contact")}
              onMouseEnter={() => sounds.playHover()}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="relative group/btn w-full sm:w-auto px-5 h-[46px] rounded-xl bg-[#070c18] hover:bg-[#0c1322] border border-[#8a2be2]/40 hover:border-[#ff007f] text-white font-mono font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(138,43,226,0.18)] hover:shadow-[0_0_25px_rgba(255,0,127,0.4)] transition-all flex justify-center items-center gap-2.5 cursor-pointer overflow-hidden"
            >
              {/* Cyber Corner HUD Brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#8a2be2] group-hover/btn:border-[#ff007f] transition-colors pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#ff007f] pointer-events-none" />
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#ff007f]/15 to-transparent pointer-events-none" />
              
              <div className="w-5 h-5 rounded-lg bg-[#8a2be2]/15 border border-[#8a2be2]/30 flex items-center justify-center text-[#c084fc] group-hover/btn:scale-110 transition-transform">
                <Mail className="w-3 h-3 text-[#c084fc]" />
              </div>
              <span className="text-gray-200 group-hover/btn:text-[#ff007f] transition-colors">Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-col gap-2 pt-2 relative z-10 font-mono text-xs text-gray-400"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Karnataka, India</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-300">
              <Image src="/education_icon.png" alt="Education" width={14} height={14} className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
              <span>
                <span className="text-white font-semibold">B.Tech ISE</span> @ NMAMIT
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <Image src="/publications_icon.png" alt="Publications" width={14} height={14} className="drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
              <span>
                <span className="text-[#00ffa3] font-semibold">IEEE ICCES 2025</span>
                <span className="mx-2 text-gray-600">•</span>
                <span className="text-[#00f0ff] font-semibold">Springer ICTIS 2026</span>
              </span>
            </div>
          </motion.div>

          {/* Social Links — Authentic Brand Colors & Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex items-center gap-3 pt-1.5 relative z-10"
          >
            {/* GitHub */}
            <a
              href="https://github.com/Vignesh-Salian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0d1117]/90 border border-white/20 text-white hover:border-white hover:bg-[#161b22] hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] hover:scale-105 transition-all duration-300 group"
            >
              <GithubIcon />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/vignesh-n-salian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0077b5]/10 border border-[#0077b5]/40 text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0077b5]/25 hover:text-[#38bdf8] hover:shadow-[0_0_22px_rgba(10,102,194,0.55)] hover:scale-105 transition-all duration-300 group"
            >
              <LinkedinIcon />
            </a>

            {/* Gmail / Email */}
            <a
              href="mailto:salianvignesh05@gmail.com"
              aria-label="Email"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#ea4335]/10 border border-[#ea4335]/40 text-[#ea4335] hover:border-[#ea4335] hover:bg-[#ea4335]/25 hover:text-[#ff6b6b] hover:shadow-[0_0_22px_rgba(234,67,53,0.55)] hover:scale-105 transition-all duration-300 group"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            RIGHT COLUMN — 5 of 12 cols (Order 2 everywhere)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center gap-4 relative order-2 lg:order-2 w-full max-w-[450px] mx-auto lg:ml-auto lg:self-center">

          {/* Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: smoothEase }}
            className="group w-full rounded-2xl overflow-hidden relative z-10 border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] hover:-translate-y-0.5 transition-all duration-300 bg-[#070c18]/95 backdrop-blur-2xl"
          >
            {/* Title Bar */}
            <div className="h-10 bg-black/50 border-b border-[#00f0ff]/20 px-4 flex items-center justify-between flex-shrink-0">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff007f] shadow-[0_0_5px_rgba(255,0,127,0.8)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffb800] shadow-[0_0_5px_rgba(255,184,0,0.8)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ffa3] shadow-[0_0_5px_rgba(0,255,163,0.8)]" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono font-medium tracking-wide">
                <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>researcher_profile.ts</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Code Block */}
            <div className="p-5 overflow-hidden flex flex-col justify-center">
              <pre className="font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre">
                <code>
                  <span className="text-[#a855f7]">const</span>
                  <span className="text-gray-200"> researcher </span>
                  <span className="text-gray-500">= </span>
                  <span className="text-gray-400">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#00f0ff]">role</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-[#00ffa3]">&quot;AI Engineer&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#00f0ff]">specialization</span>
                  <span className="text-gray-500">: [</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#00ffa3]">&quot;Computer Vision&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#00ffa3]">&quot;Machine Learning&quot;</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-500">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#00f0ff]">publications</span>
                  <span className="text-gray-500">: [</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#00ffa3]">&quot;IEEE ICCES 2025&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#00ffa3]">&quot;Springer ICTIS 2026&quot;</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-500">]</span>
                  {"\n"}
                  <span className="text-gray-400">{"}"}</span>
                  <span className="text-gray-500">;</span>
                </code>
              </pre>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f]" />
          </motion.div>

          {/* Research Highlights Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
            className="group w-full rounded-2xl relative overflow-hidden z-10 flex flex-col justify-center flex-shrink-0 border border-[#00f0ff]/20 bg-[#070c18]/95 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#00f0ff]/40 transition-all duration-300 p-4"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00ffa3] via-[#00f0ff] to-[#8a2be2]" />

            <div className="w-full flex flex-col justify-center items-center">
              {/* Header */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <Image src="/publications_icon.png" alt="Research" width={15} height={15} className="drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                <span className="font-mono font-bold text-xs tracking-[0.18em] uppercase text-[#00f0ff]">
                  RESEARCH HIGHLIGHTS
                </span>
              </div>

              {/* Horizontal Flex Layout for Research Items */}
              <div className="flex flex-row items-center justify-between w-full px-2 sm:px-4 gap-3">
                {/* Item 1 */}
                <div className="flex items-center gap-2.5">
                  <Trophy className="w-5 h-5 text-[#ffb800] group-hover:rotate-12 transition-transform duration-300" />
                  <div className="flex flex-col text-left font-mono">
                    <span className="font-bold text-xs sm:text-sm text-white leading-tight">IEEE ICCES 2025</span>
                    <span className="text-[11px] font-semibold text-[#00ffa3]">Published</span>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="h-7 w-[1px] bg-white/10" />

                {/* Item 2 */}
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#00f0ff] group-hover:-rotate-12 transition-transform duration-300" />
                  <div className="flex flex-col text-left font-mono">
                    <span className="font-bold text-xs sm:text-sm text-white leading-tight">Springer ICTIS 2026</span>
                    <span className="text-[11px] font-semibold text-[#00f0ff]">Accepted</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
