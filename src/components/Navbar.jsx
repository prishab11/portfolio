import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionElements = NAV_LINKS.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollY = window.scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      {/* Floating Pill Container */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
          isScrolled
            ? 'bg-[#17080e]/90 backdrop-blur-xl border border-[#ff5a7a]/25 shadow-[0_12px_35px_-5px_rgba(18,6,10,0.95),0_0_20px_rgba(255,90,122,0.15)]'
            : 'bg-[#17080e]/65 backdrop-blur-lg border border-[#ff5a7a]/15 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
        }`}
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-2.5 font-mono text-sm sm:text-base font-bold tracking-tight text-[#f5dfe4] hover:text-[#ff7895] transition-colors"
          aria-label="Back to top"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff5a7a] to-[#c2325a] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(255,90,122,0.5)] group-hover:scale-105 transition-transform">
            PB
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm tracking-wider text-[#f5dfe4] group-hover:text-white transition-colors">
            <span>PRISHA<span className="text-[#ff5a7a]">.SEC</span></span>
            <span className="text-[#ff5a7a] text-xs">✦</span>
          </span>
        </button>

        {/* Desktop Nav Items (1rem font-size as requested) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[1rem] font-mono">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-1.5 rounded-full transition-all duration-200 tracking-normal ${
                  isActive
                    ? 'text-[#f5dfe4] font-semibold'
                    : 'text-[#c9a5ae] hover:text-[#f5dfe4] hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#ff5a7a]/20 border border-[#ff5a7a]/50 rounded-full shadow-[0_0_14px_rgba(255,90,122,0.35)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-2.5">
          {/* Resume Download CTA */}
          <a
            href={personalInfo.resumePath}
            download="Prisha_Bansal_Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-[0.95rem] font-mono font-semibold text-white rounded-full bg-gradient-to-r from-[#ff5a7a] to-[#c2325a] hover:from-[#ff7895] hover:to-[#d93866] shadow-[0_0_20px_rgba(255,90,122,0.45)] hover:shadow-[0_0_28px_rgba(255,90,122,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
            aria-label="Download Resume PDF"
          >
            <FileText className="w-4 h-4 text-rose-100" />
            <span>Resume</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#c9a5ae] hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#ff5a7a]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="pointer-events-auto absolute top-18 sm:top-20 left-4 right-4 max-w-md mx-auto bg-[#17080e]/95 backdrop-blur-2xl border border-[#ff5a7a]/30 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(255,90,122,0.2)] lg:hidden"
          >
            <div className="flex flex-col gap-1 font-mono text-[1rem]">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-colors text-left ${
                      isActive
                        ? 'bg-[#ff5a7a]/20 text-[#f5dfe4] font-semibold border border-[#ff5a7a]/40 shadow-[0_0_15px_rgba(255,90,122,0.25)]'
                        : 'text-[#c9a5ae] hover:text-[#f5dfe4] hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#ff5a7a]' : 'text-[#70424d]'}`} />
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#9e7d86] font-mono">// resume.pdf</span>
                <a
                  href={personalInfo.resumePath}
                  download="Prisha_Bansal_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-gradient-to-r from-[#ff5a7a] to-[#c2325a] text-white hover:from-[#ff7895] hover:to-[#d93866] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
