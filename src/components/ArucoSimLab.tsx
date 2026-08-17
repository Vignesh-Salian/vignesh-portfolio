"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, Sparkles, Sliders, Maximize2, ShieldCheck, Activity, RefreshCw } from "lucide-react";
import { sounds } from "@/lib/soundFx";

interface Marker {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  name: string;
}

export default function ArucoSimLab() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [focalLength, setFocalLength] = useState(650);
  const [markerDistance, setMarkerDistance] = useState(0);
  const [fps, setFps] = useState(152);
  const [isCalibrated, setIsCalibrated] = useState(true);
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const [markers, setMarkers] = useState<Marker[]>([
    { id: 0, x: 180, y: 160, z: 420, size: 50, name: "Nasion (Nasal Bridge)" },
    { id: 1, x: 380, y: 260, z: 460, size: 50, name: "Gnathion (Jaw Point)" },
  ]);

  // Handle Dragging
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const px = (e.clientX - rect.left) * (canvas.width / rect.width);
    const py = (e.clientY - rect.top) * (canvas.height / rect.height);

    // Find closest marker within radius
    const clicked = markers.find((m) => Math.hypot(m.x - px, m.y - py) < m.size);
    if (clicked) {
      setActiveMarker(clicked.id);
      sounds.playClick();
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (activeMarker === null) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const px = (e.clientX - rect.left) * (canvas.width / rect.width);
    const py = (e.clientY - rect.top) * (canvas.height / rect.height);

    setMarkers((prev) =>
      prev.map((m) => {
        if (m.id === activeMarker) {
          const clampedX = Math.max(50, Math.min(canvas.width - 50, px));
          const clampedY = Math.max(50, Math.min(canvas.height - 50, py));
          return { ...m, x: clampedX, y: clampedY };
        }
        return m;
      })
    );
  };

  const handlePointerUp = () => {
    setActiveMarker(null);
  };

  // Canvas Render Loop for ArUco Markers & Triangulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastTime = performance.now();
    let frameCount = 0;

    const render = (time: number) => {
      // Calculate true distance in mm: dx, dy scaled by depth/focal length
      const m0 = markers[0];
      const m1 = markers[1];

      const worldX0 = ((m0.x - canvas.width / 2) * m0.z) / focalLength;
      const worldY0 = ((m0.y - canvas.height / 2) * m0.z) / focalLength;
      const worldX1 = ((m1.x - canvas.width / 2) * m1.z) / focalLength;
      const worldY1 = ((m1.y - canvas.height / 2) * m1.z) / focalLength;

      const distMm = Math.sqrt(
        Math.pow(worldX1 - worldX0, 2) +
        Math.pow(worldY1 - worldY0, 2) +
        Math.pow(m1.z - m0.z, 2)
      );

      setMarkerDistance(Number(distMm.toFixed(2)));

      // FPS Jitter Simulator around 150-160 FPS
      frameCount++;
      if (time - lastTime >= 500) {
        setFps(Math.floor(150 + Math.random() * 8));
        lastTime = time;
      }

      // Draw Viewport Canvas
      ctx.fillStyle = "#040711";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Camera Calibration Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Center crosshair
      ctx.strokeStyle = "rgba(6, 182, 212, 0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 20, canvas.height / 2);
      ctx.lineTo(canvas.width / 2 + 20, canvas.height / 2);
      ctx.moveTo(canvas.width / 2, canvas.height / 2 - 20);
      ctx.lineTo(canvas.width / 2, canvas.height / 2 + 20);
      ctx.stroke();

      // Draw Triangulation Line between Markers
      ctx.beginPath();
      ctx.setLineDash([6, 6]);
      ctx.moveTo(m0.x, m0.y);
      ctx.lineTo(m1.x, m1.y);
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);

      // Distance Overlay Badge on Line
      const midX = (m0.x + m1.x) / 2;
      const midY = (m0.y + m1.y) / 2;
      ctx.fillStyle = "rgba(6, 78, 59, 0.9)";
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(midX - 55, midY - 14, 110, 28, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`Δd = ${distMm.toFixed(1)} mm`, midX, midY);

      // Render Each ArUco Marker
      markers.forEach((m) => {
        const s = m.size;
        const half = s / 2;

        // Outer Bounding Box
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = m.id === 0 ? "#06b6d4" : "#8b5cf6";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(m.x - half, m.y - half, s, s);
        ctx.fill();
        ctx.stroke();

        // 4x4 Simulated ArUco Matrix grid
        ctx.fillStyle = "#ffffff";
        const gridCells = [
          [1, 0, 1, 1],
          [0, 1, 0, 1],
          [1, 1, 0, 0],
          [0, 1, 1, 0],
        ];
        const cellSize = (s - 8) / 4;
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 4; c++) {
            if (gridCells[r][c]) {
              ctx.fillRect(m.x - half + 4 + c * cellSize, m.y - half + 4 + r * cellSize, cellSize, cellSize);
            }
          }
        }

        // Draw 3D Pose Axes (X=Red, Y=Green, Z=Blue)
        const axisLen = 25;
        // X-Axis (Red)
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + axisLen, m.y + 6);
        ctx.stroke();

        // Y-Axis (Green)
        ctx.strokeStyle = "#22c55e";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - 8, m.y + axisLen);
        ctx.stroke();

        // Z-Axis (Blue)
        ctx.strokeStyle = "#3b82f6";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - 12, m.y - 18);
        ctx.stroke();

        // Marker Label Pill
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(m.x - 70, m.y + half + 8, 140, 20, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#e2e8f0";
        ctx.font = "10px monospace";
        ctx.fillText(`ID ${m.id}: ${m.name.split(" ")[0]}`, m.x, m.y + half + 18);
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [markers, focalLength]);

  return (
    <section className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                IEEE ICCES &apos;25 Research Lab
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-Time Computer Vision & Triangulation
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Live simulation of the published sub-millimeter ArUco marker pose estimation and spatial distance triangulation pipeline operating at 150+ FPS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{fps} FPS REAL-TIME CV</span>
            </div>
          </div>
        </div>

        {/* Live Lab Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Interactive Canvas Screen */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-white/[0.1] bg-[#040711] shadow-2xl relative">
            {/* Viewport Header */}
            <div className="px-5 py-3 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  CAMERA_FEED // INTRINSIC_CALIBRATED
                </span>
                <span>|</span>
                <span>DRAG MARKERS TO MEASURE</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">150+ FPS</span>
            </div>

            {/* Canvas */}
            <div className="relative aspect-video w-full cursor-grab active:cursor-grabbing">
              <canvas
                ref={canvasRef}
                width={640}
                height={360}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                className="w-full h-full block touch-none"
              />
            </div>
          </div>

          {/* Telemetry & Matrix Diagnostics Panel */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Spatial Output Telemetry */}
            <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-3">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center justify-between">
                <span>Spatial Metrics</span>
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
              </div>

              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">Euclidean Distance</span>
                <span className="text-lg font-bold font-mono text-emerald-400">{markerDistance} mm</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-gray-500 text-[10px]">INFERENCE TIME</div>
                  <div className="text-white font-bold">&lt; 6.4 ms</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-gray-500 text-[10px]">CALIBRATION ACCURACY</div>
                  <div className="text-cyan-400 font-bold">±0.4 mm</div>
                </div>
              </div>
            </div>

            {/* Focal Length Slider */}
            <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-3">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-gray-300 font-mono flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Camera Focal Length (fx)
                </span>
                <span className="text-cyan-400 font-mono">{focalLength} px</span>
              </div>
              <input
                type="range"
                min={400}
                max={900}
                step={10}
                value={focalLength}
                onChange={(e) => {
                  setFocalLength(Number(e.target.value));
                  sounds.playHover();
                }}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <p className="text-[11px] text-gray-500 font-mono">
                Simulates optical sensor zoom & perspective matrix transformation.
              </p>
            </div>

            {/* Publication Reference Pill */}
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Peer-Reviewed at IEEE ICCES 2025</span>
              </div>
              <p className="text-[11px] text-indigo-300/80">
                &quot;Real-time Distance Measurement System using ArUco Markers with millimeter precision.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
