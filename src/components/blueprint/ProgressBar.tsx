'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Intent = 'primary' | 'success' | 'warning' | 'danger' | 'none';

interface ProgressBarProps {
  value?: number; // 0 to 1
  className?: string;
  intent?: Intent;
  stripes?: boolean;
  animate?: boolean;
  size?: 'small' | 'default' | 'large';
}

export const ProgressBar = ({
  value = 0,
  className,
  intent = 'primary',
  stripes = false,
  animate = true,
  size = 'default'
}: ProgressBarProps) => {
  const clampedValue = Math.max(0, Math.min(1, value));
  const percentage = clampedValue * 100;

  const intentClasses = {
    primary: 'bg-accent-gold',
    success: 'bg-green-500',
    warning: 'bg-orange-500',
    danger: 'bg-red-500',
    none: 'bg-gray-500'
  };

  const sizeClasses = {
    small: 'h-1',
    default: 'h-2',
    large: 'h-3'
  };

  return (
    <div
      className={cn(
        'w-full bg-zinc-800 rounded-full overflow-hidden',
        sizeClasses[size],
        className
      )}
    >
      <motion.div
        className={cn(
          'h-full rounded-full relative',
          intentClasses[intent],
          stripes && 'bg-stripes'
        )}
        initial={animate ? { width: 0 } : { width: `${percentage}%` }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {stripes && (
          <div className="absolute inset-0 bg-stripes animate-stripes" />
        )}
      </motion.div>
    </div>
  );
};