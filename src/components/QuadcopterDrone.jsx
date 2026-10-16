import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Low-poly 3D Quadcopter model built from geometric primitives
function DroneModel({ scrollProgress, mousePos, isReducedMotion }) {
  const droneGroupRef = useRef();
  const rotorRefs = [useRef(), useRef(), useRef(), useRef()];
  const ledRef = useRef();

  // Arm positions: 4 diagonal arms (X-configuration)
  const armAngle = Math.PI / 4;
  const armLength = 1.7;
  const motorPositions = useMemo(() => [
    [Math.cos(armAngle) * armLength, 0.08, Math.sin(armAngle) * armLength],
    [-Math.cos(armAngle) * armLength, 0.08, Math.sin(armAngle) * armLength],
    [-Math.cos(armAngle) * armLength, 0.08, -Math.sin(armAngle) * armLength],
    [Math.cos(armAngle) * armLength, 0.08, -Math.sin(armAngle) * armLength],
  ], []);

  // Frame loop for animation
  useFrame((state, delta) => {
    // Spin the 4 rotors
    if (!isReducedMotion) {
      const speed = delta * 24;
      if (rotorRefs[0].current) rotorRefs[0].current.rotation.y += speed;
      if (rotorRefs[1].current) rotorRefs[1].current.rotation.y -= speed;
      if (rotorRefs[2].current) rotorRefs[2].current.rotation.y += speed;
      if (rotorRefs[3].current) rotorRefs[3].current.rotation.y -= speed;

      // Strobe LED blink
      if (ledRef.current) {
        const time = state.clock.getElapsedTime();
        ledRef.current.intensity = Math.sin(time * 6) > 0.3 ? 2.5 : 0.4;
      }
    }

    if (droneGroupRef.current) {
      if (!isReducedMotion) {
        // Natural idle bank and gentle pitch
        const t = state.clock.getElapsedTime();
        const basePitch = Math.sin(t * 1.2) * 0.06;
        const baseRoll = Math.cos(t * 0.9) * 0.08;
        const baseYaw = t * 0.25;

        // Scroll-linked flight posture: as user scrolls down, drone pitches forward and banks
        const scrollPitch = (scrollProgress || 0) * 1.8;
        const scrollYaw = (scrollProgress || 0) * 2.5;

        // Target rotations with mouse reaction
        const targetRotX = basePitch + (mousePos.y * 0.4) + scrollPitch * 0.3;
        const targetRotY = baseYaw + (mousePos.x * 0.5) + scrollYaw;
        const targetRotZ = baseRoll - (mousePos.x * 0.3);

        // Smooth interpolation
        droneGroupRef.current.rotation.x = THREE.MathUtils.lerp(droneGroupRef.current.rotation.x, targetRotX, 0.08);
        droneGroupRef.current.rotation.y = THREE.MathUtils.lerp(droneGroupRef.current.rotation.y, targetRotY, 0.08);
        droneGroupRef.current.rotation.z = THREE.MathUtils.lerp(droneGroupRef.current.rotation.z, targetRotZ, 0.08);

        // Slight scroll translation parallax
        const targetY = -(scrollProgress || 0) * 0.6;
        droneGroupRef.current.position.y = THREE.MathUtils.lerp(droneGroupRef.current.position.y, targetY, 0.05);
      }
    }
  });

  // Materials
  const pinkWireMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#ff2d8a',
    wireframe: true,
  }), []);

  const pinkLineMat = useMemo(() => new THREE.LineBasicMaterial({
    color: '#ff6fb1',
  }), []);

  const darkBodyMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0d1326',
    roughness: 0.3,
    metalness: 0.8,
  }), []);

  const accentPinkMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ff2d8a',
    emissive: '#ff2d8a',
    emissiveIntensity: 0.6,
    roughness: 0.2,
  }), []);

  const rotorBladeMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ff6fb1',
    transparent: true,
    opacity: 0.85,
    roughness: 0.1,
  }), []);

  return (
    <group ref={droneGroupRef} scale={[0.9, 0.9, 0.9]}>
      {/* Central Drone Body (Fuselage) */}
      <mesh material={darkBodyMat} position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.32, 1.2]} />
      </mesh>
      {/* Fuselage Wireframe Outer Cage */}
      <mesh material={pinkWireMat} position={[0, 0, 0]}>
        <boxGeometry args={[1.24, 0.34, 1.24]} />
      </mesh>

      {/* Top Canopy / Flight Controller Deck */}
      <mesh material={accentPinkMat} position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.38, 0.48, 0.16, 8]} />
      </mesh>
      {/* Top GPS / Telemetry Antenna Puck */}
      <mesh material={darkBodyMat} position={[0, 0.4, -0.2]}>
        <cylinderGeometry args={[0.18, 0.18, 0.12, 16]} />
      </mesh>
      <mesh material={pinkWireMat} position={[0, 0.4, -0.2]}>
        <cylinderGeometry args={[0.19, 0.19, 0.13, 16]} />
      </mesh>

      {/* 4 Carbon Arms */}
      {motorPositions.map((pos, idx) => (
        <group key={`arm-${idx}`}>
          {/* Arm tube */}
          <mesh
            material={darkBodyMat}
            position={[pos[0] / 2, 0, pos[2] / 2]}
            rotation={[0, -Math.atan2(pos[2], pos[0]), 0]}
          >
            <boxGeometry args={[armLength * 1.05, 0.1, 0.14]} />
          </mesh>
          <mesh
            material={pinkWireMat}
            position={[pos[0] / 2, 0, pos[2] / 2]}
            rotation={[0, -Math.atan2(pos[2], pos[0]), 0]}
          >
            <boxGeometry args={[armLength * 1.05, 0.12, 0.16]} />
          </mesh>

          {/* Motor Mount / Bell */}
          <mesh material={darkBodyMat} position={[pos[0], pos[1], pos[2]]}>
            <cylinderGeometry args={[0.22, 0.22, 0.2, 12]} />
          </mesh>
          <mesh material={pinkWireMat} position={[pos[0], pos[1], pos[2]]}>
            <cylinderGeometry args={[0.24, 0.24, 0.22, 12]} />
          </mesh>

          {/* Rotor Blade Assembly */}
          <group
            ref={rotorRefs[idx]}
            position={[pos[0], pos[1] + 0.14, pos[2]]}
          >
            {/* Propeller Blade 1 */}
            <mesh material={rotorBladeMat} position={[0, 0, 0]} rotation={[0.08, 0, 0]}>
              <boxGeometry args={[1.3, 0.02, 0.14]} />
            </mesh>
            {/* Propeller Center Cap */}
            <mesh material={accentPinkMat} position={[0, 0.03, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.06, 12]} />
            </mesh>
            {/* Blade Tip Glowing Accents */}
            <mesh material={pinkWireMat} position={[0.62, 0, 0]}>
              <boxGeometry args={[0.08, 0.03, 0.14]} />
            </mesh>
            <mesh material={pinkWireMat} position={[-0.62, 0, 0]}>
              <boxGeometry args={[0.08, 0.03, 0.14]} />
            </mesh>
          </group>

          {/* Propeller Guard Wireframe Hoop */}
          <mesh
            material={pinkWireMat}
            position={[pos[0], pos[1] + 0.12, pos[2]]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <torusGeometry args={[0.78, 0.02, 6, 24]} />
          </mesh>

          {/* Motor Pod LED indicator */}
          <mesh
            material={accentPinkMat}
            position={[pos[0], pos[1] - 0.12, pos[2]]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
          </mesh>
        </group>
      ))}

      {/* Underslung Vision Gimbal / Camera Payload */}
      <group position={[0, -0.22, 0.3]}>
        {/* Gimbal Mount */}
        <mesh material={darkBodyMat}>
          <cylinderGeometry args={[0.16, 0.16, 0.12, 12]} />
        </mesh>
        {/* Gimbal Sensor Sphere */}
        <mesh material={accentPinkMat} position={[0, -0.14, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
        </mesh>
        {/* Lens optic */}
        <mesh material={darkBodyMat} position={[0, -0.14, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.08, 16]} />
        </mesh>
        <mesh material={pinkWireMat} position={[0, -0.14, 0.17]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.06, 0.1, 16]} />
        </mesh>
      </group>

      {/* Landing Skids */}
      <group position={[0, -0.25, 0]}>
        {/* Left Skid */}
        <mesh material={pinkWireMat} position={[-0.7, -0.2, 0]}>
          <boxGeometry args={[0.08, 0.08, 1.4]} />
        </mesh>
        <mesh material={darkBodyMat} position={[-0.7, -0.08, 0.4]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        </mesh>
        <mesh material={darkBodyMat} position={[-0.7, -0.08, -0.4]} rotation={[-0.4, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        </mesh>

        {/* Right Skid */}
        <mesh material={pinkWireMat} position={[0.7, -0.2, 0]}>
          <boxGeometry args={[0.08, 0.08, 1.4]} />
        </mesh>
        <mesh material={darkBodyMat} position={[0.7, -0.08, 0.4]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        </mesh>
        <mesh material={darkBodyMat} position={[0.7, -0.08, -0.4]} rotation={[-0.4, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        </mesh>
      </group>

      {/* Point Light emitted from drone core */}
      <pointLight
        ref={ledRef}
        position={[0, 0.2, 0]}
        color="#ff2d8a"
        intensity={1.8}
        distance={5}
      />
    </group>
  );
}

// Fallback high-tech SVG wireframe if WebGL fails or takes time
function DroneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="relative w-64 h-64 border border-pink-500/20 rounded-full flex items-center justify-center animate-pulse">
        <div className="absolute inset-4 border border-pink-500/30 rounded-full" />
        <div className="absolute inset-8 border border-pink-500/10 rounded-full" />
        <svg viewBox="0 0 100 100" className="w-36 h-36 text-[#ff2d8a] stroke-current fill-none" strokeWidth="1.5">
          <circle cx="50" cy="50" r="14" className="fill-[#ff2d8a]/20" />
          <line x1="20" y1="20" x2="80" y2="80" />
          <line x1="20" y1="80" x2="80" y2="20" />
          <circle cx="20" cy="20" r="10" strokeDasharray="3 2" />
          <circle cx="80" cy="20" r="10" strokeDasharray="3 2" />
          <circle cx="20" cy="80" r="10" strokeDasharray="3 2" />
          <circle cx="80" cy="80" r="10" strokeDasharray="3 2" />
          <line x1="50" y1="36" x2="50" y2="64" />
          <line x1="36" y1="50" x2="64" y2="50" />
        </svg>
        <span className="absolute bottom-4 font-mono text-[10px] text-pink-400/60 uppercase tracking-widest">
          SYS // TELEMETRY OK
        </span>
      </div>
    </div>
  );
}

export default function QuadcopterDrone() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    // Check reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleMotionChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Track scroll
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 1.5))));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (isReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  if (!hasWebGL) {
    return <DroneFallback />;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[300px] flex items-center justify-center select-none"
    >
      {/* Decorative cyber grid backdrop & crosshairs behind drone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-72 h-72 rounded-full border border-pink-500/10 shadow-[0_0_50px_rgba(255,45,138,0.06)] animate-pulse" />
        <div className="absolute w-88 h-88 rounded-full border border-dashed border-pink-500/15" />
        {/* HUD Crosshairs */}
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-pink-500/20 to-transparent" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
      </div>

      <Suspense fallback={<DroneFallback />}>
        <Canvas
          camera={{ position: [0, 1.4, 4.2], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 5, 3]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-4, -2, -2]} intensity={0.9} color="#ff2d8a" />
          <pointLight position={[0, -2, 2]} intensity={1.2} color="#ff6fb1" />

          {/* Float wrapper for subtle natural levitation */}
          <Float
            speed={isReducedMotion ? 0 : 2}
            rotationIntensity={isReducedMotion ? 0 : 0.4}
            floatIntensity={isReducedMotion ? 0 : 0.5}
          >
            <DroneModel
              scrollProgress={scrollProgress}
              mousePos={mousePos}
              isReducedMotion={isReducedMotion}
            />
          </Float>
        </Canvas>
      </Suspense>

      {/* Floating HUD telemetry badges */}
      <div className="absolute bottom-3 left-4 sm:left-6 font-mono text-[11px] text-pink-400/70 bg-[#0d1326]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-pink-500/20 flex items-center gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d8a] animate-ping" />
        <span>MAVLINK // SYS_STATUS: ACTIVE</span>
      </div>

      <div className="absolute top-4 right-4 sm:right-6 font-mono text-[10px] text-slate-400/80 bg-[#0d1326]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/5 pointer-events-none hidden sm:block">
        PX4 // 3D WIREFRAME SITL
      </div>
    </div>
  );
}
