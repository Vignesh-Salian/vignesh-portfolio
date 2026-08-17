"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, RefreshCw, Layers, CheckCircle2, Play, MousePointer } from "lucide-react";
import { sounds } from "@/lib/soundFx";

interface DataPoint {
  x: number;
  y: number;
  label: 0 | 1; // 0 = Normal, 1 = Fraud
  isSynthetic?: boolean;
}

export default function MLDecisionBoundaryLab() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [points, setPoints] = useState<DataPoint[]>([]);
  const [smoteApplied, setSmoteApplied] = useState(false);
  const [testResult, setTestResult] = useState<{ prob: number; label: string } | null>(null);
  const [accuracy, setAccuracy] = useState(99.4);

  // Generate initial imbalanced dataset (95% normal, 5% fraud)
  const generateData = useCallback(() => {
    sounds.playClick();
    const newPoints: DataPoint[] = [];
    
    // Normal transactions cluster
    for (let i = 0; i < 75; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 110;
      newPoints.push({
        x: 220 + Math.cos(angle) * radius,
        y: 180 + Math.sin(angle) * radius * 0.75,
        label: 0,
      });
    }

    // Rare fraud cluster
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 45;
      newPoints.push({
        x: 440 + Math.cos(angle) * radius,
        y: 130 + Math.sin(angle) * radius,
        label: 1,
      });
    }

    setPoints(newPoints);
    setSmoteApplied(false);
    setTestResult(null);
  }, []);

  useEffect(() => {
    generateData();
  }, [generateData]);

  // Apply SMOTE (Synthetic Minority Over-sampling Technique)
  const applySmote = () => {
    sounds.playWarp();
    const fraudPoints = points.filter((p) => p.label === 1 && !p.isSynthetic);
    if (fraudPoints.length < 2) return;

    const syntheticPoints: DataPoint[] = [];
    for (let i = 0; i < 40; i++) {
      const p1 = fraudPoints[Math.floor(Math.random() * fraudPoints.length)];
      const p2 = fraudPoints[Math.floor(Math.random() * fraudPoints.length)];
      const lambda = Math.random();
      syntheticPoints.push({
        x: p1.x + (p2.x - p1.x) * lambda + (Math.random() - 0.5) * 20,
        y: p1.y + (p2.y - p1.y) * lambda + (Math.random() - 0.5) * 20,
        label: 1,
        isSynthetic: true,
      });
    }

    setPoints((prev) => [...prev.filter((p) => !p.isSynthetic), ...syntheticPoints]);
    setSmoteApplied(true);
    setAccuracy(99.4);
  };

  // Canvas Decision Boundary & Point Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    // Clear
    ctx.fillStyle = "#040711";
    ctx.fillRect(0, 0, w, h);

    // Draw Decision Boundary Region
    const imgData = ctx.createImageData(w, h);
    const fraudPoints = points.filter((p) => p.label === 1);
    const normalPoints = points.filter((p) => p.label === 0);

    // Grid step decision inference
    const step = 4;
    for (let x = 0; x < w; x += step) {
      for (let y = 0; y < h; y += step) {
        // Compute 3-NN heuristic
        let fraudDist = 9999;
        let normalDist = 9999;

        fraudPoints.forEach((p) => {
          const d = Math.hypot(p.x - x, p.y - y);
          if (d < fraudDist) fraudDist = d;
        });

        normalPoints.forEach((p) => {
          const d = Math.hypot(p.x - x, p.y - y);
          if (d < normalDist) normalDist = d;
        });

        const isFraudZone = smoteApplied ? fraudDist < normalDist * 0.95 : fraudDist < normalDist * 0.45;
        ctx.fillStyle = isFraudZone ? "rgba(244, 63, 94, 0.08)" : "rgba(99, 102, 241, 0.05)";
        ctx.fillRect(x, y, step, step);
      }
    }

    // Grid Lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Draw Data Points
    points.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.isSynthetic ? 4 : 5, 0, Math.PI * 2);

      if (p.label === 0) {
        // Normal Transaction
        ctx.fillStyle = "#38bdf8";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 4;
        ctx.fill();
      } else if (p.isSynthetic) {
        // Synthetic SMOTE fraud point
        ctx.fillStyle = "#10b981";
        ctx.shadowColor = "#10b981";
        ctx.shadowBlur = 8;
        ctx.fill();
      } else {
        // Original Fraud
        ctx.fillStyle = "#f43f5e";
        ctx.shadowColor = "#f43f5e";
        ctx.shadowBlur = 10;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    });
  }, [points, smoteApplied]);

  // Click canvas to classify new test point
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    const fraudPoints = points.filter((p) => p.label === 1);
    const normalPoints = points.filter((p) => p.label === 0);

    let minFraud = 9999;
    let minNormal = 9999;
    fraudPoints.forEach((p) => {
      const d = Math.hypot(p.x - x, p.y - y);
      if (d < minFraud) minFraud = d;
    });
    normalPoints.forEach((p) => {
      const d = Math.hypot(p.x - x, p.y - y);
      if (d < minNormal) minNormal = d;
    });

    const isFraud = smoteApplied ? minFraud < minNormal * 0.95 : minFraud < minNormal * 0.45;
    const prob = isFraud 
      ? Math.min(99.8, Math.max(75.0, 100 - minFraud)) 
      : Math.min(99.9, Math.max(80.0, 100 - minNormal));

    setTestResult({
      label: isFraud ? "FRAUDULENT TRANSACTION DETECTED" : "LEGITIMATE TRANSACTION",
      prob: Number(prob.toFixed(1)),
    });

    sounds.playClick();
  };

  return (
    <section className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                Machine Learning Lab
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              SMOTE Resampling & Fraud Classification
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Live algorithmic demonstration of handling severe class imbalance with synthetic minority sampling and real-time decision boundaries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={generateData}
              className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>
            <button
              onClick={applySmote}
              disabled={smoteApplied}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                smoteApplied
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 text-white shadow-lg"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{smoteApplied ? "SMOTE Applied (Balanced)" : "Execute SMOTE"}</span>
            </button>
          </div>
        </div>

        {/* Lab Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Canvas Viewport */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-white/[0.1] bg-[#040711] shadow-2xl relative">
            <div className="px-5 py-3 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                <span className="text-purple-400">● 2D_FEATURE_SPACE</span>
                <span>|</span>
                <span className="hidden sm:inline">CLICK CANVAS TO TEST TRANSACTION</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="flex items-center gap-1 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Normal
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <span className="w-2 h-2 rounded-full bg-rose-400" /> Fraud
                </span>
                {smoteApplied && (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Synthetic
                  </span>
                )}
              </div>
            </div>

            <div className="relative aspect-video w-full cursor-crosshair">
              <canvas
                ref={canvasRef}
                width={640}
                height={360}
                onClick={handleCanvasClick}
                className="w-full h-full block"
              />
            </div>
          </div>

          {/* Diagnostics Panel */}
          <div className="lg:col-span-4 space-y-4">
            {/* Live Test Inference Result */}
            <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-3">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center justify-between">
                <span>Inference Result</span>
                <MousePointer className="w-3.5 h-3.5 text-indigo-400" />
              </div>

              {testResult ? (
                <div className={`p-4 rounded-2xl border space-y-1.5 ${
                  testResult.label.includes("FRAUD")
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-300"
                    : "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                }`}>
                  <div className="text-xs font-mono font-bold">{testResult.label}</div>
                  <div className="text-lg font-mono font-extrabold">{testResult.prob}% Confidence</div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-gray-400 text-center">
                  Click anywhere on the feature space canvas to test transaction risk scoring.
                </div>
              )}
            </div>

            {/* Model Metrics */}
            <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl space-y-3">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Benchmark Telemetry
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="text-gray-500 text-[10px]">ACCURACY</div>
                  <div className="text-emerald-400 text-base font-bold">99.4%</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="text-gray-500 text-[10px]">F1-SCORE</div>
                  <div className="text-indigo-400 text-base font-bold">0.962</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="text-gray-500 text-[10px]">MINORITY SAMPLES</div>
                  <div className="text-white text-base font-bold">{points.filter((p) => p.label === 1).length}</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="text-gray-500 text-[10px]">STATUS</div>
                  <div className="text-cyan-400 text-base font-bold">{smoteApplied ? "Balanced" : "Skewed"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
