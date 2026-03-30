import React from 'react';

interface ProgressBarProps {
  value: number; // 0 to 1
  className?: string;
  showLabel?: boolean;
  intent?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  animate?: boolean;
}

export function ProgressBar({ 
  value, 
  className = '', 
  showLabel = false, 
  intent = 'primary',
  size = 'medium',
  animate = false 
}: ProgressBarProps) {
  const percentage = Math.min(Math.max(value * 100, 0), 100);
  
  const intentClasses = {
    primary: 'bg-teal-400',
    success: 'bg-green-400',
    warning: 'bg-yellow-400',
    error: 'bg-red-400'
  };
  
  const sizeClasses = {
    small: 'h-1',
    medium: 'h-2',
    large: 'h-3'
  };
  
  const animationClasses = animate ? 'transition-all duration-300 ease-out' : '';
  
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progress</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-800 rounded-full ${sizeClasses[size]}`}>
        <div 
          className={`${intentClasses[intent]} ${sizeClasses[size]} rounded-full ${animationClasses}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
