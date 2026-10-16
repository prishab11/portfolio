import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, UserCheck, ChevronRight } from 'lucide-react';
import { experienceData } from '../data';
import CardTilt from './CardTilt';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 border-t border-[#ff5a7a]/15">
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
            {experienceData.title}
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff5a7a] to-transparent mt-3" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative pl-7 sm:pl-10 border-l-2 border-[#ff5a7a]/25 ml-2 sm:ml-4 space-y-12 sm:space-y-16">
          {experienceData.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Glowing Rose Node on Timeline */}
              <div className="absolute -left-[37px] sm:-left-[49px] top-2 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5a7a] opacity-75" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-[#ff5a7a] border-2 border-[#12060a] shadow-[0_0_14px_rgba(255,90,122,0.85)]" />
                </span>
              </div>

              {/* Experience Card (wider and larger) */}
              <CardTilt maxTilt={3}>
                <div className="glass-panel glass-panel-hover rounded-2xl p-7 sm:p-10 border border-[#ff5a7a]/20 shadow-xl">
                  
                  {/* Card Header: Role & Organization */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                    <div>
                      {/* Role Title */}
                      <h3 className="text-2xl sm:text-3xl font-mono font-bold text-[#f5dfe4] tracking-tight mb-1">
                        {item.role}
                      </h3>
                      {/* Organization */}
                      <div className="text-[1.2rem] font-mono text-[#ff7895] font-semibold">
                        {item.organization}
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[0.95rem] bg-[#ff5a7a]/10 border border-[#ff5a7a]/30 text-rose-200 self-start sm:self-auto shadow-sm">
                      <Calendar className="w-4 h-4 text-[#ff5a7a]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Metadata: Location & Mentor */}
                  <div className="flex flex-wrap items-center gap-5 text-[0.95rem] font-mono text-[#9e7d86] mb-6 pb-4 border-b border-white/5">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#ff7895]" />
                      {item.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#ff7895]" />
                      Mentor: {item.mentor}
                    </span>
                  </div>

                  {/* Description Paragraph (Card body text: 1.05rem) */}
                  <p className="text-[#c9a5ae] text-[1.05rem] leading-[1.75] mb-6 font-sans font-light">
                    {item.description}
                  </p>

                  {/* Bullet Highlights (Tags/labels at least 0.9rem) */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-[0.95rem] sm:text-[1rem] font-mono text-[#f5dfe4]/90"
                        >
                          <ChevronRight className="w-4 h-4 text-[#ff5a7a] shrink-0 mt-0.5" />
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
