"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Sparkles, FileText, BookOpen, GraduationCap, Download, ExternalLink, Award, LucideIcon } from "lucide-react";
import { sounds } from "@/lib/soundFx";

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
    duration: "May 2026 – July 2026",
    icon: Briefcase,
    details: [
      "Successfully completed a Full Stack Developer Internship at GoPerch Innovations Pvt. Ltd.",
      "Developed and maintained enterprise-grade web applications using React, Next.js, FastAPI, SQLAlchemy, and PostgreSQL.",
      "Built and integrated scalable REST APIs, implemented role-based access control, optimized database operations, and collaborated on real-world enterprise software.",
      "Fixed production bugs, performed end-to-end testing, resolved Git merge conflicts, and collaborated with the development team using Git and GitHub."
    ],
    skills: ["React", "Next.js", "FastAPI", "PostgreSQL", "Full Stack"],
    dotColor: "border-[#ff007f] text-[#ff007f] shadow-[0_0_12px_rgba(255,0,127,0.4)]",
    badgeBorder: "border-[#ff007f]/30 text-[#ff007f] bg-[#ff007f]/10",
    bulletColor: "text-[#ff007f]",
    shadowColor: "hover:border-[#ff007f]/40 hover:shadow-[0_0_25px_rgba(255,0,127,0.15)]",
    statusBadge: "Internship Completed",
    statusBadgeColor: "bg-[#00ffa3]/10 border-[#00ffa3]/30 text-[#00ffa3] shadow-[0_0_12px_rgba(0,255,163,0.15)]",
    statusPulseColor: "bg-[#00ffa3]",
    actions: [
      {
        text: "View Completion Letter",
        url: "https://drive.google.com/file/d/1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm/view",
        icon: ExternalLink,
        type: "gradient",
      },
      {
        text: "Download PDF",
        url: "https://drive.google.com/uc?export=download&id=1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm",
        icon: Download,
        type: "glass",
      },
      {
        text: "Offer Letter",
        url: "https://drive.google.com/file/d/1vKAPAXLWOSuNPVDywPAPcg7gMp7qZ78g/view?usp=sharing",
        icon: Award,
        type: "glass",
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
    dotColor: "border-[#00f0ff] text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.4)]",
    badgeBorder: "border-[#00f0ff]/30 text-[#00f0ff] bg-[#00f0ff]/10",
    bulletColor: "text-[#00f0ff]",
    shadowColor: "hover:border-[#00f0ff]/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]",
    statusBadge: "Published",
    statusBadgeColor: "bg-[#00ffa3]/10 border-[#00ffa3]/30 text-[#00ffa3] shadow-[0_0_12px_rgba(0,255,163,0.15)]",
    statusPulseColor: "bg-[#00ffa3]",
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
    dotColor: "border-[#8a2be2] text-[#c084fc] shadow-[0_0_12px_rgba(138,43,226,0.4)]",
    badgeBorder: "border-[#8a2be2]/30 text-[#c084fc] bg-[#8a2be2]/15",
    bulletColor: "text-[#c084fc]",
    shadowColor: "hover:border-[#8a2be2]/40 hover:shadow-[0_0_25px_rgba(138,43,226,0.15)]",
    statusBadge: "Accepted",
    statusBadgeColor: "bg-[#8a2be2]/15 border-[#8a2be2]/30 text-[#c084fc] shadow-[0_0_12px_rgba(138,43,226,0.15)]",
    statusPulseColor: "bg-[#8a2be2]",
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
        <span className="px-2 py-0.5 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/30 font-bold text-[#00f0ff] inline-block shadow-[0_0_8px_rgba(0,240,255,0.2)]">
          CGPA of 8.58
        </span>
      </span>,
      "Core areas include Machine Learning, Computer Vision, Data Structures & Algorithms, and Database Management Systems.",
      "Actively involved in AI research, publications, and software development projects.",
      "Passionate about building intelligent systems and solving real-world problems."
    ],
    skills: ["Python", "DSA", "Databases", "Machine Learning", "Computer Vision"],
    dotColor: "border-[#ffb800] text-[#ffb800] shadow-[0_0_12px_rgba(255,184,0,0.4)]",
    badgeBorder: "border-[#ffb800]/30 text-[#ffb800] bg-[#ffb800]/10",
    bulletColor: "text-[#ffb800]",
    shadowColor: "hover:border-[#ffb800]/40 hover:shadow-[0_0_25px_rgba(255,184,0,0.15)]",
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="experience" className="min-h-0 lg:min-h-[calc(100vh-2rem)] flex flex-col justify-center py-6 sm:py-8 border-t border-[#00f0ff]/20 relative overflow-hidden">
      {/* Background ambient light glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#8a2be2]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#00f0ff]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="space-y-1.5 mb-8">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/30 text-[10px] font-mono font-bold text-[#00ffa3]">
              <Sparkles className="w-3 h-3" />
              <span>JOURNEY // PROGRESSION_TIMELINE</span>
            </div>
          </div>
          <h2 className="font-mono font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            ✦ Experience &amp; Education
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-[650px] leading-relaxed font-mono">
            A timeline of my professional software engineering internship, academic AI research publications, and education.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative pl-6 sm:pl-10 flex flex-col gap-6 sm:gap-7 border-l-2 border-[#00f0ff]/25 ml-2 sm:ml-4"
        >
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex flex-col gap-2 group"
              >
                {/* Timeline Node Dot */}
                <div 
                  className={`absolute -left-[38px] sm:-left-[54px] top-3 w-8 h-8 rounded-xl flex items-center justify-center border-2 bg-[#070c18] ${exp.dotColor} z-10 transition-all duration-300 group-hover:scale-105`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </div>

                {/* Timeline Content Card */}
                <motion.div 
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`p-4 sm:p-5 rounded-2xl bg-[#070c18]/95 backdrop-blur-2xl border border-white/[0.08] transition-all duration-300 ${exp.shadowColor} shadow-[0_0_25px_rgba(0,0,0,0.6)] relative overflow-hidden`}
                >
                  {/* Cyber Corner Notches */}
                  <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00f0ff] opacity-30 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ff007f] opacity-30 group-hover:opacity-100 transition-opacity" />

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-3">
                      {exp.id === 1 && (
                        <div 
                          onMouseEnter={() => {
                            try { sounds.playPowerUp(); } catch {}
                          }}
                          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#040814] border border-[#00f0ff]/40 p-1.5 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.35)] group/bird cursor-pointer overflow-hidden"
                          title="GoPerch Cyber Bird"
                        >
                          {/* Radial Cyber Ambient Glow */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 via-[#8a2be2]/15 to-[#ff007f]/20 rounded-2xl blur-md group-hover/bird:opacity-100 transition-opacity" />

                          {/* Pulsing Cyber Energy Ring */}
                          <motion.div
                            animate={{
                              scale: [1, 1.25, 1],
                              opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 rounded-2xl border border-[#00f0ff]/40 pointer-events-none"
                          />

                          {/* Cyber Corner Notches on Logo Box */}
                          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none" />
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#ff007f] pointer-events-none" />

                          {/* Dynamic Running / Soaring Bird Body */}
                          <motion.div
                            animate={{
                              y: [0, -3, 2, 0],
                              scale: [1, 1.06, 0.98, 1],
                              rotate: [0, -2, 2, 0],
                            }}
                            whileHover={{
                              scale: 1.18,
                              rotate: -4,
                              filter: "brightness(1.5) drop-shadow(0 0 15px #00f0ff)",
                            }}
                            transition={{
                              duration: 3.0,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="relative z-10 w-full h-full flex items-center justify-center"
                          >
                            <Image
                              src="/goperch_logo_final_v5.png"
                              alt="GoPerch"
                              width={44}
                              height={44}
                              className="object-contain select-none drop-shadow-[0_0_12px_rgba(0,240,255,0.8)] transition-all duration-300"
                              priority
                            />
                          </motion.div>

                          {/* Trailing Cyber Energy Streak on Hover */}
                          <motion.div 
                            className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-[#ff007f] rounded-full pointer-events-none opacity-0 group-hover/bird:opacity-100 group-hover/bird:translate-x-12 transition-all duration-700"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-mono font-bold text-sm sm:text-base text-white group-hover:text-[#00f0ff] transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <p className="text-xs font-semibold text-[#c084fc] font-mono mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    
                    {/* Duration & Status Badges */}
                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0 font-mono">
                      {exp.statusBadge && (
                        <div className={`flex items-center gap-1.5 text-[10px] font-semibold py-0.5 px-2.5 rounded-full border ${exp.statusBadgeColor || "bg-[#00ffa3]/10 border-[#00ffa3]/30 text-[#00ffa3]"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${exp.statusPulseColor || "bg-[#00ffa3]"}`} />
                          <span>{exp.statusBadge}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-300 font-semibold bg-black/40 py-0.5 px-2.5 rounded-lg border border-white/10">
                        <Calendar className="w-3 h-3 text-[#00f0ff]" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Details list */}
                  <ul className="flex flex-col gap-2 mb-3.5 font-mono">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed font-medium">
                        <ChevronRight className={`w-3.5 h-3.5 ${exp.bulletColor} flex-shrink-0 mt-0.5`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-medium transition-all duration-300 ${exp.badgeBorder}`}
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions Section */}
                  {exp.actions && (
                    <div className="relative z-10 flex flex-col sm:flex-row flex-wrap items-center gap-2.5 mt-3.5 border-t border-white/[0.08] pt-3.5 font-mono">
                      {exp.actions.map((act, actIdx) => {
                        const ActIcon = act.icon;
                        if (act.type === "gradient" && act.url) {
                          return (
                            <motion.a
                              key={actIdx}
                              href={act.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={() => sounds.playHover()}
                              onClick={() => sounds.playClick()}
                              whileHover={{ scale: 1.02, y: -1 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full sm:w-auto h-[40px] px-4 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] text-white text-xs font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,127,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                              <ActIcon className="w-3.5 h-3.5" />
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
                              onMouseEnter={() => sounds.playHover()}
                              onClick={() => sounds.playSuccess()}
                              whileHover={{ scale: 1.02, y: -1 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full sm:w-auto h-[40px] px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                            >
                              <ActIcon className="w-3.5 h-3.5" />
                              <span>{act.text}</span>
                            </motion.a>
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
      </div>
    </section>
  );
}
