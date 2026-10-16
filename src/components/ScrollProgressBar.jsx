import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-[#12060a]/50 backdrop-blur-xs pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#ff5a7a] via-[#e6456c] to-[#c2325a] origin-left shadow-[0_0_14px_rgba(255,90,122,0.85)]"
        style={{ scaleX }}
      />
    </div>
  );
}
