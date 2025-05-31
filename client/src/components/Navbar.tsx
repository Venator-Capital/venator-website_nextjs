import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-100 py-4 ${
        isScrolled ? 'navbar-blur' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300"
        >
          <img 
            src="/Cropped_black_logo-removebg-preview.png" 
            alt="Venator Capital Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-semibold tracking-tight">Venator Capital</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('capabilities')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to Capabilities section"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('use-cases')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to Use Cases section"
          >
            Use Cases
          </button>

          <button
            onClick={() => scrollToSection('tech-partners')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to Technology Ecosystem section"
          >
            Technology
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to FAQ section"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to About section"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to Contact section"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden navbar-blur border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('capabilities')}
              className="block text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="block text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              Use Cases
            </button>

            <button
              onClick={() => scrollToSection('tech-partners')}
              className="block text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
