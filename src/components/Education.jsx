import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { educationData } from '../data';
import CardTilt from './CardTilt';

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24 border-t border-[#ff5a7a]/15">
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
            {educationData.title}
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff5a7a] to-transparent mt-3" />
        </motion.div>

        {/* Education Cards Grid (3 cards: University, Class XII, Class X) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {educationData.items.map((item, idx) => (
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
                    {/* Header: Period & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-2 font-mono text-[0.95rem] text-[#ff7895]">
                        <Calendar className="w-4 h-4 text-[#ff5a7a]" />
                        {item.period}
                      </span>
                      {item.badge && (
                        <span className="font-mono text-[0.9rem] px-3 py-1 rounded-full bg-[#ff5a7a]/10 border border-[#ff5a7a]/25 text-rose-200">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Institution (Card titles 1.35rem) */}
                    <h3 className="text-[1.35rem] font-mono font-bold text-[#f5dfe4] mb-2 leading-snug">
                      {item.institution}
                    </h3>

                    {/* Degree */}
                    <div className="font-mono text-[1.05rem] text-[#ff7895] mb-4">
                      {item.degree}
                    </div>

                    {/* Details / Coursework (Card body text 1.05rem) */}
                    <p className="text-[#c9a5ae] text-[1.05rem] leading-[1.7] font-sans font-light">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[0.9rem] text-[#9e7d86] flex items-center justify-between">
                    <span>ACADEMIC RECORD</span>
                    <span className="text-[#ff7895] font-semibold">VERIFIED</span>
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
