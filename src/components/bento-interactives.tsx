// components/bento-interactives.tsx
// CSS animations and React state for lightweight interactions
import React, { useEffect, useRef, useState } from "react";

type P = { className?: string; size?: number };

// ===== 1) Agile from Day One — converging arrows with CSS animations =====
export const AgileInteractive: React.FC<P> = ({ className = "", size = 56 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <svg 
      viewBox="0 0 64 64" 
      width={size} 
      height={size} 
      className={`${className} transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      {/* converge to top-right */}
      <path 
        className="animate-dash" 
        d="M10 44 L36 28 L36 22 L52 12" 
        strokeLinecap="round" 
        markerEnd="url(#arr)" 
      />
      <path 
        className="animate-dash delay-100" 
        d="M10 32 L36 28 L52 20" 
        strokeLinecap="round" 
        markerEnd="url(#arr)" 
      />
      <path 
        className="animate-dash delay-200" 
        d="M10 20 L36 28 L52 28" 
        strokeLinecap="round" 
        markerEnd="url(#arr)" 
      />
      <circle 
        className="animate-pulse" 
        cx="10" 
        cy="32" 
        r="3" 
        fill="currentColor" 
      />
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0L6 3L0 6Z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  );
};

// ===== 2) Fast, Focused POC — blocks stacking with CSS animations =====
export const POCInteractive: React.FC<P> = ({ className = "", size = 56 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`grid grid-cols-3 gap-1 ${className} transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="b rounded-md bg-current/25 col-span-1 row-span-1 animate-bounce delay-100" />
      <div className="b rounded-md bg-current/25 col-span-1 row-span-1 animate-bounce delay-200" />
      <div className="b rounded-md bg-current/25 col-span-1 row-span-2 animate-bounce delay-300" />
      <div className="b rounded-md bg-current/25 col-span-2 row-span-1 animate-bounce delay-400" />
      <div className="b rounded-md bg-current/25 col-span-1 row-span-1 animate-bounce delay-500" />
    </div>
  );
};

// ===== 3) Security by Design — flowing encrypted lines with CSS animations =====
export const SecurityInteractive: React.FC<P> = ({ className = "", size = 56 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <svg 
      viewBox="0 0 64 64" 
      width={size} 
      height={size} 
      className={`${className} transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      {/* shield */}
      <path d="M32 8l18 6v10c0 12-9 22-18 26-9-4-18-14-18-26V14l18-6Z" />
      <circle cx="32" cy="28" r="4" className="animate-pulse" />
      {/* encrypted streams */}
      {[16, 24, 32, 40, 48].map((y, i) => (
        <line 
          key={y} 
          className="animate-pulse" 
          style={{ animationDelay: `${i * 200}ms` }}
          x1="6" 
          y1={y} 
          x2="58" 
          y2={y} 
          opacity={0.4 + i * 0.08} 
        />
      ))}
    </svg>
  );
};

// ===== 4) Direct Access to Builders — chat bubbles with CSS animations =====
export const DirectInteractive: React.FC<P> = ({ className = "", size = 56 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative ${className} transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cb absolute left-0 top-4 rounded-lg border border-current/20 bg-current/10 px-2 py-1 text-[10px] animate-bounce delay-100">Ping?</div>
      <div className="cb absolute right-0 top-1 rounded-lg border border-current/20 bg-current/10 px-2 py-1 text-[10px] animate-bounce delay-200">On it.</div>
      <div className="cb absolute left-1/3 bottom-1 rounded-lg border border-current/20 bg-current/10 px-2 py-1 text-[10px] animate-bounce delay-300">Shipped ✅</div>
      <svg viewBox="0 0 64 64" className="absolute inset-0" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 22C28 28 36 30 52 16" opacity={.5}/>
        <path d="M12 46C30 40 36 36 52 28" opacity={.35} />
      </svg>
    </div>
  );
};

// ===== 5) Transparent Sprints — mini calendar progress with CSS animations =====
export const SprintsInteractive: React.FC<P> = ({ className = "", size = 56 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`grid grid-cols-7 gap-[2px] ${className} transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} className="rounded-sm border border-current/15 p-[1px]">
          <div 
            className="h-[4px] rounded-sm bg-current/60 animate-pulse" 
            style={{ 
              width: `${6 + i * 4}px`,
              animationDelay: `${i * 50}ms`
            }} 
          />
        </div>
      ))}
    </div>
  );
};

// ===== 6) Vendor-Agnostic — cable link with CSS animations =====
export const VendorInteractive: React.FC<P> = ({ className = "", size = 56 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <svg 
      viewBox="0 0 64 64" 
      width={size} 
      height={size} 
      className={`${className} transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      <rect x="8" y="26" width="10" height="12" rx="2" />
      <rect x="46" y="26" width="10" height="12" rx="2" />
      <path className="animate-pulse" d="M10 32 C22 24, 42 40, 54 32" />
    </svg>
  );
};

// ===== 7) Measurable Outcomes — live sparkline with CSS animations =====
export const OutcomesInteractive: React.FC<P> = ({ className = "", size = 56 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <svg 
      viewBox="0 0 64 64" 
      width={size} 
      height={size} 
      className={`${className} transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      <polyline className="animate-pulse" fill="none" points="0,42 10,38 20,40 30,30 40,26 50,22 60,18" />
      <circle className="animate-pulse" cx="60" cy="18" r="3" fill="currentColor" />
      <path d="M0 46H64" opacity=".35" strokeWidth={1.5} />
    </svg>
  );
};
