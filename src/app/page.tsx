"use client";

import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BeyondAlgorithms from "@/components/BeyondAlgorithms";
import Contact from "@/components/Contact";
import CyberCursor from "@/components/CyberCursor";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#03050d] text-white selection:bg-[#00f0ff] selection:text-black relative cyber-grid">
      {/* Interactive Desktop Cyber Cursor */}
      <CyberCursor />

      {/* Cyber Ambient Floating Particle Field */}
      <Particles />

      {/* Cyberpunk HUD Sidebar (Desktop fixed left, Mobile topbar & drawer) */}
      <Sidebar />

      {/* Main Content Flow */}
      <div className="lg:pl-72 xl:pl-80 2xl:pl-[340px] w-full transition-all duration-300 relative z-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 sm:pt-20 lg:pt-0 pb-8 flex flex-col gap-0">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. About Me Section */}
          <About />

          {/* 3. Tech Arsenal / Skills Section */}
          <Skills />

          {/* 4. Experience & Education Timeline */}
          <Experience />

          {/* 5. Featured Projects Showcase */}
          <Projects />

          {/* 6. Beyond Algorithms / Digital Archive */}
          <BeyondAlgorithms />

          {/* 8. Contact Section */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
