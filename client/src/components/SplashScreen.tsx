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
    const video = videoRef.current;
    
    if (!video) {
      // Fallback to static logo if video element not available
      setUseStaticLogo(true);
      setTimeout(onFinish, 2000);
      return;
    }

    const handleCanPlay = () => {
      playVideo();
    };

    const handleEnded = () => {
      setShowVideo(false);
      setTimeout(onFinish, 500);
    };

    const handleError = () => {
      console.log("Video load failed, using static logo");
      setUseStaticLogo(true);
      setTimeout(onFinish, 2000);
    };

    const playVideo = async () => {
      try {
        video.currentTime = 0;
        await video.play();
        setVideoPlaying(true);
        setShowTapPrompt(false);
      } catch (error) {
        console.log('Video autoplay blocked, showing tap prompt');
        setShowTapPrompt(true);
      }
    };

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    // Load video
    video.load();

    // Fallback timer - if video doesn't start within 3 seconds
    const fallbackTimer = setTimeout(() => {
      if (!videoPlaying) {
        setUseStaticLogo(true);
        setTimeout(onFinish, 2000);
      }
    }, 3000);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      clearTimeout(fallbackTimer);
    };
  }, [onFinish, videoPlaying]);

  const handleTapToPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setVideoPlaying(true);
      setShowTapPrompt(false);
    } catch (error) {
      // If still can't play, use static logo
      setUseStaticLogo(true);
      setShowTapPrompt(false);
      setTimeout(onFinish, 2000);
    }
  };

  const handleSkip = () => {
    setShowTapPrompt(false);
    onFinish();
  };

  if (useStaticLogo) {
    return (
      <div className="fixed inset-0 bg-primary-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <img 
            src="/Cropped_black_logo-removebg-preview.png" 
            alt="Venator Capital Logo"
            className="w-64 h-64 object-contain animate-pulse"
          />
          <div className="mt-8 w-16 h-1 bg-accent-gold animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-primary-black flex items-center justify-center z-50">
      {showVideo && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/logo-animation.mp4" type="video/mp4" />
        </video>
      )}

      {showTapPrompt && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary-black/80">
          <div className="text-center">
            <img 
              src="/Cropped_black_logo-removebg-preview.png" 
              alt="Venator Capital Logo"
              className="w-32 h-32 mx-auto mb-8 object-contain"
            />
            <button
              onClick={handleTapToPlay}
              className="bg-accent-gold text-primary-black px-8 py-3 rounded-lg font-semibold mb-4 hover:bg-accent-gold/90 transition-colors"
            >
              Tap to Play
            </button>
            <br />
            <button
              onClick={handleSkip}
              className="text-white/70 hover:text-white text-sm underline"
            >
              Skip Animation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}