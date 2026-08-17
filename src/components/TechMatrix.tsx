"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Eye, 
  Layers, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Flame, 
  Award, 
  Activity 
} from "lucide-react";
import { sounds } from "@/lib/soundFx";

const domains = [
  {
    id: "ai",
    title: "AI & Neural Architectures",
    classType: "SPECIALIZATION // TIER 4",
    icon: Cpu,
    color: "from-[#8a2be2] to-[#ff007f]",
    neon: "#8a2be2",
    glow: "rgba(138, 43, 226, 0.2)",
    description: "Designing, training, and benchmarking ML models with automated preprocessing and SMOTE imbalanced sampling.",
    skills: [
      { name: "PyTorch & TensorFlow", level: "LVL 95 // EXPERT", power: 95, desc: "Model architecture & fine-tuning pipelines" },
      { name: "Scikit-Learn & SMOTE", level: "LVL 99 // MASTER", power: 99, desc: "Imbalanced classification & AUC optimization" },
      { name: "ElevenLabs & Voice AI", level: "LVL 92 // ADVANCED", power: 92, desc: "Neural audio synthesis orchestration" },
      { name: "Transformers & LLMs", level: "LVL 90 // ADVANCED", power: 90, desc: "Context engineering & structured agents" },
    ],
  },
  {
    id: "cv",
    title: "Computer Vision & Spatial Edge",
    classType: "RESEARCH CLASS // IEEE '25",
    icon: Eye,
    color: "from-[#00f0ff] to-[#00ffa3]",
    neon: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.2)",
    description: "Sub-millimeter precision spatial tracking and high-throughput video processing running at 150+ FPS.",
    skills: [
      { name: "OpenCV & ArUco", level: "LVL 99 // PUBLISHED", power: 99, desc: "IEEE '25 spatial tracking algorithm at 150 FPS" },
      { name: "FFmpeg Pipeline", level: "LVL 94 // PRODUCTION", power: 94, desc: "Automated video stream synthesis & filtering" },
      { name: "MediaPipe & FaceMesh", level: "LVL 91 // ADVANCED", power: 91, desc: "Real-time 468 landmark regression" },
      { name: "Camera Calibration", level: "LVL 93 // SPECIALIZED", power: 93, desc: "Intrinsic matrix & distortion correction" },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack & Cloud Systems",
    classType: "ENGINEERING CLASS // TIER 4",
    icon: Layers,
    color: "from-[#00ffa3] to-[#00f0ff]",
    neon: "#00ffa3",
    glow: "rgba(0, 255, 163, 0.2)",
    description: "Building responsive web interfaces, robust backend APIs, and distributed microservice architectures.",
    skills: [
      { name: "Next.js & React 19", level: "LVL 98 // EXPERT", power: 98, desc: "Server Components, Turbopack, & App Router" },
      { name: "TypeScript & Tailwind", level: "LVL 96 // EXPERT", power: 96, desc: "Type-safe UI design systems & Canvas" },
      { name: "Python / Flask / FastAPI", level: "LVL 94 // ADVANCED", power: 94, desc: "Asynchronous REST & WebSocket endpoints" },
      { name: "PostgreSQL & MongoDB", level: "LVL 90 // PROFICIENT", power: 90, desc: "Relational modeling, indexing, & caching" },
    ],
  },
  {
    id: "tools",
    title: "Data Engineering & DevOps",
    classType: "INFRASTRUCTURE // TIER 3",
    icon: Database,
    color: "from-[#ffb800] to-[#ff007f]",
    neon: "#ffb800",
    glow: "rgba(255, 184, 0, 0.2)",
    description: "Statistical analysis, model monitoring dashboards, and reproducible microservice deployments.",
    skills: [
      { name: "Pandas & NumPy", level: "LVL 97 // EXPERT", power: 97, desc: "Vectorized numeric transformations" },
      { name: "Streamlit Dashboards", level: "LVL 95 // ADVANCED", power: 95, desc: "Interactive model evaluation & telemetry" },
      { name: "Docker & Containers", level: "LVL 89 // PROFICIENT", power: 89, desc: "Reproducible containerized environments" },
      { name: "Git & CI/CD Pipelines", level: "LVL 94 // DAILY OPS", power: 94, desc: "Automated testing & versioned deployments" },
    ],
  },
];

export default function TechMatrix() {
  const [activeTab, setActiveTab] = useState(domains[0].id);
  const currentDomain = domains.find((d) => d.id === activeTab) || domains[0];

  return (
    <section id="skill-tree" className="py-24 border-t border-[#00f0ff]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8a2be2]/10 border border-[#8a2be2]/30 text-xs font-mono font-bold text-[#c084fc]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SKILL_TREE // TALENT_MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Abilities & Tech Stack
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              Algorithmic proficiencies, mathematical toolkits, and production-grade architectures.
            </p>
          </div>

          {/* Quick Domain Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#070c18] border border-[#00f0ff]/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isActive = domain.id === activeTab;
              return (
                <button
                  key={domain.id}
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab(domain.id);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{domain.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Domain Showcase Card */}
        <motion.div
          key={currentDomain.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-10 rounded-3xl bg-[#070c18]/90 border border-[#00f0ff]/30 shadow-[0_0_50px_rgba(0,0,0,0.7)] relative overflow-hidden backdrop-blur-2xl"
        >
          {/* Cyber Corner HUD Notches */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ff007f] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00ffa3] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#8a2be2] pointer-events-none" />

          {/* Subtle Corner Glow */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 blur-[130px] pointer-events-none rounded-full"
            style={{ backgroundColor: currentDomain.glow }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Domain Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-[#00ffa3]">
                <currentDomain.icon className="w-3.5 h-3.5" />
                <span>{currentDomain.classType}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-mono">
                {currentDomain.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {currentDomain.description}
              </p>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">CLASS_MASTERY</span>
                  <span className="text-[#00f0ff] font-bold">OPTIMIZED</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="w-[96%] h-full rounded-full bg-gradient-to-r from-[#00f0ff] via-[#00ffa3] to-[#ff007f]" />
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentDomain.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#00f0ff]/40 transition-all space-y-2 group shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors font-mono">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                      {skill.level}
                    </span>
                    <span className="text-[11px] font-mono text-[#00ffa3] font-bold">
                      {skill.power}%
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {skill.desc}
                  </p>

                  {/* Skill Power Bar */}
                  <div className="w-full h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-[#00f0ff] to-[#00ffa3]"
                      style={{ width: `${skill.power}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
