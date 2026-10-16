import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, CheckCircle, FileCheck, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data';
import CardTilt from './CardTilt';

export default function Achievements() {
  const getIcon = (type) => {
    switch (type) {
      case 'Competition':
        return <Trophy className="w-4 h-4 text-[#ff2d8a]" />;
      case 'Certification':
        return <Award className="w-4 h-4 text-[#ff6fb1]" />;
      case 'Ideathon':
        return <FileCheck className="w-4 h-4 text-pink-300" />;
      default:
        return <Award className="w-4 h-4 text-[#ff2d8a]" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            {achievementsData.title}
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2">
            {achievementsData.subtitle}
          </p>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#ff2d8a] to-transparent mt-3" />
        </motion.div>

        {/* 3 Cards Grid (like Certificates row in reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievementsData.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <CardTilt maxTilt={7} className="h-full">
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between h-full shadow-lg">
                  <div>
                    {/* Header: Type icon & Year */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20">
                        {getIcon(item.type)}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#ff2d8a] px-2.5 py-1 rounded bg-pink-500/10 border border-pink-500/20">
                        {item.year}
                      </span>
                    </div>

                    {/* Achievement Title */}
                    <h3 className="text-lg font-mono font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Organization / Issuer */}
                    <div className="font-mono text-xs text-[#ff6fb1] mb-4">
                      {item.organization}
                    </div>

                    {/* Instructor / Mentor if available */}
                    {item.instructor && (
                      <div className="font-mono text-[11px] text-slate-400 mb-3 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                        Instructor: {item.instructor}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Label */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-pink-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#ff2d8a]" />
                      CREDENTIAL
                    </span>
                    <span className="uppercase tracking-wider text-[10px] text-slate-500">
                      {item.type}
                    </span>
                  </div>
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
