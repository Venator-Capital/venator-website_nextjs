import { useEffect, useRef, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showTapPrompt, setShowTapPrompt] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.currentTime = 0; // Reset to start
        await video.play();
        setVideoPlaying(true);
        setShowTapPrompt(false);
      } catch (error) {
        console.log('Video autoplay blocked, showing tap prompt');
        setShowTapPrompt(true);
      }
    };

    // Add event listeners for better mobile compatibility
    video.addEventListener('canplaythrough', () => {
      playVideo();
    });

    // Try to play immediately
    playVideo();

    // Show tap prompt after 1 second if video hasn't started
    const promptTimer = setTimeout(() => {
      if (!videoPlaying) {
        setShowTapPrompt(true);
      }
    }, 1000);

    // Fallback timer
    const fallbackTimer = setTimeout(onFinish, 5000);

    return () => {
      clearTimeout(promptTimer);
      clearTimeout(fallbackTimer);
    };
  }, [onFinish, videoPlaying]);

  const handleUserInteraction = async () => {
    const video = videoRef.current;
    if (video && !videoPlaying) {
      try {
        video.currentTime = 0;
        await video.play();
        setVideoPlaying(true);
        setShowTapPrompt(false);
      } catch (error) {
        console.log('Manual play failed, proceeding to main site');
        onFinish();
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999] cursor-pointer" 
      onClick={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      <div className="relative">
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
          x-webkit-airplay="allow"
          className="
            max-w-full
            w-[480px] sm:w-[640px] md:w-[800px] lg:w-[960px]
            h-auto object-contain
          "
          onEnded={onFinish}
          onPlay={() => setVideoPlaying(true)}
          onLoadedData={() => {
            const video = videoRef.current;
            if (video) {
              video.play().catch(() => setShowTapPrompt(true));
            }
          }}
        >
          <source src="/splash.webm" type="video/webm" />
          <source src="/splash.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        
        {showTapPrompt && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-center text-white p-8 rounded-lg bg-white/10">
              <div className="text-4xl mb-4 animate-pulse">👆</div>
              <p className="text-lg font-medium mb-2">Tap to start</p>
              <p className="text-sm opacity-75">Touch anywhere to begin the experience</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}