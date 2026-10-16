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
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 ${
          isScrolled
            ? 'bg-[#0d1326]/85 backdrop-blur-xl border border-pink-500/20 shadow-[0_10px_35px_-5px_rgba(10,15,31,0.9),0_0_20px_rgba(255,45,138,0.12)]'
            : 'bg-[#0d1326]/60 backdrop-blur-lg border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
        }`}
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-2 font-mono text-sm sm:text-base font-bold tracking-tight text-white hover:text-pink-400 transition-colors"
          aria-label="Back to top"
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#ff2d8a] to-[#ff6fb1] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(255,45,138,0.5)] group-hover:scale-105 transition-transform">
            PB
          </span>
          <span className="hidden sm:inline font-mono text-xs tracking-wider text-slate-300 group-hover:text-white transition-colors">
            PRISHA<span className="text-[#ff2d8a]">.SEC</span>
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1.5 text-[11px] lg:text-xs font-mono">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-2 lg:px-2.5 py-1.5 rounded-full transition-all duration-200 tracking-wide ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#ff2d8a]/20 border border-[#ff2d8a]/50 rounded-full shadow-[0_0_12px_rgba(255,45,138,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* Resume Download CTA */}
          <a
            href={personalInfo.resumePath}
            download="Prisha_Bansal_Resume.pdf"
            className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-1.8 text-xs font-mono font-semibold text-white rounded-full bg-gradient-to-r from-[#ff2d8a] to-[#ff4396] hover:from-[#ff4396] hover:to-[#ff6fb1] shadow-[0_0_20px_rgba(255,45,138,0.45)] hover:shadow-[0_0_25px_rgba(255,45,138,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
            aria-label="Download Resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-pink-100" />
            <span>Resume</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5" />}
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
            className="pointer-events-auto absolute top-18 sm:top-20 left-4 right-4 max-w-md mx-auto bg-[#0d1326]/95 backdrop-blur-2xl border border-pink-500/30 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,45,138,0.2)] lg:hidden"
          >
            <div className="flex flex-col gap-1 font-mono text-sm">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-colors text-left ${
                      isActive
                        ? 'bg-[#ff2d8a]/20 text-pink-300 font-semibold border border-[#ff2d8a]/40 shadow-[0_0_15px_rgba(255,45,138,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#ff2d8a]' : 'text-slate-600'}`} />
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">// resume.pdf</span>
                <a
                  href={personalInfo.resumePath}
                  download="Prisha_Bansal_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-[#ff2d8a] text-white hover:bg-[#ff4396] transition-colors"
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
