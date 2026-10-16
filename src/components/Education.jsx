import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '../data';
import CardTilt from './CardTilt';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 border-t border-white/5">
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
            {educationData.title}
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#ff2d8a] to-transparent mt-3" />
        </motion.div>

        {/* Education Cards Grid (3 cards: University, Class XII, Class X) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {educationData.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <CardTilt maxTilt={6} className="h-full">
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between h-full shadow-lg">
                  <div>
                    {/* Header: Period & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-pink-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.badge && (
                        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/25 text-pink-300">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Institution */}
                    <h3 className="text-lg font-mono font-bold text-white mb-2 leading-snug">
                      {item.institution}
                    </h3>

                    {/* Degree */}
                    <div className="font-mono text-xs text-[#ff6fb1] mb-4">
                      {item.degree}
                    </div>

                    {/* Details / Coursework */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[11px] text-slate-500 flex items-center justify-between">
                    <span>ACADEMIC RECORD</span>
                    <span className="text-pink-400/80">VERIFIED</span>
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
