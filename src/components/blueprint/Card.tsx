'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: 0 | 1 | 2 | 3 | 4;
  interactive?: boolean;
  compact?: boolean;
}

export const Card = ({ 
  children, 
  className, 
  elevation = 1, 
  interactive = false,
  compact = false 
}: CardProps) => {
  const elevationClasses = {
    0: 'shadow-none',
    1: 'shadow-lg',
    2: 'shadow-xl',
    3: 'shadow-2xl',
    4: 'shadow-2xl shadow-accent-gold/10'
  };

  return (
    <motion.div
      className={cn(
        'rounded-lg border border-white/10 bg-zinc-950/80 backdrop-blur-sm',
        elevationClasses[elevation],
        compact ? 'p-4' : 'p-6',
        interactive && 'cursor-pointer hover:bg-zinc-900/80 transition-colors duration-200',
        className
      )}
      whileHover={interactive ? { scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};