import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, AlertTriangle, FileCode, Search, CheckCircle2 } from 'lucide-react';
import { researchData } from '../data';
import CardTilt from './CardTilt';

export default function Research() {
  return (
    <section id="research" className="relative py-24 sm:py-32 border-t border-white/5">
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
            {researchData.title}
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#ff2d8a] to-transparent mt-3" />
        </motion.div>

        {/* Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <CardTilt maxTilt={5}>
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-10 border border-pink-500/25 relative overflow-hidden shadow-2xl">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#ff2d8a]/10 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-[#ff2d8a]/15 border border-[#ff2d8a]/50 text-pink-300 shadow-[0_0_15px_rgba(255,45,138,0.25)]">
                  <span className="w-2 h-2 rounded-full bg-[#ff2d8a] animate-ping" />
                  <span>{researchData.status}</span>
                </span>
                <span className="font-mono text-xs text-slate-400 hidden sm:inline">
                  // RAG Architecture & Applied AI Security
                </span>
              </div>

              {/* Paper Title */}
              <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-6 tracking-tight leading-snug">
                {researchData.paperTitle}
              </h3>

              {/* Research Summary */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-sans font-light">
                {researchData.description}
              </p>

              {/* Key Empirical Findings */}
              <div className="space-y-3 pt-6 border-t border-white/5">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-[#ff2d8a]" />
                  <span>Key Investigation Findings & Benchmarks</span>
                </div>

                {researchData.keyFindings.map((finding, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#0a0f1f]/60 border border-white/5 font-mono text-xs sm:text-sm text-slate-300"
                  >
                    <span className="text-[#ff2d8a] mt-0.5 select-none font-bold">›</span>
                    <span>{finding}</span>
                  </div>
                ))}
              </div>

              {/* Benchmark Badge */}
              <div className="mt-8 pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  Benchmark: BIPIA
                </span>
                <span className="px-2.5 py-1 rounded bg-[#ff2d8a]/10 border border-[#ff2d8a]/30 text-pink-300">
                  Drop Metric: 56% Detection Dilution
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
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
