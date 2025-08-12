'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveElements from '@/components/InteractiveElements';
import LoadingScreen from '@/components/LoadingScreen';
import TechStackSection from '@/components/TechStackSection';
import { useState } from 'react';

export default function Home() {
  const { t } = useLanguage();
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
    <div className="antialiased text-gray-100 selection:bg-teal-400/20 selection:text-teal-200 relative min-h-screen" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>
      <InteractiveElements />
      
      {/* 3D Spline Background */}
      <div className="spline-container fixed top-0 w-full h-screen z-0">
        <iframe src="https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb" frameBorder="0" width="100%" height="100%"></iframe>
      </div>
      
      {/* Scroll Progress */}
      <div id="scroll-progress" className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 w-0 z-[60]" style={{ width: '0%' }}></div>

      {/* Header */}
      <header id="site-header" className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/70 border-gray-900 transition-transform duration-300 will-change-transform relative" style={{ transform: 'translateY(0px)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          <div className="h-full flex items-center justify-between">
            {/* Brand */}
            <a href="#home" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md">
              <img src="/Cropped_black_logo-removebg-preview.png" alt="Venator Capital Logo" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="text-lg font-medium tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>Venator Capital</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300 text-white" style={{ backgroundSize: '100% 2px' }}>
                Home
              </a>
              <a href="#about" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" style={{ backgroundSize: '0% 2px' }}>
                About
              </a>
              <a href="#services" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" style={{ backgroundSize: '0% 2px' }}>
                Services
              </a>
              <a href="#tech-stack" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" style={{ backgroundSize: '0% 2px' }}>
                Tech Stack
              </a>
              <a href="#work" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" style={{ backgroundSize: '0% 2px' }}>
                Work
              </a>
              <a href="#contact" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300" style={{ backgroundSize: '0% 2px' }}>
                Contact
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500">
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <button id="nav-toggle" className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 12h16"></path>
                  <path d="M4 18h16"></path>
                  <path d="M4 6h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Panel */}
        <div id="mobile-panel" className="fixed inset-0 z-40 pointer-events-none opacity-0 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="absolute inset-x-0 top-0 bg-gray-950/95 border-b border-gray-900 px-4 sm:px-6 pt-20 pb-8 translate-y-[-8px] opacity-0 transition-all duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="grid gap-4">
                <a href="#home" className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors">
                  <span className="text-base font-medium text-gray-100">Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
                <a href="#about" className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors">
                  <span className="text-base font-medium text-gray-100">About</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
                <a href="#services" className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors">
                  <span className="text-base font-medium text-gray-100">Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
                <a href="#tech-stack" className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors">
                  <span className="text-base font-medium text-gray-100">Tech Stack</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
                <a href="#work" className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors">
                  <span className="text-base font-medium text-gray-100">Work</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
                <a href="#contact" className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors">
                  <span className="text-base font-medium text-gray-100">Contact</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]">
                  Start a Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                </a>
                <a href="mailto:hello@venator-capital.net" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  hello@venator-capital.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Using reference HTML structure */}
      <section id="home" className="relative z-10 overflow-hidden pt-24 sm:pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-teal-300/90">Turning AI Into Advantage</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight font-medium tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                Where artificial intelligence meets enterprise innovation and infinite possibilities unfold
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                We architect cutting-edge AI solutions — from machine learning applications to automation frameworks. No matter where you are in your AI journey, we'll guide you from roadmap to production.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#work" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]">
                  View Our Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <a href="#about" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-white/10 text-gray-100 hover:bg-white/15 border border-white/10 transition-all hover:scale-[1.02]">
                  Start AI Journey
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                  </svg>
                </a>
              </div>

            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/40">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff6e51d4-782c-4d82-bd46-0c123b22c9e4_1600w.jpg" alt="Design workspace" className="w-full h-[460px] object-cover" />
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-center text-sm text-gray-400 mb-6">Trusted by leading brands</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                <span className="text-sm">Nexus Labs</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
                <span className="text-sm">Velocity</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span className="text-sm">Fortress</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span className="text-sm">Orbit</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
                </svg>
                <span className="text-sm">Venator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-teal-300/90">About Us</p>
              <h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                We don't just design—<br/>we engineer outcomes
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                Founded in 2019, Venator Capital partners with enterprise teams to launch AI-powered solutions. Research-driven, results-minded, and innovation-obsessed.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle cx="12" cy="8" r="6"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl font-medium text-white">50+</p>
                      <p className="text-sm text-gray-400">AI Projects Delivered</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl font-medium text-white">95%</p>
                      <p className="text-sm text-gray-400">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a href="#services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02]">
                  Explore Our Process
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/image1.png" alt="Venator Capital Team" className="w-full h-56 sm:h-64 lg:h-72 object-cover border-white/10 border rounded-xl" />
              <img src="/image2.png" alt="AI Development Workspace" className="w-full h-56 sm:h-64 lg:h-72 object-cover border-white/10 border rounded-xl" />
              <img src="/image3.png" alt="Machine Learning Solutions" className="w-full h-56 sm:h-64 lg:h-72 object-cover border-white/10 border rounded-xl" />
              <img src="/image4.png" alt="Innovation & Collaboration" className="w-full h-56 sm:h-64 lg:h-72 object-cover border-white/10 border rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(45,212,191,0.08),transparent_70%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-teal-300/90">What we do</p>
              <h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                Strategy, design, and engineering—end to end
              </h2>
            </div>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-gray-100 hover:bg-white/15 border border-white/10 transition-all hover:scale-[1.02]">
              Start a project
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* AI Strategy Card */}
            <div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-teal-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">AI Strategy</h3>
              <p className="mt-2 text-sm text-gray-400">Roadmap definition and use-case identification to maximize AI ROI.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-teal-300">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  Research & analysis
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-teal-300">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  ROI modeling
                </li>
              </ul>
            </div>

            {/* ML Development Card */}
            <div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-cyan-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                  <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                  <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                  <path d="m2.3 2.3 7.286 7.286"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">ML Development</h3>
              <p className="mt-2 text-sm text-gray-400">Custom models and algorithms that solve specific business challenges.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-teal-300">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  Model training
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-teal-300">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  Performance tuning
                </li>
              </ul>
            </div>

            {/* Automation Card */}
            <div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-emerald-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Automation Engineering</h3>
              <p className="mt-2 text-sm text-gray-400">Intelligent workflows that scale operations and reduce manual work.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-teal-300">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  Process automation
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-teal-300">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  API integration
                </li>
              </ul>
            </div>

            {/* Analytics Card */}
            <div className="group relative hover:bg-black/50 transition-colors overflow-hidden bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-fuchsia-400/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Predictive Analytics</h3>
              <p className="mt-2 text-sm text-gray-400">Data-driven insights and forecasting to support strategic decisions.</p>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-teal-300">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  Time series analysis
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-teal-300">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  Dashboard creation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Work Section */}
      <section id="work" className="relative z-10 py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-teal-300/90">Selected Work</p>
              <h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                Case studies that moved the needle
              </h2>
            </div>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02]">
              Work with us
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                <path d="m21 3 1 11h-2"></path>
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                <path d="M3 4h8"></path>
              </svg>
            </a>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black">
              <div className="relative h-56">
                <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d881c5aa-a10a-48d9-ac16-06055527d54d_800w.jpg" alt="AI Analytics dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">AI/ML</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">B2B</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Predictive Maintenance AI</h3>
                <p className="mt-1 text-sm text-gray-400">Built ML models to predict equipment failures and optimize maintenance schedules.</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-400"><span className="text-gray-200 font-medium">+85%</span> efficiency</div>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200">
                    Discuss approach 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black">
              <div className="relative h-56">
                <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/35e1d968-74f7-4c60-aa59-4be460bf1b97_800w.jpg" alt="Process automation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Automation</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Enterprise</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Intelligent Document Processing</h3>
                <p className="mt-1 text-sm text-gray-400">Automated invoice processing with 99.5% accuracy using computer vision and NLP.</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-400"><span className="text-gray-200 font-medium">-78%</span> processing time</div>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200">
                    Explore details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* Project 3 */}
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black">
              <div className="relative h-56">
                <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1f2e7ddd-36d6-4476-b1bb-3dd274d9f579_1600w.jpg" alt="Forecasting system" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Analytics</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">Supply Chain</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Demand Forecasting Engine</h3>
                <p className="mt-1 text-sm text-gray-400">Time-series ML models that improved inventory optimization and reduced waste.</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-400"><span className="text-gray-200 font-medium">+42%</span> forecast accuracy</div>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200">
                    See methodology 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-teal-300/90">Contact</p>
              <h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                Let's build AI solutions that drive results
              </h2>
              <p className="mt-4 text-gray-400">Tell us about your AI goals. We'll follow up within 24 hours.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                        <path d="M12 6v6l4 2"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-medium">Avg. kickoff</p>
                      <p className="text-sm text-gray-400">~2 weeks</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-medium">NDA friendly</p>
                      <p className="text-sm text-gray-400">Your secrets are safe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form id="contact-form" className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name</label>
                  <input id="name" name="name" type="text" required className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Alex Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
                  <input id="email" name="email" type="email" required className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="alex@company.com" />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="budget" className="block text-sm text-gray-300 mb-1">Estimated budget</label>
                <select id="budget" name="budget" className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option value="">Select a range</option>
                  <option>$10k – $25k</option>
                  <option>$25k – $50k</option>
                  <option>$50k – $100k</option>
                  <option>$100k+</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Project details</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="What AI challenges are you looking to solve?"></textarea>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <input id="nda" name="nda" type="checkbox" className="w-4 h-4 rounded border-white/20 bg-black/60 text-teal-500 focus:ring-teal-500" />
                  <label htmlFor="nda" className="text-sm text-gray-400">Send NDA first</label>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]">
                  Send message
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </button>
              </div>

              <p className="mt-3 text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <a href="#home" className="inline-flex items-center gap-2">
                <img src="/Cropped_black_logo-removebg-preview.png" alt="Venator Capital Logo" className="h-8 w-8 object-contain brightness-0 invert" />
                <span className="text-lg font-medium" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>Venator Capital</span>
              </a>
              <p className="mt-3 text-sm text-gray-400 max-w-md">We architect cutting-edge AI solutions that help ambitious teams move faster with confidence.</p>
              <div className="mt-4 flex items-center gap-4">
                <a href="mailto:hello@venator-capital.net" className="text-gray-400 hover:text-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">AI Strategy</a></li>
                <li><a href="#services" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">ML Development</a></li>
                <li><a href="#services" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">Automation</a></li>
                <li><a href="#services" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">About</a></li>
                <li><a href="#work" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">Work</a></li>
                <li><a href="#contact" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500">&copy; 2024 Venator Capital LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
