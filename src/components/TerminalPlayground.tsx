"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Download } from "lucide-react";
import { sounds } from "@/lib/soundFx";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function TerminalPlayground() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div className="text-gray-300 space-y-1 text-xs sm:text-sm font-mono">
          <p className="text-[#00f0ff] font-bold">⚡ VIGNESH SALIAN CYBERNETIC MAINFRAME [Version 2.5.0]</p>
          <p className="text-gray-400">Type <span className="text-[#00ffa3] font-bold">&apos;help&apos;</span> or <span className="text-[#ff007f] font-bold">&apos;resume&apos;</span> to initiate system operations.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    sounds.playClick();
    const cleanCmd = cmdStr.trim().toLowerCase();
    let res: React.ReactNode;

    switch (cleanCmd) {
      case "help":
        res = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-gray-300">
            <p className="text-[#00f0ff] font-semibold">Available Operations:</p>
            <p><span className="text-[#00ffa3] font-bold">about</span>     - Overview of background & engineering focus</p>
            <p><span className="text-[#00ffa3] font-bold">resume</span>    - Download official PDF character dossier</p>
            <p><span className="text-[#00ffa3] font-bold">skills</span>    - Technical stack & algorithmic toolkits</p>
            <p><span className="text-[#00ffa3] font-bold">projects</span>  - Featured arcade repositories & systems</p>
            <p><span className="text-[#00ffa3] font-bold">research</span>  - IEEE ICCES &apos;25 & Springer ICTIS &apos;26</p>
            <p><span className="text-[#00ffa3] font-bold">contact</span>   - Transmission channels & direct email</p>
            <p><span className="text-[#00ffa3] font-bold">squad</span>     - Multiplayer collaboration status</p>
            <p><span className="text-[#00ffa3] font-bold">clear</span>     - Clear terminal buffer</p>
          </div>
        );
        break;
      case "about":
        res = (
          <p className="text-xs sm:text-sm font-mono text-gray-300">
            Vignesh Salian is an AI & Systems Engineer with published research in IEEE ICCES 2025 and accepted work in Springer ICTIS 2026. Specializing in sub-millimeter computer vision, generative multimedia orchestration, and scalable reactive web platforms.
          </p>
        );
        break;
      case "resume":
      case "download":
        res = (
          <div className="text-xs sm:text-sm font-mono text-[#00ffa3] space-y-1">
            <p className="font-bold">⚡ Initiating Player Dossier Download (PDF)...</p>
            <p>
              <a 
                href="https://drive.google.com/uc?export=download&id=1NhFSD90dW_mvw9rTMBn1zl_g7mLEdHnC" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#00f0ff] underline font-bold flex items-center gap-1"
              >
                [CLICK TO DOWNLOAD RESUME PDF]
              </a>
            </p>
          </div>
        );
        break;
      case "skills":
        res = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <p><strong className="text-[#8a2be2]">AI / ML:</strong> PyTorch, TensorFlow, Scikit-Learn, SMOTE, Transformers, ElevenLabs API</p>
            <p><strong className="text-[#00f0ff]">Computer Vision:</strong> OpenCV, ArUco Marker Calibration (150+ FPS), FFmpeg, MediaPipe</p>
            <p><strong className="text-[#00ffa3]">Full-Stack:</strong> Next.js 16, React 19, TypeScript, Python, Flask, FastAPI, Tailwind CSS</p>
            <p><strong className="text-[#ffb800]">Data & Cloud:</strong> Pandas, NumPy, PostgreSQL, MongoDB, Docker, Git CI/CD</p>
          </div>
        );
        break;
      case "projects":
      case "arcade":
        res = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <p>1. <span className="text-[#00f0ff] font-bold">VidSnapAI:</span> Generative short-form video engine with ElevenLabs TTS + FFmpeg.</p>
            <p>2. <span className="text-[#00ffa3] font-bold">ML Fraud Detection:</span> SMOTE resampling pipeline with Streamlit telemetry (99.4% Acc).</p>
            <p>3. <span className="text-[#ff007f] font-bold">ArUco Distance Vision:</span> 150+ FPS real-time facial distance calibration (IEEE &apos;25).</p>
            <p>4. <span className="text-[#ffb800] font-bold">Voxel Topography 3D:</span> Procedural isometric Canvas engine.</p>
          </div>
        );
        break;
      case "research":
        res = (
          <div className="text-xs sm:text-sm font-mono space-y-1">
            <p className="text-[#00f0ff]">📄 IEEE ICCES 2025: &quot;Real-time Distance Measurement System using ArUco Markers&quot; (Published & Presented, 150 FPS).</p>
            <p className="text-[#00ffa3]">📄 Springer ICTIS 2026: Accepted Research Paper.</p>
          </div>
        );
        break;
      case "contact":
        res = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <p>📧 Email: <a href="mailto:vigneshsalian777@gmail.com" className="text-[#00f0ff] underline font-bold">vigneshsalian777@gmail.com</a></p>
            <p>🔗 GitHub: <a href="https://github.com/Vignesh-Salian" target="_blank" rel="noreferrer" className="text-[#00ffa3] underline">github.com/Vignesh-Salian</a></p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/vignesh-salian/" target="_blank" rel="noreferrer" className="text-[#ff007f] underline">linkedin.com/in/vignesh-salian</a></p>
          </div>
        );
        break;
      case "squad":
      case "hire":
        res = (
          <div className="text-xs sm:text-sm font-mono text-[#00ffa3] space-y-1">
            <p className="font-bold">✨ SQUAD STATUS: OPEN FOR QUESTS & FULL-TIME ROLES</p>
            <p>Fast learner, published researcher, with proven track record in low-latency AI pipelines and state-of-the-art web architectures.</p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "":
        res = null;
        break;
      default:
        res = (
          <p className="text-xs sm:text-sm font-mono text-[#ff007f]">
            command not found: &apos;{cmdStr}&apos;. Type &apos;help&apos; for list of commands.
          </p>
        );
    }

    if (cmdStr.trim() !== "") {
      setHistory((prev) => [...prev, { command: cmdStr, output: res }]);
    }
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickPills = ["help", "resume", "skills", "projects", "research", "squad", "contact", "clear"];

  return (
    <section id="terminal" className="py-24 border-t border-[#00f0ff]/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono font-bold text-[#00f0ff]">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>MAINFRAME // HACKER_CLI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
            Interactive CLI Terminal
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto">
            Interact with the portfolio mainframe directly through command-line emulation.
          </p>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {quickPills.map((p) => (
            <button
              key={p}
              onClick={() => handleCommand(p)}
              onMouseEnter={() => sounds.playHover()}
              className="px-3 py-1 rounded-lg bg-[#070c18] hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 text-xs font-mono text-gray-300 hover:text-[#00f0ff] transition-all flex items-center gap-1 shadow-sm"
            >
              <span className="text-[#00ffa3]">$</span>
              <span>{p}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-3xl border border-[#00f0ff]/30 bg-[#050814] overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)] relative">
          {/* Cyber Corner HUD Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff007f] pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ffa3] pointer-events-none z-10" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8a2be2] pointer-events-none z-10" />

          {/* Title Bar */}
          <div className="px-4 py-3 bg-[#070c18] border-b border-[#00f0ff]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff007f] shadow-[0_0_6px_rgba(255,0,127,0.8)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffb800] shadow-[0_0_6px_rgba(255,184,0,0.8)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00ffa3] shadow-[0_0_6px_rgba(0,255,163,0.8)]" />
              <span className="text-xs font-mono text-gray-400 ml-2">vignesh@mainframe-station:~</span>
            </div>
            <span className="text-[11px] font-mono text-[#00f0ff]">zsh // utf-8</span>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4 font-mono">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="text-[#00ffa3]">guest@portfolio</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-[#00f0ff]">~</span>
                  <span className="text-gray-400">$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                {item.output && <div className="pl-4">{item.output}</div>}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Input Bar */}
          <form onSubmit={handleSubmit} className="p-3 bg-[#070c18] border-t border-[#00f0ff]/20 flex items-center gap-2">
            <span className="text-[#00ffa3] font-mono text-sm pl-2">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'resume', 'skills', 'projects'..."
              className="flex-1 bg-transparent border-none text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-gray-600"
            />
            <button
              type="submit"
              onMouseEnter={() => sounds.playHover()}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white text-xs font-mono font-bold transition-all flex items-center gap-1 shadow-sm"
            >
              <span>Execute</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
