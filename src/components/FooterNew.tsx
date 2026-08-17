"use client";

import React from "react";
import { Gamepad2, ArrowUp, Radio, ShieldCheck, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { sounds } from "@/lib/soundFx";

export default function FooterNew() {
  const scrollToTop = () => {
    sounds.playWarp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[#00f0ff]/20 bg-[#03050d] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left branding & player tag */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f0ff] via-[#8a2be2] to-[#ff007f] p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <div className="w-full h-full bg-[#070c18] rounded-[10px] flex items-center justify-center text-white font-bold text-xs font-mono">
              VS
            </div>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            <span className="text-white font-bold">Vignesh Salian</span> // NEO-STATION © {new Date().getFullYear()} — Built with Next.js, Canvas 3D & Web Audio API.
          </div>
        </div>

        {/* Center telemetry */}
        <div className="hidden lg:flex items-center gap-4 text-[11px] font-mono text-gray-500">
          <span className="flex items-center gap-1.5 text-[#00ffa3]">
            <Radio className="w-3 h-3 animate-pulse" /> NETWORK: STABLE
          </span>
          <span>|</span>
          <span className="text-[#00f0ff]">SYS: READY PLAYER ONE</span>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Vignesh-Salian"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playClick()}
            className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00f0ff] text-xs font-mono text-gray-300 hover:text-[#00f0ff] transition-all flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-salian/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playClick()}
            className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#ff007f] text-xs font-mono text-gray-300 hover:text-[#ff007f] transition-all flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
          </a>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sounds.playHover()}
            className="p-2 rounded-xl bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 text-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all flex items-center gap-1"
            title="Warp to top"
            aria-label="Warp to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
