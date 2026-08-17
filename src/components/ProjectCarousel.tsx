"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gamepad2, 
  Sparkles, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Layers, 
  Cpu, 
  Eye, 
  Activity, 
  Terminal 
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { sounds } from "@/lib/soundFx";

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  badge: string;
  description: string;
  stats: { label: string; value: string }[];
  tags: string[];
  github: string;
  demoAnchor?: string;
  neonColor: "cyan" | "pink" | "green" | "purple";
  gradient: string;
  coverAccent: string;
}

export const showcaseProjects: ProjectItem[] = [
  {
    id: "vidsnap",
    category: "AI & Multimedia",
    title: "VidSnapAI — Generative Short-Form Video Engine",
    badge: "GENERATIVE AI",
    description: "Automated video generation pipeline that orchestrates ElevenLabs neural voice synthesis, multimedia compilation, and dynamic sub-clip timings via FFmpeg CLI automation.",
    stats: [
      { label: "Synthesis Time", value: "< 12s" },
      { label: "Voice Quality", value: "Neural TTS" },
      { label: "Audio-Video", value: "FFmpeg Pipeline" },
    ],
    tags: ["Python", "Flask", "ElevenLabs API", "FFmpeg", "REST API"],
    github: "https://github.com/Vignesh-Salian/VidSnapAI",
    neonColor: "purple",
    gradient: "from-[#8a2be2]/30 via-[#070c18] to-[#ff007f]/20",
    coverAccent: "#8a2be2",
  },
  {
    id: "fraud",
    category: "Machine Learning",
    title: "ML Benchmark & Fraud Prediction Dashboard",
    badge: "ML TELEMETRY",
    description: "Comprehensive financial fraud detection system utilizing SMOTE resampling to counteract severe class imbalance, benchmarked across XGBoost, Random Forest, and Logistic Regression with interactive Streamlit telemetry.",
    stats: [
      { label: "Benchmark Acc", value: "99.4%" },
      { label: "Resampling", value: "SMOTE" },
      { label: "Telemetry", value: "Streamlit" },
    ],
    tags: ["Scikit-Learn", "SMOTE", "Pandas", "Streamlit", "Python"],
    github: "https://github.com/Vignesh-Salian/ml-benchmark-fraud-detection",
    demoAnchor: "#ml-lab",
    neonColor: "green",
    gradient: "from-[#00ffa3]/30 via-[#070c18] to-[#00f0ff]/20",
    coverAccent: "#00ffa3",
  },
  {
    id: "aruco",
    category: "Computer Vision",
    title: "Real-Time ArUco Distance Tracking System",
    badge: "IEEE ICCES '25",
    description: "Sub-millimeter real-time tracking algorithm for spatial nasal-jaw distance metrics operating at 150+ FPS with camera matrix calibration and contour triangulation. Accepted and presented at IEEE ICCES 2025.",
    stats: [
      { label: "Frame Rate", value: "150+ FPS" },
      { label: "Precision", value: "±0.5mm" },
      { label: "Research Conf", value: "IEEE '25" },
    ],
    tags: ["OpenCV", "ArUco Markers", "Python", "Spatial Vision", "IEEE Paper"],
    github: "https://github.com/Vignesh-Salian/Aruco-Distance-Measurement",
    demoAnchor: "#cv-lab",
    neonColor: "cyan",
    gradient: "from-[#00f0ff]/30 via-[#070c18] to-[#8a2be2]/20",
    coverAccent: "#00f0ff",
  },
  {
    id: "voxel",
    category: "3D Graphics",
    title: "Isometric Voxel Topography Canvas Engine",
    badge: "3D GRAPHICS",
    description: "Hardware-accelerated 2D Canvas isometric terrain elevation engine with trigonometric wave functions, zero-allocation precalculated RGB lookup tables (LUT), screen-space frustum culling, and low-latency cursor tracking.",
    stats: [
      { label: "Rendering", value: "Canvas 2D" },
      { label: "Render Lag", value: "< 2ms Lerp" },
      { label: "Mem Alloc", value: "0 / Frame" },
    ],
    tags: ["TypeScript", "Canvas 2D", "LUT Shading", "Trigonometry"],
    github: "https://github.com/Vignesh-Salian",
    demoAnchor: "#studio",
    neonColor: "pink",
    gradient: "from-[#ff007f]/30 via-[#070c18] to-[#ffb800]/20",
    coverAccent: "#ff007f",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextSlide = useCallback(() => {
    sounds.playClick();
    setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
  }, []);

  const prevSlide = useCallback(() => {
    sounds.playClick();
    setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const activeProject = showcaseProjects[currentIndex];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Top Carousel Navigation Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-1">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Gamepad2 className="w-3.5 h-3.5 animate-pulse" />
            <span>3D CAROUSEL // SLOT {currentIndex + 1} OF {showcaseProjects.length}</span>
          </span>
          <button
            onClick={() => {
              sounds.playHover();
              setIsAutoPlay(!isAutoPlay);
            }}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono flex items-center gap-1 transition-all ${
              isAutoPlay 
                ? "bg-[#00ffa3]/10 border-[#00ffa3]/30 text-[#00ffa3]" 
                : "bg-white/[0.04] border-white/10 text-gray-400"
            }`}
          >
            {isAutoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isAutoPlay ? "AUTOPLAY ON" : "PAUSED"}</span>
          </button>
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            onMouseEnter={() => sounds.playHover()}
            className="p-2 rounded-xl bg-[#070c18] border border-[#00f0ff]/30 hover:border-[#00f0ff] text-gray-300 hover:text-[#00f0ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:scale-105 active:scale-95"
            aria-label="Previous Game Card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#070c18] border border-white/10">
            {showcaseProjects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  sounds.playClick();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "w-6 bg-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.8)]" 
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            onMouseEnter={() => sounds.playHover()}
            className="p-2 rounded-xl bg-[#070c18] border border-[#00f0ff]/30 hover:border-[#00f0ff] text-gray-300 hover:text-[#00f0ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:scale-105 active:scale-95"
            aria-label="Next Game Card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main 3D Card Stage with AnimatePresence */}
      <div className="relative min-h-[440px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.94, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.94, x: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`w-full rounded-3xl bg-gradient-to-br ${activeProject.gradient} border border-[#00f0ff]/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden`}
          >
            {/* Cyber Corner HUD Notches */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff007f] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00ffa3] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8a2be2] pointer-events-none" />

            {/* Ambient Background Glow */}
            <div 
              className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 blur-[130px] pointer-events-none rounded-full"
              style={{ backgroundColor: activeProject.coverAccent, opacity: 0.2 }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#00f0ff]/15 border border-[#00f0ff]/40 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                    {activeProject.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    CATEGORY: <span className="text-white font-bold">{activeProject.category}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono">
                  {activeProject.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-black/50 text-[#00f0ff] border border-[#00f0ff]/20 shadow-[0_0_10px_rgba(0,240,255,0.08)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sounds.playHover()}
                    onClick={() => sounds.playClick()}
                    className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#00f0ff] text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  >
                    <GithubIcon className="w-4 h-4 text-[#00f0ff]" />
                    <span>SOURCE_REPO</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>

                  {activeProject.demoAnchor && (
                    <a
                      href={activeProject.demoAnchor}
                      onMouseEnter={() => sounds.playHover()}
                      onClick={() => sounds.playWarp()}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>LAUNCH SIMULATOR</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Telemetry Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-[#070c18]/90 border border-[#00f0ff]/20 shadow-[0_0_30px_rgba(0,0,0,0.6)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#00ffa3] flex items-center gap-1.5">
                      <Activity className="w-4 h-4 animate-pulse" />
                      TELEMETRY_DIAGNOSTICS
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">LIVE FEED</span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {activeProject.stats.map((st, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between"
                      >
                        <span className="text-xs font-mono text-gray-400">{st.label}</span>
                        <span className="text-sm font-bold text-white font-mono text-[#00f0ff]">{st.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Visual Arcade Progress Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                      <span>SYSTEM_OPTIMIZATION</span>
                      <span className="text-[#00ffa3]">100% READY</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden p-[1px]">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#00f0ff] via-[#00ffa3] to-[#8a2be2] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
