import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  elevation?: number;
  interactive?: boolean;
}

export function Card({ children, className = '', onClick, elevation = 1, interactive = false }: CardProps) {
  const elevationClasses = {
    1: 'shadow-sm',
    2: 'shadow-md',
    3: 'shadow-lg',
    4: 'shadow-xl',
    5: 'shadow-2xl'
  };
  
  const interactiveClasses = interactive ? 'cursor-pointer hover:scale-[1.02]' : '';
  
  return (
    <div 
      className={`bg-black/40 border border-white/10 rounded-xl p-5 backdrop-blur hover:bg-black/50 transition-all ${elevationClasses[elevation as keyof typeof elevationClasses]} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
