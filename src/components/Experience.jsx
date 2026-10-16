import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, UserCheck, ChevronRight } from 'lucide-react';
import { experienceData } from '../data';
import CardTilt from './CardTilt';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            {experienceData.title}
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#ff2d8a] to-transparent mt-3" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-pink-500/25 ml-2 sm:ml-4 space-y-12 sm:space-y-16">
          {experienceData.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Glowing Pink Node on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2d8a] opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff2d8a] border-2 border-[#0a0f1f] shadow-[0_0_12px_rgba(255,45,138,0.8)]" />
                </span>
              </div>

              {/* Experience Card */}
              <CardTilt maxTilt={4}>
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
                  
                  {/* Card Header: Role & Organization */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-base sm:text-lg font-mono text-[#ff6fb1] font-medium">
                        {item.organization}
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs bg-pink-500/10 border border-pink-500/30 text-pink-300 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Metadata: Location & Mentor */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6 pb-4 border-b border-white/5">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-pink-400" />
                      Mentor: {item.mentor}
                    </span>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-sans font-light">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-2 pt-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm font-mono text-slate-300"
                        >
                          <ChevronRight className="w-4 h-4 text-[#ff2d8a] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
