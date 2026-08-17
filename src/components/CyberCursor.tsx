"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CyberCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop/pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button, a, input, textarea, [role='button'], .cursor-pointer, select")
        );
        setIsPointer(isInteractive);
      }
    };

    const handleMouseDown = () => setIsHovered(true);
    const handleMouseUp = () => setIsHovered(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* Precision Core Dot */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full transition-colors duration-150 ${
          isPointer
            ? "w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-[#ff007f] shadow-[0_0_12px_#ff007f]"
            : isHovered
            ? "w-3 h-3 -ml-[6px] -mt-[6px] bg-[#00ffa3] shadow-[0_0_14px_#00ffa3]"
            : "w-2 h-2 -ml-[4px] -mt-[4px] bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]"
        }`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 750,
          mass: 0.05,
        }}
      />

      {/* Sleek Outer Reticle Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ${
          isPointer
            ? "w-8 h-8 -ml-4 -mt-4 border-[#ff007f]/70 bg-[#ff007f]/5 shadow-[0_0_15px_rgba(255,0,127,0.3)] scale-110"
            : isHovered
            ? "w-6 h-6 -ml-3 -mt-3 border-[#00ffa3]/80 bg-[#00ffa3]/10 shadow-[0_0_12px_rgba(0,255,163,0.4)] scale-90"
            : "w-6 h-6 -ml-3 -mt-3 border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
        }`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 380,
          mass: 0.12,
        }}
      />
    </div>
  );
}
