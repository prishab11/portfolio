import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, CheckCircle, FileCheck } from 'lucide-react';
import { achievementsData } from '../data';
import CardTilt from './CardTilt';

export default function Achievements() {
  const getIcon = (type) => {
    switch (type) {
      case 'Competition':
        return <Trophy className="w-5 h-5 text-[#ff5a7a]" />;
      case 'Certification':
        return <Award className="w-5 h-5 text-[#ff7895]" />;
      case 'Ideathon':
        return <FileCheck className="w-5 h-5 text-rose-200" />;
      default:
        return <Award className="w-5 h-5 text-[#ff5a7a]" />;
    }
  };

  return (
    <section id="achievements" className="relative py-20 sm:py-24 border-t border-[#ff5a7a]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading (clamp(2.25rem, 4vw, 3.25rem)) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <h2
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
            className="font-mono font-bold text-[#f5dfe4] tracking-tight glow-rose"
          >
            {achievementsData.title}
          </h2>
          <p className="font-mono text-[1.05rem] text-[#c9a5ae] mt-2">
            {achievementsData.subtitle}
          </p>
          <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff5a7a] to-transparent mt-3" />
        </motion.div>

        {/* 3 Cards Grid (larger cards, 1.35rem titles) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {achievementsData.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <CardTilt maxTilt={5} className="h-full">
                <div className="glass-panel glass-panel-hover rounded-2xl p-7 sm:p-8 border border-[#ff5a7a]/18 flex flex-col justify-between h-full shadow-lg">
                  <div>
                    {/* Header: Type icon & Year */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#ff5a7a]/10 border border-[#ff5a7a]/20">
                        {getIcon(item.type)}
                      </div>
                      <span className="font-mono text-[0.95rem] font-bold text-[#ff5a7a] px-3 py-1 rounded-lg bg-[#ff5a7a]/10 border border-[#ff5a7a]/25">
                        {item.year}
                      </span>
                    </div>

                    {/* Achievement Title (Card titles 1.35rem) */}
                    <h3 className="text-[1.35rem] font-mono font-bold text-[#f5dfe4] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Organization / Issuer */}
                    <div className="font-mono text-[1.05rem] text-[#ff7895] mb-4">
                      {item.organization}
                    </div>

                    {/* Instructor / Mentor if available */}
                    {item.instructor && (
                      <div className="font-mono text-[0.95rem] text-[#c9a5ae] mb-3 bg-[#12060a]/80 px-3 py-1.5 rounded-lg border border-[#ff5a7a]/15">
                        Instructor: {item.instructor}
                      </div>
                    )}

                    {/* Description (Card body text 1.05rem) */}
                    <p className="text-[#c9a5ae] text-[1.05rem] leading-[1.7] font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Label */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[0.9rem] font-mono text-[#c9a5ae]">
                    <span className="flex items-center gap-2 text-rose-200">
                      <CheckCircle className="w-4 h-4 text-[#ff5a7a]" />
                      CREDENTIAL
                    </span>
                    <span className="uppercase tracking-wider text-[0.85rem] text-[#9e7d86]">
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
