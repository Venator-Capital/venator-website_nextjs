import { useEffect, useRef } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed, attempting manual play');
        // Fallback timer if video doesn't play
        setTimeout(onFinish, 3000);
      }
    };

    // Try to play immediately
    playVideo();

    // Fallback timer
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <video
        ref={videoRef}
        src="/splash.mp4"
        poster="/splash-poster.png"
        preload="auto"
        autoPlay
        muted
        playsInline
        controls={false}
        webkit-playsinline="true"
        x5-playsinline="true"
        className="
          max-w-full
          w-[480px] sm:w-[640px] md:w-[800px] lg:w-[960px]
          h-auto object-contain
        "
        onEnded={onFinish}
        onLoadedData={() => {
          const video = videoRef.current;
          if (video) {
            video.play().catch(console.log);
          }
        }}
      >
        <source src="/splash.webm" type="video/webm" />
        <source src="/splash.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}