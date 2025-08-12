'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, className = '' }: ServiceCardProps) {
  return (
    <div className={`p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black hover:border-teal-500/30 transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-teal-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
