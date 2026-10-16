import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, Terminal, Binary, Radio, Layers, Activity } from 'lucide-react';
import { personalInfo, aboutData } from '../data';
import CardTilt from './CardTilt';

// Subtle Decorative Japanese Folding Fan SVG Accent (~180px, partly faded, non-intrusive)
function FanAccent() {
  return (
    <div
      aria-hidden="true"
      className="absolute -top-10 -right-4 sm:right-6 w-40 sm:w-48 h-28 pointer-events-none opacity-20 hover:opacity-30 transition-opacity drop-shadow-[0_0_15px_rgba(255,45,138,0.4)]"
    >
      <svg viewBox="0 0 200 120" className="w-full h-full stroke-[#ff6fb1] fill-none">
        {/* Fan Ribs */}
        <path d="M100,115 L20,30" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M100,115 L40,18" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M100,115 L65,10" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M100,115 L90,6" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M100,115 L110,6" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M100,115 L135,10" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M100,115 L160,18" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M100,115 L180,30" strokeWidth="1.2" strokeOpacity="0.7" />

        {/* Fan Arc Blades */}
        <path
          d="M20,30 Q100,-8 180,30 L160,55 Q100,24 40,55 Z"
          fill="url(#fanGrad)"
          stroke="#ff2d8a"
          strokeWidth="1.2"
          opacity="0.85"
        />

        {/* Inner arc border */}
        <path d="M40,55 Q100,24 160,55" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.6" />

        {/* Tassel handle ring */}
        <circle cx="100" cy="115" r="4" fill="#ff2d8a" />
        <path d="M100,119 L100,130" stroke="#ff4396" strokeWidth="1.5" />

        <defs>
          <linearGradient id="fanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff2d8a" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#ff6fb1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff2d8a" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Interactive Profile Card with subtle 3D tilt
function ProfileCard() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 20 - 10;
    const y = ((e.clientY - rect.top) / rect.height) * 20 - 10;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group mx-auto max-w-[280px] sm:max-w-[310px]"
    >
      {/* Soft pink ambient glow behind profile picture */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-[#ff2d8a]/25 via-[#ff6fb1]/20 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

      {/* Frame container */}
      <div
        style={{
          transform: `perspective(800px) rotateY(${coords.x * 0.7}deg) rotateX(${-coords.y * 0.7}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-[#ff2d8a] via-[#ff6fb1]/50 to-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
      >
        <div className="relative rounded-[22px] overflow-hidden bg-[#0d1326] aspect-[4/5]">
          <img
            src={personalInfo.profileImage}
            alt="Prisha Bansal"
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />

          {/* Subtle navy/pink gradient blend tint overlay (keeps face clear and natural) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f]/75 via-transparent to-[#ff2d8a]/5 pointer-events-none mix-blend-multiply" />

          {/* Subtle tech watermark badge */}
          <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-pink-300 bg-[#0d1326]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-pink-500/30 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff2d8a]" />
              STUDENT
            </span>
            <span className="text-slate-400 text-[10px]">NFSU // 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const getGroupIcon = (category) => {
    switch (category) {
      case 'IoT & Embedded Security':
        return <Radio className="w-4 h-4 text-[#ff2d8a]" />;
      case 'Autonomous Systems & Robotics':
        return <Cpu className="w-4 h-4 text-[#ff6fb1]" />;
      case 'Languages':
        return <Binary className="w-4 h-4 text-pink-300" />;
      case 'Security & Tools':
        return <Shield className="w-4 h-4 text-[#ff4396]" />;
      default:
        return <Terminal className="w-4 h-4 text-pink-400" />;
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Subtle Fan Accent Graphic (~200px max, faded, never focal) */}
      <FanAccent />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            {aboutData.title}
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#ff2d8a] to-transparent mt-3" />
        </motion.div>

        {/* Profile + Bio & Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center mb-16">

          {/* Left: Profile Picture with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 lg:col-span-4 flex justify-center"
          >
            <ProfileCard />
          </motion.div>

          {/* Right: Bio Text and Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-7 lg:col-span-8 flex flex-col justify-center"
          >
            {/* Bio Paragraph */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light">
                {aboutData.bio}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Compact Skills Grid in Four Groups */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-[#ff2d8a]">//</span>
            <span>Technical Capabilities & Domain Matrix</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutData.skillsGroups.map((group, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-xl p-5 border border-white/10 flex flex-col h-full"
              >
                <div className="flex items-center gap-2.5 pb-3 mb-3.5 border-b border-white/5">
                  <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20">
                    {getGroupIcon(group.category)}
                  </div>
                  <h3 className="font-mono text-xs sm:text-sm font-semibold text-slate-200 tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <ul className="space-y-2 flex-1">
                  {group.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="font-mono text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-[#ff2d8a] select-none text-[10px] mt-0.5">›</span>
                      <span className="leading-snug">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
