import { motion, useAnimation } from "framer-motion";

export default function HeroSection() {
  const controls = useAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMouseMove = ({ clientX }: React.MouseEvent) => {
    const xRatio = clientX / window.innerWidth;
    const angle = (xRatio - 0.5) * 10; // -5° to +5°
    controls.start({ rotate: angle });
  };

  const handleMouseLeave = () => {
    controls.start({ rotate: 0 });
  };

  return (
    <section
      id="hero"
      role="banner"
      className="relative min-h-screen flex items-center justify-center hero-gradient animated-background overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,400 Q200,200 400,400 T800,400"
              stroke="url(#gradient1)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M800,200 Q600,400 400,200 T0,200"
              stroke="url(#gradient2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Floating orbs with light effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent-blue/20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            boxShadow: '0 0 60px rgba(59, 130, 246, 0.2)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-accent-gold/20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.15)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.3, scale: 1.1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          className="absolute top-1/2 right-1/3 w-48 h-48 border border-white/10 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Particle effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-blue/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onHoverStart={() => controls.set({ rotate: 0 })}
        >
          <motion.img 
            src="/Cropped_black_logo-removebg-preview.png" 
            alt="Venator Capital Logo"
            className="w-64 h-64 mx-auto mb-6 drop-shadow-2xl"
            animate={controls}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight hero-text-shadow"
        >
          Venator Capital LLC – Visionary AI & Real Estate
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          We create intelligent infrastructure for bold ideas.
          <br />
          <span className="text-accent-blue">From AI workflows to real estate innovation</span> — this is where ideas go operational.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('capabilities')}
            className="px-10 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-accent-blue hover:text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg shadow-2xl hover:shadow-accent-blue/20"
            whileTap={{ scale: 0.95 }}
            aria-label="Discover our capabilities"
          >
            Discover Our Capabilities
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 border-2 border-accent-gold text-accent-gold rounded-full font-semibold text-lg hover:bg-accent-gold hover:text-black transition-all duration-200 transform hover:scale-105 hover:shadow-lg shadow-2xl hover:shadow-accent-gold/20"
            whileTap={{ scale: 0.95 }}
            aria-label="Contact us"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
