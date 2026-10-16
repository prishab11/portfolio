import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data';
import CardTilt from './CardTilt';

export default function Projects() {
  const featuredProject = projectsData.items.find((p) => p.featured);
  const otherProjects = projectsData.items.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-20 sm:py-24 border-t border-[#ff5a7a]/15">
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
            {projectsData.title}
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff5a7a] to-transparent mt-3" />
        </motion.div>

        {/* Featured Project (Larger Card with generous spacing & stat boxes) */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <CardTilt maxTilt={4}>
              <div className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-12 border border-[#ff5a7a]/30 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
                {/* Subtle crimson corner ambient glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#c2325a]/20 via-[#ff5a7a]/10 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar: Badge & Links */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[0.95rem] font-semibold bg-[#ff5a7a]/15 border border-[#ff5a7a]/50 text-rose-200 shadow-[0_0_15px_rgba(255,90,122,0.25)]">
                      <Sparkles className="w-4 h-4 text-[#ff5a7a]" />
                      <span>FEATURED SYSTEM</span>
                    </div>

                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-[0.95rem] font-medium text-[#f5dfe4] bg-[#12060a]/80 border border-[#ff5a7a]/25 hover:border-[#ff5a7a]/50 hover:shadow-[0_0_15px_rgba(255,90,122,0.25)] transition-all group/btn"
                    >
                      <GithubIcon className="w-4 h-4 text-[#ff7895] group-hover/btn:text-white transition-colors" />
                      <span>Source Repository</span>
                    </a>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-4xl font-mono font-bold text-[#f5dfe4] mb-4 tracking-tight leading-tight">
                    {featuredProject.title}
                  </h3>

                  {/* Description (Card body text: 1.05rem / 1.125rem) */}
                  <p className="text-[#c9a5ae] text-[1.125rem] leading-[1.75] mb-8 font-sans font-light max-w-5xl">
                    {featuredProject.description}
                  </p>

                  {/* Key Experimental Metrics (Larger Stat Boxes) */}
                  {featuredProject.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-8">
                      {featuredProject.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-[#12060a]/90 rounded-2xl p-5 sm:p-6 border border-[#ff5a7a]/20 shadow-inner"
                        >
                          <div className="font-mono text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f5dfe4] to-[#ff7895]">
                            {metric.value}
                          </div>
                          <div className="font-mono text-[0.9rem] text-[#9e7d86] uppercase tracking-wider mt-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags (at least 0.9rem) */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-5 border-t border-white/5">
                    <span className="font-mono text-[0.95rem] text-[#9e7d86] mr-2">// stack:</span>
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.95rem] px-3.5 py-1.5 rounded-lg bg-[#12060a]/90 border border-[#ff5a7a]/25 text-rose-200"
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

        {/* Secondary Projects Grid (3 columns, larger cards & 1.35rem titles) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {otherProjects.map((project, idx) => (
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
                    {/* Header: Title & GitHub (Card titles 1.35rem) */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-[1.35rem] font-mono font-bold text-[#f5dfe4] tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#12060a]/80 border border-[#ff5a7a]/20 text-[#c9a5ae] hover:text-[#ff7895] hover:border-[#ff5a7a]/45 transition-all shrink-0"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Description (Card body text 1.05rem) */}
                    <p className="text-[#c9a5ae] text-[1.05rem] leading-[1.7] mb-6 font-sans font-light">
                      {project.description}
                    </p>

                    {/* Metrics / Key Features */}
                    {project.metrics && (
                      <div className="flex flex-wrap gap-2.5 mb-6">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-[#12060a]/80 px-3.5 py-2 rounded-xl border border-[#ff5a7a]/15 font-mono text-[0.9rem]"
                          >
                            <span className="text-[#9e7d86]">{m.label}: </span>
                            <span className="text-[#ff7895] font-semibold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Tags (Tags at least 0.9rem) */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.9rem] px-3 py-1.5 rounded-lg bg-[#12060a]/90 border border-[#ff5a7a]/20 text-rose-200"
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
