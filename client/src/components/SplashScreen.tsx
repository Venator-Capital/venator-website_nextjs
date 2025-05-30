import { useEffect } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <video
        src="/splash.mp4"
        poster="/splash-poster.png"
        preload="auto"
        autoPlay
        muted
        playsInline
        className="
          max-w-full
          w-[480px] sm:w-[640px] md:w-[800px] lg:w-[960px]
          h-auto object-contain
        "
        onEnded={onFinish}
      >
        <source src="/splash.webm" type="video/webm" />
        <source src="/splash.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}