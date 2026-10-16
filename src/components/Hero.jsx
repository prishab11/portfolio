import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data';
import QuadcopterDrone from './QuadcopterDrone';

export default function Hero() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Scroll tracking to fade hero clouds smoothly as user scrolls past hero
  const { scrollY } = useScroll();
  const heroAtmosphereOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const cloudsParallaxY = useTransform(scrollY, [0, 500], [0, 60]);

  // Smooth Typewriter effect: typing & deleting with exactly 1.5s pause on each full phrase
  useEffect(() => {
    const fullText = personalInfo.taglines[currentTaglineIndex];
    let timeoutId;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 75);
      } else {
        // Pause 1.5 seconds on full phrase
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }, 250);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, currentTaglineIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Hero Atmosphere: Soft Crimson Clouds that fade smoothly on scroll */}
      <motion.div
        style={{ opacity: heroAtmosphereOpacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        {/* Soft Crimson Billowing Clouds specifically on Left & Right Edges with slow drift */}
        <motion.div style={{ y: cloudsParallaxY }} className="absolute inset-0">
          {/* Left edge clouds */}
          <div className="absolute top-[8%] -left-[10%] sm:-left-[6%] lg:-left-[4%] w-[38vw] sm:w-[32vw] lg:w-[26vw] max-w-[460px] h-[78vh] pointer-events-none select-none z-10 opacity-70 animate-cloud-left">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#6e1227] via-[#941c36]/60 to-transparent filter blur-[50px] sm:blur-[70px]" />
            <div className="absolute top-[15%] left-[10%] w-[80%] h-[55%] rounded-full bg-gradient-to-br from-[#8f1d3c]/50 via-[#c2325a]/25 to-transparent filter blur-[40px] sm:blur-[55px]" />
          </div>

          {/* Right edge clouds */}
          <div className="absolute top-[12%] -right-[10%] sm:-right-[6%] lg:-right-[4%] w-[38vw] sm:w-[32vw] lg:w-[26vw] max-w-[460px] h-[80vh] pointer-events-none select-none z-10 opacity-70 animate-cloud-right">
            <div className="w-full h-full rounded-full bg-gradient-to-l from-[#5e1022] via-[#8f1d3c]/60 to-transparent filter blur-[50px] sm:blur-[70px]" />
            <div className="absolute top-[20%] right-[10%] w-[80%] h-[55%] rounded-full bg-gradient-to-bl from-[#8f1d3c]/50 via-[#c2325a]/25 to-transparent filter blur-[40px] sm:blur-[55px]" />
          </div>
        </motion.div>

        {/* Subtle static ember dots scattered in hero */}
        <div className="absolute inset-0 pointer-events-none select-none z-10">
          {[
            { top: '18%', left: '12%', size: '3px', opacity: 0.65 },
            { top: '24%', left: '22%', size: '2px', opacity: 0.45 },
            { top: '15%', right: '16%', size: '3px', opacity: 0.55 },
            { top: '32%', right: '24%', size: '2px', opacity: 0.4 },
            { top: '48%', left: '16%', size: '3px', opacity: 0.5 },
            { top: '65%', left: '28%', size: '2px', opacity: 0.6 },
            { top: '58%', right: '18%', size: '3px', opacity: 0.7 },
            { top: '72%', right: '32%', size: '2px', opacity: 0.45 },
            { top: '82%', left: '20%', size: '3px', opacity: 0.55 },
            { top: '78%', right: '14%', size: '2.5px', opacity: 0.6 },
          ].map((ember, i) => (
            <div
              key={i}
              style={{
                top: ember.top,
                left: ember.left,
                right: ember.right,
                width: ember.size,
                height: ember.size,
                opacity: ember.opacity,
              }}
              className="absolute rounded-full bg-[#ff7895] shadow-[0_0_8px_rgba(255,90,122,0.9)]"
            />
          ))}
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex flex-col items-center text-center">
        
        {/* Main Heading: Just "Prisha Bansal" */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}
          className="font-mono font-bold tracking-tight mb-2 leading-[1.1] glow-rose sm:whitespace-nowrap"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5dfe4] via-[#ff7895] to-[#ff5a7a] drop-shadow-[0_0_30px_rgba(255,90,122,0.45)]">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Cycling Typewriter Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          className="h-11 sm:h-13 flex items-center justify-center mb-1 font-mono font-semibold text-[#ff5a7a] drop-shadow-[0_0_15px_rgba(255,90,122,0.5)]"
        >
          <span>{displayedText}</span>
          <span className="inline-block w-3 h-7 sm:h-8 ml-1.5 bg-[#ff5a7a] animate-blink shadow-[0_0_10px_#ff5a7a]" />
        </motion.div>

        {/* 3D Quadcopter Drone in Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl h-[300px] sm:h-[350px] md:h-[370px] my-1 relative flex items-center justify-center"
        >
          <QuadcopterDrone />
        </motion.div>

        {/* Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#c9a5ae] text-[1.25rem] leading-[1.7] max-w-3xl mb-6 font-sans font-light"
        >
          {personalInfo.heroBio}
        </motion.p>

        {/* CTA Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-6 sm:mb-8"
        >
          {/* Rose Filled Resume Button */}
          <a
            href={personalInfo.resumePath}
            download="Prisha_Bansal_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-mono text-[1rem] font-semibold text-white bg-gradient-to-r from-[#ff5a7a] via-[#e6456c] to-[#c2325a] hover:from-[#ff7895] hover:to-[#d93866] shadow-[0_0_25px_rgba(255,90,122,0.45)] hover:shadow-[0_0_35px_rgba(255,90,122,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <Download className="w-4 h-4 text-rose-100" />
            <span>Download Resume</span>
          </a>

          {/* View Projects Outline Button */}
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-[1rem] font-medium text-[#f5dfe4] border border-[#ff5a7a]/25 bg-[#17080e]/70 hover:bg-[#1e0a13] hover:border-[#ff5a7a]/50 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(255,90,122,0.1)] hover:shadow-[0_0_20px_rgba(255,90,122,0.25)] group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 text-[#ff7895] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 sm:ml-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#17080e]/80 border border-[#ff5a7a]/20 text-[#c9a5ae] hover:text-[#ff7895] hover:border-[#ff5a7a]/45 hover:shadow-[0_0_15px_rgba(255,90,122,0.25)] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#17080e]/80 border border-[#ff5a7a]/20 text-[#c9a5ae] hover:text-[#ff7895] hover:border-[#ff5a7a]/45 hover:shadow-[0_0_15px_rgba(255,90,122,0.25)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-3.5 rounded-xl bg-[#17080e]/80 border border-[#ff5a7a]/20 text-[#c9a5ae] hover:text-[#ff7895] hover:border-[#ff5a7a]/45 hover:shadow-[0_0_15px_rgba(255,90,122,0.25)] transition-all"
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
          className="w-full pt-5 border-t border-white/5 flex flex-wrap items-center justify-center gap-2.5"
        >
          {personalInfo.techStrip.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[0.9rem] px-3.5 py-1.5 rounded-lg bg-[#17080e]/80 border border-[#ff5a7a]/20 text-[#c9a5ae] hover:text-[#f5dfe4] hover:border-[#ff5a7a]/45 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
