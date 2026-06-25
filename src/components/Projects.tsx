"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

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
    badgeColor: "bg-purple-500/10 border-purple-500/20 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
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
    badgeColor: "bg-blue-500/10 border-blue-500/20 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
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
    badgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="projects" className="py-20 border-t border-white/5 relative">
      <div className="absolute bottom-0 right-0 w-[40%] h-[30%] bg-purple-500/5 blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-white tracking-tight">
            ✦ Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-[600px] leading-relaxed">
            Research-driven AI systems and full-stack applications built to solve real-world problems.
          </p>
        </div>
        <a 
          href="https://github.com/Vignesh-Salian" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1.5 group/link self-start md:self-auto px-4 py-2 rounded-xl bg-purple-500/5 border border-purple-500/10 hover:bg-purple-500/10 hover:border-purple-500/20"
        >
          <span>View All Projects</span>
          <span className="transition-transform group-hover/link:translate-x-1">→</span>
        </a>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col h-full rounded-[32px] transition-all duration-300"
          >
            {/* Soft blue-purple glow behind on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/15 rounded-[32px] blur-lg opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            {/* Container to clip children and apply glass-panel styles */}
            <div className="relative h-full flex flex-col rounded-[32px] overflow-hidden bg-[#0a0a10]/60 backdrop-blur-xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 flex-grow z-10">
              {/* Project Image Panel */}
              <div className="relative w-full h-[180px] overflow-hidden bg-black/40 border-b border-white/5">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10]/80 via-transparent to-transparent" />
                
                {/* Badge Overlay */}
                {proj.badgeText && (
                  <div className={`absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-semibold backdrop-blur-md ${proj.badgeColor}`}>
                    {proj.badgeIcon && (
                      <Image 
                        src={proj.badgeIcon} 
                        alt="" 
                        width={14} 
                        height={14} 
                        className="object-contain select-none" 
                      />
                    )}
                    <span>{proj.badgeText}</span>
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                <div>
                  <h3 className="font-space font-bold text-base sm:text-lg text-white mb-2 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                    <Image src={proj.icon} alt={`${proj.title} Icon`} width={24} height={24} className="rounded-md object-contain" />
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] sm:text-xs font-semibold shadow-[inset_0_0_10px_rgba(168,85,247,0.15)] hover:bg-purple-500/20 hover:border-purple-500/40 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:-translate-y-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Button - Premium Cybernetic GitHub Button */}
                  <div className="border-t border-white/5 pt-5 mt-auto">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-purple-500/20 hover:border-purple-500/50 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] overflow-hidden"
                    >
                      <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
                      <GithubIcon />
                      <span>View Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
