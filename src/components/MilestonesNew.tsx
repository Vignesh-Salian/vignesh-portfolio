"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  ExternalLink, 
  Download, 
  Trophy, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Calendar,
  Radio,
  ChevronRight
} from "lucide-react";
import { sounds } from "@/lib/soundFx";

export const milestones = [
  {
    missionNumber: "01",
    type: "RESEARCH PUBLICATION",
    icon: Trophy,
    date: "2025 // PRESENTED",
    statusBadge: "PUBLISHED // IEEE ICCES '25",
    title: "IEEE ICCES 2025 Peer-Reviewed Research Publication",
    organization: "IEEE International Conference on Computer Communication and Embedded Systems",
    description: "Published and presented original computer vision research on high-speed ArUco marker spatial calibration and non-invasive facial distance metrics running at 150+ FPS with sub-millimeter precision.",
    tags: ["Computer Vision", "Camera Calibration", "IEEE Paper", "ArUco Markers", "150+ FPS"],
    color: "from-[#00f0ff] to-[#8a2be2]",
    accent: "#00f0ff",
    paperUrl: "https://drive.google.com/file/d/1x6QKomOKSH-slyzdLJyiucBERTP-iVN-/view?usp=drive_link",
  },
  {
    missionNumber: "02",
    type: "SPRINGER RESEARCH",
    icon: BookOpen,
    date: "2026 // ACCEPTED",
    statusBadge: "ACCEPTED // SPRINGER ICTIS '26",
    title: "Springer ICTIS 2026 Research Paper",
    organization: "Springer International Conference on Information and Communication Technology",
    description: "Original research on intelligent architectures and predictive machine learning models accepted for presentation and publication in Springer proceedings.",
    tags: ["Machine Learning", "Applied AI", "Springer Proceedings", "Human Detection"],
    color: "from-[#00ffa3] to-[#00f0ff]",
    accent: "#00ffa3",
    paperUrl: "https://drive.google.com/file/d/1yviB82_MDuaoudXd1Z72XSiFz3-oHXFm/view?usp=sharing",
  },
  {
    missionNumber: "03",
    type: "PROFESSIONAL INTERNSHIP",
    icon: Briefcase,
    date: "MAY 2026 — JULY 2026",
    statusBadge: "MISSION ACCOMPLISHED // GO PERCH",
    title: "Full Stack Developer Intern",
    organization: "GoPerch Innovations Pvt. Ltd.",
    description: "Architected enterprise-grade full-stack features using React, Next.js, FastAPI, SQLAlchemy, and PostgreSQL. Integrated scalable REST APIs, role-based access control, and optimized database query execution.",
    tags: ["React", "Next.js", "FastAPI", "SQLAlchemy", "PostgreSQL", "Full Stack"],
    color: "from-[#ff007f] to-[#8a2be2]",
    accent: "#ff007f",
    hasCredentials: true,
  },
  {
    missionNumber: "04",
    type: "ACADEMIC MASTERY",
    icon: GraduationCap,
    date: "2022 — 2026",
    statusBadge: "BACHELOR OF ENGINEERING",
    title: "B.Tech Information Science & Engineering",
    organization: "NMAM Institute of Technology (Karnataka, India)",
    description: (
      <span>
        Pursuing B.Tech in Information Science &amp; Engineering while maintaining a{" "}
        <span className="px-2 py-0.5 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/30 font-bold text-[#00f0ff] inline-block shadow-[0_0_10px_rgba(0,240,255,0.2)]">
          CGPA of 8.58
        </span>
        . Core coursework in Advanced Data Structures &amp; Algorithms, Deep Learning, Image Processing, Linear Algebra, Distributed Systems, and Database Architectures.
      </span>
    ),
    tags: ["Algorithms", "Deep Learning", "Linear Algebra", "Data Structures", "CGPA 8.58"],
    color: "from-[#ffb800] to-[#ff007f]",
    accent: "#ffb800",
  },
];

export default function MilestonesNew() {
  return (
    <section id="experience" className="py-24 border-t border-[#00f0ff]/20 relative">
      <div id="quest-log" className="absolute -top-20" />
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#8a2be2]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00ffa3]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/30 text-xs font-mono font-bold text-[#00ffa3]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MISSION_LOG // CHRONOLOGICAL_QUESTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              Mission Log &amp; Milestones
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              A chronological timeline of peer-reviewed scientific publications, enterprise engineering breakthroughs, and academic achievements.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#070c18] border border-[#00f0ff]/20 text-xs font-mono text-gray-300 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            <Radio className="w-3.5 h-3.5 text-[#00ffa3] animate-pulse" />
            <span>TIMELINE // ALL NODES VERIFIED</span>
          </div>
        </div>

        {/* Connected Glowing Timeline */}
        <div className="relative border-l-2 border-[#00f0ff]/30 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div 
                  className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 rounded-2xl bg-[#070c18] border-2 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-all z-10"
                  style={{ borderColor: m.accent }}
                >
                  <Icon className="w-4 h-4" style={{ color: m.accent }} />
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#070c18]/90 hover:bg-[#0c1322] border border-white/[0.08] hover:border-[#00f0ff]/50 transition-all space-y-4 shadow-[0_0_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden">
                  {/* Cyber Corner HUD Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff] opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff007f] opacity-40 group-hover:opacity-100 transition-opacity" />

                  {/* Top Meta Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-white/[0.06] text-gray-300 border border-white/10">
                        MISSION {m.missionNumber} // {m.type}
                      </span>
                      <span 
                        className="text-xs font-mono font-bold px-3 py-0.5 rounded-full border shadow-sm"
                        style={{ color: m.accent, borderColor: `${m.accent}40`, backgroundColor: `${m.accent}15` }}
                      >
                        {m.statusBadge}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                      <span>{m.date}</span>
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors font-mono">
                      {m.title}
                    </h3>
                    <div className="text-xs font-mono text-gray-400 mt-1">
                      ORGANIZATION: <span className="text-gray-200 font-semibold">{m.organization}</span>
                    </div>
                  </div>

                  <div className="text-sm sm:text-base text-gray-300 leading-relaxed font-mono">
                    {m.description}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {m.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-black/40 text-gray-400 border border-white/[0.06]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Paper Links if publication */}
                  {m.paperUrl && (
                    <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                      <a
                        href={m.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sounds.playHover()}
                        onClick={() => sounds.playClick()}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>READ RESEARCH PAPER</span>
                        <ExternalLink className="w-3 h-3 text-gray-300" />
                      </a>
                    </div>
                  )}

                  {/* Credentials / Verification Actions if GoPerch */}
                  {m.hasCredentials && (
                    <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                      <a
                        href="https://drive.google.com/file/d/1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sounds.playHover()}
                        onClick={() => sounds.playClick()}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>VIEW COMPLETION LETTER</span>
                      </a>

                      <a
                        href="https://drive.google.com/uc?export=download&id=1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sounds.playHover()}
                        onClick={() => sounds.playSuccess()}
                        className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-gray-200 hover:text-white text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>DOWNLOAD PDF</span>
                      </a>

                      <a
                        href="https://drive.google.com/file/d/1vKAPAXLWOSuNPVDywPAPcg7gMp7qZ78g/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sounds.playHover()}
                        onClick={() => sounds.playClick()}
                        className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-gray-200 hover:text-white text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                      >
                        <Trophy className="w-3.5 h-3.5 text-[#ffb800]" />
                        <span>OFFER LETTER</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
