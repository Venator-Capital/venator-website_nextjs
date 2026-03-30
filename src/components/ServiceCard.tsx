"use client";

import React from "react";

type SupportedColor = "teal" | "cyan" | "emerald" | "fuchsia" | (string & {});

export type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
  icon?: string;
  color?: SupportedColor;
  delay?: number;
  shouldAnimate?: boolean;
};

export default function ServiceCard({
  title,
  description,
  features,
  color = "teal",
  delay = 0,
  shouldAnimate: _shouldAnimate = false,
}: ServiceCardProps) {
  const glowColorMap: Record<string, string> = {
    teal: "bg-teal-400/10",
    cyan: "bg-cyan-400/10",
    emerald: "bg-emerald-400/10",
    fuchsia: "bg-fuchsia-400/10",
  };

  const glowClass = glowColorMap[color] ?? "bg-white/10";

  return (
    <div
      className="group relative overflow-hidden bg-black/40 border border-white/10 rounded-xl p-5 backdrop-blur hover:bg-black/50 transition-all"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute -right-6 -top-6 w-28 h-28 rounded-full ${glowClass} blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none`} />

      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
          <path d="M12 2v20M2 12h20" />
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{description}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-300">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
