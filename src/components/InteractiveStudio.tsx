"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  Sliders, 
  Activity, 
  MousePointer, 
  Cpu, 
  RotateCcw, 
  Zap, 
  Gamepad2 
} from "lucide-react";
import { VoxelTopographyGrid } from "@/components/ui/voxel-topography-grid";
import { sounds } from "@/lib/soundFx";

const themePresets = [
  { 
    name: "Cyber Cyan", 
    primary: "#00f0ff", 
    wire: "rgba(0, 240, 255, 0.45)", 
    tag: "Holographic Matrix",
    glow: "#00f0ff"
  },
  { 
    name: "Neon Pink", 
    primary: "#ff007f", 
    wire: "rgba(255, 0, 127, 0.45)", 
    tag: "Synthwave Pulse",
    glow: "#ff007f"
  },
  { 
    name: "Electric Violet", 
    primary: "#8a2be2", 
    wire: "rgba(138, 43, 226, 0.45)", 
    tag: "Quantum Core",
    glow: "#8a2be2"
  },
  { 
    name: "Matrix Green", 
    primary: "#00ffa3", 
    wire: "rgba(0, 255, 163, 0.45)", 
    tag: "Neural Engine",
    glow: "#00ffa3"
  },
  { 
    name: "Arcade Amber", 
    primary: "#ffb800", 
    wire: "rgba(255, 184, 0, 0.45)", 
    tag: "Solar Flare",
    glow: "#ffb800"
  },
];

export default function InteractiveStudio() {
  const [selectedTheme, setSelectedTheme] = useState(themePresets[0]);
  const [tileSize, setTileSize] = useState(28);
  const [maxHeight, setMaxHeight] = useState(70);
  const [speed, setSpeed] = useState(0.016);

  const handleReset = () => {
    sounds.playWarp();
    setSelectedTheme(themePresets[0]);
    setTileSize(28);
    setMaxHeight(70);
    setSpeed(0.016);
  };

  const handlePaletteSelect = (preset: typeof themePresets[0]) => {
    sounds.playClick();
    setSelectedTheme(preset);
  };

  return (
    <section id="studio" className="py-24 border-t border-[#00f0ff]/20 relative overflow-hidden">
      {/* Dynamic Ambient Background Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[180px] pointer-events-none rounded-full transition-colors duration-700 opacity-20"
        style={{ backgroundColor: selectedTheme.glow }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono font-bold text-[#00f0ff]">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>3D_HOLODECK // INTERACTIVE_STUDIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
              3D Voxel Topography Studio
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              Tweak trigonometric frequency, voxel mesh granularity, and elevation harmonics in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              onMouseEnter={() => sounds.playHover()}
              className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00f0ff] text-xs font-mono text-gray-300 hover:text-[#00f0ff] transition-all flex items-center gap-1.5 shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET DEFAULTS</span>
            </button>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs text-[#00f0ff] font-mono shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <MousePointer className="w-3.5 h-3.5 text-[#00ffa3] animate-bounce" />
              <span>INTERACTIVE // CURSOR LERP</span>
            </div>
          </div>
        </div>

        {/* Studio Canvas Stage */}
        <div className="rounded-3xl border border-[#00f0ff]/30 bg-[#050814] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] mb-8 relative">
          {/* Cyber Corner HUD Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none z-20" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ff007f] pointer-events-none z-20" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00ffa3] pointer-events-none z-20" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#8a2be2] pointer-events-none z-20" />

          {/* Studio Top Telemetry Bar */}
          <div className="px-5 py-3 border-b border-[#00f0ff]/20 bg-[#070c18]/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-gray-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00ffa3] animate-pulse" />
                <span>SHADER_PALETTE:</span>
                <span className="font-bold text-white font-mono">{selectedTheme.name}</span>
              </span>
              <span className="text-gray-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline text-gray-400">
                VOXEL_SIZE: <strong className="text-[#00f0ff]">{tileSize}px</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#8a2be2]/20 text-[#c084fc] border border-[#8a2be2]/30">
                {selectedTheme.tag}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30">
                PAINTER&apos;S ALGORITHM // 60 FPS
              </span>
            </div>
          </div>

          {/* Canvas Render Component */}
          <div className="w-full">
            <VoxelTopographyGrid
              tileSize={tileSize}
              maxHeight={maxHeight}
              primaryColor={selectedTheme.primary}
              wireColor={selectedTheme.wire}
              speed={speed}
            />
          </div>
        </div>

        {/* Real-time Studio Control Deck */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#070c18]/90 border border-[#00f0ff]/20 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          
          {/* Palette Selector */}
          <div className="space-y-2.5">
            <label className="text-xs font-mono font-bold text-gray-300 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>THEME SHADER</span>
            </label>
            <div className="flex items-center gap-2.5">
              {themePresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => handlePaletteSelect(preset)}
                  title={preset.name}
                  className={`w-7 h-7 rounded-xl transition-all duration-200 ${
                    selectedTheme.name === preset.name
                      ? "ring-2 ring-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                      : "opacity-50 hover:opacity-100 hover:scale-105"
                  }`}
                  style={{ backgroundColor: preset.primary }}
                />
              ))}
            </div>
          </div>

          {/* Tile Grid Resolution */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="font-bold text-gray-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#00f0ff]" /> VOXEL SIZE
              </span>
              <span className="text-[#00f0ff] font-bold">{tileSize}px</span>
            </div>
            <input
              type="range"
              min={18}
              max={40}
              step={2}
              value={tileSize}
              onChange={(e) => setTileSize(Number(e.target.value))}
              className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#00f0ff]"
            />
          </div>

          {/* Wave Height Elevation */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="font-bold text-gray-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#00ffa3]" /> PEAK ELEVATION
              </span>
              <span className="text-[#00ffa3] font-bold">{maxHeight}px</span>
            </div>
            <input
              type="range"
              min={30}
              max={120}
              step={5}
              value={maxHeight}
              onChange={(e) => setMaxHeight(Number(e.target.value))}
              className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#00ffa3]"
            />
          </div>

          {/* Animation Velocity */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="font-bold text-gray-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#ff007f]" /> WAVE SPEED
              </span>
              <span className="text-[#ff007f] font-bold">{(speed * 100).toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min={0.005}
              max={0.035}
              step={0.005}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#ff007f]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
