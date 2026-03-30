import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  intent?: 'primary' | 'success' | 'warning' | 'error' | 'none';
  minimal?: boolean;
}

export function Tag({ children, className = '', variant = 'default', intent = 'primary', minimal = false }: TagProps) {
  const intentClasses = {
    primary: minimal ? 'bg-teal-800/20 text-teal-300 border border-teal-800/40' : 'bg-teal-800 text-teal-300',
    success: minimal ? 'bg-green-800/20 text-green-300 border border-green-800/40' : 'bg-green-800 text-green-300',
    warning: minimal ? 'bg-yellow-800/20 text-yellow-300 border border-yellow-800/40' : 'bg-yellow-800 text-yellow-300',
    error: minimal ? 'bg-red-800/20 text-red-300 border border-red-800/40' : 'bg-red-800 text-red-300',
    none: minimal ? 'bg-gray-800/20 text-gray-300 border border-gray-800/40' : 'bg-gray-800 text-gray-300'
  };

  // Map variant to intent for backward compatibility
  const variantToIntent: Record<string, keyof typeof intentClasses> = {
    default: 'primary',
    success: 'success',
    warning: 'warning',
    error: 'error'
  };

  // Use intent if provided, otherwise fall back to variant mapping
  const effectiveIntent = intent || variantToIntent[variant];
  const colorClass = intentClasses[effectiveIntent] || intentClasses.primary;

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${colorClass} ${className}`}>
      {children}
    </span>
  );
}
