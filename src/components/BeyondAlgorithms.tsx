"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Palette, 
  PenTool, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Maximize2 
} from "lucide-react";

interface ArtworkCard {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  glowColor: string;
}

const artworks: ArtworkCard[] = [
  {
    id: 1,
    title: "Tiger Portrait",
    category: "PENCIL SKETCH",
    description: "Hand-drawn tiger portrait created using graphite shading and detailed fur textures.",
    image: "/tiger_sketch.jpg",
    glowColor: "rgba(168,85,247,0.35)", // Purple glow
  },
  {
    id: 2,
    title: "Kitten Portrait",
    category: "GRAPHITE ART",
    description: "Realistic kitten sketch showcasing fine detailing and soft shading techniques.",
    image: "/kitten_sketch.jpg",
    glowColor: "rgba(168,85,247,0.35)", // Purple glow
  },
];

export default function BeyondAlgorithms() {
  const [activeArtId, setActiveArtId] = useState<number | null>(null);

  const activeIndex = artworks.findIndex((art) => art.id === activeArtId);
  const activeArt = activeIndex !== -1 ? artworks[activeIndex] : null;

  const handlePrev = () => {
    if (activeIndex === -1) return;
    const prevIndex = (activeIndex - 1 + artworks.length) % artworks.length;
    setActiveArtId(artworks[prevIndex].id);
  };

  const handleNext = () => {
    if (activeIndex === -1) return;
    const nextIndex = (activeIndex + 1) % artworks.length;
    setActiveArtId(artworks[nextIndex].id);
  };

  const toggleFullscreen = () => {
    const element = document.getElementById("modal-image-frame");
    if (!element) return;
    
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleDownload = (imgUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = `${title.toLowerCase().replace(/\s+/g, "_")}_sketch.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Keyboard navigation & Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeArtId === null) return;
      
      if (e.key === "Escape") {
        setActiveArtId(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArtId, activeIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
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
    <section id="beyond-algorithms" className="py-20 border-t border-white/5 relative">
      {/* Subtle ambient background glow */}
      <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-purple-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] bg-blue-500/3 blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 mb-16"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Creative Side</span>
        </div>
        <h2 className="font-space font-bold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-300 tracking-tight">
          ✨ Beyond Algorithms
        </h2>
        <p className="text-purple-400/90 italic font-medium text-sm sm:text-base font-space">
          "Engineering trains the mind; art fuels the imagination."
        </p>
        <p className="text-gray-400 text-sm sm:text-base max-w-[750px] leading-relaxed">
          While I enjoy building intelligent systems and research-driven applications, I also express creativity through pencil sketching. Drawing helps me develop patience, focus, and attention to detail—qualities that complement my engineering mindset.
        </p>
      </motion.div>

      {/* Gallery Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-purple-400" />
          <h3 className="font-space font-semibold text-lg text-white tracking-wide">
            Selected Artwork
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-center"
        >
          {artworks.map((art) => (
            <motion.div
              key={art.id}
              variants={cardVariants}
              onClick={() => setActiveArtId(art.id)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] bg-[#0a0a10]/80 backdrop-blur-xl border border-white/[0.08] p-5 flex flex-col justify-between h-full transition-all duration-400 cursor-pointer hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
              style={{
                contentVisibility: "auto",
              } as React.CSSProperties}
            >
              {/* Card Glow Effect on Hover */}
              <div 
                className="absolute -inset-[1px] rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle_at_center, ${art.glowColor} 0%, transparent 70%)`
                }}
              />

              <div className="space-y-4">
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden bg-white/[0.02] border border-white/[0.05]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-all duration-400 ease-in-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={art.id <= 2}
                  />
                </div>

                {/* Info and Badges */}
                <div className="space-y-3 px-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-space font-bold text-base text-white group-hover:text-purple-300 transition-colors duration-300">
                      {art.title}
                    </h4>
                    <span className="text-[10px] font-bold py-1 px-2.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 uppercase tracking-wider whitespace-nowrap">
                      {art.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    {art.description}
                  </p>
                  
                  {/* Signature Badge */}
                  <div className="flex items-center gap-1.5 bg-purple-500/[0.04] border border-purple-500/10 px-2.5 py-1 rounded-lg w-fit mt-3">
                    <span className="text-[9.5px] font-semibold text-purple-400 tracking-wide">
                      ✍️ Original Artwork by Vignesh
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Lightbox / Modal */}
      <AnimatePresence>
        {activeArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArtId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Top Indicator */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none">
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase text-shadow">
                {activeArt.title} • {activeIndex + 1} of {artworks.length}
              </span>
            </div>

            {/* Top Right: Close button */}
            <button
              onClick={() => setActiveArtId(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-black/60 border border-white/15 text-white/80 hover:text-white hover:bg-black/80 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Viewport Navigation: Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/15 text-white/80 hover:text-white hover:bg-black/80 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Viewport Navigation: Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/15 text-white/80 hover:text-white hover:bg-black/80 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Card Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-full md:max-w-2xl flex flex-col items-center justify-center rounded-[28px] bg-[#07070c]/90 border border-white/10 p-5 md:p-6 shadow-[0_0_30px_rgba(168,85,247,0.5),0_0_60px_rgba(59,130,246,0.25)]"
            >
              {/* Image Frame */}
              <div 
                id="modal-image-frame"
                className="relative aspect-[4/3] w-full max-w-[85vw] max-h-[55vh] md:max-h-[60vh] rounded-[24px] overflow-hidden bg-black border border-white/[0.08]"
              >
                <Image
                  src={activeArt.image}
                  alt={activeArt.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 85vw, 60vw"
                  priority
                />

                {/* Bottom Right Controls overlay */}
                <div className="absolute bottom-4 right-4 z-50 flex gap-2">
                  <button
                    onClick={() => handleDownload(activeArt.image, activeArt.title)}
                    className="p-2.5 rounded-full bg-black/65 border border-white/15 text-white/85 hover:text-white hover:bg-black/85 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center shadow-lg"
                    title="Download sketch"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-2.5 rounded-full bg-black/65 border border-white/15 text-white/85 hover:text-white hover:bg-black/85 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center shadow-lg"
                    title="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Artwork Information Panel Below Image */}
              <div className="w-full mt-5 space-y-3 text-left">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-space font-bold text-lg md:text-xl text-white">
                    {activeArt.title}
                  </h4>
                  <span className="text-[10px] font-bold py-1 px-3 rounded-full border border-purple-500/25 bg-purple-500/12 text-purple-300 uppercase tracking-widest whitespace-nowrap">
                    {activeArt.category}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-medium">
                  {activeArt.description}
                </p>
                
                {/* Signature Badge */}
                <div className="flex items-center gap-1.5 bg-purple-500/[0.04] border border-purple-500/10 px-3 py-1.5 rounded-lg w-fit mt-3">
                  <span className="text-[10px] font-semibold text-purple-400 tracking-wide">
                    ✍️ Original Artwork by Vignesh
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bottom Guidance Text */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none">
              <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase">
                Click outside or press Esc to close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 max-w-2xl mx-auto"
      >
        <div className="relative group/quote">
          {/* Quote Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-md opacity-40 group-hover/quote:opacity-75 transition duration-500" />
          
          <div className="relative glass-panel p-6 rounded-2xl bg-[#0a0a10]/90 backdrop-blur-xl border border-white/[0.08] flex items-center gap-4 text-center justify-center">
            <PenTool className="w-8 h-8 text-purple-400 flex-shrink-0 animate-pulse" />
            <div className="flex flex-col items-center">
              <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed font-medium">
                "Creativity and engineering are two sides of the same coin. One builds systems, the other builds imagination."
              </p>
              <span className="text-xs font-bold text-purple-400 mt-2 tracking-wide uppercase">
                ✏️ — Vignesh N Salian
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
