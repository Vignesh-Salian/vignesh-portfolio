"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { 
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  Palette,
  Mail, 
  Menu, 
  X,
  Send,
  Download,
  Sparkles
} from "lucide-react";
import { sounds } from "@/lib/soundFx";

// Github SVG Icon
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// Linkedin SVG Icon
const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export const navItems = [
  { id: "home", label: "Home", code: "01", icon: Home },
  { id: "about", label: "About", code: "02", icon: User },
  { id: "skills", label: "Skills", code: "03", icon: Code2 },
  { id: "experience", label: "Experience", code: "04", icon: Briefcase },
  { id: "projects", label: "Projects", code: "05", icon: FolderGit2 },
  { id: "beyond-algorithms", label: "Beyond Algorithms", code: "06", icon: Palette },
  { id: "contact", label: "Contact", code: "07", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    sounds.playClick();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireMeClick = () => {
    sounds.playSuccess();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      toast.success("Navigated to Contact Terminal");
    } else {
      window.location.href = "mailto:salianvignesh05@gmail.com";
    }
  };

  return (
    <>
      {/* Mobile Top HUD Bar */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 px-4 py-3 bg-[#050814]/90 backdrop-blur-2xl border-b border-[#00f0ff]/25 flex items-center justify-between shadow-[0_0_25px_rgba(0,240,255,0.15)]">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#00f0ff]/40 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
            <Image 
              src="/profile_original.png" 
              alt="Vignesh N Salian" 
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div>
            <span className="font-mono font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
              <span>Vignesh N Salian</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ffa3] animate-ping" />
            </span>
            <span className="block text-[10px] text-[#00f0ff] font-mono font-semibold leading-none">AI &amp; Full Stack Developer</span>
          </div>
        </div>
        
        <button 
          onClick={() => {
            sounds.playClick();
            setIsOpen(!isOpen);
          }}
          className="p-2 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#03050d]/95 backdrop-blur-2xl flex flex-col justify-center items-center p-6"
          >
            <div className="w-full max-w-sm flex flex-col gap-2.5">
              <div className="text-xs font-mono font-bold text-[#00f0ff] pb-3 border-b border-white/10 flex items-center justify-between">
                <span>SYSTEM NAVIGATION</span>
                <span className="text-gray-400">SELECT SECTION</span>
              </div>

              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative flex items-center justify-between text-sm font-mono py-2.5 px-4 rounded-xl transition-all text-left cursor-pointer border ${
                      isActive 
                        ? "bg-[#00f0ff]/15 border-[#00f0ff]/40 text-[#00f0ff] font-bold shadow-[0_0_15px_rgba(0,240,255,0.25)]" 
                        : "border-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#00f0ff]" : "text-gray-400"}`} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">{item.code}</span>
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://drive.google.com/uc?export=download&id=1UcPmV2eEX3dh6t0VF7w4bSIObiKhQYtm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playSuccess()}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <div className="flex justify-center gap-3 pt-2">
                  <a href="https://github.com/Vignesh-Salian" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0d1117]/80 border border-white/20 rounded-xl hover:border-white text-white transition shadow-sm" aria-label="GitHub"><GithubIcon className="w-4 h-4" /></a>
                  <a href="https://linkedin.com/in/vignesh-n-salian" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-xl hover:border-[#0a66c2] text-[#0a66c2] transition shadow-sm" aria-label="LinkedIn"><LinkedinIcon className="w-4 h-4" /></a>
                  <a href="mailto:salianvignesh05@gmail.com" className="p-2.5 bg-[#ea4335]/10 border border-[#ea4335]/30 rounded-xl hover:border-[#ea4335] text-[#ea4335] transition shadow-sm" aria-label="Email"><Mail className="w-4 h-4" /></a>
                </div>
                <p className="text-[11px] text-gray-500 font-mono text-center mt-1">© 2026 Vignesh N Salian</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop HUD Commander Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-80 xl:w-[340px] 2xl:w-[360px] flex-col justify-between z-30 bg-[#050814]/95 backdrop-blur-3xl border-r border-[#00f0ff]/20 p-4 xl:p-5 overflow-y-auto overflow-x-hidden shadow-[0_0_40px_rgba(0,0,0,0.85)]">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#00f0ff]/10 blur-3xl pointer-events-none rounded-full" />

        {/* Profile Card Section */}
        <div className="flex flex-col items-center text-center mt-1 xl:mt-2 relative z-10">
          {/* Avatar Container with Cyber Corner Accents */}
          <div className="relative group shrink-0">
            {/* Cyber Corner Notches */}
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff] opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#ff007f] opacity-75 group-hover:opacity-100 transition-opacity" />

            {/* Large Prominent Authentic Portrait */}
            <div className="relative w-38 h-38 xl:w-44 xl:h-44 rounded-3xl p-[2px] bg-gradient-to-br from-[#00f0ff] via-[#8a2be2] to-[#ff007f] shadow-[0_0_30px_rgba(0,240,255,0.45)] shrink-0">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-[#070c18]">
                <Image 
                  src="/profile_original.png" 
                  alt="Vignesh N Salian" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1280px) 152px, 176px"
                  priority
                />
              </div>
            </div>
          </div>
          
          <h2 className="mt-2.5 xl:mt-3 font-mono font-extrabold text-base xl:text-lg text-white tracking-wide">
            Vignesh N Salian
          </h2>
          <p className="text-[11px] xl:text-xs text-gray-400 font-mono font-medium mt-0.5">
            AI Engineer • Full Stack Developer
          </p>
          
          {/* Status Badge */}
          <div className="mt-2 xl:mt-2.5 flex items-center gap-1.5 bg-[#00ffa3]/10 border border-[#00ffa3]/30 px-3 py-0.5 rounded-full relative shadow-[0_0_15px_rgba(0,255,163,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffa3] animate-pulse" />
            <span className="text-[9px] xl:text-[10px] text-[#00ffa3] font-mono font-bold tracking-wider uppercase">Available for work</span>
          </div>
        </div>

        {/* HUD Navigation Section — Cyberpunk Gaming Mission Cards */}
        <nav className="flex flex-col gap-1.5 xl:gap-2 mt-3 xl:mt-5 relative z-10">
          <div className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest px-2 mb-0.5 flex items-center justify-between">
            <span>TACTICAL_NAV</span>
            <span className="text-[#00f0ff]/60">v2.6.4</span>
          </div>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => sounds.playHover()}
                className={`relative group flex items-center justify-between px-3 py-1.5 xl:py-2 rounded-xl text-xs font-mono font-semibold transition-all text-left cursor-pointer overflow-hidden border ${
                  isActive 
                    ? "text-white font-bold border-[#00f0ff]/60 bg-gradient-to-r from-[#00f0ff]/20 via-[#8a2be2]/15 to-[#070c18] shadow-[0_0_20px_rgba(0,240,255,0.3)]" 
                    : "text-gray-300 bg-[#070c18]/80 hover:bg-[#0c1322] border-white/[0.08] hover:border-[#00f0ff]/40 hover:text-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                }`}
              >
                {/* Micro Cyber Corner Notch */}
                <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r pointer-events-none transition-colors ${
                  isActive ? "border-[#00f0ff]" : "border-white/20 group-hover:border-[#00f0ff]/60"
                }`} />

                {/* Active Neon Left Blade */}
                {isActive && (
                  <div className="absolute left-0 top-1 bottom-1 w-1 bg-gradient-to-b from-[#00f0ff] via-[#8a2be2] to-[#ff007f] rounded-r shadow-[0_0_8px_#00f0ff]" />
                )}

                <div className="flex items-center gap-2.5 z-10 pl-0.5">
                  {/* Glowing Gaming Icon Tile */}
                  <div className={`w-6 h-6 xl:w-7 xl:h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isActive 
                      ? "bg-[#00f0ff]/20 border-[#00f0ff]/60 text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.5)] scale-105" 
                      : "bg-black/60 border-white/10 text-gray-400 group-hover:border-[#00f0ff]/50 group-hover:text-[#00f0ff] group-hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] group-hover:scale-105"
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`transition-colors duration-300 ${isActive ? "text-[#00f0ff] font-bold" : "text-gray-300 group-hover:text-white"}`}>
                    {item.label}
                  </span>
                </div>

                <div className="flex items-center gap-1 z-10 pr-1">
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border transition-all ${
                    isActive 
                      ? "bg-[#00f0ff]/20 border-[#00f0ff]/50 text-[#00f0ff] font-bold shadow-[0_0_8px_rgba(0,240,255,0.3)]" 
                      : "bg-black/40 border-white/10 text-gray-500 group-hover:text-gray-300 group-hover:border-white/20"
                  }`}>
                    {item.code}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Gaming Action Section: Cyberpunk Gaming "Hire Me" Button & Socials */}
        <div className="mt-3 xl:mt-5 flex flex-col gap-2.5 z-10">
          {/* Cyberpunk Gaming "Hire Me" Button */}
          <motion.button 
            onClick={handleHireMeClick}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => sounds.playHover()}
            aria-label="Hire Me"
            title="Hire Me"
            className="w-full relative group p-[2px] rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Animated Gradient Border Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] via-[#8a2be2] to-[#ff007f] opacity-85 group-hover:opacity-100 transition-opacity" />

            {/* Inner Gaming Button Body */}
            <div className="relative w-full h-[40px] xl:h-[44px] px-4 rounded-[10px] bg-[#070c18] flex items-center justify-between transition-all group-hover:bg-[#070c18]/80">
              {/* Top-left & Bottom-right Cyber Notches */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f0ff] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ff007f] pointer-events-none" />

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 xl:w-6 xl:h-6 rounded-lg bg-[#00f0ff]/15 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono font-extrabold text-xs text-white tracking-wider group-hover:text-[#00f0ff] transition-colors">
                  HIRE ME // TALK
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Send className="w-3.5 h-3.5 text-[#ff007f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.button>

          {/* Minimalist Cyber Social Bar — Authentic Brand Colors & Glow */}
          <div className="flex gap-2">
            <a 
              href="https://github.com/Vignesh-Salian" 
              target="_blank" 
              rel="noopener noreferrer" 
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="flex-1 py-2 xl:py-2.5 rounded-xl bg-[#0d1117]/80 border border-white/20 hover:border-white hover:bg-[#161b22] text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.35)] flex items-center justify-center transition-all shadow-sm cursor-pointer hover:scale-105" 
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/vignesh-n-salian" 
              target="_blank" 
              rel="noopener noreferrer" 
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="flex-1 py-2 xl:py-2.5 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/30 hover:border-[#0a66c2] hover:bg-[#0077b5]/25 text-[#0a66c2] hover:text-[#38bdf8] hover:shadow-[0_0_18px_rgba(10,102,194,0.5)] flex items-center justify-center transition-all shadow-sm cursor-pointer hover:scale-105" 
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href="mailto:salianvignesh05@gmail.com" 
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              className="flex-1 py-2 xl:py-2.5 rounded-xl bg-[#ea4335]/10 border border-[#ea4335]/30 hover:border-[#ea4335] hover:bg-[#ea4335]/25 text-[#ea4335] hover:text-[#ff6b6b] hover:shadow-[0_0_18px_rgba(234,67,53,0.5)] flex items-center justify-center transition-all shadow-sm cursor-pointer hover:scale-105" 
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-2 xl:mt-3 pt-1 text-center text-[10px] text-gray-500 font-mono leading-tight z-10 pb-1">
          <span>© 2026 Vignesh N Salian</span>
        </div>
      </aside>
    </>
  );
}
