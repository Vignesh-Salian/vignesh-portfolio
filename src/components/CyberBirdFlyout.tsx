"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { sounds } from "@/lib/soundFx";

interface CyberBirdFlyoutProps {
  className?: string;
  size?: number;
}

export default function CyberBirdFlyout({ className = "", size = 68 }: CyberBirdFlyoutProps) {
  const [hasTriggered, setHasTriggered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleInView = () => {
    if (!hasTriggered) {
      setHasTriggered(true);
      try {
        sounds.playPowerUp();
      } catch {
        // audio fallback
      }
    }
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      onViewportEnter={handleInView}
      viewport={{ once: true, amount: 0.3 }}
      style={{ perspective: 1200 }}
    >
      {/* 1. Base / Persistent Bird Logo inside the Logo Box */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        animate={
          hasTriggered && !shouldReduceMotion
            ? {
                opacity: [1, 0.2, 0.4, 1],
                scale: [1, 0.95, 1.02, 1],
              }
            : { opacity: 1, scale: 1 }
        }
        transition={{
          duration: 1.4,
          times: [0, 0.25, 0.85, 1],
          ease: "easeInOut",
        }}
      >
        <Image
          src="/goperch_logo_final_v5.png"
          alt="GoPerch"
          width={size}
          height={size}
          className="object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] select-none pointer-events-none"
          priority
        />
      </motion.div>

      {/* 2. Burst / Escape Flying 3D Bird Object */}
      {hasTriggered && !shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none z-40 overflow-visible">
          {/* Main 3D Flying Bird */}
          <motion.div
            className="absolute top-0 left-0 flex items-center justify-center pointer-events-none"
            style={{
              width: size,
              height: size,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }}
            initial={{
              x: 0,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              opacity: 0,
              filter: "brightness(1) drop-shadow(0 0 10px rgba(0,240,255,0.8))",
            }}
            animate={{
              x: [0, 15, 90, 240, 420],
              y: [0, -5, -35, -75, -120],
              scale: [1, 1.15, 1.65, 1.85, 1.4],
              rotateX: [0, 10, 20, 24, 15],
              rotateY: [0, -15, -28, -32, -20],
              rotateZ: [0, -4, -12, -8, 2],
              opacity: [0, 1, 1, 0.9, 0],
              filter: [
                "brightness(1.2) drop-shadow(0 0 15px rgba(0,240,255,0.9))",
                "brightness(1.5) drop-shadow(0 0 25px rgba(255,0,127,0.9))",
                "brightness(1.8) drop-shadow(0 0 35px rgba(0,240,255,1))",
                "brightness(2.2) drop-shadow(0 0 45px rgba(138,43,226,1))",
                "brightness(3.0) drop-shadow(0 0 60px rgba(0,240,255,0))",
              ],
            }}
            transition={{
              duration: 1.35,
              delay: 0.15,
              times: [0, 0.18, 0.5, 0.8, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Holographic Shimmer Aura */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00f0ff]/50 via-[#8a2be2]/40 to-[#ff007f]/50 blur-xl animate-pulse pointer-events-none" />

            {/* High-Resolution Flying Bird Replica */}
            <Image
              src="/goperch_logo_final_v5.png"
              alt="GoPerch Flying Logo"
              width={Math.round(size * 1.35)}
              height={Math.round(size * 1.35)}
              className="object-contain drop-shadow-[0_0_25px_rgba(0,240,255,0.9)] select-none relative z-10"
              priority
            />

            {/* Neon Speed Streak Trails */}
            <motion.div
              className="absolute -left-12 top-1/2 -translate-y-1/2 w-28 h-2 bg-gradient-to-r from-transparent via-[#00f0ff] to-[#ff007f] blur-[2px] rounded-full pointer-events-none"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1.4, 2.2, 0],
                opacity: [0, 0.9, 0.6, 0],
                x: [-10, -25, -50, -80],
              }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />

            <motion.div
              className="absolute -left-16 top-1/3 -translate-y-1/2 w-36 h-1.5 bg-gradient-to-r from-transparent via-[#ff007f] to-[#8a2be2] blur-[1px] rounded-full pointer-events-none"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1.2, 2.0, 0],
                opacity: [0, 0.8, 0.5, 0],
                x: [-15, -35, -65, -95],
              }}
              transition={{ duration: 1.2, delay: 0.25, ease: "easeOut" }}
            />
          </motion.div>

          {/* 3. Shatter / Glitch Spark Particles Around Logo Box */}
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * (Math.PI * 2);
            const distance = 45 + (i % 3) * 20;
            const xTarget = Math.cos(angle) * distance + 30;
            const yTarget = Math.sin(angle) * distance - 20;
            const isCyan = i % 2 === 0;

            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full pointer-events-none"
                style={{
                  backgroundColor: isCyan ? "#00f0ff" : "#ff007f",
                  boxShadow: isCyan
                    ? "0 0 10px #00f0ff, 0 0 20px #00f0ff"
                    : "0 0 10px #ff007f, 0 0 20px #ff007f",
                }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: [0, xTarget * 0.4, xTarget],
                  y: [0, yTarget * 0.4, yTarget],
                  scale: [0, 1.8, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + (i % 4) * 0.04,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
