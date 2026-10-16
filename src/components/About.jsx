import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Terminal, Binary, Radio } from 'lucide-react';
import { personalInfo, aboutData } from '../data';

// Decorative Japanese Folding Fan SVG Accent (~190px, faded, rose/crimson palette)
function FanAccent() {
  return (
    <div
      aria-hidden="true"
      className="absolute -top-10 -right-4 sm:right-6 w-44 sm:w-52 h-32 pointer-events-none opacity-25 hover:opacity-35 transition-opacity drop-shadow-[0_0_15px_rgba(255,90,122,0.4)]"
    >
      <svg viewBox="0 0 200 120" className="w-full h-full stroke-[#ff7895] fill-none">
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
          fill="url(#fanGradRose)"
          stroke="#ff5a7a"
          strokeWidth="1.2"
          opacity="0.85"
        />

        {/* Inner arc border */}
        <path d="M40,55 Q100,24 160,55" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.6" />

        {/* Tassel handle ring */}
        <circle cx="100" cy="115" r="4" fill="#ff5a7a" />
        <path d="M100,119 L100,130" stroke="#c2325a" strokeWidth="1.5" />

        <defs>
          <linearGradient id="fanGradRose" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5a7a" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#c2325a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff5a7a" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Interactive Profile Card with subtle 3D tilt (larger size to fill space properly)
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
      className="relative group mx-auto w-full max-w-[310px] sm:max-w-[380px] lg:max-w-[420px]"
    >
      {/* Soft rose ambient glow behind profile picture */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff5a7a]/30 via-[#c2325a]/25 to-transparent rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />

      {/* Frame container */}
      <div
        style={{
          transform: `perspective(800px) rotateY(${coords.x * 0.6}deg) rotateX(${-coords.y * 0.6}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-[#ff5a7a] via-[#ff7895]/50 to-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
      >
        <div className="relative rounded-[22px] overflow-hidden bg-[#17080e] aspect-[4/5]">
          <img
            src={personalInfo.profileImage}
            alt="Prisha Bansal"
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />

          {/* Subtle maroon/rose blend tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12060a]/80 via-transparent to-[#ff5a7a]/5 pointer-events-none mix-blend-multiply" />

          {/* High-tech watermark badge */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 font-mono text-xs text-[#f5dfe4] bg-[#17080e]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#ff5a7a]/30 flex items-center justify-between shadow-lg">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a7a] shadow-[0_0_8px_#ff5a7a]" />
              <span className="font-semibold tracking-wider">STUDENT</span>
            </span>
            <span className="text-[#c9a5ae] text-xs">NFSU // 2026</span>
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
        return <Radio className="w-5 h-5 text-[#ff5a7a]" />;
      case 'Autonomous Systems & Robotics':
        return <Cpu className="w-5 h-5 text-[#ff7895]" />;
      case 'Languages':
        return <Binary className="w-5 h-5 text-rose-200" />;
      case 'Security & Tools':
        return <Shield className="w-5 h-5 text-[#c2325a]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#ff7895]" />;
    }
  };

  return (
    <section id="about" className="relative py-20 sm:py-24 overflow-hidden border-t border-[#ff5a7a]/15">
      {/* Decorative Fan Accent Graphic */}
      <FanAccent />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading (clamp(2.25rem, 4vw, 3.25rem)) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
            className="font-mono font-bold text-[#f5dfe4] tracking-tight glow-rose"
          >
            {aboutData.title}
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff5a7a] to-transparent mt-3" />
        </motion.div>

        {/* Profile + Bio Grid (wider and better filled) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-16">

          {/* Left: Profile Picture (larger) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 lg:col-span-5 flex justify-center"
          >
            <ProfileCard />
          </motion.div>

          {/* Right: Bio Text Card (larger padding and font) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-7 lg:col-span-7 flex flex-col justify-center"
          >
            <div className="glass-panel rounded-2xl p-7 sm:p-10 border border-[#ff5a7a]/20 shadow-2xl">
              <p className="text-[#c9a5ae] text-[1.125rem] sm:text-[1.2rem] leading-[1.75] font-sans font-light">
                {aboutData.bio}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid in Four Groups */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-[0.95rem] uppercase tracking-wider text-[#9e7d86] mb-6 flex items-center gap-2">
            <span className="text-[#ff5a7a] font-bold">//</span>
            <span>Technical Capabilities & Domain Matrix</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.skillsGroups.map((group, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-[#ff5a7a]/18 flex flex-col h-full shadow-lg"
              >
                {/* Group Header (Card titles: 1.35rem) */}
                <div className="flex items-center gap-3 pb-3.5 mb-4 border-b border-[#ff5a7a]/15">
                  <div className="p-2 rounded-xl bg-[#ff5a7a]/10 border border-[#ff5a7a]/25 text-[#ff5a7a] shrink-0">
                    {getGroupIcon(group.category)}
                  </div>
                  <h3 className="font-mono text-[1.35rem] font-semibold text-[#f5dfe4] tracking-tight leading-snug">
                    {group.category}
                  </h3>
                </div>

                {/* Skills List (Tags/labels at least 0.9rem) */}
                <ul className="space-y-2.5 flex-1">
                  {group.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="font-mono text-[0.95rem] text-[#c9a5ae] flex items-start gap-2.5"
                    >
                      <span className="text-[#ff5a7a] select-none text-[1rem] mt-0.5 font-bold">›</span>
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
