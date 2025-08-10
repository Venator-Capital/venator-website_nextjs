'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

type Intent = 'primary' | 'success' | 'warning' | 'danger' | 'none';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  intent?: Intent;
  minimal?: boolean;
  round?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  large?: boolean;
}

export const Tag = ({
  children,
  className,
  intent = 'none',
  minimal = false,
  round = false,
  removable = false,
  onRemove,
  large = false
}: TagProps) => {
  const intentClasses = {
    primary: minimal 
      ? 'text-accent-gold bg-accent-gold/10 border-accent-gold/20' 
      : 'text-black bg-accent-gold',
    success: minimal 
      ? 'text-green-400 bg-green-400/10 border-green-400/20' 
      : 'text-white bg-green-600',
    warning: minimal 
      ? 'text-orange-400 bg-orange-400/10 border-orange-400/20' 
      : 'text-white bg-orange-600',
    danger: minimal 
      ? 'text-red-400 bg-red-400/10 border-red-400/20' 
      : 'text-white bg-red-600',
    none: minimal 
      ? 'text-gray-300 bg-gray-300/10 border-gray-300/20' 
      : 'text-white bg-zinc-700'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium',
        large ? 'px-3 py-1.5 text-sm' : 'px-2 py-1 text-xs',
        round ? 'rounded-full' : 'rounded-md',
        minimal && 'border',
        intentClasses[intent],
        className
      )}
    >
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 p-0.5 rounded-full hover:bg-black/20 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};