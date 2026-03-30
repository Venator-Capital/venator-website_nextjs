'use client';

import { DotLoader } from "@/components/ui/dot-loader";
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const loadingAnimation = [
    [14, 7, 0, 8, 6, 13, 20],
    [14, 7, 13, 20, 16, 27, 21],
    [14, 20, 27, 21, 34, 24, 28],
    [27, 21, 34, 28, 41, 32, 35],
    [34, 28, 41, 35, 48, 40, 42],
    [34, 28, 41, 35, 48, 42, 46],
    [34, 28, 41, 35, 48, 42, 38],
    [34, 28, 41, 35, 48, 30, 21],
    [34, 28, 41, 48, 21, 22, 14],
    [34, 28, 41, 21, 14, 16, 27],
    [34, 28, 21, 14, 10, 20, 27],
    [28, 21, 14, 4, 13, 20, 27],
    [28, 21, 14, 12, 6, 13, 20],
    [28, 21, 14, 6, 13, 20, 11],
    [28, 21, 14, 6, 13, 20, 10],
    [14, 6, 13, 20, 9, 7, 21],
];

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 3000); // 3秒後にローディング画面を非表示

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/hexagon-logo.png" 
            alt="" 
            className="h-12 w-12 object-contain brightness-0 invert" 
          />
          <span 
            className="text-2xl font-bold text-white tracking-tight" 
            style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
          >
            {t('nav.brand')}
          </span>
        </div>
        
        {/* Dot Loader Animation */}
        <div className="flex flex-col items-center gap-4">
          <DotLoader
            frames={loadingAnimation}
            className="gap-1"
            dotClassName="bg-white/20 [&.active]:bg-teal-400 size-2"
            duration={120}
          />
          <p className="text-sm text-gray-400 animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}