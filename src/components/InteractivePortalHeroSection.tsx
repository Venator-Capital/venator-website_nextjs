'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/blueprint';
import { ArrowRight, Brain } from 'lucide-react';

interface Word {
  text: string;
  delay: number;
}

export default function InteractivePortalHeroSection() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // AI-focused content for Venator Capital
  const topWords: Word[] = [
    { text: t('hero.badge'), delay: 0 },
    { text: 'Intelligence', delay: 200 },
    { text: 'Platform', delay: 400 }
  ];

  const mainTitle: Word[] = [
    { text: 'AI', delay: 800 },
    { text: 'Into', delay: 950 },
    { text: 'Advantage', delay: 1100 }
  ];

  const subtitle: Word[] = [
    { text: 'Where', delay: 1400 },
    { text: 'artificial', delay: 1550 },
    { text: 'intelligence', delay: 1700 },
    { text: 'meets', delay: 1850 },
    { text: 'enterprise', delay: 2000 },
    { text: 'innovation', delay: 2150 },
    { text: 'and', delay: 2300 },
    { text: 'infinite', delay: 2450 },
    { text: 'possibilities', delay: 2600 },
    { text: 'unfold', delay: 2750 }
  ];

  const bottomWords: Word[] = [
    { text: 'Transform', delay: 2800 },
    { text: 'your', delay: 2950 },
    { text: 'business', delay: 3100 },
    { text: 'today', delay: 3250 }
  ];

  // Three.js warp tunnel shader setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize Three.js (we'll use a simplified WebGL approach for Next.js compatibility)
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    if (!gl) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Shader program setup
    const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      #define TAU 6.2831853071795865
      #define TUNNEL_LAYERS 64
      #define RING_POINTS 128
      #define POINT_SIZE 1.8
      #define SPEED 0.5

      float sq(float x) {
        return x * x;   
      }

      vec2 AngRep(vec2 uv, float angle) {
        vec2 polar = vec2(atan(uv.y, uv.x), length(uv));
        polar.x = mod(polar.x + angle / 2.0, angle) - angle / 2.0; 
        return polar.y * vec2(cos(polar.x), sin(polar.x));
      }

      float sdCircle(vec2 uv, float r) {
        return length(uv) - r;
      }

      vec3 MixShape(float sd, vec3 fill, vec3 target) {
        float blend = smoothstep(0.0, 1.0/u_resolution.y, sd);
        return mix(fill, target, blend);
      }

      vec2 TunnelPath(float x) {
        vec2 offs = vec2(0, 0);
        offs.x = 0.15 * sin(TAU * x * 0.5) + 0.25 * sin(TAU * x * 0.2 + 0.3);
        offs.y = 0.2 * cos(TAU * x * 0.3) + 0.15 * cos(TAU * x * 0.1);
        offs *= smoothstep(1.0, 3.0, x);
        
        // Mouse interaction
        vec2 mouseInfluence = (u_mouse / u_resolution - 0.5) * 0.1;
        offs += mouseInfluence * sin(x * 2.0 + u_time);
        
        return offs;
      }

      void main() {
        vec2 res = u_resolution.xy / u_resolution.y;
        vec2 uv = gl_FragCoord.xy / u_resolution.y;
        uv -= res/2.0;
        
        vec3 color = vec3(0.02, 0.02, 0.05); // Dark base color
        
        float repAngle = TAU / float(RING_POINTS);
        float pointSize = POINT_SIZE/2.0/u_resolution.y;
        
        float camZ = u_time * SPEED;
        vec2 camOffs = TunnelPath(camZ);
        
        for(int i = 1; i <= TUNNEL_LAYERS; i++) {
          float pz = 1.0 - (float(i) / float(TUNNEL_LAYERS));
          pz -= mod(camZ, 4.0 / float(TUNNEL_LAYERS));
          
          vec2 offs = TunnelPath(camZ + pz) - camOffs;
          float ringRad = 0.12 * (1.0 / sq(pz * 0.8 + 0.4));
          
          if(abs(length(uv + offs) - ringRad) < pointSize * 1.8) {
            vec2 aruv = AngRep(uv + offs, repAngle);
            float pdist = sdCircle(aruv - vec2(ringRad, 0), pointSize);
            
            // AI-themed colors: gold and blue
            vec3 ptColor = (mod(float(i / 2), 2.0) == 0.0) ? 
              vec3(1.0, 0.84, 0.0) * 0.8 :  // Gold
              vec3(0.2, 0.6, 1.0) * 0.6;     // Blue
            
            float shade = (1.0-pz) * 0.8;
            color = MixShape(pdist, ptColor * shade, color);
          }
        }
        
        // Add subtle gradient overlay
        float vignette = 1.0 - length(uv) * 0.3;
        color *= vignette;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shader
    const compileShader = (gl: WebGLRenderingContext, source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    };

    const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
    
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    // Set up geometry (fullscreen quad)
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
    const mouseUniformLocation = gl.getUniformLocation(program, 'u_mouse');

    const startTime = Date.now();

    const render = () => {
      const currentTime = (Date.now() - startTime) * 0.001;

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeUniformLocation, currentTime);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseUniformLocation, mousePosition.x, mousePosition.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const WordSequence = ({ words, className }: { words: Word[], className?: string }) => (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mx-1 opacity-0 word-hover"
          initial={{ opacity: 0, y: 30, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            filter: 'blur(0px)' 
          }}
          transition={{ 
            duration: 1, 
            delay: word.delay / 1000,
            ease: "easeOut"
          }}
          whileHover={{
            y: -2,
            scale: 1.05,
            color: '#60a5fa',
            textShadow: '0 0 20px rgba(96, 165, 250, 0.5)'
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* WebGL Warp Tunnel Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ zIndex: -1 }}
      />

      {/* Grid Overlay SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ai-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,215,0,0.03)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ai-grid)" />
        
        {/* Main grid lines with animation */}
        <motion.line 
          x1="0" y1="25%" x2="100%" y2="25%" 
          stroke="#FFD700" 
          strokeWidth="0.8" 
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 1000, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 0.2 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.line 
          x1="0" y1="75%" x2="100%" y2="75%" 
          stroke="#FFD700" 
          strokeWidth="0.8" 
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 1000, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 0.2 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
        <motion.line 
          x1="25%" y1="0" x2="25%" y2="100%" 
          stroke="#FFD700" 
          strokeWidth="0.8" 
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 1000, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 0.2 }}
          transition={{ duration: 3, delay: 2 }}
        />
        <motion.line 
          x1="75%" y1="0" x2="75%" y2="100%" 
          stroke="#FFD700" 
          strokeWidth="0.8" 
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 1000, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 0.2 }}
          transition={{ duration: 3, delay: 2.5 }}
        />
        
        {/* Corner dots */}
        <motion.circle 
          cx="25%" cy="25%" r="3" 
          fill="#FFD700"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.3] }}
          transition={{ duration: 2, delay: 3, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.circle 
          cx="75%" cy="25%" r="3" 
          fill="#FFD700"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.3] }}
          transition={{ duration: 2, delay: 3.2, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.circle 
          cx="25%" cy="75%" r="3" 
          fill="#FFD700"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.3] }}
          transition={{ duration: 2, delay: 3.4, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.circle 
          cx="75%" cy="75%" r="3" 
          fill="#FFD700"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.3] }}
          transition={{ duration: 2, delay: 3.6, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.circle 
          cx="50%" cy="50%" r="2" 
          fill="#60a5fa"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ duration: 3, delay: 4, repeat: Infinity, repeatType: "loop" }}
        />
      </svg>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-gold rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: 6,
            delay: i * 0.5 + 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="backdrop-blur-sm bg-black/20 rounded-3xl p-8 border border-white/10">
          
          {/* Top Section */}
          <div className="text-center mb-12">
            <WordSequence 
              words={topWords}
              className="text-xs md:text-sm font-mono font-light text-blue-300 uppercase tracking-[0.3em] opacity-80"
            />
            <motion.div 
              className="mt-4 w-20 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-50 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-tight text-white mb-8">
              <WordSequence 
                words={mainTitle}
                className="mb-6 block text-glow"
              />
              <WordSequence 
                words={subtitle}
                className="text-2xl md:text-3xl lg:text-4xl font-thin text-blue-200 leading-relaxed"
              />
            </h1>

            {/* Central Focus Element */}
            <motion.div 
              className="relative inline-block mt-8 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              <motion.div 
                className="w-4 h-4 bg-accent-gold rounded-full"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute inset-0 w-4 h-4 border border-blue-300 rounded-full"
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  duration: 3, 
                  delay: 0.5,
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            <Button
              size="lg"
              onClick={() => {
                document.getElementById('capabilities')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="min-w-[200px]"
            >
              {t('hero.cta.capabilities')}
              <Brain className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="min-w-[200px]"
            >
              {t('hero.cta.contact')}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Bottom Section */}
          <div className="text-center mt-12">
            <motion.div 
              className="mb-4 w-20 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-50 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 2.5 }}
            />
            <WordSequence 
              words={bottomWords}
              className="text-xs md:text-sm font-mono font-light text-blue-300 uppercase tracking-[0.3em] opacity-80"
            />
            
            <motion.div 
              className="mt-8 flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 30px rgba(96, 165, 250, 0.3);
        }
        
        .word-hover {
          transition: all 0.3s ease;
        }
        
        @keyframes word-appear {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}