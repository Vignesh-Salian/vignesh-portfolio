"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, MapPin, Trophy, BookOpen, Smile } from "lucide-react";
import Image from "next/image";

/* ━━━━━ SVG Icons ━━━━━ */

const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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



/* ━━━━━ Animation Easing ━━━━━ */

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

/* ━━━━━ Component ━━━━━ */

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 lg:py-0 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[80px] items-center w-full">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            LEFT COLUMN — 58% (7 of 12 cols)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1 relative">
          
          {/* Subtle Radial Glow Behind Name */}
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="self-start relative z-10"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.08] text-[13px] font-medium text-purple-300/90 tracking-wide">
              <Smile className="w-4 h-4 text-purple-400" />
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
            className="font-space font-bold text-[42px] md:text-[50px] lg:text-[60px] leading-[1] tracking-[-0.03em] whitespace-nowrap relative z-10"
          >
            <span className="text-white">Vignesh </span>
            <span className="bg-gradient-to-r from-white via-blue-400 to-purple-500 bg-clip-text text-transparent text-glow-purple">
              N Salian
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[40px] flex items-center relative z-10"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="font-space font-semibold text-[#A855F7] block whitespace-nowrap text-[28px]"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
            className="font-medium relative z-10 text-[18px] leading-[1.9] text-[#B8B8C5] max-w-[560px]"
          >
            I am an Information Science Engineering student passionate about
            Artificial Intelligence, Computer Vision, and Full Stack Development.
            I build intelligent systems, research-driven applications, and
            scalable software solutions to solve real-world problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: smoothEase }}
            className="flex flex-col sm:flex-row flex-wrap items-center relative z-10 gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="neon-btn-primary w-full sm:w-auto px-8 h-[54px] rounded-[16px] flex justify-center items-center"
            >
              View Projects
              <ArrowRight className="w-[18px] h-[18px] ml-2" />
            </button>

            <a href="/resume.pdf" download className="neon-btn-secondary w-full sm:w-auto px-8 h-[54px] rounded-[16px] flex justify-center items-center">
              Download Resume
              <Download className="w-[18px] h-[18px] ml-2" />
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="neon-btn-outline w-full sm:w-auto px-8 h-[54px] rounded-[16px] flex justify-center items-center"
            >
              Contact Me
              <Mail className="w-[18px] h-[18px] ml-2" />
            </button>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-2.5 relative z-10"
          >
            <div className="flex items-center gap-2.5 text-[14px] font-medium text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Karnataka, India</span>
            </div>
            
            <div className="flex items-center gap-2.5 text-[14px] font-medium text-slate-400">
              <Image src="/education_icon.png" alt="Education" width={16} height={16} className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
              <span>
                <span className="text-white font-semibold">B.Tech ISE</span> @ NMAMIT
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-[14px] font-medium text-slate-400">
              <Image src="/publications_icon.png" alt="Publications" width={16} height={16} className="drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
              <span>
                <span className="text-white font-semibold">IEEE ICCES 2025</span>
                <span className="mx-2 text-slate-600 font-normal">•</span>
                <span className="text-white font-semibold">Springer ICTIS 2026</span>
              </span>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 mt-1 relative z-10"
          >
            {[
              { href: "https://github.com/Vignesh-Salian", label: "GitHub", icon: <GithubIcon /> },
              { href: "https://linkedin.com/in/vignesh-n-salian", label: "LinkedIn", icon: <LinkedinIcon /> },
              { href: "mailto:salianvignesh05@gmail.com", label: "Email", icon: <Mail className="w-6 h-6" /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-[58px] h-[58px] rounded-2xl flex items-center justify-center bg-white/[0.04] backdrop-blur-md border border-white/[0.08] text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-white/[0.08] transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            RIGHT COLUMN — 42% (5 of 12 cols)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center gap-8 relative order-1 lg:order-2 w-full max-w-[480px] mx-auto lg:ml-auto px-4 lg:px-0">

          {/* Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            className="group w-full rounded-[28px] overflow-hidden relative z-10 flex-shrink-0 border border-white/[0.08] shadow-[0_0_50px_rgba(139,92,246,0.1)] hover:shadow-[0_0_80px_rgba(139,92,246,0.25)] hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-500"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              height: "360px",
            }}
          >
            {/* Title Bar */}
            <div className="h-11 bg-black/30 border-b border-white/[0.06] px-5 flex items-center justify-between flex-shrink-0">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/50 group-hover:bg-rose-500 transition-colors duration-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors duration-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-purple-400/60" />
                <span>researcher_profile.ts</span>
              </div>
              <div className="w-14" />
            </div>

            {/* Code Block - Centered vertically */}
            <div className="p-[28px] overflow-hidden h-[calc(360px-44px)] flex flex-col justify-center">
              <pre className="font-mono-code text-[13px] leading-[1.6] whitespace-pre">
                <code>
                  <span className="text-purple-400/80">const</span>
                  <span className="text-gray-300"> researcher </span>
                  <span className="text-gray-500">= </span>
                  <span className="text-gray-400">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-300/70">role</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-emerald-400/80">&quot;AI Engineer&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-300/70">specialization</span>
                  <span className="text-gray-500">: [</span>
                  {"\n"}
                  {"    "}
                  <span className="text-emerald-400/80">&quot;Computer Vision&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-emerald-400/80">&quot;Machine Learning&quot;</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-500">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-blue-300/70">publications</span>
                  <span className="text-gray-500">: [</span>
                  {"\n"}
                  {"    "}
                  <span className="text-emerald-400/80">&quot;IEEE ICCES 2025&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-emerald-400/80">&quot;Springer ICTIS 2026&quot;</span>
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
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500/60 via-blue-500/60 to-cyan-500/60" />
          </motion.div>

          {/* Connecting Pulse Line */}
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.5, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-[360px] left-1/2 -translate-x-1/2 w-[2px] h-[32px] bg-gradient-to-b from-purple-500 to-blue-500 z-0 shadow-[0_0_10px_rgba(139,92,246,0.5)] origin-top hidden lg:block" 
          />

          {/* Research Highlights Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: smoothEase }}
            className="group w-full rounded-[28px] relative overflow-hidden z-10 flex flex-col justify-center flex-shrink-0 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500"
            style={{
              height: "160px",
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50" />

            <div className="w-full h-full flex flex-col justify-center items-center">
              {/* Header */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Image src="/publications_icon.png" alt="Research" width={16} height={16} className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                <span className="font-space font-semibold text-[13px] tracking-[0.2em] uppercase text-[#C084FC]">
                  RESEARCH HIGHLIGHTS
                </span>
              </div>

              {/* Horizontal Flex Layout for Research Items */}
              <div className="flex flex-row items-center justify-between w-full px-6 gap-4">
                {/* Item 1 */}
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-amber-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 ease-out drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]" />
                  <div className="flex flex-col text-left">
                    <span className="font-space font-semibold text-[13px] sm:text-[14px] text-white leading-tight">IEEE ICCES 2025</span>
                    <span className="text-[12px] font-medium text-emerald-400">Published</span>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="h-[40px] w-[1px] bg-white/[0.08]" />

                {/* Item 2 */}
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-cyan-400 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500 ease-out drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]" />
                  <div className="flex flex-col text-left">
                    <span className="font-space font-semibold text-[13px] sm:text-[14px] text-white leading-tight">Springer ICTIS 2026</span>
                    <span className="text-[12px] font-medium text-cyan-400">Accepted</span>
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
