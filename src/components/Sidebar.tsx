"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  Send
} from "lucide-react";

// X (formerly Twitter) SVG Icon
const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Github SVG Icon
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// Linkedin SVG Icon
const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "beyond-algorithms", label: "Beyond Algorithms", icon: Palette },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for triggers

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
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireMeClick = () => {
    toast.success("Opening email client...");

    const mailtoUrl = "mailto:salianvignesh05@gmail.com?subject=Hiring Opportunity&body=Hi Vignesh,%0A%0AI'd like to discuss an internship, research collaboration, freelance project, or software engineering opportunity with you.%0A%0ARegards,";
    
    let didBlur = false;
    const handleBlur = () => {
      didBlur = true;
    };
    window.addEventListener("blur", handleBlur);
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    // Timeout fallback to scroll to Contact section if email client failed to open (focus remained on window)
    setTimeout(() => {
      window.removeEventListener("blur", handleBlur);
      if (!didBlur) {
        toast.info("Email client not detected. Redirecting to contact section.");
        const contactEl = document.getElementById("contact");
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 1000);
  };

  return (
    <>
      {/* SVG Gradients for Navigation Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="activeIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="inactiveIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mobile Top Navbar */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 glass-panel h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-purple-500/40 relative">
            <Image 
              src="/profile.png" 
              alt="Vignesh N Salian" 
              fill
              className="object-cover"
              sizes="36px"
              priority
            />
          </div>
          <div>
            <span className="font-space font-bold text-sm tracking-wide text-white">Vignesh N Salian</span>
            <span className="block text-[10px] text-purple-400 font-medium leading-none">AI & Full Stack</span>
          </div>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white p-1 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/75 backdrop-blur-lg flex flex-col justify-center items-center">
          <nav className="flex flex-col gap-3 w-64 px-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-4 text-lg font-medium py-3 px-5 rounded-xl transition-all text-left cursor-pointer ${
                    isActive 
                      ? "text-white font-bold" 
                      : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent border border-purple-500/15 rounded-xl pointer-events-none shadow-[inset_0_0_12px_rgba(168,85,247,0.02)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      <div className="absolute left-0 top-2.5 bottom-2.5 w-[3px] bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    </motion.div>
                  )}
                  
                  {/* Icon Container */}
                  <div className="flex items-center justify-center w-6 h-6 shrink-0 z-10">
                    <Icon
                      strokeWidth={2}
                      stroke={isActive ? "url(#activeIconGradient)" : "url(#inactiveIconGradient)"}
                      fill="none"
                      className={`w-[24px] h-[24px] transition-all duration-300 ${
                        isActive 
                          ? "scale-[1.1] [filter:drop-shadow(0_0_15px_rgba(168,85,247,0.7))]" 
                          : "opacity-[0.85] [filter:drop-shadow(0_0_8px_rgba(139,92,246,0.35))]"
                      }`}
                    />
                  </div>
                  <span className="z-10 transition-colors duration-300">{item.label}</span>
                </button>
              );
            })}
          </nav>
          
          <div className="absolute bottom-10 flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a href="https://github.com/Vignesh-Salian" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-purple-400 transition" aria-label="GitHub"><GithubIcon className="w-5 h-5" /></a>
              <a href="https://linkedin.com/in/vignesh-n-salian" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-purple-400 transition" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="mailto:salianvignesh05@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-purple-400 transition" aria-label="Email"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="text-xs text-gray-500">© 2026 Vignesh N Salian</p>
          </div>
        </div>
      )}

      {/* Desktop Sidebar (Fixed Left) */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-80 flex-col z-30 glass-panel border-r border-white/5 p-8 overflow-y-auto">
        {/* Profile Card Info */}
        <div className="flex flex-col items-center text-center mt-4">
          <div className="profile-float-container">
            <div className="profile-image-wrapper">
              <Image 
                src="/profile.png" 
                alt="Vignesh N Salian" 
                width={170}
                height={170}
                className="profile-image-el"
                priority
              />
            </div>
          </div>
          
          <h2 className="mt-5 font-space font-bold text-xl text-white tracking-wide">Vignesh N Salian</h2>
          <p className="text-xs text-gray-400 mt-1 font-medium">AI Engineer • Full Stack Developer</p>
          
          {/* Status Dot */}
          <div className="mt-3 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full relative">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute" />
            <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase ml-1">Available for work</span>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col gap-2 mt-8 flex-grow relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative group flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm transition-all text-left cursor-pointer ${
                  isActive 
                    ? "text-white font-semibold" 
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
                }`}
              >
                {/* Active Indicator Sliding Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent border border-purple-500/15 rounded-xl pointer-events-none shadow-[inset_0_0_12px_rgba(168,85,247,0.02)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    {/* Left vertical glowing accent line */}
                    <div className="absolute left-0 top-2.5 bottom-2.5 w-[3px] bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  </motion.div>
                )}

                {/* Icon Container */}
                <div className="flex items-center justify-center w-6 h-6 shrink-0 z-10">
                  <Icon
                    strokeWidth={2}
                    stroke={isActive ? "url(#activeIconGradient)" : "url(#inactiveIconGradient)"}
                    fill="none"
                    className={`w-[22px] h-[22px] transition-all duration-300 group-hover:translate-x-[3px] ${
                      isActive 
                        ? "scale-[1.1] group-hover:scale-[1.15] [filter:drop-shadow(0_0_15px_rgba(168,85,247,0.7))] group-hover:[filter:drop-shadow(0_0_15px_rgba(168,85,247,0.85))]" 
                        : "opacity-[0.85] group-hover:opacity-100 group-hover:scale-[1.08] [filter:drop-shadow(0_0_8px_rgba(139,92,246,0.35))] group-hover:[filter:drop-shadow(0_0_12px_rgba(168,85,247,0.8))]"
                    }`}
                  />
                </div>
                <span className="z-10 transition-colors duration-300">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Panel / CTA Card */}
        <div className="mt-8 border border-white/5 rounded-2xl p-4 bg-white/[0.01] glass-panel-hover">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Connect with me</span>
          <div className="flex gap-3.5 mt-2.5">
            <a href="https://github.com/Vignesh-Salian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="GitHub"><GithubIcon className="w-4 h-4" /></a>
            <a href="https://linkedin.com/in/vignesh-n-salian" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn"><LinkedinIcon className="w-4 h-4" /></a>
            <a href="mailto:salianvignesh05@gmail.com" className="text-gray-400 hover:text-white transition" aria-label="Email"><Mail className="w-4 h-4" /></a>
          </div>

          <div className="mt-5 border-t border-white/5 pt-4">
            <h4 className="text-xs font-bold text-gray-200">Let&apos;s build something</h4>
            <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
              I&apos;m always open to discussing new opportunities and exciting projects.
            </p>
            {/* Status Badge */}
            <div className="mt-3.5 flex items-center gap-2 bg-emerald-500/[0.04] border border-emerald-500/15 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.05)] w-full justify-center">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[8.5px] text-emerald-400 font-semibold tracking-wide uppercase text-center leading-tight">
                Available for Internships & Research Collaborations
              </span>
            </div>

            <motion.button 
              onClick={handleHireMeClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Hire Me"
              title="Hire Me"
              className="mt-3 w-full flex items-center justify-center gap-2 text-xs font-bold py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border border-purple-500/30 text-white transition-all duration-300 shadow-[0_0_12px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5),_0_0_40px_rgba(59,130,246,0.3)] cursor-pointer"
            >
              <span>Hire Me</span>
              <Send className="h-5 w-5 ml-2" />
            </motion.button>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-6 border-t border-white/5 pt-4 text-center">
          <p className="text-[10px] text-gray-500 leading-tight">
            © 2026 Vignesh N Salian
          </p>
          <p className="text-[9px] text-gray-600 mt-0.5">
            All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
