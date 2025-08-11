"use client";

import React, { useMemo } from "react";

export type BeamsProps = {
  color?: string;
  beamWidth?: number; // in rem units multiplier
  beamHeight?: number; // in vh
  beamCount?: number;
  speed?: number; // arbitrary unit, higher is faster
  noiseIntensity?: number; // 0-2
  noiseScale?: number; // 0-1
  rotation?: number; // deg
  className?: string;
};

// Simple CSS-only beams background with SVG noise overlay
// Designed to sit absolutely positioned and fill its parent
export function Beams({
  color = "oklch(var(--accent-gold))",
  beamWidth = 1.5,
  beamHeight = 25,
  beamCount = 32,
  speed = 8.7,
  noiseIntensity = 1.4,
  noiseScale = 0.25,
  rotation = 30,
  className = "",
}: BeamsProps) {
  const beams = useMemo(() => Array.from({ length: beamCount }), [beamCount]);

  // Base duration so that higher speed => shorter duration
  const baseDuration = Math.max(4, Math.round(20 / Math.max(0.1, speed)));

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-[-20%] will-change-transform"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {beams.map((_, i) => {
          const left = (i / beamCount) * 100;
          const animDelay = -(i % baseDuration);
          const duration = baseDuration + (i % 5) * 0.5;
          return (
            <span
              key={i}
              className="absolute top-[-10%] rounded-full opacity-60 animate-[beam-move_linear_infinite]"
              style={{
                left: `${left}%`,
                width: `${beamWidth}rem`,
                height: `${beamHeight}vh`,
                background:
                  `linear-gradient(180deg, ${color} 0%, color-mix(in oklab, ${color}, transparent 60%) 100%)`,
                filter: "blur(1px)",
                animationDuration: `${duration}s`,
                animationDelay: `${animDelay}s`,
                transform: `translateY(-120%)`,
              }}
            />
          );
        })}
      </div>

      {/* SVG noise overlay */}
      <svg className="absolute inset-0 w-full h-full mix-blend-soft-light" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency={noiseScale} numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values={noiseIntensity} />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.35" />
      </svg>

      <style jsx global>{`
        @keyframes beam-move {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(140%); }
        }
      `}</style>
    </div>
  );
}

export default Beams;
