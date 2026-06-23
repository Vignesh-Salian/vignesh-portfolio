import Sidebar from "@/components/Sidebar";
import Particles from "@/components/Particles";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BeyondAlgorithms from "@/components/BeyondAlgorithms";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen relative">
      {/* Canvas space particles backdrop */}
      <Particles />

      {/* Sticky navigation & profile sidebar */}
      <Sidebar />

      {/* Main viewport panels */}
      <main className="flex-1 w-full lg:pl-80 pt-16 lg:pt-0 z-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <BeyondAlgorithms />
          <Contact />
        </div>
      </main>
    </div>
  );
}
