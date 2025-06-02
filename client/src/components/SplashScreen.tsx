import { useEffect, useRef, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<'entrance' | 'video' | 'animation' | 'fallback'>('entrance');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let timeoutId: NodeJS.Timeout;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      clearTimeout(timeoutId);
    };

    const handleError = () => {
      console.log("Video load failed, will use CSS animation");
      setVideoFailed(true);
      clearTimeout(timeoutId);
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);
    
    // Load video with timeout
    video.load();
    
    // If video doesn't load within 3 seconds, use CSS animation
    timeoutId = setTimeout(() => {
      if (!videoLoaded) {
        console.log("Video loading timeout, using CSS animation");
        setVideoFailed(true);
      }
    }, 3000);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
      clearTimeout(timeoutId);
    };
  }, [videoLoaded]);

  const handleEnterSite = async () => {
    if (videoFailed || !videoLoaded) {
      // Use CSS animation instead
      setPhase('animation');
      setTimeout(onFinish, 3000); // 3 second CSS animation
      return;
    }

    const video = videoRef.current;
    if (!video) {
      setPhase('animation');
      setTimeout(onFinish, 3000);
      return;
    }

    setPhase('video');
    
    try {
      video.currentTime = 0;
      await video.play();
      
      const handleEnded = () => {
        setTimeout(onFinish, 500);
      };
      
      video.addEventListener('ended', handleEnded, { once: true });
      
      // Backup timeout
      setTimeout(() => {
        onFinish();
      }, 8000);
      
    } catch (error) {
      console.log('Video play failed, using CSS animation');
      setPhase('animation');
      setTimeout(onFinish, 3000);
    }
  };

  // Entrance screen
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
            {videoFailed ? 'Ready' : videoLoaded ? 'Ready' : 'Loading...'}
          </p>
        </div>
        
        {/* Hidden video for preloading */}
        {!videoFailed && (
          <video
            ref={videoRef}
            className="hidden"
            muted
            playsInline
            preload="metadata"
          >
            <source src="/splash.mp4" type="video/mp4" />
          </video>
        )}
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

  // CSS Animation phase
  if (phase === 'animation') {
    return (
      <div className="fixed inset-0 bg-primary-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img 
              src="/Cropped_black_logo-removebg-preview.png" 
              alt="Venator Capital Logo"
              className="w-48 h-48 object-contain opacity-0 animate-[fadeInScale_1.5s_ease-out_0.5s_forwards]"
            />
            
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border-2 border-accent-gold/30 animate-[ping_2s_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-accent-gold/20 animate-[ping_2s_infinite_0.5s]"></div>
          </div>
          
          <div className="mt-8 space-y-2">
            <h1 className="text-white text-2xl font-light opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards]">
              Venator Capital
            </h1>
            <p className="text-accent-gold text-sm opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]">
              AI Solutions
            </p>
          </div>
          
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]"></div>
        </div>
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