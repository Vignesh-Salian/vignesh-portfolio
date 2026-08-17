"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { sounds } from "@/lib/soundFx";

interface CyberBirdFlyoutPortalProps {
  className?: string;
  size?: number;
}

export default function CyberBirdFlyoutPortal({ className = "", size = 76 }: CyberBirdFlyoutPortalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [initialPos, setInitialPos] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const flightTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerFlight = (immediate = false) => {
    if (immediate) {
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
      startBirdAnimation();
      return;
    }
    startBirdAnimation();
  };

  const startBirdAnimation = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setInitialPos({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });
    setAnimationKey((prev) => prev + 1);
    setIsFlying(true);
    try {
      sounds.playPowerUp();
    } catch {}

    if (flightTimeoutRef.current) clearTimeout(flightTimeoutRef.current);
    flightTimeoutRef.current = setTimeout(() => {
      setIsFlying(false);
    }, 4500);
  };

  // Continuous IntersectionObserver: Waits ~1.5s for section to settle, then triggers bird
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Clear any existing delay
          if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
          
          // Wait 1.5s (1500ms) for section to settle and user to see content first
          delayTimerRef.current = setTimeout(() => {
            startBirdAnimation();
          }, 1500);
        } else {
          // If user leaves section before delay expires, cancel timer
          if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
          setIsFlying(false);
          if (flightTimeoutRef.current) clearTimeout(flightTimeoutRef.current);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
      if (flightTimeoutRef.current) clearTimeout(flightTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. BASE LOGO CONTAINER (CLICKABLE & HOVERABLE TO REPLAY)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div 
        ref={containerRef} 
        onClick={() => triggerFlight(true)}
        onMouseEnter={() => {
          if (!isFlying) triggerFlight(true);
        }}
        className={`relative flex items-center justify-center cursor-pointer group ${className}`}
        title="Click to launch GoPerch bird"
      >
        {/* Layer 1 & 2: Cyan & Purple Radial Glow Aura */}
        <div 
          className="absolute -inset-4 rounded-3xl opacity-80 pointer-events-none blur-xl transition-all duration-700"
          style={{
            background: isFlying
              ? "radial-gradient(circle, rgba(0,240,255,0.85) 0%, rgba(138,43,226,0.6) 50%, transparent 75%)"
              : "radial-gradient(circle, rgba(0,240,255,0.45) 0%, rgba(138,43,226,0.3) 50%, transparent 70%)",
          }}
        />

        {/* Layer 3: Deep Ambient Shadow Box */}
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500"
          style={{
            boxShadow: isFlying
              ? "0 0 35px rgba(0,240,255,0.55), 0 0 70px rgba(138,43,226,0.35), 0 15px 35px rgba(0,0,0,0.9)"
              : "0 0 25px rgba(0,240,255,0.3), 0 0 50px rgba(138,43,226,0.2), 0 12px 30px rgba(0,0,0,0.8)",
          }}
        />

        {/* Base Logo Image */}
        <motion.div
          key={`logo-reaction-${animationKey}`}
          className="relative z-10 flex items-center justify-center select-none"
          animate={
            isFlying && !shouldReduceMotion
              ? {
                  scale: [1, 1.12, 0.96, 1],
                  filter: [
                    "brightness(1)",
                    "brightness(2.2) drop-shadow(0 0 22px #00f0ff)",
                    "brightness(1)",
                  ],
                }
              : { scale: 1, filter: "brightness(1)" }
          }
          transition={{ duration: 0.8, times: [0, 0.4, 0.7, 1], ease: "easeInOut" }}
        >
          <Image
            src="/goperch_logo_final_v5.png"
            alt="GoPerch"
            width={size}
            height={size}
            className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            priority
          />
        </motion.div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. PORTAL 3D BREAKOUT BIRD — GLIDES ACROSS CENTER OF TEMPLATE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {mounted &&
        isFlying &&
        initialPos &&
        !shouldReduceMotion &&
        createPortal(
          <div
            key={`bird-portal-${animationKey}`}
            className="fixed inset-0 pointer-events-none"
            style={{
              zIndex: 999999,
              perspective: 1200,
              overflow: "hidden",
            }}
          >
            {/* 3D Flying Bird Body — Swoops Prominently Right Across the Template Center */}
            <motion.div
              className="fixed flex items-center justify-center pointer-events-none"
              style={{
                left: initialPos.left,
                top: initialPos.top,
                width: initialPos.width,
                height: initialPos.height,
                transformStyle: "preserve-3d",
                willChange: "transform, opacity, filter",
              }}
              initial={{
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                opacity: 0,
                filter: "brightness(1.5) drop-shadow(0 0 25px #00f0ff)",
              }}
              animate={{
                // Smooth glide: takes off from logo box (left), glides right through the CENTER of the card (x ~ 250-450, y ~ 40-70), and soars smoothly to the right edge of the card
                x: [0, 60, 200, 360, 520, 680, 840],
                y: [0, 20, 55, 65, 45, 10, -30],
                z: [0, 60, 180, 240, 220, 140, 0],
                scale: [1.0, 1.6, 2.4, 2.6, 2.3, 1.8, 1.0],
                rotateX: [0, 5, 8, 6, 4, 2, 0],
                rotateY: [0, -6, -10, -8, -6, -3, 0],
                rotateZ: [0, -3, -5, -4, -2, 0, 2],
                opacity: [0, 1, 1, 1, 1, 0.9, 0],
                filter: [
                  "brightness(1.4) drop-shadow(0 0 25px rgba(0,240,255,1))",
                  "brightness(1.9) drop-shadow(0 0 40px rgba(0,240,255,1)) drop-shadow(0 0 60px rgba(255,0,127,0.7))",
                  "brightness(2.3) drop-shadow(0 0 50px rgba(0,240,255,1)) drop-shadow(0 0 80px rgba(255,0,127,0.85))",
                  "brightness(2.4) drop-shadow(0 0 60px rgba(0,240,255,1)) drop-shadow(0 0 90px rgba(255,0,127,0.9))",
                  "brightness(2.2) drop-shadow(0 0 50px rgba(0,240,255,1)) drop-shadow(0 0 75px rgba(138,43,226,0.85))",
                  "brightness(1.8) drop-shadow(0 0 35px rgba(0,240,255,0.8))",
                  "brightness(1) drop-shadow(0 0 15px rgba(0,240,255,0))",
                ],
              }}
              transition={{
                duration: 4.2,
                times: [0, 0.14, 0.32, 0.52, 0.72, 0.9, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Holographic Glowing Energy Aura Shield */}
              <div className="absolute -inset-14 rounded-full bg-gradient-to-tr from-[#00f0ff]/50 via-[#8a2be2]/40 to-[#ff007f]/50 blur-3xl animate-pulse pointer-events-none" />

              {/* Large, Crystal Clear Authentic GoPerch Bird Image (~2.8x High-DPI Render) */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="/goperch_logo_final_v5.png"
                  alt="GoPerch Soaring Bird"
                  width={Math.round(size * 2.8)}
                  height={Math.round(size * 2.8)}
                  className="object-contain select-none drop-shadow-[0_0_45px_rgba(0,240,255,1)]"
                  priority
                />
              </div>

              {/* Trailing Ghost Silhouette (Cyan Motion Trail) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-40 blur-sm pointer-events-none"
                animate={{
                  x: [-5, -25, -60, -110, -180, -250],
                  y: [2, 10, 20, 30, 25, 10],
                  scale: [0.95, 0.9, 0.85, 0.8, 0.72, 0.6],
                  opacity: [0, 0.65, 0.8, 0.65, 0.45, 0],
                }}
                transition={{ duration: 4.0, times: [0, 0.15, 0.35, 0.6, 0.85, 1], ease: "easeOut" }}
              >
                <Image
                  src="/goperch_logo_final_v5.png"
                  alt=""
                  width={Math.round(size * 2.5)}
                  height={Math.round(size * 2.5)}
                  className="object-contain drop-shadow-[0_0_30px_#00f0ff]"
                />
              </motion.div>

              {/* Primary Neon Speed Streak #1 (Cyan) */}
              <motion.div
                className="absolute -left-44 top-1/2 -translate-y-1/2 w-80 h-4 bg-gradient-to-r from-transparent via-[#00f0ff] to-[#ff007f] blur-[2px] rounded-full pointer-events-none"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: [0, 1.2, 2.2, 2.8, 3.2, 0],
                  opacity: [0, 0.8, 0.95, 0.85, 0.6, 0],
                  x: [-15, -50, -120, -220, -340, -480],
                }}
                transition={{ duration: 4.0, delay: 0.25, ease: "easeOut" }}
              />

              {/* Secondary Neon Speed Streak #2 (Magenta) */}
              <motion.div
                className="absolute -left-52 top-1/3 -translate-y-1/2 w-96 h-3 bg-gradient-to-r from-transparent via-[#ff007f] to-[#8a2be2] blur-[2px] rounded-full pointer-events-none"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: [0, 1.0, 1.9, 2.5, 2.9, 0],
                  opacity: [0, 0.7, 0.85, 0.75, 0.5, 0],
                  x: [-20, -65, -145, -255, -390, -530],
                }}
                transition={{ duration: 4.0, delay: 0.35, ease: "easeOut" }}
              />
            </motion.div>

            {/* Breakout Spark Particles Burst (16 Particles radiating outward) */}
            {[...Array(16)].map((_, i) => {
              const angle = (i / 16) * (Math.PI * 2);
              const speed = 70 + (i % 4) * 30;
              const xTarget = Math.cos(angle) * speed + 40;
              const yTarget = Math.sin(angle) * speed - 30;
              const isCyan = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  className="fixed w-2 h-2 rounded-full pointer-events-none"
                  style={{
                    left: initialPos.left + initialPos.width / 2,
                    top: initialPos.top + initialPos.height / 2,
                    backgroundColor: isCyan ? "#00f0ff" : "#ff007f",
                    boxShadow: isCyan
                      ? "0 0 12px #00f0ff, 0 0 24px #00f0ff"
                      : "0 0 12px #ff007f, 0 0 24px #ff007f",
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: [0, xTarget * 0.4, xTarget],
                    y: [0, yTarget * 0.4, yTarget],
                    scale: [0, 2.2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    delay: 0.4 + (i % 4) * 0.08,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
}
