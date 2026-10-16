import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUp, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, contactData } from '../data';
import CardTilt from './CardTilt';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 pb-16 border-t border-[#ff5a7a]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading (clamp(2.5rem, 5vw, 4rem)) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            className="font-mono font-bold text-[#f5dfe4] tracking-tight mb-4 glow-rose"
          >
            {contactData.heading}
          </h2>
          <p className="text-[#c9a5ae] text-[1.125rem] sm:text-[1.2rem] max-w-2xl mx-auto font-sans font-light leading-relaxed">
            {contactData.subheading}
          </p>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#ff5a7a] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Central Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <CardTilt maxTilt={3}>
            <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-[#ff5a7a]/25 text-center relative overflow-hidden shadow-2xl">
              
              {/* Subtle rose glow circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff5a7a]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                
                {/* Mail Icon badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#ff5a7a]/10 border border-[#ff5a7a]/30 flex items-center justify-center text-[#ff5a7a] mb-6 shadow-[0_0_20px_rgba(255,90,122,0.25)]">
                  <Mail className="w-7 h-7" />
                </div>

                {/* Email Display */}
                <div className="font-mono text-xl sm:text-3xl font-bold text-[#f5dfe4] mb-2 tracking-tight">
                  {contactData.email}
                </div>
                <div className="font-mono text-[0.95rem] text-[#ff7895] mb-8">
                  // PGP / ENCRYPTED INQUIRIES WELCOME
                </div>

                {/* Main Action Buttons: Send Mail + Copy Email */}
                <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10 w-full max-w-lg">
                  <a
                    href={`mailto:${contactData.email}?subject=Research%20Inquiry%20-%20Prisha%20Bansal`}
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-mono text-[1rem] font-semibold text-white bg-gradient-to-r from-[#ff5a7a] via-[#e6456c] to-[#c2325a] hover:from-[#ff7895] hover:to-[#d93866] shadow-[0_0_25px_rgba(255,90,122,0.45)] hover:shadow-[0_0_35px_rgba(255,90,122,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="w-4 h-4 text-rose-100" />
                    <span>Send Message</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-mono text-[1rem] font-medium text-[#f5dfe4] border border-[#ff5a7a]/25 bg-[#12060a]/80 hover:bg-[#1e0a13] hover:border-[#ff5a7a]/50 hover:text-white transition-all active:scale-95 shadow-[0_0_15px_rgba(255,90,122,0.1)] hover:shadow-[0_0_20px_rgba(255,90,122,0.2)]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#ff7895]" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Social Network Buttons */}
                <div className="w-full pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#12060a]/90 border border-[#ff5a7a]/20 font-mono text-[0.95rem] text-[#c9a5ae] hover:text-[#f5dfe4] hover:border-[#ff5a7a]/45 hover:shadow-[0_0_15px_rgba(255,90,122,0.25)] transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-[#ff7895]" />
                    <span>github.com/prishab11</span>
                  </a>

                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#12060a]/90 border border-[#ff5a7a]/20 font-mono text-[0.95rem] text-[#c9a5ae] hover:text-[#f5dfe4] hover:border-[#ff5a7a]/45 hover:shadow-[0_0_15px_rgba(255,90,122,0.25)] transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#ff7895]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

              </div>
            </div>
          </CardTilt>
        </motion.div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[0.95rem] text-[#9e7d86]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a7a] shadow-[0_0_8px_#ff5a7a]" />
            <span className="text-[#c9a5ae]">{personalInfo.footer}</span>
          </div>

          <div className="text-[#805a63] text-xs sm:text-sm">
            Embedded & Drone Security Research Portfolio
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#12060a]/80 border border-[#ff5a7a]/20 text-[#c9a5ae] hover:text-[#f5dfe4] hover:border-[#ff5a7a]/45 transition-all text-[0.9rem]"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4 text-[#ff7895]" />
          </button>
        </div>

      </div>
    </section>
  );
}
