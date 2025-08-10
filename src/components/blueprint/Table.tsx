'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
  children: React.ReactNode;
  className?: string;
  striped?: boolean;
  bordered?: boolean;
  compact?: boolean;
  interactive?: boolean;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  numeric?: boolean;
}

export const Table = ({ 
  children, 
  className, 
  striped = false,
  bordered = false,
  compact = false,
  interactive = false
}: TableProps) => (
  <div className="overflow-x-auto">
    <table
      className={cn(
        'w-full text-left',
        bordered && 'border border-white/10',
        className
      )}
    >
      {children}
    </table>
  </div>
);

export const TableHead = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <thead className={cn('bg-zinc-900/50', className)}>
    {children}
  </thead>
);

export const TableBody = ({ 
  children, 
  className,
  striped = false,
  interactive = false
}: { 
  children: React.ReactNode; 
  className?: string;
  striped?: boolean;
  interactive?: boolean;
}) => (
  <tbody className={cn(
    striped && '[&>tr:nth-child(even)]:bg-zinc-900/30',
    interactive && '[&>tr]:hover:bg-zinc-800/50 [&>tr]:cursor-pointer [&>tr]:transition-colors',
    className
  )}>
    {children}
  </tbody>
);

export const TableRow = ({ children, className, onClick }: TableRowProps) => (
  <tr
    className={cn(
      'border-b border-white/10',
      onClick && 'hover:bg-zinc-800/50 cursor-pointer transition-colors',
      className
    )}
    onClick={onClick}
  >
    {children}
  </tr>
);

export const TableCell = ({ children, className, numeric = false }: TableCellProps) => (
  <td
    className={cn(
      'px-4 py-3 text-sm text-gray-300',
      numeric && 'text-right font-mono',
      className
    )}
  >
    {children}
  </td>
);

export const TableHeader = ({ children, className, numeric = false }: TableCellProps) => (
  <th
    className={cn(
      'px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider',
      numeric && 'text-right',
      className
    )}
  >
    {children}
  </th>
);