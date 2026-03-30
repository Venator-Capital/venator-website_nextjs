'use client';

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Header show/hide on scroll (from reference HTML)
    const header = document.getElementById('site-header');
    let lastY = window.pageYOffset;
    let ticking = false;
    
    function handleHeader() {
      const y = window.pageYOffset;
      const down = y > lastY && y > 80;
      if (header) {
        header.style.transform = down ? 'translateY(-100%)' : 'translateY(0)';
      }
      lastY = y;
      ticking = false;
    }
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleHeader);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen antialiased bg-black text-gray-100 selection:bg-teal-400/20 selection:text-teal-200" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>
      {/* 3D Spline Background - z-index fixed to show properly */}
      <div className="spline-container fixed top-0 w-full h-screen z-0">
        <iframe 
          src="https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          title="3D Background"
        />
      </div>
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Header */}
      <header id="site-header" className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/70 border-gray-900 transition-transform duration-300 will-change-transform">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}