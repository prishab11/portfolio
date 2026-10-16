import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function SakuraPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: (i * 5.5 + (i % 4) * 3) % 100, // percentage across full screen width
      delay: (i * 0.8) % 6,
      duration: 10 + (i % 6) * 2.5, // 10-22s slow ambient drift
      size: 8 + (i % 4) * 3, // 8-17px delicate tiny petals
      rotation: (i * 40) % 360,
      opacity: 0.16 + (i % 4) * 0.06, // 0.16 - 0.34 soft subtle opacity
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            top: '-5%',
            left: `${petal.x}%`,
            rotate: petal.rotation,
            opacity: 0,
          }}
          animate={{
            top: '105%',
            left: `${petal.x + (petal.id % 2 === 0 ? 10 : -10)}%`,
            rotate: petal.rotation + 360,
            opacity: [0, petal.opacity, petal.opacity, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            width: petal.size,
            height: petal.size * 1.3,
          }}
        >
          {/* Organic petal SVG */}
          <svg
            viewBox="0 0 30 40"
            className="w-full h-full drop-shadow-[0_0_6px_rgba(255,111,177,0.3)]"
          >
            <path
              d="M15,0 C24,10 30,22 25,32 C21,38 9,38 5,32 C0,22 6,10 15,0 Z"
              fill="url(#globalPetalGradient)"
            />
            <defs>
              <linearGradient id="globalPetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb2d9" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#ff4396" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ff2d8a" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
