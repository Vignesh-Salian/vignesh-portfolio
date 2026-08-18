"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  Palette, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Maximize2,
  Eye
} from "lucide-react";
import { sounds } from "@/lib/soundFx";

interface ArtworkCard {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  glowColor: string;
  accent: string;
}

const artworks: ArtworkCard[] = [
  {
    id: 1,
    title: "Tiger Portrait",
    category: "PENCIL SKETCH",
    description: "Hand-drawn tiger portrait created using graphite shading and detailed fur textures.",
    image: "/tiger_sketch.jpg",
    glowColor: "rgba(0, 240, 255, 0.4)",
    accent: "#00f0ff",
  },
  {
    id: 2,
    title: "Kitten Portrait",
    category: "GRAPHITE ART",
    description: "Realistic kitten sketch showcasing fine detailing and soft shading techniques.",
    image: "/kitten_sketch.jpg",
    glowColor: "rgba(255, 0, 127, 0.4)",
    accent: "#ff007f",
  },
];

export default function BeyondAlgorithms() {
  const [activeArtId, setActiveArtId] = useState<number | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeIndex = artworks.findIndex((art) => art.id === activeArtId);
  const activeArt = activeIndex !== -1 ? artworks[activeIndex] : null;

  // Replay observer: triggers 3D motion on entry, resets on exit
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsSectionInView(true);
        } else {
          setIsSectionInView(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    sounds.playClick();
    if (activeIndex === -1) return;
    const prevIndex = (activeIndex - 1 + artworks.length) % artworks.length;
    setActiveArtId(artworks[prevIndex].id);
  };

  const handleNext = () => {
    sounds.playClick();
    if (activeIndex === -1) return;
    const nextIndex = (activeIndex + 1) % artworks.length;
    setActiveArtId(artworks[nextIndex].id);
  };

  const toggleFullscreen = () => {
    sounds.playClick();
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
    sounds.playSuccess();
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
      transition: { staggerChildren: 0.12 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="beyond-algorithms"
      className="py-8 sm:py-10 border-t border-[#00f0ff]/20 relative overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#8a2be2]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#ff007f]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Header: Clean & Compact */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-2 mb-4 sm:mb-5"
        >
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8a2be2]/15 border border-[#8a2be2]/30 text-xs font-mono font-bold text-[#c084fc]">
              <Palette className="w-3.5 h-3.5" />
              <span>DIGITAL_ARCHIVE // ART_VAULT</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-mono">
            Beyond Algorithms
          </h2>
          
          <p className="text-[#00f0ff] italic font-medium text-xs sm:text-sm font-mono">
            &quot;Engineering trains the mind; art fuels the imagination.&quot;
          </p>
          
          <p className="text-gray-300 text-xs sm:text-[13.5px] max-w-3xl leading-relaxed font-mono">
            While I enjoy building intelligent systems and research-driven applications, I also express creativity through pencil sketching. Drawing helps me develop patience, focus, and attention to detail—qualities that complement my engineering mindset.
          </p>
        </motion.div>

        {/* Gallery Grid Section */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-white font-bold">
              <Eye className="w-3.5 h-3.5 text-[#00ffa3]" />
              <span>SELECTED MASTERWORK ARTIFACTS</span>
            </div>
            <span className="text-xs font-mono text-[#00f0ff]">CLICK TO INSPECT IN LIGHTBOX</span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto justify-center"
          >
            {artworks.map((art) => {
              const isTiger = art.id === 1;
              const delayTime = isTiger ? 0.1 : 0.2;

              return (
                <motion.div
                  key={art.id}
                  variants={cardVariants}
                  onClick={() => {
                    sounds.playWarp();
                    setActiveArtId(art.id);
                  }}
                  onMouseEnter={() => {
                    sounds.playHover();
                    setHoveredCardId(art.id);
                  }}
                  onMouseLeave={() => setHoveredCardId(null)}
                  whileHover={{ y: -3, scale: 1.01 }}
                  animate={
                    isSectionInView && !shouldReduceMotion
                      ? {
                          rotateX: [0, 2, 4, 1, 0],
                          rotateY: [0, -3, -5, -1, 0],
                          boxShadow: [
                            "0 0 20px rgba(0,0,0,0.6)",
                            "0 0 30px rgba(0,240,255,0.25)",
                            "0 0 35px rgba(0,240,255,0.35)",
                            "0 0 25px rgba(0,240,255,0.2)",
                            "0 0 20px rgba(0,0,0,0.6)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.0,
                    delay: delayTime,
                    times: [0, 0.25, 0.55, 0.85, 1],
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                  className="group relative rounded-2xl bg-[#070c18]/95 backdrop-blur-2xl border border-white/[0.08] hover:border-[#00f0ff]/50 p-4 sm:p-5 flex flex-col justify-between h-full transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] overflow-hidden"
                >
                  {/* Cyber Corner HUD Brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff] opacity-30 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff007f] opacity-30 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

                  {/* Exterior Card Glow Aura on Hover */}
                  <div 
                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none -z-10"
                    style={{
                      background: `radial-gradient(circle_at_center, ${art.glowColor} 0%, transparent 70%)`
                    }}
                  />

                  <div className="space-y-3">
                    {/* Original Artwork Image Frame (Portrait Aspect Ratio so full face & eyes are 100% visible) */}
                    <div 
                      className="relative aspect-[4/5] max-h-[290px] sm:max-h-[310px] xl:max-h-[330px] w-full rounded-xl overflow-hidden bg-black/90 border border-white/[0.08] group-hover:border-[#00f0ff]/40 transition-colors flex items-center justify-center"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Untouched Original Drawing Asset (object-contain ensures zero face cropping) */}
                      <motion.div
                        className="relative w-full h-full"
                        animate={
                          isSectionInView && !shouldReduceMotion
                            ? {
                                scale: [1, 1.02, 1.04, 1.01, 1],
                                z: [0, 10, 20, 8, 0],
                              }
                            : hoveredCardId === art.id
                            ? {
                                scale: 1.03,
                                z: 15,
                              }
                            : { scale: 1, z: 0 }
                        }
                        transition={{
                          duration: 1.0,
                          delay: delayTime,
                          times: [0, 0.25, 0.55, 0.85, 1],
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Image
                          src={art.image}
                          alt={art.title}
                          fill
                          className="object-contain p-1.5 transition-all duration-500 ease-in-out select-none"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={art.id <= 2}
                        />
                      </motion.div>
                    </div>

                    {/* Info and Badges */}
                    <div className="space-y-1 px-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-mono font-bold text-sm text-white group-hover:text-[#00f0ff] transition-colors duration-300">
                          {art.title}
                        </h4>
                        <span className="text-[9px] font-mono font-bold py-0.5 px-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] uppercase tracking-wider">
                          {art.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-300 leading-relaxed font-mono">
                        {art.description}
                      </p>
                      
                      {/* Signature Badge */}
                      <div className="flex items-center gap-1.5 bg-[#8a2be2]/10 border border-[#8a2be2]/20 px-2 py-0.5 rounded-md w-fit mt-1.5">
                        <span className="text-[9px] font-mono font-bold text-[#c084fc] tracking-wide">
                          ✍️ Original Artwork by Vignesh
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          INTERACTIVE LIGHTBOX MODAL (PORTAL TO DOCUMENT BODY)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {activeArt && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArtId(null)}
                className="fixed inset-0 bg-black/92 backdrop-blur-2xl p-4 sm:p-6 flex items-center justify-center"
                style={{
                  zIndex: 9999999,
                }}
              >
                {/* Top Indicator */}
                <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none">
                  <span className="text-xs font-mono font-bold text-[#00f0ff] tracking-widest uppercase shadow-sm">
                    {activeArt.title} • {activeIndex + 1} OF {artworks.length}
                  </span>
                </div>

                {/* Top Right: Close button */}
                <button
                  onClick={() => {
                    sounds.playClick();
                    setActiveArtId(null);
                  }}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 p-2.5 rounded-xl bg-[#070c18] border border-white/20 text-white hover:border-[#ff007f] hover:text-[#ff007f] transition-all cursor-pointer flex items-center justify-center shadow-lg"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Viewport Navigation: Previous */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 sm:left-8 z-50 p-3 rounded-full bg-[#070c18]/90 border border-white/20 text-white hover:border-[#00f0ff] hover:text-[#00f0ff] hover:scale-110 transition-all cursor-pointer shadow-xl"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Viewport Navigation: Next */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 sm:right-8 z-50 p-3 rounded-full bg-[#070c18]/90 border border-white/20 text-white hover:border-[#00f0ff] hover:text-[#00f0ff] hover:scale-110 transition-all cursor-pointer shadow-xl"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Central Artwork Modal Container */}
                <motion.div
                  initial={{ scale: 0.92, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.92, y: 15 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-3xl w-full max-h-[88vh] flex flex-col rounded-2xl overflow-hidden bg-[#070c18] border border-white/20 shadow-[0_0_80px_rgba(0,240,255,0.25)] mx-auto"
                >
                  {/* Full Image Container */}
                  <div id="modal-image-frame" className="relative w-full h-[50vh] sm:h-[58vh] bg-black/95 flex items-center justify-center overflow-hidden">
                    <Image
                      src={activeArt.image}
                      alt={activeArt.title}
                      fill
                      className="object-contain p-3 select-none"
                      priority
                    />
                  </div>

                  {/* Footer Controls & Details (Clean Flex Layout with Zero Edge Clipping) */}
                  <div className="w-full p-4 sm:p-5 bg-[#0a101f] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-mono font-bold text-sm sm:text-base text-white flex items-center gap-2 flex-wrap">
                        <span>{activeArt.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#00f0ff]/30 text-[#00f0ff]">
                          {activeArt.category}
                        </span>
                      </h3>
                      <p className="text-xs text-gray-300 font-mono mt-1 leading-relaxed">
                        {activeArt.description}
                      </p>
                    </div>

                    {/* Actions (Fullscreen & Download) */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                      <button
                        onClick={toggleFullscreen}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Fullscreen</span>
                      </button>
                      <button
                        onClick={() => handleDownload(activeArt.image, activeArt.title)}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white text-xs font-mono font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Sketch</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
