import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient animated-background overflow-hidden"
    >
      {/* Animated geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent-blue/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-accent-gold/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.3, scale: 1.1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          className="absolute top-1/2 right-1/3 w-48 h-48 border border-white/10 rounded-full"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-black font-bold text-3xl">V</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Turning Niche Into <span className="text-accent-gold">Core</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-silver-gray mb-8"
        >
          We create intelligent infrastructure for bold ideas.
          <br />
          From AI workflows to real estate innovation — this is where ideas go operational.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-silver-gray transition-all duration-300 transform hover:scale-105"
          >
            Explore Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </button>
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
