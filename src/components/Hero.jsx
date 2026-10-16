import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data';
import QuadcopterDrone from './QuadcopterDrone';

export default function Hero() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect cycling through taglines
  useEffect(() => {
    const fullText = personalInfo.taglines[currentTaglineIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          // Pause at end of phrase
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTaglineIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-36 pb-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#ff2d8a]/10 via-[#ff6fb1]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex flex-col items-center text-center">
        
        {/* Main Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-mono font-bold tracking-tight text-white mb-3"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-[#ff6fb1]">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Cycling Typewriter Tagline with Blinking Cursor */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-10 sm:h-12 flex items-center justify-center mb-4 font-mono text-xl sm:text-2xl font-semibold text-[#ff2d8a]"
        >
          <span>{displayedText}</span>
          <span className="inline-block w-2.5 h-6 ml-1 bg-[#ff2d8a] animate-blink" />
        </motion.div>

        {/* 3D Quadcopter Drone in Center / In-between */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl h-[340px] sm:h-[400px] my-2 relative flex items-center justify-center"
        >
          <QuadcopterDrone />
        </motion.div>

        {/* Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-sans font-light"
        >
          {personalInfo.heroBio}
        </motion.p>

        {/* CTA Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {/* Pink Filled Resume Button */}
          <a
            href={personalInfo.resumePath}
            download="Prisha_Bansal_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-white bg-gradient-to-r from-[#ff2d8a] to-[#ff4396] hover:from-[#ff4396] hover:to-[#ff6fb1] shadow-[0_0_25px_rgba(255,45,138,0.4)] hover:shadow-[0_0_35px_rgba(255,45,138,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* View Projects Outline Button */}
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-sm font-medium text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-pink-500/40 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:ml-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0d1326] border border-white/10 text-slate-300 hover:text-[#ff6fb1] hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(255,45,138,0.2)] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0d1326] border border-white/10 text-slate-300 hover:text-[#ff6fb1] hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(255,45,138,0.2)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-3 rounded-xl bg-[#0d1326] border border-white/10 text-slate-300 hover:text-[#ff6fb1] hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(255,45,138,0.2)] transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Slim Strip of Tech Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-2"
        >
          {personalInfo.techStrip.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1.5 rounded-md bg-[#0d1326]/90 border border-pink-500/20 text-slate-300 hover:text-pink-300 hover:border-pink-500/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
