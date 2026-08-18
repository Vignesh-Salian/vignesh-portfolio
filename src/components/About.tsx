"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles,
  Briefcase, 
  MapPin, 
  Calendar, 
  Trophy, 
  BookOpen,
  GraduationCap,
  ExternalLink,
  Download,
  Activity
} from "lucide-react";
import { sounds } from "@/lib/soundFx";
import CyberBirdFlyoutPortal from "@/components/CyberBirdFlyoutPortal";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="py-4 sm:py-6 border-t border-[#00f0ff]/20 relative">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#8a2be2]/12 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00f0ff]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Viewport 1: Main About Dossier Block (Full viewport fit on desktop) */}
        <div className="min-h-0 lg:min-h-[calc(100vh-2rem)] flex flex-col justify-center py-2 lg:py-4">
          {/* Section Header: Compact Gaming HUD Header */}
          <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#8a2be2]/15 border border-[#8a2be2]/30 flex items-center justify-center shadow-[0_0_12px_rgba(138,43,226,0.3)]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c084fc] animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-mono">
                About Me
              </h2>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#00f0ff] tracking-wider uppercase block -mt-0.5">
                PLAYER_PROFILE // ARCHITECT_DOSSIER
              </span>
            </div>
          </div>

          {/* 2-Column Grid - Perfectly fit and aligned */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch"
          >
            {/* Left Main Bio Panel */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="relative p-4 sm:p-5 lg:p-5.5 rounded-2xl bg-[#070c18]/95 border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.12)] backdrop-blur-2xl h-full flex flex-col justify-between overflow-hidden group">
                {/* Cyber Corner HUD Brackets */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none z-10" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ff007f] pointer-events-none z-10" />

                {/* Left Vertical Glowing Accent Line */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8a2be2] via-[#00f0ff] to-[#00ffa3] rounded-l-2xl shadow-[0_0_12px_rgba(0,240,255,0.7)]" />

                <div>
                  {/* Gaming Top Status Meta */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs font-mono pl-1">
                    <span className="text-[#00ffa3] flex items-center gap-1.5 font-bold text-[10px] sm:text-[11px]">
                      <Activity className="w-3 h-3 animate-pulse" />
                      STATUS // OPTIMIZED
                    </span>
                    <span className="text-gray-400 text-[9px] sm:text-[10px]">XP // MAX_LEVEL</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-mono mb-2 pl-1 group-hover:text-[#00f0ff] transition-colors">
                    Designing Intelligent Systems for the Future
                  </h3>
                  
                  <div className="space-y-2 font-mono text-[11px] sm:text-xs text-gray-300 leading-relaxed pl-1">
                    <p>
                      I am an Information Science Engineering student passionate about Artificial Intelligence, Computer Vision, and Full Stack Development. My work focuses on building intelligent systems, scalable applications, and research-driven solutions that solve real-world problems.
                    </p>
                    
                    <p>
                      I have published research in IEEE ICCES 2025 and have another paper accepted for Springer ICTIS 2026. My interests span Computer Vision, Machine Learning, Generative AI, and modern web technologies.
                    </p>
         
                    <p>
                      Beyond academics, I enjoy transforming ideas into impactful products by combining research, software engineering, and clean user experiences. I strive to build solutions that are practical, scalable, and meaningful.
                    </p>
                  </div>
                </div>

                {/* Bottom Subtle Status Chips */}
                <div className="grid grid-cols-3 gap-2 pt-2.5 mt-2.5 border-t border-white/10 font-mono text-center">
                  <div className="p-1.5 rounded-lg bg-black/40 border border-[#00f0ff]/20">
                    <span className="text-[10px] text-[#00f0ff] font-bold block">AI // CV</span>
                    <span className="text-[8.5px] sm:text-[9px] text-gray-400">Deep Learning</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/40 border border-[#00ffa3]/20">
                    <span className="text-[10px] text-[#00ffa3] font-bold block">FULL-STACK</span>
                    <span className="text-[8.5px] sm:text-[9px] text-gray-400">Enterprise</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/40 border border-[#ff007f]/20">
                    <span className="text-[10px] text-[#ff007f] font-bold block">RESEARCH</span>
                    <span className="text-[8.5px] sm:text-[9px] text-gray-400">Peer-Reviewed</span>
                  </div>
                </div>
              </div>
            </motion.div>
     
            {/* Right 3 Stacked Cards — Cyberpunk Gaming HUD Stacks */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 h-full"
            >
              {/* Card 1: Education */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex-1 p-3.5 sm:p-4 rounded-2xl bg-[#070c18]/95 border border-white/[0.1] hover:border-[#8a2be2]/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(138,43,226,0.25)] backdrop-blur-2xl transition-all relative overflow-hidden group flex flex-col justify-center"
              >
                {/* Cyber Corner HUD Brackets */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#8a2be2] opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ff007f] opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Left Neon Indicator Bar */}
                <div className="absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-r bg-gradient-to-b from-[#8a2be2] via-[#ff007f] to-transparent opacity-80" />

                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#8a2be2]/12 blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#8a2be2]/20 border border-[#8a2be2]/40 flex items-center justify-center shadow-[0_0_10px_rgba(138,43,226,0.35)] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-3 h-3 text-[#c084fc]" />
                    </div>
                    <h4 className="font-mono font-bold text-xs sm:text-sm text-white tracking-wide group-hover:text-[#c084fc] transition-colors">
                      Education
                    </h4>
                  </div>
                  <span className="text-[8.5px] sm:text-[9px] font-mono font-bold text-gray-500 group-hover:text-[#c084fc] transition-colors">
                    ACADEMIA // LEVEL_04
                  </span>
                </div>
                
                <div className="flex flex-col gap-0.5 font-mono pl-0.5">
                  <div className="text-white text-xs sm:text-[13px] font-bold leading-snug">
                    B.Tech in Information Science &amp; Engineering
                  </div>
                  <div className="text-[#c084fc] text-[11px] font-semibold tracking-wide mt-0.5">
                    NMAM Institute of Technology
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-[10px] sm:text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-[#00f0ff]" /> Karnataka, India
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-2.5 h-2.5 text-[#ff007f]" /> 2022 – 2026
                    </span>
                  </div>
                </div>
              </motion.div>
    
              {/* Card 2: Publications */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex-1 p-3.5 sm:p-4 rounded-2xl bg-[#070c18]/95 border border-white/[0.1] hover:border-[#00f0ff]/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] backdrop-blur-2xl transition-all relative overflow-hidden group flex flex-col justify-center"
              >
                {/* Cyber Corner HUD Brackets */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f0ff] opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00ffa3] opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Left Neon Indicator Bar */}
                <div className="absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-r bg-gradient-to-b from-[#00f0ff] via-[#00ffa3] to-transparent opacity-80" />

                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/12 blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#00f0ff]/20 border border-[#00f0ff]/40 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.35)] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-3 h-3 text-[#00f0ff]" />
                    </div>
                    <h4 className="font-mono font-bold text-xs sm:text-sm text-white tracking-wide group-hover:text-[#00f0ff] transition-colors">
                      Publications
                    </h4>
                  </div>
                  <span className="text-[8.5px] sm:text-[9px] font-mono font-bold text-gray-500 group-hover:text-[#00f0ff] transition-colors">
                    RESEARCH // PEER_REVIEWED
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 font-mono pl-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs font-semibold text-white flex items-center gap-1.5">
                      <Trophy className="w-3 h-3 text-[#00ffa3]" /> IEEE ICCES 2025
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#00ffa3] px-2 py-0.5 rounded-full bg-[#00ffa3]/15 border border-[#00ffa3]/40 shadow-[0_0_8px_rgba(0,255,163,0.25)]">
                      Published
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] sm:text-xs font-semibold text-white flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-[#00f0ff]" /> Springer ICTIS 2026
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#00f0ff] px-2 py-0.5 rounded-full bg-[#00f0ff]/15 border border-[#00f0ff]/40 shadow-[0_0_8px_rgba(0,240,255,0.25)]">
                      Accepted
                    </span>
                  </div>
                </div>
              </motion.div>
    
              {/* Card 3: Experience */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex-1 p-3.5 sm:p-4 rounded-2xl bg-[#070c18]/95 border border-white/[0.1] hover:border-[#00ffa3]/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,255,163,0.25)] backdrop-blur-2xl transition-all relative overflow-hidden group flex flex-col justify-center"
              >
                {/* Cyber Corner HUD Brackets */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00ffa3] opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ff007f] opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Left Neon Indicator Bar */}
                <div className="absolute left-0 top-2.5 bottom-2.5 w-0.5 rounded-r bg-gradient-to-b from-[#00ffa3] via-[#00f0ff] to-transparent opacity-80" />

                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00ffa3]/12 blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#00ffa3]/20 border border-[#00ffa3]/40 flex items-center justify-center shadow-[0_0_10px_rgba(0,255,163,0.35)] flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Briefcase className="w-3 h-3 text-[#00ffa3]" />
                    </div>
                    <h4 className="font-mono font-bold text-xs sm:text-sm text-white tracking-wide group-hover:text-[#00ffa3] transition-colors">
                      Experience
                    </h4>
                  </div>
                  <span className="text-[8.5px] sm:text-[9px] font-mono font-bold text-gray-500 group-hover:text-[#00ffa3] transition-colors">
                    ACTIVE_ROLE // VERIFIED
                  </span>
                </div>
                
                <div className="flex flex-col gap-0.5 font-mono pl-0.5">
                  <div>
                    <div className="text-white text-xs sm:text-[13px] font-bold leading-snug">
                      Full Stack Developer Intern
                    </div>
                    <div className="text-[#00ffa3] font-semibold text-[11px] tracking-wide mt-0.5">
                      GoPerch Innovations Pvt. Ltd.
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1.5">
                      <Calendar className="w-2.5 h-2.5 text-[#ff007f]" /> May 2026 – July 2026
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {["React", "Next.js", "FastAPI", "PostgreSQL", "Full Stack"].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-1.5 py-0.5 rounded-md bg-black/60 border border-white/10 text-gray-300 text-[8.5px] sm:text-[9px] font-mono hover:border-[#00f0ff]/50 hover:text-[#00f0ff] hover:shadow-[0_0_8px_rgba(0,240,255,0.3)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
  
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            VIEWPORT 2: PROFESSIONAL RECOGNITION (GOPERCH)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="min-h-0 lg:min-h-[calc(100vh-2rem)] flex flex-col justify-center py-2 lg:py-4">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3 justify-center">
              <Briefcase className="w-3.5 h-3.5 text-[#c084fc]" />
              <h3 className="font-mono font-bold text-base sm:text-lg text-white tracking-wide">
                Professional Recognition
              </h3>
            </div>
    
            <div className="relative group">
              {/* Cyber glow behind card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f0ff]/20 via-[#8a2be2]/20 to-[#ff007f]/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative p-4 sm:p-5 lg:p-6 rounded-3xl bg-[#070c18]/95 backdrop-blur-2xl border border-white/[0.08] shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col gap-3 overflow-hidden">
                {/* Giant Ambient Background Logo Shadow Watermark */}
                <div className="absolute -right-4 -bottom-8 opacity-[0.14] pointer-events-none z-0 transform -rotate-12 scale-110 select-none">
                  <Image
                    src="/goperch_logo_final_v5.png"
                    alt=""
                    width={380}
                    height={380}
                    className="object-contain filter drop-shadow-[0_0_40px_rgba(0,240,255,0.55)] drop-shadow-[0_0_80px_rgba(138,43,226,0.35)]"
                  />
                </div>

                {/* Header */}
                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                  {/* Company Logo with 3D Gaming Bird Fly-Out Burst Effect */}
                  <div 
                    className="relative w-16 h-16 sm:w-18 sm:h-18 flex-shrink-0 flex items-center justify-center group/logo hover:scale-105 transition-all duration-300 ease-out bg-[#070c18] border border-white/20 rounded-2xl"
                    style={{
                      boxShadow: "0 0 30px rgba(0,240,255,0.45), 0 0 60px rgba(138,43,226,0.3), 0 10px 25px rgba(0,0,0,0.85)",
                    }}
                  >
                    <CyberBirdFlyoutPortal size={54} />
                  </div>

                  <div className="flex flex-col justify-center font-mono">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-0.5 tracking-tight">
                      GoPerch Innovations Pvt. Ltd.
                    </h4>
                    <div className="text-[#00f0ff] font-semibold text-xs sm:text-sm mb-1">
                      Full Stack Developer Intern
                    </div>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[10px] sm:text-[11px] text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#ff007f]" />
                        <span>May 2026 — July 2026</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/30 text-[#00ffa3] font-bold shadow-[0_0_10px_rgba(0,255,163,0.2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ffa3] animate-pulse" />
                        <span>Internship Completed • July 2026</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Bullet Points */}
                <ul className="relative z-10 flex flex-col gap-1.5 text-gray-300 text-[11px] sm:text-xs leading-relaxed font-mono mt-0.5">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00f0ff] mt-0.5 text-[10px] flex-shrink-0">◆</span>
                    <span>Successfully completed a Full Stack Developer Internship at GoPerch Innovations Pvt. Ltd.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00f0ff] mt-0.5 text-[10px] flex-shrink-0">◆</span>
                    <span>Developed and maintained enterprise-grade web applications using React, Next.js, FastAPI, SQLAlchemy, and PostgreSQL.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00f0ff] mt-0.5 text-[10px] flex-shrink-0">◆</span>
                    <span>Built and integrated scalable REST APIs, implemented role-based access control, optimized database operations, and collaborated on real-world enterprise software.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00f0ff] mt-0.5 text-[10px] flex-shrink-0">◆</span>
                    <span>Fixed production bugs, performed end-to-end testing, resolved Git merge conflicts, and collaborated with the development team using Git and GitHub.</span>
                  </li>
                </ul>

                {/* Tech Badges */}
                <div className="relative z-10 flex flex-wrap gap-1.5 pt-0.5">
                  <span className="px-2 py-0.5 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-[10px] font-mono font-bold shadow-[0_0_8px_rgba(0,240,255,0.15)]">React</span>
                  <span className="px-2 py-0.5 rounded-lg bg-white/[0.05] border border-white/15 text-gray-300 text-[10px] font-mono font-bold">Next.js</span>
                  <span className="px-2 py-0.5 rounded-lg bg-[#00ffa3]/10 border border-[#00ffa3]/30 text-[#00ffa3] text-[10px] font-mono font-bold shadow-[0_0_8px_rgba(0,255,163,0.15)]">FastAPI</span>
                  <span className="px-2 py-0.5 rounded-lg bg-[#8a2be2]/15 border border-[#8a2be2]/30 text-[#c084fc] text-[10px] font-mono font-bold shadow-[0_0_8px_rgba(138,43,226,0.15)]">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded-lg bg-[#ff007f]/10 border border-[#ff007f]/30 text-[#ff007f] text-[10px] font-mono font-bold shadow-[0_0_8px_rgba(255,0,127,0.15)]">Full Stack</span>
                </div>

                {/* Verified Credentials Actions */}
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-2.5 mt-0.5 border-t border-white/10 pt-3">
                  <motion.a
                    href="https://drive.google.com/file/d/1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Completion Letter"
                    onMouseEnter={() => sounds.playHover()}
                    onClick={() => sounds.playClick()}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-[38px] sm:h-[40px] px-4 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] text-white text-xs font-bold font-mono shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,127,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Completion Letter</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://drive.google.com/uc?export=download&id=1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Completion Letter PDF"
                    onMouseEnter={() => sounds.playHover()}
                    onClick={() => sounds.playSuccess()}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-[38px] sm:h-[40px] px-4 rounded-xl bg-[#070c18] hover:bg-[#0c1322] border border-white/15 hover:border-[#00f0ff]/40 text-gray-200 hover:text-white text-xs font-bold font-mono transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </motion.a>

                  <motion.a
                    href="https://drive.google.com/file/d/1vKAPAXLWOSuNPVDywPAPcg7gMp7qZ78g/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Offer Letter"
                    onMouseEnter={() => sounds.playHover()}
                    onClick={() => sounds.playClick()}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-[38px] sm:h-[40px] px-4 rounded-xl bg-[#070c18] hover:bg-[#0c1322] border border-white/15 hover:border-[#ffb800]/40 text-gray-200 hover:text-white text-xs font-bold font-mono transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Trophy className="w-3.5 h-3.5 text-[#ffb800]" />
                    <span>Offer Letter</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
