"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { sounds } from "@/lib/soundFx";

// Github SVG Icon
const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "VidSnapAI — AI Video Generator",
    icon: "/vidsnap_icon.png",
    description: "AI-powered Flask application that generates short-form videos from uploaded media using ElevenLabs TTS and FFmpeg automation.",
    image: "/vidsnap_ai.png",
    tags: ["Python", "Flask", "ElevenLabs", "FFmpeg"],
    githubUrl: "https://github.com/Vignesh-Salian/VidSnapAI",
    badgeText: "Featured",
    badgeIcon: "/featured_badge_icon_v1.png",
    badgeColor: "bg-[#8a2be2]/15 border-[#8a2be2]/30 text-[#c084fc] shadow-[0_0_12px_rgba(138,43,226,0.2)]",
    borderAccent: "hover:border-[#8a2be2]/50",
  },
  {
    id: 2,
    title: "ML Credit Card Fraud Detection",
    icon: "/fraud_icon.png",
    description: "Machine learning pipeline using SMOTE with a Streamlit dashboard for fraud prediction and model benchmarking.",
    image: "/fraud_detection_ml.png",
    tags: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/Vignesh-Salian/ml-benchmark-fraud-detection",
    badgeText: "Machine Learning",
    badgeIcon: "/ml_badge_icon_v1.png",
    badgeColor: "bg-[#00ffa3]/15 border-[#00ffa3]/30 text-[#00ffa3] shadow-[0_0_12px_rgba(0,255,163,0.2)]",
    borderAccent: "hover:border-[#00ffa3]/50",
  },
  {
    id: 3,
    title: "ArUco Marker Distance Measurement System",
    icon: "/aruco_icon.png",
    description: "Real-time OpenCV system for nasal-jaw distance measurement achieving 150 FPS with millimeter-level accuracy.",
    image: "/aruco_opencv.png",
    tags: ["Python", "OpenCV", "ArUco", "Computer Vision"],
    githubUrl: "https://github.com/Vignesh-Salian/Aruco-Distance-Measurement",
    badgeText: "IEEE ICCES 2025",
    badgeIcon: "/ieee_badge_icon_v1.png",
    badgeColor: "bg-[#00f0ff]/15 border-[#00f0ff]/30 text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.2)]",
    borderAccent: "hover:border-[#00f0ff]/50",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="projects" className="py-8 sm:py-10 border-t border-[#00f0ff]/20 relative">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#00f0ff]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8a2be2]/12 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[10px] font-mono font-bold text-[#00f0ff]">
              <Sparkles className="w-3 h-3" />
              <span>PORTFOLIO // DIGITAL_LIBRARY</span>
            </div>
            <h2 className="font-mono font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              ✦ Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-[600px] leading-relaxed font-mono">
              Research-driven AI systems and full-stack applications built to solve real-world problems.
            </p>
          </div>
          
          <a 
            href="https://github.com/Vignesh-Salian" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playClick()}
            className="text-xs font-mono font-bold text-[#00f0ff] hover:text-white transition-all flex items-center gap-1.5 self-start md:self-auto px-3.5 py-2 rounded-xl bg-[#070c18] border border-[#00f0ff]/30 hover:border-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.15)] group/link"
          >
            <span>View All Projects</span>
            <span className="transition-transform group-hover/link:translate-x-1">→</span>
          </a>
        </div>

        {/* Projects Grid: 3-column compact responsive cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group relative flex flex-col h-full rounded-2xl transition-all duration-300"
            >
              {/* Cyber card container */}
              <div className={`relative h-full flex flex-col rounded-2xl overflow-hidden bg-[#070c18]/95 backdrop-blur-2xl border border-white/[0.08] ${proj.borderAccent} transition-all duration-300 flex-grow z-10 shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]`}>
                
                {/* Cyber Corner Notches */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00f0ff] opacity-30 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ff007f] opacity-30 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

                {/* Project Image Panel */}
                <div className="relative w-full h-[155px] sm:h-[165px] overflow-hidden bg-black/60 border-b border-white/[0.08]">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent opacity-80" />
                  
                  {/* Badge Overlay */}
                  {proj.badgeText && (
                    <div className={`absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold backdrop-blur-md ${proj.badgeColor}`}>
                      {proj.badgeIcon && (
                        <Image 
                          src={proj.badgeIcon} 
                          alt="" 
                          width={12} 
                          height={12} 
                          className="object-contain select-none" 
                        />
                      )}
                      <span>{proj.badgeText}</span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <h3 className="font-mono font-bold text-sm sm:text-base text-white mb-1.5 group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                      <Image src={proj.icon} alt={`${proj.title} Icon`} width={20} height={20} className="rounded-md object-contain" />
                      <span>{proj.title}</span>
                    </h3>
                    <p className="text-xs text-gray-300 font-mono leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-black/40 border border-white/[0.08] text-gray-300 text-[10px] font-mono hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Gaming Action Button */}
                    <div className="border-t border-white/[0.08] pt-3 mt-auto">
                      <motion.a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sounds.playHover()}
                        onClick={() => sounds.playClick()}
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn relative w-full h-[40px] flex items-center justify-center gap-2 px-4 rounded-xl bg-gradient-to-r from-[#00f0ff]/15 via-[#8a2be2]/20 to-[#ff007f]/15 border border-[#00f0ff]/40 hover:border-[#00f0ff] hover:bg-gradient-to-r hover:from-[#00f0ff]/25 hover:via-[#8a2be2]/30 hover:to-[#ff007f]/25 text-xs font-mono font-bold text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] overflow-hidden cursor-pointer"
                      >
                        {/* Gaming Button Corner Brackets */}
                        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f0ff] opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ff007f] opacity-60 group-hover/btn:opacity-100 transition-opacity" />

                        {/* Animated Light Shimmer */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                        <GithubIcon />
                        <span className="tracking-wide">VIEW REPOSITORY</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#00f0ff] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
