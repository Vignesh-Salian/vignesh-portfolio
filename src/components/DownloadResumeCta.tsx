"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Trophy, 
  Gamepad2, 
  Zap 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { sounds } from "@/lib/soundFx";

export default function DownloadResumeCta() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#070c18] via-[#0c1322] to-[#070c18] border border-[#00f0ff]/40 shadow-[0_0_60px_rgba(0,240,255,0.2)] overflow-hidden"
        >
          {/* Cyber Corner HUD Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff007f] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00ffa3] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8a2be2] pointer-events-none" />

          {/* Background Ambient Radial Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#00f0ff]/20 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#ff007f]/20 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Info Column */}
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono font-bold text-[#00f0ff]">
                <Download className="w-3.5 h-3.5 animate-bounce" />
                <span>OFFICIAL_DOSSIER // READY_FOR_DOWNLOAD</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono">
                Acquire Player Dossier & Resume
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Download the official curriculum vitae, verified IEEE research credentials, and full-stack engineering portfolio in high-resolution PDF format.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-[#00ffa3]">
                  <ShieldCheck className="w-4 h-4" /> VERIFIED REPUTATION
                </span>
                <span className="text-gray-600">|</span>
                <span className="flex items-center gap-1.5 text-[#00f0ff]">
                  <Trophy className="w-4 h-4" /> IEEE ICCES &apos;25
                </span>
                <span className="text-gray-600">|</span>
                <span className="flex items-center gap-1.5 text-[#c084fc]">
                  <Zap className="w-4 h-4" /> 150+ FPS CV ENGINE
                </span>
              </div>
            </div>

            {/* Right Action CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
              {/* Primary Instant Download Button */}
              <a
                href="https://drive.google.com/uc?export=download&id=1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playSuccess()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] hover:opacity-95 text-white font-mono font-bold text-sm shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:shadow-[0_0_40px_rgba(255,0,127,0.7)] hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 text-center"
              >
                <Download className="w-5 h-5 animate-pulse" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              {/* View Verification Online */}
              <a
                href="https://drive.google.com/file/d/1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm/view"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#00f0ff] text-white font-mono font-semibold text-xs transition-all flex items-center justify-center gap-2 text-center"
              >
                <FileText className="w-4 h-4 text-[#00f0ff]" />
                <span>VIEW IN BROWSER</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
