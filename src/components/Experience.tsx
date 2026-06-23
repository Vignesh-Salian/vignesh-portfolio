"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Sparkles, FileText, BookOpen, GraduationCap, Download, ExternalLink, Award, LucideIcon } from "lucide-react";

interface ExperienceAction {
  text: string;
  url?: string;
  icon: LucideIcon;
  type: "gradient" | "glass" | "disabled";
  isDownload?: boolean;
  tooltip?: string;
  badge?: string;
}

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  icon: LucideIcon;
  details: React.ReactNode[];
  skills: string[];
  dotColor: string;
  badgeBorder: string;
  bulletColor: string;
  shadowColor: string;
  statusBadge?: string;
  statusBadgeColor?: string;
  statusPulseColor?: string;
  actions?: ExperienceAction[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "GoPerch Innovations Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "May 2026 – Present",
    icon: Briefcase,
    details: [
      "Selected as a Full Stack Developer Intern at GoPerch Innovations Pvt. Ltd.",
      "Working with React, Next.js, backend APIs, databases, testing, and debugging.",
      "Building and maintaining scalable full-stack web applications.",
      "Collaborating on real-world software projects and modern development workflows."
    ],
    skills: ["React", "Next.js", "APIs", "Databases", "Full Stack"],
    dotColor: "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] ring-purple-500/20",
    badgeBorder: "border-purple-500/20 hover:border-purple-500/40 text-purple-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]",
    bulletColor: "text-purple-400",
    shadowColor: "hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
    statusBadge: "Offer Letter Received",
    statusBadgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    statusPulseColor: "bg-emerald-400",
    actions: [
      {
        text: "View Offer Letter",
        url: "https://drive.google.com/file/d/1vKAPAXLWOSuNPVDywPAPcg7gMp7qZ78g/view?usp=sharing",
        icon: ExternalLink,
        type: "gradient",
      },
      {
        text: "Download Offer Letter",
        url: "https://drive.google.com/file/d/1vKAPAXLWOSuNPVDywPAPcg7gMp7qZ78g/view?usp=sharing",
        icon: Download,
        type: "glass",
        isDownload: true,
      },
      {
        text: "Completion Certificate",
        icon: Award,
        type: "disabled",
        badge: "Coming Soon",
        tooltip: "Certificate will be available after successful internship completion.",
      }
    ]
  },
  {
    id: 2,
    company: "IEEE ICCES 2025 Publication",
    role: "Research Presenter & Lead Developer",
    duration: "Oct 2025 – Present",
    icon: FileText,
    details: [
      "Designed and developed a real-time computer vision system using OpenCV and ArUco markers.",
      "Co-authored and published research in IEEE ICCES 2025.",
      "Achieved ~150 FPS with millimeter-level nasal-jaw distance measurement accuracy.",
      "Focused on camera calibration, precision optimization, and real-time processing."
    ],
    skills: ["Python", "OpenCV", "Computer Vision", "Research"],
    dotColor: "bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] ring-amber-500/20",
    badgeBorder: "border-amber-500/20 hover:border-amber-500/40 text-amber-300 hover:shadow-[0_0_10px_rgba(245,158,11,0.2)]",
    bulletColor: "text-amber-400",
    shadowColor: "hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]",
    statusBadge: "Published",
    statusBadgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    statusPulseColor: "bg-emerald-400",
    actions: [
      {
        text: "Read Research Paper",
        url: "https://drive.google.com/file/d/1x6QKomOKSH-slyzdLJyiucBERTP-iVN-/view?usp=drive_link",
        icon: BookOpen,
        type: "gradient",
      },
      {
        text: "Download PDF",
        url: "https://drive.google.com/file/d/1x6QKomOKSH-slyzdLJyiucBERTP-iVN-/view?usp=drive_link",
        icon: Download,
        type: "glass",
        isDownload: true,
      }
    ]
  },
  {
    id: 3,
    company: "Springer ICTIS 2026",
    role: "Research Author",
    duration: "2025 – 2026",
    icon: BookOpen,
    details: [
      "Developed a comparative framework for automated human detection.",
      "Evaluated multiple deep learning models on CCTV datasets.",
      "Achieved up to 96% accuracy.",
      "Paper accepted for Springer ICTIS 2026 publication."
    ],
    skills: ["Deep Learning", "Computer Vision", "Python", "Research"],
    dotColor: "bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.5)] group-hover:shadow-[0_0_25px_rgba(217,70,239,0.8)] ring-fuchsia-500/20",
    badgeBorder: "border-fuchsia-500/20 hover:border-fuchsia-500/40 text-fuchsia-300 hover:shadow-[0_0_10px_rgba(217,70,239,0.2)]",
    bulletColor: "text-fuchsia-400",
    shadowColor: "hover:border-fuchsia-500/30 hover:shadow-[0_0_30px_rgba(217,70,239,0.08)]",
    statusBadge: "Accepted",
    statusBadgeColor: "bg-purple-500/10 border-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    statusPulseColor: "bg-purple-400",
    actions: [
      {
        text: "View Publication",
        url: "https://drive.google.com/file/d/1yviB82_MDuaoudXd1Z72XSiFz3-oHXFm/view?usp=sharing",
        icon: BookOpen,
        type: "gradient",
      },
      {
        text: "Download PDF",
        url: "https://drive.google.com/file/d/1yviB82_MDuaoudXd1Z72XSiFz3-oHXFm/view?usp=sharing",
        icon: Download,
        type: "glass",
        isDownload: true,
      }
    ]
  },
  {
    id: 4,
    company: "NMAM Institute of Technology",
    role: "B.Tech Information Science & Engineering Student",
    duration: "Aug 2023 – Present",
    icon: GraduationCap,
    details: [
      "Pursuing B.Tech in Information Science & Engineering.",
      <span key="gpa">
        Maintaining a{" "}
        <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 font-semibold shadow-[0_0_12px_rgba(59,130,246,0.25)] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 inline-flex items-center gap-1.5">
          CGPA of 8.58
        </span>
      </span>,
      "Core areas include Machine Learning, Computer Vision, Data Structures & Algorithms, and Database Management Systems.",
      "Actively involved in AI research, publications, and software development projects.",
      "Passionate about building intelligent systems and solving real-world problems."
    ],
    skills: ["Python", "DSA", "Databases", "Machine Learning", "Computer Vision"],
    dotColor: "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] ring-blue-500/20",
    badgeBorder: "border-blue-500/20 hover:border-blue-500/40 text-blue-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]",
    bulletColor: "text-blue-400",
    shadowColor: "hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]",
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="experience" className="py-20 border-t border-white/5 relative">
      {/* Background ambient light glow */}
      <div className="absolute top-[20%] right-0 w-[40%] h-[40%] bg-purple-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[30%] h-[35%] bg-blue-500/3 blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-3 mb-24">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">✨ JOURNEY</span>
        </div>
        <h2 className="font-space font-bold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-300 tracking-tight">
          ✦ Experience & Education
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-[650px] leading-relaxed font-medium">
          A timeline of my professional software engineering internship, academic AI research publications, and education.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative pl-10 sm:pl-12 flex flex-col gap-14"
      >
        {/* Timeline Line with gradient */}
        <div className="absolute left-[18px] sm:left-[20px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500/10" />

        {experiences.map((exp) => {
          const IconComponent = exp.icon;
          return (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative flex flex-col gap-3 group"
            >
              {/* Timeline Node Dot/Badge (Centering line inside w-8 h-8 dot: center is exactly 18px on mobile, 20px on desktop) */}
              <div 
                className={`absolute -left-[38px] sm:-left-[44px] top-2.5 w-8 h-8 rounded-full flex items-center justify-center border-[3px] border-[#030014] ${exp.dotColor} ring-4 ring-transparent hover:ring-current z-10 transition-all duration-300 group-hover:scale-110`}
              >
                <IconComponent className="w-3.5 h-3.5 text-white" />
              </div>

              {/* Timeline Content Card */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-panel p-6 sm:p-8 rounded-2xl bg-[#0a0a10]/80 backdrop-blur-xl border border-white/[0.05] transition-all duration-300 ${exp.shadowColor}`}
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-space font-bold text-lg sm:text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-purple-300 mt-1">
                      {exp.role}
                    </p>
                  </div>
                  
                  {/* Duration & Status Badges */}
                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
                    {exp.statusBadge && (
                      <div className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold py-1.5 px-3 rounded-full border ${exp.statusBadgeColor || "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${exp.statusPulseColor || "bg-emerald-400"}`} />
                        <span>{exp.statusBadge}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold bg-white/[0.03] py-1.5 px-3.5 rounded-full border border-white/[0.06] shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Details list */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                      <ChevronRight className={`w-4 h-4 ${exp.bulletColor} flex-shrink-0 mt-0.5`} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill badges with neon shadows */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white/[0.02] border transition-all duration-300 ${exp.badgeBorder}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions Section */}
                {exp.actions && (
                  <div className="relative z-10 flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-6 border-t border-white/[0.05] pt-6">
                    {exp.actions.map((act, actIdx) => {
                      const ActIcon = act.icon;
                      if (act.type === "gradient" && act.url) {
                        return (
                          <motion.a
                            key={actIdx}
                            href={act.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto h-[52px] px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 border border-purple-500/30 text-white text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <ActIcon className="w-4 h-4" />
                            <span>{act.text}</span>
                          </motion.a>
                        );
                      }
                      
                      if (act.type === "glass" && act.url) {
                        return (
                          <motion.a
                            key={actIdx}
                            href={act.url}
                            download={act.isDownload}
                            target={act.isDownload ? undefined : "_blank"}
                            rel={act.isDownload ? undefined : "noopener noreferrer"}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto h-[52px] px-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-slate-200 hover:text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                          >
                            <ActIcon className="w-4 h-4" />
                            <span>{act.text}</span>
                          </motion.a>
                        );
                      }
                      
                      if (act.type === "disabled") {
                        return (
                          <div key={actIdx} className="relative group/tooltip w-full sm:w-auto">
                            <button
                              disabled
                              className="w-full sm:w-auto h-[52px] px-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] text-slate-500 text-sm font-semibold flex items-center justify-center gap-2 cursor-not-allowed"
                            >
                              <ActIcon className="w-4 h-4 text-slate-600" />
                              <span>{act.text}</span>
                              {act.badge && (
                                <span className="text-[9px] bg-slate-500/10 px-1.5 py-0.5 rounded border border-slate-500/20 text-slate-400 font-bold uppercase tracking-wider">
                                  {act.badge}
                                </span>
                              )}
                            </button>
                            
                            {act.tooltip && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-xl bg-black/90 border border-white/10 text-white text-[10px] text-center leading-normal opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 z-30 shadow-xl pointer-events-none">
                                {act.tooltip}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black/90" />
                              </div>
                            )}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
