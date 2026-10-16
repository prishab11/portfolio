import React from 'react';

/**
 * AtmosphericBackground
 * Below the hero: Keep only the cloud layer, extremely faded (about 6 to 10 percent opacity, heavily blurred),
 * fixed behind the content, so the page feels atmospheric rather than empty.
 */
export default function AtmosphericBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Base deep maroon-black background layer */}
      <div className="absolute inset-0 bg-[#12060a]" />

      {/* Extremely faded fixed cloud atmosphere layer (about 6% - 8% opacity, heavily blurred) */}
      <div className="absolute inset-0 opacity-[0.07] filter blur-[90px] select-none pointer-events-none">
        {/* Left atmospheric cloud mass */}
        <div className="absolute top-[10%] -left-[10%] w-[35vw] h-[65vh] rounded-full bg-gradient-to-br from-[#8f1d3c] via-[#5e1126] to-transparent animate-cloud-left" />
        
        {/* Right cloud mass */}
        <div className="absolute top-[35%] -right-[10%] w-[35vw] h-[65vh] rounded-full bg-gradient-to-bl from-[#8f1d3c] via-[#5e1126] to-transparent animate-cloud-right" />
        
        {/* Mid-lower left cloud */}
        <div className="absolute top-[65%] -left-[8%] w-[30vw] h-[55vh] rounded-full bg-gradient-to-tr from-[#701227] via-[#4a0918] to-transparent animate-cloud-left" />

        {/* Lower right cloud */}
        <div className="absolute top-[85%] -right-[8%] w-[30vw] h-[55vh] rounded-full bg-gradient-to-tl from-[#701227] via-[#4a0918] to-transparent" />
      </div>

      {/* Very faint crimson radial vignette at top and bottom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(194,50,90,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,rgba(143,29,60,0.06)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
}
