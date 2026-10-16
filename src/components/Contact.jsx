import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUp, Send, Shield } from 'lucide-react';
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
    <section id="contact" className="relative pt-24 sm:pt-32 pb-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight mb-4">
            {contactData.heading}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-sans font-light">
            {contactData.subheading}
          </p>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#ff2d8a] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Central Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <CardTilt maxTilt={4}>
            <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-pink-500/25 text-center relative overflow-hidden shadow-2xl">
              
              {/* Subtle pink glow circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2d8a]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                
                {/* Security verified icon */}
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-[#ff2d8a] mb-6 shadow-[0_0_20px_rgba(255,45,138,0.2)]">
                  <Mail className="w-6 h-6" />
                </div>

                {/* Email Display */}
                <div className="font-mono text-lg sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {contactData.email}
                </div>
                <div className="font-mono text-xs text-pink-400 mb-8">
                  // PGP / ENCRYPTED INQUIRIES WELCOME
                </div>

                {/* Main Action Buttons: Send Mail + Copy Email */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full max-w-md">
                  <a
                    href={`mailto:${contactData.email}?subject=Research%20Inquiry%20-%20Prisha%20Bansal`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-gradient-to-r from-[#ff2d8a] to-[#ff4396] hover:from-[#ff4396] hover:to-[#ff6fb1] shadow-[0_0_25px_rgba(255,45,138,0.4)] hover:shadow-[0_0_35px_rgba(255,45,138,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-pink-500/40 hover:text-white transition-all active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-pink-400" />
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0f1f]/80 border border-white/10 font-mono text-xs text-slate-300 hover:text-white hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(255,45,138,0.2)] transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-pink-400" />
                    <span>github.com/prishab11</span>
                  </a>

                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0f1f]/80 border border-white/10 font-mono text-xs text-slate-300 hover:text-white hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(255,45,138,0.2)] transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-pink-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

              </div>
            </div>
          </CardTilt>
        </motion.div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff2d8a]" />
            <span>{personalInfo.footer}</span>
          </div>

          <div className="text-slate-500 text-[11px]">
            Embedded & Drone Security Research Portfolio
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-pink-300 hover:border-pink-500/30 transition-all text-xs"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
