"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    imagePath: "/skills_lang.png",
    technologies: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    glowClass: "bg-emerald-500/[0.03]",
    borderHoverClass: "hover:border-emerald-500/20",
    badgeHoverClass: "group-hover:border-emerald-500/15 group-hover:text-emerald-300",
    lineGradients: "from-emerald-500/0 via-emerald-500/60 to-emerald-500/0",
    iconColorClass: "group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.02]",
  },
  {
    id: 2,
    title: "Computer Vision",
    imagePath: "/skills_cv.png",
    technologies: ["OpenCV", "ArUco Markers", "Camera Calibration", "Image Processing"],
    glowClass: "bg-blue-500/[0.03]",
    borderHoverClass: "hover:border-blue-500/20",
    badgeHoverClass: "group-hover:border-blue-500/15 group-hover:text-blue-300",
    lineGradients: "from-blue-500/0 via-blue-500/60 to-blue-500/0",
    iconColorClass: "group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.02]",
  },
  {
    id: 3,
    title: "Machine Learning",
    imagePath: "/skills_ml.png",
    technologies: ["Scikit-Learn", "NumPy", "Pandas", "SMOTE", "Data Preprocessing"],
    glowClass: "bg-purple-500/[0.03]",
    borderHoverClass: "hover:border-purple-500/20",
    badgeHoverClass: "group-hover:border-purple-500/15 group-hover:text-purple-300",
    lineGradients: "from-purple-500/0 via-purple-500/60 to-purple-500/0",
    iconColorClass: "group-hover:border-purple-500/30 group-hover:bg-purple-500/[0.02]",
  },
  {
    id: 4,
    title: "Full Stack Development",
    imagePath: "/skills_fs.png",
    technologies: ["React", "Next.js", "Flask", "REST APIs", "Responsive UI"],
    glowClass: "bg-pink-500/[0.03]",
    borderHoverClass: "hover:border-pink-500/20",
    badgeHoverClass: "group-hover:border-pink-500/15 group-hover:text-pink-300",
    lineGradients: "from-pink-500/0 via-pink-500/60 to-pink-500/0",
    iconColorClass: "group-hover:border-pink-500/30 group-hover:bg-pink-500/[0.02]",
  },
  {
    id: 5,
    title: "Databases",
    imagePath: "/skills_db.png",
    technologies: ["MySQL", "MongoDB"],
    glowClass: "bg-indigo-500/[0.03]",
    borderHoverClass: "hover:border-indigo-500/20",
    badgeHoverClass: "group-hover:border-indigo-500/15 group-hover:text-indigo-300",
    lineGradients: "from-indigo-500/0 via-indigo-500/60 to-indigo-500/0",
    iconColorClass: "group-hover:border-indigo-500/30 group-hover:bg-indigo-500/[0.02]",
  },
  {
    id: 6,
    title: "Tools & Technologies",
    imagePath: "/skills_tools.png",
    technologies: ["Git", "GitHub", "VS Code", "Streamlit", "FFmpeg"],
    glowClass: "bg-cyan-500/[0.03]",
    borderHoverClass: "hover:border-cyan-500/20",
    badgeHoverClass: "group-hover:border-cyan-500/15 group-hover:text-cyan-300",
    lineGradients: "from-cyan-500/0 via-cyan-500/60 to-cyan-500/0",
    iconColorClass: "group-hover:border-cyan-500/30 group-hover:bg-cyan-500/[0.02]",
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="skills" className="py-20 border-t border-white/5 relative">
      <div className="absolute top-[20%] left-0 w-[40%] h-[30%] bg-blue-500/5 blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-14 max-w-[700px]">
        <div className="flex items-center gap-2">
          <span className="text-purple-400 text-lg">✦</span>
          <h2 className="font-space font-bold text-2xl sm:text-3xl text-white tracking-wide">
            My Tech Arsenal
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
          Technologies I use to build intelligent systems, scalable applications, and modern web experiences.
        </p>
      </div>

      {/* Grid: 2 columns desktop, 1 column mobile */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[28px]"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className={`group relative glass-panel p-8 rounded-[28px] overflow-hidden border border-white/[0.05] ${cat.borderHoverClass} bg-white/[0.01] backdrop-blur-md transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.15)]`}
          >
            {/* Background Spot Glow */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${cat.glowClass} blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />
            
            {/* Hover Accent Line */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cat.lineGradients} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />

            {/* Header */}
            <div className="flex items-center gap-4.5 mb-6 relative z-10">
              <div className={`relative w-12 h-12 rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.08] ${cat.iconColorClass} transition-all duration-300 flex-shrink-0`}>
                <Image 
                  src={cat.imagePath} 
                  alt={cat.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  sizes="48px"
                />
              </div>
              <h3 className="font-space font-semibold text-lg text-white tracking-wide">
                {cat.title}
              </h3>
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {cat.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.02] border border-white/[0.06] text-slate-300 ${cat.badgeHoverClass} transition-all duration-200`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section: Currently Exploring */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-[28px] w-full"
      >
        <div className="relative group rounded-[28px] overflow-hidden border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(139,92,246,0.03)]">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,92,246,0.04),transparent)] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col gap-1">
              <h3 className="font-space font-bold text-lg text-white tracking-wide">
                Currently Exploring
              </h3>
              <p className="text-sm text-slate-400">
                Concepts, tools, and platforms I am active in research and development.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {[
                { imagePath: "/explore_llm.png", name: "LLMs", delay: 0 },
                { imagePath: "/explore_docker.png", name: "Docker", delay: 0.15 },
                { imagePath: "/explore_aws.png", name: "AWS", delay: 0.3 },
                { imagePath: "/explore_fastapi.png", name: "FastAPI", delay: 0.45 },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                  className="px-4.5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-sm font-medium text-slate-200 hover:text-white hover:border-purple-500/20 hover:bg-white/[0.04] transition-all duration-300 flex items-center gap-2.5 select-none shadow-[0_4px_12px_rgba(0,0,0,0.15)] group/explore"
                >
                  <div className="relative w-5 h-5 rounded-md overflow-hidden bg-white/[0.02] border border-white/[0.05] flex-shrink-0">
                    <Image 
                      src={item.imagePath} 
                      alt={item.name} 
                      fill 
                      className="object-cover group-hover/explore:scale-110 transition-transform duration-300"
                      sizes="20px"
                    />
                  </div>
                  {item.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
