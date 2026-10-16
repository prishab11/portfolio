import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { researchData } from '../data';
import CardTilt from './CardTilt';

export default function Research() {
  return (
    <section id="research" className="relative py-20 sm:py-24 border-t border-[#ff5a7a]/15">
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
            {researchData.title}
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff5a7a] to-transparent mt-3" />
        </motion.div>

        {/* Research Card (Larger card, better filled) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <CardTilt maxTilt={4}>
            <div className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-12 border border-[#ff5a7a]/25 relative overflow-hidden shadow-2xl">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#c2325a]/15 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[0.95rem] font-semibold bg-[#ff5a7a]/15 border border-[#ff5a7a]/50 text-rose-200 shadow-[0_0_15px_rgba(255,90,122,0.25)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a7a] animate-ping" />
                  <span>{researchData.status}</span>
                </span>
                <span className="font-mono text-[0.95rem] text-[#9e7d86] hidden sm:inline">
                  // RAG Architecture & Applied AI Security
                </span>
              </div>

              {/* Paper Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-[#f5dfe4] mb-6 tracking-tight leading-snug">
                {researchData.paperTitle}
              </h3>

              {/* Research Summary (Card body text: 1.05rem / 1.125rem) */}
              <p className="text-[#c9a5ae] text-[1.125rem] leading-[1.75] mb-8 font-sans font-light max-w-5xl">
                {researchData.description}
              </p>

              {/* Key Empirical Findings */}
              <div className="space-y-3.5 pt-6 border-t border-white/5">
                <div className="font-mono text-[0.95rem] uppercase tracking-wider text-[#9e7d86] mb-4 flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-[#ff5a7a]" />
                  <span>Key Investigation Findings & Benchmarks</span>
                </div>

                {researchData.keyFindings.map((finding, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#12060a]/80 border border-[#ff5a7a]/15 font-mono text-[1.05rem] text-[#f5dfe4]/95"
                  >
                    <span className="text-[#ff5a7a] mt-0.5 select-none font-bold">›</span>
                    <span>{finding}</span>
                  </div>
                ))}
              </div>

              {/* Benchmark Badge (Tags and labels at least 0.9rem) */}
              <div className="mt-8 pt-5 flex flex-wrap items-center gap-3 text-[0.9rem] font-mono text-[#c9a5ae]">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#12060a]/80 border border-white/10">
                  Benchmark: BIPIA
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#ff5a7a]/10 border border-[#ff5a7a]/30 text-rose-200">
                  Drop Metric: 56% Detection Dilution
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#12060a]/80 border border-white/10">
                  Focus: Granularity Mismatch
                </span>
              </div>

            </div>
          </CardTilt>
        </motion.div>

      </div>
    </section>
  );
}
