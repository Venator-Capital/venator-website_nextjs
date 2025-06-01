import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
            {t('nav.capabilities')}
          </button>
          <button
            onClick={() => scrollToSection('use-cases')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to Use Cases section"
          >
            {t('nav.useCases')}
          </button>

          <button
            onClick={() => scrollToSection('tech-partners')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to Technology Ecosystem section"
          >
            {t('nav.technology')}
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to FAQ section"
          >
            {t('nav.faq')}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Navigate to About section"
          >
            {t('nav.about')}
          </button>
          <a
            href="https://forms.gle/iBogvoWnzHyXYQ2X8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-gray hover:text-white hover:underline transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open contact form"
          >
            {t('nav.contact')}
          </a>
          
          {/* Language Toggle */}
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-primary-black border-l border-gray-800 z-50 lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:bg-gray-800 p-2 rounded-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 px-6 py-4 space-y-2">
              {[
                { key: 'nav.capabilities', section: 'capabilities' },
                { key: 'nav.useCases', section: 'use-cases' },
                { key: 'nav.technology', section: 'tech-partners' },
                { key: 'nav.faq', section: 'faq' },
                { key: 'nav.about', section: 'about' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                >
                  {t(item.key)}
                </button>
              ))}
              
              {/* Contact Form Link for Mobile */}
              <a
                href="https://forms.gle/iBogvoWnzHyXYQ2X8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-gold block"
              >
                {t('nav.contact')}
              </a>
            </div>
            
            {/* Mobile Language Toggle */}
            <div className="p-6 border-t border-gray-800">
              <div className="mb-2 text-sm text-gray-400">Language</div>
              <LanguageToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
