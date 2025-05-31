import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 bg-primary-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img 
              src="/Cropped_black_logo-removebg-preview.png" 
              alt="Venator Capital Logo"
              className="w-10 h-10"
            />
            <span className="text-white/70 text-lg">© 2025 Venator Capital LLC. All rights reserved.</span>
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-sm">
            <button
              onClick={() => scrollToSection('capabilities')}
              className="text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              Use Cases
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tech-partners')}
              className="text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-silver-gray hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white py-2"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
