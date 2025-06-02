import { useEffect, useRef, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<'entrance' | 'video' | 'fallback'>('entrance');
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Preload video when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    const handleError = () => {
      console.log("Video load failed");
      setPhase('fallback');
      setTimeout(onFinish, 2000);
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);
    video.load();

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [onFinish]);

  const handleEnterSite = async () => {
    if (!videoLoaded) {
      setPhase('fallback');
      setTimeout(onFinish, 2000);
      return;
    }

    const video = videoRef.current;
    if (!video) {
      setPhase('fallback');
      setTimeout(onFinish, 2000);
      return;
    }

    setPhase('video');
    
    try {
      video.currentTime = 0;
      await video.play();
      
      // Auto-finish after video ends or timeout
      const handleEnded = () => {
        setTimeout(onFinish, 500);
      };
      
      video.addEventListener('ended', handleEnded, { once: true });
      
      // Backup timeout in case video doesn't end properly
      setTimeout(() => {
        onFinish();
      }, 5000);
      
    } catch (error) {
      console.log('Video play failed after user interaction');
      setPhase('fallback');
      setTimeout(onFinish, 2000);
    }
  };

  // Entrance screen - always shown first
  if (phase === 'entrance') {
    return (
      <div className="fixed inset-0 bg-primary-black flex items-center justify-center z-50">
        <div className="text-center max-w-md mx-auto px-8">
          <img 
            src="/Cropped_black_logo-removebg-preview.png" 
            alt="Venator Capital Logo"
            className="w-32 h-32 mx-auto mb-8 object-contain animate-pulse"
          />
          <h1 className="text-white text-2xl font-light mb-2">Venator Capital</h1>
          <p className="text-white/70 text-sm mb-8">AI Solutions</p>
          
          <button
            onClick={handleEnterSite}
            className="bg-accent-gold text-primary-black px-8 py-3 rounded-lg font-semibold hover:bg-accent-gold/90 transition-all duration-300 transform hover:scale-105"
          >
            Enter Site
          </button>
          
          <p className="text-white/50 text-xs mt-4">
            {videoLoaded ? 'Ready' : 'Loading...'}
          </p>
        </div>
        
        {/* Hidden video for preloading */}
        <video
          ref={videoRef}
          className="hidden"
          muted
          playsInline
          preload="auto"
        >
          <source src="/splash.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  // Video playback phase
  if (phase === 'video') {
    return (
      <div className="fixed inset-0 bg-primary-black flex items-center justify-center z-50">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
        >
          <source src="/splash.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  // Fallback static logo
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