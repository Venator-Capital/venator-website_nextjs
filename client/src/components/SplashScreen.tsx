import { useEffect, useRef, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(true);
  const [showTapPrompt, setShowTapPrompt] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [useStaticLogo, setUseStaticLogo] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, try video first but fallback quickly
      const video = videoRef.current;
      if (!video) {
        setUseStaticLogo(true);
        return;
      }

      const playVideo = async () => {
        try {
          video.currentTime = 0;
          await video.play();
          setVideoPlaying(true);
          setShowTapPrompt(false);
        } catch (error) {
          console.log('Video autoplay blocked on mobile, showing tap prompt');
          setShowTapPrompt(true);
        }
      };

      playVideo();

      // Quick fallback to static logo on mobile if video doesn't work
      const mobileTimer = setTimeout(() => {
        if (!videoPlaying) {
          setShowTapPrompt(true);
        }
      }, 800);

      const fallbackTimer = setTimeout(() => {
        if (!videoPlaying) {
          setUseStaticLogo(true);
          setShowVideo(false);
          setTimeout(onFinish, 2500);
        }
      }, 3000);

      return () => {
        clearTimeout(mobileTimer);
        clearTimeout(fallbackTimer);
      };
    } else {
      // Desktop - try video normally
      const video = videoRef.current;
      if (!video) return;

      const playVideo = async () => {
        try {
          video.currentTime = 0;
          await video.play();
          setVideoPlaying(true);
        } catch (error) {
          console.log('Video autoplay failed on desktop');
          setUseStaticLogo(true);
          setShowVideo(false);
        }
      };

      playVideo();

      const fallbackTimer = setTimeout(onFinish, 4000);
      return () => clearTimeout(fallbackTimer);
    }
  }, [onFinish, videoPlaying]);

  const handleUserInteraction = async (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRef.current;
    if (video && !videoPlaying) {
      try {
        // Force load the video first
        video.load();
        video.currentTime = 0;
        
        // Wait a bit for the video to be ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
          await playPromise;
          setVideoPlaying(true);
          setShowTapPrompt(false);
          console.log('Video started playing after user interaction');
        }
      } catch (error) {
        console.log('Manual play failed:', error);
        // Instead of going to main site, try alternative approach
        setShowTapPrompt(false);
        // Show static logo animation instead
        setTimeout(onFinish, 2000);
      }
    } else if (showTapPrompt) {
      // If prompt is showing but video is supposed to be playing, just dismiss
      setShowTapPrompt(false);
      setTimeout(onFinish, 2000);
    }
  };

  // Static logo animation as fallback for mobile
  if (useStaticLogo) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 border-4 border-accent-gold rounded-full animate-spin opacity-20"></div>
            <div className="absolute inset-2 border-2 border-accent-blue rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-blue rounded-lg animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-fade-in">
            Venator Capital
          </h1>
          <p className="text-gray-400 animate-fade-in-delay">AI Solutions</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999] cursor-pointer" 
      onClick={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      <div className="relative">
        {showVideo && (
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
        )}
        
        {showTapPrompt && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
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