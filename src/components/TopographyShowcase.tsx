"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Sliders, Activity, MousePointer, Radio } from "lucide-react";
import VoxelTopographyGrid from "@/components/ui/voxel-topography-grid";
import { sounds } from "@/lib/soundFx";

const colorPresets = [
  { name: "Cyber Cyan", hex: "#00f0ff", wire: "rgba(0, 240, 255, 0.45)", glow: "rgba(0, 240, 255, 0.3)" },
  { name: "Radiant Violet", hex: "#8a2be2", wire: "rgba(138, 43, 226, 0.45)", glow: "rgba(138, 43, 226, 0.3)" },
  { name: "Neon Magenta", hex: "#ff007f", wire: "rgba(255, 0, 127, 0.45)", glow: "rgba(255, 0, 127, 0.3)" },
  { name: "Emerald Matrix", hex: "#00ffa3", wire: "rgba(0, 255, 163, 0.45)", glow: "rgba(0, 255, 163, 0.3)" },
  { name: "Solar Amber", hex: "#ffb800", wire: "rgba(255, 184, 0, 0.45)", glow: "rgba(255, 184, 0, 0.3)" },
];

export default function TopographyShowcase() {
  const [selectedColor, setSelectedColor] = useState(colorPresets[0]);
  const [tileSize, setTileSize] = useState(28);
  const [maxHeight, setMaxHeight] = useState(70);
  const [speed, setSpeed] = useState(0.015);

  return (
    <section id="visualizer" className="py-24 border-t border-[#00f0ff]/20 relative">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] blur-[150px] pointer-events-none rounded-full transition-colors duration-700 opacity-20"
        style={{ backgroundColor: selectedColor.hex }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono font-bold text-[#00f0ff]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE_LAB // 3D_HOLODECK</span>
            </div>
            <h2 className="font-mono font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              ✦ 3D Voxel Topography
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-[620px] leading-relaxed font-mono">
              Real-time procedural isometric terrain displacement with zero-allocation color LUT lighting and low-latency cursor tracking.
            </p>
          </div>

          {/* Pointer hint pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070c18] border border-[#00f0ff]/30 text-xs font-mono text-gray-300 backdrop-blur-md self-start md:self-auto shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <MousePointer className="w-3.5 h-3.5 text-[#00f0ff] animate-bounce" />
            <span>Move cursor over canvas to deform grid</span>
          </div>
        </div>

        {/* Interactive Controls Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-3xl bg-[#070c18]/90 border border-[#00f0ff]/30 backdrop-blur-2xl mb-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-center shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        >
          {/* Color Palette Switcher */}
          <div className="space-y-2 font-mono">
            <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#c084fc]" />
              <span>Color Theme</span>
            </label>
            <div className="flex items-center gap-2 flex-wrap">
              {colorPresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedColor(preset);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  title={preset.name}
                  className={`w-8 h-8 rounded-xl transition-all duration-200 relative cursor-pointer ${
                    selectedColor.hex === preset.hex
                      ? "ring-2 ring-white scale-110 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                  style={{ backgroundColor: preset.hex }}
                />
              ))}
            </div>
          </div>

          {/* Tile Resolution Slider */}
          <div className="space-y-2 font-mono">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-gray-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#00f0ff]" /> Tile Density
              </span>
              <span className="text-[#00f0ff] font-bold">{tileSize}px</span>
            </div>
            <input
              type="range"
              min={18}
              max={42}
              step={2}
              value={tileSize}
              onChange={(e) => setTileSize(Number(e.target.value))}
              className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#00f0ff]"
            />
          </div>

          {/* Wave Height Slider */}
          <div className="space-y-2 font-mono">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-gray-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#ff007f]" /> Max Elevation
              </span>
              <span className="text-[#ff007f] font-bold">{maxHeight}px</span>
            </div>
            <input
              type="range"
              min={30}
              max={120}
              step={5}
              value={maxHeight}
              onChange={(e) => setMaxHeight(Number(e.target.value))}
              className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#ff007f]"
            />
          </div>

          {/* Speed Slider */}
          <div className="space-y-2 font-mono">
            <div className="flex justify-between text-xs">
              <span className="font-bold text-gray-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#00ffa3]" /> Wave Velocity
              </span>
              <span className="text-[#00ffa3] font-bold">{(speed * 100).toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min={0.005}
              max={0.035}
              step={0.005}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#00ffa3]"
            />
          </div>
        </motion.div>

        {/* Render Voxel Topography Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden border border-[#00f0ff]/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] bg-[#050814]"
        >
          <VoxelTopographyGrid
            tileSize={tileSize}
            maxHeight={maxHeight}
            primaryColor={selectedColor.hex}
            wireColor={selectedColor.wire}
            speed={speed}
          />
        </motion.div>
      </div>
    </section>
  );
}
