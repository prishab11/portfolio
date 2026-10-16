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
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-slate-900/30 backdrop-blur-xs pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#ff2d8a] via-[#ff4396] to-[#ff6fb1] origin-left shadow-[0_0_12px_rgba(255,45,138,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
