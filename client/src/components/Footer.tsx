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
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-lg">V</span>
            </div>
            <span className="text-silver-gray">© 2025 Venator Capital LLC. All rights reserved.</span>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-silver-gray hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-silver-gray hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-silver-gray hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
