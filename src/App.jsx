import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ScrollProgressBar from './components/ScrollProgressBar';
import AtmosphericBackground from './components/AtmosphericBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#12060a] text-[#c9a5ae] bg-grid-pattern bg-radial-vignette selection:bg-[#ff5a7a]/30 selection:text-rose-100 overflow-x-hidden font-sans">
      {/* Fixed subtle atmospheric cloud layer across all sections behind content */}
      <AtmosphericBackground />

      {/* Thin rose scroll progress bar at the very top */}
      <ScrollProgressBar />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
