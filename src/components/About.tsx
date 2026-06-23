"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Award, Briefcase, Smile, Sparkles, Building2, ExternalLink, Download, MapPin, Calendar, Trophy, BookOpen } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "3+",
    label: "Years Experience",
    icon: Briefcase,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    value: "25+",
    label: "Projects Completed",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    value: "15+",
    label: "Happy Clients",
    icon: Smile,
    color: "from-cyan-500 to-emerald-500",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="py-20 border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-purple-500/5 blur-[120px] pointer-events-none" />
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-10">
        <Sparkles className="w-5 h-5 text-purple-400" />
        <h2 className="font-space font-bold text-2xl sm:text-3xl text-white tracking-wide">
          About Me
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
      >
        {/* Left text column */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <div className="glass-panel p-6 sm:p-7 rounded-2xl relative overflow-hidden flex-grow flex flex-col justify-center">
            {/* Glowing Accent Spot */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-blue-500" />
            
            <h3 className="text-xl font-space font-semibold text-white mb-4">
              Designing Intelligent Systems for the Future
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              I am an Information Science Engineering student passionate about Artificial Intelligence, Computer Vision, and Full Stack Development. My work focuses on building intelligent systems, scalable applications, and research-driven solutions that solve real-world problems.
            </p>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              I have published research in IEEE ICCES 2025 and have another paper accepted for Springer ICTIS 2026. My interests span Computer Vision, Machine Learning, Generative AI, and modern web technologies.
            </p>
 
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Beyond academics, I enjoy transforming ideas into impactful products by combining research, software engineering, and clean user experiences. I strive to build solutions that are practical, scalable, and meaningful.
            </p>
          </div>
        </motion.div>
 
        {/* Right stats cards column */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 space-y-4"
        >
          {/* Card 1: Education */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel p-5 rounded-2xl flex flex-col gap-3 border border-white/[0.05] hover:border-purple-500/20 bg-white/[0.02] backdrop-blur-md relative overflow-hidden transition-all duration-300"
          >
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_0%_0%,rgba(168,85,247,0.06),transparent)] pointer-events-none" />
            {/* Left Accent Strip */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-2xl" />
            
            <div className="flex items-center gap-2.5 relative z-10">
              <Image src="/education_icon.png" alt="Education" width={28} height={28} className="rounded-md drop-shadow-[0_0_8px_rgba(139,92,246,0.4)] select-none" />
              <h4 className="font-space font-semibold text-base text-white tracking-wide">Education</h4>
            </div>
            
            <div className="flex flex-col gap-1 relative z-10">
              <div className="text-slate-300 text-[13px] font-medium leading-relaxed">
                B.Tech Information Science & Engineering
              </div>
              <div className="text-white text-[13px] font-semibold tracking-wide">
                NMAM Institute of Technology
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-[11px] text-[#94A3B8]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" /> Karnataka, India
                </span>
                <span className="text-[#94A3B8]/30">•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#94A3B8]" /> 2022 – 2026
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Publications */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel p-5 rounded-2xl flex flex-col gap-3 border border-white/[0.05] hover:border-cyan-500/20 bg-white/[0.02] backdrop-blur-md relative overflow-hidden transition-all duration-300"
          >
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_0%_0%,rgba(6,182,212,0.06),transparent)] pointer-events-none" />
            {/* Left Accent Strip */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-2xl" />
            
            <div className="flex items-center gap-2.5 relative z-10">
              <Image src="/publications_icon.png" alt="Publications" width={28} height={28} className="rounded-md drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] select-none" />
              <h4 className="font-space font-semibold text-base text-white tracking-wide">Publications</h4>
            </div>
            
            <div className="flex flex-col divide-y divide-white/[0.06] relative z-10">
              <div className="pb-2.5 flex items-center justify-between gap-4">
                <span className="text-[13px] font-medium text-slate-200 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-400" /> IEEE ICCES 2025
                </span>
                <span className="text-[13px] font-semibold text-emerald-400">
                  Published
                </span>
              </div>
              <div className="pt-2.5 flex items-center justify-between gap-4">
                <span className="text-[13px] font-medium text-slate-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" /> Springer ICTIS 2026
                </span>
                <span className="text-[13px] font-semibold text-cyan-400">
                  Accepted
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Experience */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group glass-panel p-5 rounded-2xl flex flex-col gap-3 border border-white/[0.05] hover:border-emerald-500/20 bg-white/[0.02] backdrop-blur-md relative overflow-hidden transition-all duration-300"
          >
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_0%_0%,rgba(16,185,129,0.04),rgba(139,92,246,0.03),transparent)] pointer-events-none" />
            {/* Left Accent Strip */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-2xl" />
            
            <div className="flex items-center gap-2.5 relative z-10">
              <Image src="/experience_icon.png" alt="Experience" width={28} height={28} className="rounded-md drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] select-none" />
              <h4 className="font-space font-semibold text-base text-white tracking-wide">Experience</h4>
            </div>
            
            <div className="flex flex-col gap-3.5 relative z-10">
              <div>
                <div className="text-slate-300 text-[13px] font-medium">
                  Full Stack Developer Intern
                </div>
                <div className="text-purple-400 font-semibold text-[13px] tracking-wide drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] mt-0.5">
                  GoPerch Innovations Pvt. Ltd.
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" /> May 2026 – Present
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["React", "Next.js", "Node.js", "APIs", "Databases"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-slate-300 text-[10px] font-medium hover:bg-white/[0.06] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROFESSIONAL RECOGNITION
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-20 w-full max-w-[800px] mx-auto"
      >
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Briefcase className="w-6 h-6 text-purple-400" />
          <h3 className="font-space font-bold text-xl sm:text-2xl text-white tracking-wide">
            Professional Recognition
          </h3>
        </div>

        <div className="relative group">
          {/* Subtle blue-purple glow effect behind the card */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
          
          <div className="relative glass-panel p-6 sm:p-8 rounded-2xl bg-[#0a0a10]/80 backdrop-blur-xl border border-white/[0.08] flex flex-col gap-6 overflow-hidden">
            {/* Giant Faint Background Logo */}
            <div className="absolute -right-10 -bottom-20 opacity-[0.06] pointer-events-none z-0 transform -rotate-12 scale-125">
              <Image src="/goperch_logo_final_v5.png" alt="" width={450} height={450} className="object-contain" />
            </div>

            {/* Left Accent Strip */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 z-10" />

            {/* Header */}
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-[28px]">
                {/* Company Logo with Premium Effects */}
                <div 
                  className="relative w-[100px] h-[100px] flex-shrink-0 flex items-center justify-center group/logo hover:scale-105 transition-all duration-300 ease-out" 
                  style={{ 
                    boxShadow: "0 0 40px rgba(139,92,246,0.25), 0 0 80px rgba(59,130,246,0.15)", 
                    borderRadius: "28px" 
                  }}
                >
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
                    <div className="absolute -inset-[50%] bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-[spin_12s_linear_infinite]" />
                  </div>
                  {/* Container Background */}
                  <div className="absolute inset-[1px] rounded-[27px] bg-[#8B5CF6]/20 backdrop-blur-xl border border-white/[0.08]" />
                  {/* Official GoPerch Logo */}
                  <Image src="/goperch_logo_final_v5.png" alt="GoPerch" width={70} height={70} className="relative z-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                    GoPerch Innovations Pvt. Ltd.
                  </h4>
                  <div className="text-purple-400 font-medium text-sm sm:text-base mb-1.5">
                    Full Stack Developer Intern
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <div className="text-[#94A3B8] text-[14px] flex items-center gap-2">
                      <Image src="/calendar_icon_official.png" alt="Calendar" width={18} height={18} className="rounded-md drop-shadow-[0_0_6px_rgba(139,92,246,0.3)] select-none" />
                      <span>May 2026 — Present</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>🟢 Offer Letter Received • May 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Bullet Points */}
            <ul className="relative z-10 flex flex-col gap-3 ml-1 text-[#B8B8C5] text-sm sm:text-base leading-[1.8]">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-2 text-[10px]">●</span>
                <span>Selected as Full Stack Developer Intern at GoPerch Innovations Pvt. Ltd.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-2 text-[10px]">●</span>
                <span>Working with React, Next.js, backend APIs and databases.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-2 text-[10px]">●</span>
                <span>Building and testing scalable modern web applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-2 text-[10px]">●</span>
                <span>Collaborating on real-world full stack projects.</span>
              </li>
            </ul>

            {/* Tech Badges */}
            <div className="relative z-10 flex flex-wrap gap-2.5">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium shadow-[0_0_10px_rgba(6,182,212,0.1)]">React</span>
              <span className="px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-300 text-xs font-medium shadow-[0_0_10px_rgba(148,163,184,0.1)]">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium shadow-[0_0_10px_rgba(168,85,247,0.1)]">Full Stack</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium shadow-[0_0_10px_rgba(59,130,246,0.1)]">APIs</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium shadow-[0_0_10px_rgba(16,185,129,0.1)]">Databases</span>
            </div>

            {/* Actions */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-4 border-t border-white/[0.05] pt-6">
              <motion.a
                href="https://drive.google.com/file/d/1vKAPAXLWOSuNPVDywPAPcg7gMp7qZ78g/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto h-[52px] px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 border border-purple-500/30 text-white text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Offer Letter</span>
              </motion.a>
              
              <motion.a
                href="https://drive.google.com/file/d/1vKAPAXLWOSuNPVDywPAPcg7gMp7qZ78g/view?usp=sharing"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto h-[52px] px-6 rounded-2xl bg-white/[0.03] hover:bg-purple-500/[0.05] border border-white/[0.08] hover:border-purple-500/30 text-slate-200 hover:text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </motion.a>

              <div className="relative group/tooltip w-full sm:w-auto">
                <button
                  disabled
                  className="w-full sm:w-auto h-[52px] px-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] text-slate-500 text-sm font-semibold flex items-center justify-center gap-2 cursor-not-allowed"
                >
                  <Trophy className="w-4 h-4 text-slate-600" />
                  <span>Completion Certificate</span>
                  <span className="text-[9px] bg-slate-500/10 px-1.5 py-0.5 rounded border border-slate-500/20 text-slate-400 font-bold uppercase tracking-wider">
                    Coming Soon
                  </span>
                </button>
                
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-xl bg-black/90 border border-white/10 text-white text-[10px] text-center leading-normal opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 z-30 shadow-xl pointer-events-none">
                  Certificate will be available after successful completion of the internship.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
