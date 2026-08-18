"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Sparkles, 
  Eye, 
  Layers, 
  Database, 
  Flame, 
  Code2,
  Wrench,
  Radio
} from "lucide-react";
import { sounds } from "@/lib/soundFx";

export const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    imagePath: "/skills_lang.png",
    technologies: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    icon: Code2,
    accent: "#00ffa3",
    borderHover: "hover:border-[#00ffa3]/50",
    glowColor: "rgba(0, 255, 163, 0.2)",
    badgeColor: "bg-[#00ffa3]/10 text-[#00ffa3] border-[#00ffa3]/30",
  },
  {
    id: 2,
    title: "Computer Vision",
    imagePath: "/skills_cv.png",
    technologies: ["OpenCV", "ArUco Markers", "Camera Calibration", "Image Processing"],
    icon: Eye,
    accent: "#00f0ff",
    borderHover: "hover:border-[#00f0ff]/50",
    glowColor: "rgba(0, 240, 255, 0.2)",
    badgeColor: "bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30",
  },
  {
    id: 3,
    title: "Machine Learning",
    imagePath: "/skills_ml.png",
    technologies: ["Scikit-Learn", "NumPy", "Pandas", "SMOTE", "Data Preprocessing"],
    icon: Cpu,
    accent: "#8a2be2",
    borderHover: "hover:border-[#8a2be2]/50",
    glowColor: "rgba(138, 43, 226, 0.2)",
    badgeColor: "bg-[#8a2be2]/15 text-[#c084fc] border-[#8a2be2]/30",
  },
  {
    id: 4,
    title: "Full Stack Development",
    imagePath: "/skills_fs.png",
    technologies: ["React", "Next.js", "Flask", "REST APIs", "Responsive UI"],
    icon: Layers,
    accent: "#ff007f",
    borderHover: "hover:border-[#ff007f]/50",
    glowColor: "rgba(255, 0, 127, 0.2)",
    badgeColor: "bg-[#ff007f]/10 text-[#ff007f] border-[#ff007f]/30",
  },
  {
    id: 5,
    title: "Databases",
    imagePath: "/skills_db.png",
    technologies: ["MySQL", "MongoDB", "PostgreSQL"],
    icon: Database,
    accent: "#ffb800",
    borderHover: "hover:border-[#ffb800]/50",
    glowColor: "rgba(255, 184, 0, 0.2)",
    badgeColor: "bg-[#ffb800]/10 text-[#ffb800] border-[#ffb800]/30",
  },
  {
    id: 6,
    title: "Tools & Technologies",
    imagePath: "/skills_tools.png",
    technologies: ["Git", "GitHub", "VS Code", "Streamlit", "FFmpeg"],
    icon: Wrench,
    accent: "#00f0ff",
    borderHover: "hover:border-[#00f0ff]/50",
    glowColor: "rgba(0, 240, 255, 0.2)",
    badgeColor: "bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30",
  },
];

export const currentlyExploring = [
  { imagePath: "/explore_llm.png", name: "LLMs", category: "Generative AI", delay: 0 },
  { imagePath: "/explore_docker.png", name: "Docker", category: "Containers", delay: 0.15 },
  { imagePath: "/explore_aws.png", name: "AWS", category: "Cloud Infra", delay: 0.3 },
  { imagePath: "/explore_fastapi.png", name: "FastAPI", category: "Microservices", delay: 0.45 },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
    <section id="skills" className="min-h-0 lg:min-h-[calc(100vh-2rem)] flex flex-col justify-center py-4 sm:py-6 border-t border-[#00f0ff]/20 relative overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#00f0ff]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8a2be2]/12 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#8a2be2]/15 border border-[#8a2be2]/30 text-[10px] font-mono font-bold text-[#c084fc]">
              <Sparkles className="w-3 h-3" />
              <span>TECH_ARSENAL // SKILL_MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              Tech Arsenal &amp; Abilities
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-mono max-w-xl">
              Technologies I use to build intelligent systems, scalable applications, and modern web experiences.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#070c18] border border-[#00f0ff]/20 text-[11px] font-mono text-gray-300 shadow-[0_0_12px_rgba(0,240,255,0.1)]">
            <Radio className="w-3 h-3 text-[#00ffa3] animate-pulse" />
            <span>ARSENAL_INTEGRITY: 100% OPERATIONAL</span>
          </div>
        </div>

        {/* Holographic Skill Cards Grid: 3 columns on desktop, compact and clean */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((cat) => {
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                onMouseEnter={() => sounds.playHover()}
                className={`group relative p-4 sm:p-5 rounded-2xl bg-[#070c18]/95 border border-white/[0.08] ${cat.borderHover} backdrop-blur-2xl transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between`}
              >
                {/* Cyber Corner HUD Brackets */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00f0ff] opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ff007f] opacity-30 group-hover:opacity-100 transition-opacity" />

                {/* Ambient glow on hover */}
                <div 
                  className="absolute top-0 right-0 w-28 h-28 blur-3xl pointer-events-none opacity-0 group-hover:opacity-25 transition-opacity duration-500 rounded-full"
                  style={{ backgroundColor: cat.accent }}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3.5 relative z-10">
                    <div 
                      className="relative w-10 h-10 rounded-xl overflow-hidden bg-black/50 border border-white/[0.1] p-1 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm"
                      style={{ boxShadow: `0 0 12px ${cat.glowColor}` }}
                    >
                      <Image 
                        src={cat.imagePath} 
                        alt={cat.title} 
                        fill 
                        className="object-cover" 
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-sm sm:text-base text-white group-hover:text-[#00f0ff] transition-colors leading-tight">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono text-gray-400">CATEGORY // 0{cat.id}</span>
                    </div>
                  </div>

                  {/* Badges Container */}
                  <div className="flex flex-wrap gap-1.5 relative z-10 pt-0.5">
                    {cat.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-medium transition-all duration-200 ${cat.badgeColor} hover:scale-105 shadow-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-Card HUD Telemetry */}
                <div className="mt-4 pt-2.5 border-t border-white/[0.08] relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span className="text-gray-500">OPTIMIZATION</span>
                  <span className="text-[#00ffa3] font-bold">READY // VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section: Currently Exploring Banner */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-6 w-full"
        >
          <div className="relative group rounded-2xl overflow-hidden border border-[#00f0ff]/30 bg-[#070c18]/95 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            {/* Cyber Corner HUD Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff007f] pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/30 text-[10px] font-mono font-bold text-[#00ffa3]">
                  <Flame className="w-3 h-3 animate-pulse" />
                  <span>ACTIVE R&amp;D QUEUE</span>
                </div>
                <h3 className="font-mono font-bold text-base sm:text-lg text-white tracking-wide">
                  Currently Exploring
                </h3>
                <p className="text-xs text-gray-400 font-mono">
                  Concepts, tools, and platforms I am active in research and development.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {currentlyExploring.map((item) => (
                  <motion.div
                    key={item.name}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/50 border border-white/10 hover:border-[#00f0ff]/50 transition-colors shadow-sm"
                  >
                    <div className="w-5 h-5 relative rounded-md overflow-hidden flex-shrink-0">
                      <Image 
                        src={item.imagePath} 
                        alt={item.name} 
                        fill 
                        className="object-cover" 
                        sizes="20px"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white">{item.name}</div>
                      <div className="text-[9px] font-mono text-gray-400">{item.category}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
