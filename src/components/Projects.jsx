import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Terminal, Cpu, Radio, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data';
import CardTilt from './CardTilt';

export default function Projects() {
  const featuredProject = projectsData.items.find((p) => p.featured);
  const otherProjects = projectsData.items.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/5">
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
            {projectsData.title}
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#ff2d8a] to-transparent mt-3" />
        </motion.div>

        {/* Featured Project (Larger Card) */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <CardTilt maxTilt={5}>
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-10 border border-pink-500/30 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                {/* Subtle pink corner ambient glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff2d8a]/15 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar: Badge & Links */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-[#ff2d8a]/15 border border-[#ff2d8a]/50 text-pink-300 shadow-[0_0_15px_rgba(255,45,138,0.25)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#ff2d8a]" />
                      <span>FEATURED SYSTEM</span>
                    </div>

                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-pink-500/40 hover:text-white transition-all group/btn"
                    >
                      <GithubIcon className="w-4 h-4 text-pink-400 group-hover/btn:text-white transition-colors" />
                      <span>Source Repository</span>
                    </a>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-4 tracking-tight">
                    {featuredProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-sans font-light max-w-4xl">
                    {featuredProject.description}
                  </p>

                  {/* Key Experimental Metrics Strip */}
                  {featuredProject.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                      {featuredProject.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-[#0a0f1f]/80 rounded-xl p-3.5 border border-pink-500/15"
                        >
                          <div className="font-mono text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6fb1]">
                            {metric.value}
                          </div>
                          <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                    <span className="font-mono text-xs text-slate-500 mr-2">// stack:</span>
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 rounded-md bg-[#0a0f1f]/90 border border-pink-500/25 text-pink-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardTilt>
          </motion.div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {otherProjects.map((project, idx) => (
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
                    {/* Header: Title & GitHub */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-mono font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-pink-300 hover:border-pink-500/30 transition-all shrink-0"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans font-light">
                      {project.description}
                    </p>

                    {/* Metrics / Key Features */}
                    {project.metrics && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-[#0a0f1f]/60 px-3 py-1.5 rounded-lg border border-white/5 font-mono text-xs"
                          >
                            <span className="text-slate-400">{m.label}: </span>
                            <span className="text-[#ff6fb1] font-semibold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0a0f1f]/80 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
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
