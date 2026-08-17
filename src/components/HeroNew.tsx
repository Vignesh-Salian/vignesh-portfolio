"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Gamepad2, 
  Cpu, 
  Eye, 
  Download, 
  Zap, 
  ShieldCheck, 
  Flame, 
  Radio,
  MapPin,
  Smile,
  Activity,
  Code2
} from "lucide-react";
import { VoxelTopographyGrid } from "@/components/ui/voxel-topography-grid";
import { sounds } from "@/lib/soundFx";

const titles = [
  "AI Engineer",
  "Computer Vision Researcher",
  "Full Stack Developer",
  "ML Enthusiast",
  "Problem Solver",
];

const engineeringTracks = [
  "Deep Learning & Vision Systems",
  "Edge-Optimized Neural Networks",
  "Distributed Full-Stack Architectures",
  "Real-Time Telemetry & Computer Vision",
];

export default function HeroNew() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);

    const trackInterval = setInterval(() => {
      setTrackIndex((prev) => (prev + 1) % engineeringTracks.length);
    }, 3600);

    return () => {
      clearInterval(titleInterval);
      clearInterval(trackInterval);
    };
  }, []);

  return (
    <section id="overview" className="min-h-screen pt-28 sm:pt-32 pb-16 relative flex flex-col justify-center overflow-hidden">
      {/* Retro-futuristic synthwave & neon ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-br from-[#00f0ff]/15 via-[#8a2be2]/15 to-[#ff007f]/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#ff007f]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-20 left-10 w-[400px] h-[300px] bg-[#00ffa3]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6">
        
        {/* Top Arcade Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#070c18]/90 border border-[#00f0ff]/30 backdrop-blur-xl text-xs font-mono text-gray-200 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffa3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffa3]"></span>
            </span>
            <span className="text-[#00f0ff] font-bold">PLAYER // DEVELOPER // ONLINE</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">INITIALIZING PLAYER PROFILE...</span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-gray-400">
            <span className="px-2.5 py-1 rounded-full bg-[#070c18]/90 border border-white/[0.08] text-[#00ffa3] flex items-center gap-1.5 shadow-sm">
              <Radio className="w-3 h-3 animate-pulse" /> PING: 12ms // LOC: 13.34° N, 74.74° E
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#070c18]/90 border border-[#ff007f]/30 text-[#ff007f]">
              ARCADE STATION v2.6.4
            </span>
          </div>
        </motion.div>

        {/* Headline & Track Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-8 space-y-4">
            
            {/* Player Name and Cinematic Titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <Smile className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span className="text-[#00f0ff] font-semibold">Welcome to the cybernetic hub of</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04] font-mono">
                Vignesh{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#c084fc] to-[#ff007f] neon-glow-cyan">
                  N Salian
                </span>
              </h1>

              {/* Dynamic Animated Role Switcher */}
              <div className="h-10 flex items-center pt-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titleIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-[#00ffa3]"
                  >
                    <span className="text-gray-500">&gt;</span>
                    <span className="text-gradient-arcade">{titles[titleIndex]}</span>
                    <span className="w-2.5 h-6 bg-[#00f0ff] animate-pulse inline-block" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Current Quest Tracker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 pt-1"
            >
              <div className="h-6 px-2.5 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs flex items-center font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                CURRENT_QUEST
              </div>
              <p className="text-sm sm:text-base text-gray-200 font-medium h-7 flex items-center font-mono">
                {engineeringTracks[trackIndex]}
              </p>
            </motion.div>

            {/* Full Portfolio Bio Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2 pt-1"
            >
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                I am an Information Science Engineering student passionate about Artificial Intelligence, Computer Vision, and Full Stack Development. I build intelligent systems, research-driven applications, and scalable software solutions to solve real-world problems.
              </p>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
                Specializing in high-performance computer vision pipelines, machine learning benchmarking, and scalable interactive gaming & web applications. Published researcher at IEEE ICCES 2025 and accepted at Springer ICTIS 2026.
              </p>
            </motion.div>

            {/* Neon Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              {/* Primary Download Resume CTA */}
              <a
                href="https://drive.google.com/uc?export=download&id=1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playSuccess()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] hover:opacity-95 text-white text-xs sm:text-sm font-bold font-mono shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,127,0.6)] hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2.5 group"
              >
                <Download className="w-4 h-4 animate-bounce" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              {/* Explore Games / Projects CTA */}
              <a
                href="#projects"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="px-5 py-3.5 rounded-xl bg-[#0c1322] hover:bg-[#111a30] border border-[#00f0ff]/40 text-white text-xs sm:text-sm font-semibold font-mono shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:border-[#00f0ff] transition-all flex items-center gap-2 group"
              >
                <Gamepad2 className="w-4 h-4 text-[#00f0ff] group-hover:rotate-12 transition-transform" />
                <span>Explore Game Library</span>
                <ArrowRight className="w-4 h-4 text-[#00f0ff] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Character Sheet / About CTA */}
              <a
                href="#about"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="px-4 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 hover:text-white text-xs sm:text-sm font-medium backdrop-blur-md transition-all flex items-center gap-2 font-mono"
              >
                <ShieldCheck className="w-4 h-4 text-[#a855f7]" />
                <span>Player Profile</span>
              </a>

              {/* 3D Holodeck Studio */}
              <a
                href="#studio"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playWarp()}
                className="px-4 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 hover:text-white text-xs sm:text-sm font-medium backdrop-blur-md transition-all flex items-center gap-2 font-mono"
              >
                <Zap className="w-4 h-4 text-[#00ffa3]" />
                <span>3D Holodeck</span>
              </a>

              {/* CLI Terminal Shortcut */}
              <a
                href="#terminal"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="px-4 py-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-gray-400 hover:text-[#00f0ff] text-xs sm:text-sm font-mono transition-all flex items-center gap-2"
                title="Access Mainframe Terminal"
              >
                <Terminal className="w-4 h-4 text-[#8a2be2]" />
                <span>CLI</span>
              </a>
            </motion.div>
          </div>

          {/* Quick Metrics Bento Arcade Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3 self-center">
            <div className="p-4 rounded-2xl bg-[#070c18]/90 border border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] backdrop-blur-xl relative overflow-hidden group hover:border-[#00f0ff] transition-all">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f0ff]/10 blur-xl pointer-events-none" />
              <div className="text-2xl font-bold text-white font-mono flex items-center gap-1">
                150<span className="text-xs text-[#00f0ff] font-mono font-bold">FPS</span>
              </div>
              <div className="text-xs text-gray-400 mt-1 font-mono">Real-Time OpenCV Tracking</div>
              <div className="mt-2 text-[10px] text-[#00ffa3] font-mono">IEEE ICCES &apos;25</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070c18]/90 border border-[#ff007f]/30 shadow-[0_0_20px_rgba(255,0,127,0.15)] backdrop-blur-xl relative overflow-hidden group hover:border-[#ff007f] transition-all">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff007f]/10 blur-xl pointer-events-none" />
              <div className="text-2xl font-bold text-[#ff007f] font-mono">2x PAPERS</div>
              <div className="text-xs text-gray-400 mt-1 font-mono">IEEE &apos;25 &amp; Springer &apos;26</div>
              <div className="mt-2 text-[10px] text-[#ff007f] font-mono">Peer-Reviewed Research</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070c18]/90 border border-[#00ffa3]/30 shadow-[0_0_20px_rgba(0,255,163,0.15)] backdrop-blur-xl relative overflow-hidden group hover:border-[#00ffa3] transition-all">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00ffa3]/10 blur-xl pointer-events-none" />
              <div className="text-2xl font-bold text-[#00ffa3] font-mono">99.4%</div>
              <div className="text-xs text-gray-400 mt-1 font-mono">SMOTE ML Benchmark</div>
              <div className="mt-2 text-[10px] text-[#00ffa3] font-mono">Fraud Prediction AUC</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070c18]/90 border border-[#8a2be2]/30 shadow-[0_0_20px_rgba(138,43,226,0.15)] backdrop-blur-xl relative overflow-hidden group hover:border-[#8a2be2] transition-all">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#8a2be2]/10 blur-xl pointer-events-none" />
              <div className="text-2xl font-bold text-[#c084fc] font-mono">25+</div>
              <div className="text-xs text-gray-400 mt-1 font-mono">Completed Quests</div>
              <div className="mt-2 text-[10px] text-[#c084fc] font-mono">Production &amp; R&amp;D</div>
            </div>
          </div>
        </div>

        {/* Live Interactive Hero Canvas Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden border border-[#00f0ff]/30 bg-[#050814] shadow-[0_0_50px_rgba(0,240,255,0.15)]"
        >
          {/* Header Bar of the Canvas Stage */}
          <div className="px-5 py-3 border-b border-[#00f0ff]/20 bg-[#070c18]/80 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff007f] shadow-[0_0_8px_rgba(255,0,127,0.8)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffb800] shadow-[0_0_8px_rgba(255,184,0,0.8)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ffa3] shadow-[0_0_8px_rgba(0,255,163,0.8)]" />
              </div>
              <span className="ml-2 font-bold text-[#00f0ff] hidden sm:inline font-mono">
                3D_HOLODECK // TRIGONOMETRIC_VOXEL_MATRIX
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="text-[#00ffa3] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ffa3] animate-ping" />
                ENGINE_ACTIVE
              </span>
              <span className="hidden md:inline text-gray-500 font-mono">60 FPS // 0 ALLOC</span>
            </div>
          </div>

          {/* Voxel Topography Component */}
          <div className="w-full">
            <VoxelTopographyGrid
              tileSize={26}
              maxHeight={65}
              primaryColor="#00f0ff"
              wireColor="rgba(0, 240, 255, 0.35)"
              speed={0.016}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
