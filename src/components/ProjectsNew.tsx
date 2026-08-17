"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Gamepad2, 
  Sparkles, 
  ExternalLink, 
  Cpu, 
  Eye, 
  Layers, 
  Activity, 
  FolderGit2,
  Radio,
  Zap
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectCarousel, { showcaseProjects } from "@/components/ProjectCarousel";
import { sounds } from "@/lib/soundFx";

const filterOptions = ["All", "AI & Multimedia", "Machine Learning", "Computer Vision", "3D Graphics"];

export default function ProjectsNew() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" 
    ? showcaseProjects 
    : showcaseProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 border-t border-[#00f0ff]/20 relative">
      <div id="arcade-vault" className="absolute -top-20" />
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00f0ff]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff007f]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono font-bold text-[#00f0ff]">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>GAME_LIBRARY // ARCADE_SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Featured Quests &amp; Systems
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              Immersive AI pipelines, peer-reviewed computer vision engines, and scalable distributed architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#070c18] border border-[#00f0ff]/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            {filterOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sounds.playClick();
                  setActiveFilter(cat);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. 3D Game Showcase Carousel */}
        <div className="mb-14">
          <ProjectCarousel />
        </div>

        {/* 2. Arcade Catalog Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <FolderGit2 className="w-4 h-4 text-[#00ffa3]" />
              <span className="text-white font-bold">ALL ARCHIVED TITLES</span>
              <span>({filtered.length} TITLES MATCHED)</span>
            </div>
            <span className="text-[11px] font-mono text-[#00f0ff] flex items-center gap-1.5">
              <Radio className="w-3 h-3 animate-pulse text-[#00ffa3]" />
              <span>LIVE_STATUS // VERIFIED</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${project.gradient} bg-[#070c18] border border-white/[0.08] hover:border-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Cyber Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00f0ff] opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#ff007f] opacity-40 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4 relative z-10">
                  {/* Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#00f0ff]/15 border border-[#00f0ff]/30 text-[#00f0ff]">
                      {project.badge}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => sounds.playHover()}
                      onClick={() => sounds.playClick()}
                      className="p-2 rounded-xl bg-white/[0.05] hover:bg-[#00f0ff]/20 text-gray-300 hover:text-white border border-white/10 hover:border-[#00f0ff] transition-all cursor-pointer"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors font-mono">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-black/60 border border-white/[0.08] backdrop-blur-md">
                    {project.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <div className="text-xs font-bold text-[#00ffa3] font-mono">{stat.value}</div>
                        <div className="text-[10px] text-gray-400 font-mono">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-6 relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-black/40 text-gray-300 border border-white/[0.08]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {project.demoAnchor && (
                      <a
                        href={project.demoAnchor}
                        onMouseEnter={() => sounds.playHover()}
                        onClick={() => sounds.playWarp()}
                        className="text-xs font-mono font-bold text-[#00ffa3] hover:text-white flex items-center gap-1"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>SIMULATOR</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => sounds.playHover()}
                      onClick={() => sounds.playClick()}
                      className="text-xs font-mono font-bold text-[#00f0ff] hover:text-[#ff007f] flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>REPO_ACCESS</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
