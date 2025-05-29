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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'navbar-blur' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-black font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-semibold">Venator Capital</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-silver-gray hover:text-white transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-silver-gray hover:text-white transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-silver-gray hover:text-white transition-colors duration-200"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
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
              onClick={() => scrollToSection('about')}
              className="block text-silver-gray hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block text-silver-gray hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-silver-gray hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
