'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type Intent = 'primary' | 'success' | 'warning' | 'danger' | 'none';
type Size = 'small' | 'default' | 'large';

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  intent?: Intent;
  size?: Size;
  fill?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  text,
  className,
  intent = 'none',
  size = 'default',
  fill = false,
  minimal = false,
  outlined = false,
  loading = false,
  disabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
  type = 'button'
}: ButtonProps) => {
  const intentClasses = {
    primary: minimal 
      ? 'text-accent-gold hover:bg-accent-gold/10' 
      : outlined 
      ? 'border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black'
      : 'bg-accent-gold text-black hover:bg-yellow-300',
    success: minimal 
      ? 'text-green-400 hover:bg-green-400/10' 
      : outlined 
      ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
      : 'bg-green-600 text-white hover:bg-green-500',
    warning: minimal 
      ? 'text-orange-400 hover:bg-orange-400/10' 
      : outlined 
      ? 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black'
      : 'bg-orange-600 text-white hover:bg-orange-500',
    danger: minimal 
      ? 'text-red-400 hover:bg-red-400/10' 
      : outlined 
      ? 'border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
      : 'bg-red-600 text-white hover:bg-red-500',
    none: minimal 
      ? 'text-gray-300 hover:bg-white/10' 
      : outlined 
      ? 'border-gray-400 text-gray-300 hover:bg-white/10'
      : 'bg-zinc-800 text-white hover:bg-zinc-700'
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-zinc-900',
        sizeClasses[size],
        intentClasses[intent],
        fill && 'w-full',
        outlined && 'border',
        minimal && 'bg-transparent border-none shadow-none',
        (disabled || loading) && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileHover={!disabled && !loading ? { scale: 1.02 } : undefined}
      whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {LeftIcon && <LeftIcon className="w-4 h-4 mr-2" />}
      {children || text}
      {RightIcon && <RightIcon className="w-4 h-4 ml-2" />}
    </motion.button>
  );
};