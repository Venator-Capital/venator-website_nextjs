'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Beams from '@/components/backgrounds/Beams';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/blueprint';
import { ArrowRight, Brain, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Vanishing Point Dotfield Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dotfield parameters
    const DOTS_COUNT = 800;
    const DEPTH_LAYERS = 50;
    const CENTER_X = canvas.width / (2 * window.devicePixelRatio);
    const CENTER_Y = canvas.height / (2 * window.devicePixelRatio);
    const MAX_RADIUS = Math.max(canvas.width, canvas.height) / window.devicePixelRatio;

    interface Dot {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      speed: number;
      size: number;
      brightness: number;
    }

    // Initialize dots
    const dots: Dot[] = [];
    for (let i = 0; i < DOTS_COUNT; i++) {
      // Create dots in a radial distribution
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * MAX_RADIUS * 2;
      const baseX = CENTER_X + Math.cos(angle) * radius;
      const baseY = CENTER_Y + Math.sin(angle) * radius;
      
      dots.push({
        x: baseX,
        y: baseY,
        z: Math.random() * DEPTH_LAYERS + 1,
        baseX,
        baseY,
        speed: 0.5 + Math.random() * 1.5,
        size: Math.random() * 2 + 0.5,
        brightness: Math.random() * 0.8 + 0.2
      });
    }

    const animate = () => {
      time += 0.016; // ~60fps
      
      // Clear canvas with deep space background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // Mouse influence
      const mouseInfluenceX = (mousePosition.x - 0.5) * 50;
      const mouseInfluenceY = (mousePosition.y - 0.5) * 50;

      dots.forEach((dot) => {
        // Move dots towards center (vanishing point effect)
        const directionX = CENTER_X - dot.baseX;
        const directionY = CENTER_Y - dot.baseY;
        const distance = Math.sqrt(directionX * directionX + directionY * directionY);
        
        if (distance > 5) {
          dot.x = dot.baseX + (directionX / distance) * (time * dot.speed * 20);
          dot.y = dot.baseY + (directionY / distance) * (time * dot.speed * 20);
        }

        // Add mouse interaction
        dot.x += mouseInfluenceX * (dot.z / DEPTH_LAYERS) * 0.1;
        dot.y += mouseInfluenceY * (dot.z / DEPTH_LAYERS) * 0.1;

        // Z-depth movement (zoom effect)
        dot.z -= dot.speed * 0.5;
        
        // Reset dot if it goes too far
        if (dot.z <= 0 || distance < 10) {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * MAX_RADIUS * 1.5 + MAX_RADIUS * 0.5;
          dot.baseX = CENTER_X + Math.cos(angle) * radius;
          dot.baseY = CENTER_Y + Math.sin(angle) * radius;
          dot.x = dot.baseX;
          dot.y = dot.baseY;
          dot.z = DEPTH_LAYERS;
          dot.speed = 0.5 + Math.random() * 1.5;
        }

        // Calculate perspective and rendering
        const perspective = 300;
        const scale = perspective / (perspective + dot.z);
        const screenX = dot.x;
        const screenY = dot.y;
        
        // Color based on depth and proximity to center
        const centerDistance = Math.sqrt(
          Math.pow(screenX - CENTER_X, 2) + Math.pow(screenY - CENTER_Y, 2)
        );
        const maxDistance = Math.max(CENTER_X, CENTER_Y);
        const proximityToCenter = 1 - Math.min(centerDistance / maxDistance, 1);
        
        // Dynamic color mixing
        const depthFactor = (DEPTH_LAYERS - dot.z) / DEPTH_LAYERS;
        let r, g, b, alpha;
        
        if (proximityToCenter > 0.7) {
          // Near center: Golden
          r = Math.floor(255 * depthFactor * dot.brightness);
          g = Math.floor(215 * depthFactor * dot.brightness);
          b = Math.floor(0 * depthFactor * dot.brightness);
          alpha = depthFactor * dot.brightness * (proximityToCenter * 2);
        } else if (proximityToCenter > 0.3) {
          // Mid range: Blue to Gold transition
          const transition = (proximityToCenter - 0.3) / 0.4;
          r = Math.floor((13 + (255 - 13) * transition) * depthFactor * dot.brightness);
          g = Math.floor((71 + (215 - 71) * transition) * depthFactor * dot.brightness);
          b = Math.floor((161 + (0 - 161) * transition) * depthFactor * dot.brightness);
          alpha = depthFactor * dot.brightness * 0.8;
        } else {
          // Outer: Blue
          r = Math.floor(13 * depthFactor * dot.brightness);
          g = Math.floor(71 * depthFactor * dot.brightness);
          b = Math.floor(161 * depthFactor * dot.brightness);
          alpha = depthFactor * dot.brightness * 0.6;
        }

        // Render dot
        const dotSize = dot.size * scale * (0.5 + depthFactor * 0.5);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        
        ctx.beginPath();
        ctx.arc(screenX, screenY, dotSize, 0, Math.PI * 2);
        ctx.fill();

        // Add glow for closer dots
        if (depthFactor > 0.8 && proximityToCenter > 0.5) {
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`;
          ctx.shadowBlur = dotSize * 2;
          ctx.beginPath();
          ctx.arc(screenX, screenY, dotSize * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    // Start animation after component mount
    setTimeout(() => {
      setIsLoaded(true);
      animate();
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mousePosition]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1] // easeOutExpo
      }
    }
  };

  const handleScrollToCapabilities = () => {
    document.getElementById('capabilities')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ y, opacity }}
    >
      {/* Beams Background */}
      <Beams 
        color={'oklch(from var(--accent-gold) l c h)'}
        beamWidth={1.5}
        beamHeight={25}
        beamCount={32}
        speed={8.7}
        noiseIntensity={1.4}
        noiseScale={0.25}
        rotation={30}
        className="z-0"
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)`,
          zIndex: 2
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Main Headline */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-wider"
          variants={itemVariants}
          style={{
            fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif',
            textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
          }}
        >
          <span className="inline-block">AI</span>{' '}
          <span className="inline-block">Into</span>{' '}
          <span 
            className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 30px rgba(255, 215, 0, 0.3)'
            }}
          >
            Advantage
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl font-light text-blue-200 mb-12 leading-relaxed tracking-wide max-w-4xl mx-auto"
          variants={itemVariants}
          style={{
            fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, sans-serif',
            textShadow: '0 0 20px rgba(144, 202, 249, 0.2)'
          }}
        >
          Where artificial intelligence meets enterprise innovation and infinite possibilities unfold
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              text={t('hero.cta.capabilities')}
              intent="primary"
              size="large"
              rightIcon={Brain}
              onClick={handleScrollToCapabilities}
              className="min-w-[250px] text-lg py-4 px-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-medium border-0 shadow-lg"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.2)'
              }}
            />
          </motion.div>

          <motion.div
            whileHover={{ 
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              text={t('hero.cta.contact')}
              intent="none"
              minimal={true}
              size="large"
              rightIcon={ArrowRight}
              onClick={handleScrollToContact}
              className="min-w-[250px] text-lg py-4 px-8 text-white border border-white/30 hover:border-white/60 hover:bg-white/5 backdrop-blur-sm"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Footer Tagline */}
        <motion.p 
          className="text-sm md:text-base font-light text-blue-300 uppercase tracking-widest mb-12"
          variants={itemVariants}
          style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
          }}
        >
          Transform your business today
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-12 h-12 rounded-full border-2 border-blue-300 flex items-center justify-center cursor-pointer hover:border-yellow-400 transition-colors duration-300"
            onClick={handleScrollToCapabilities}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 20px rgba(144, 202, 249, 0.4)'
            }}
            style={{
              background: 'rgba(144, 202, 249, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ChevronDown className="w-6 h-6 text-blue-300" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* External font @import removed to avoid duplicate blocking CSS; fonts defined in globals.css */}
    </motion.section>
  );
}