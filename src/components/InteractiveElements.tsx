'use client';

import { useEffect } from 'react';

export default function InteractiveElements() {
  useEffect(() => {
    // Scroll Progress Bar
    const scrollProgress = document.getElementById('scroll-progress');
    
    function updateScrollProgress() {
      if (scrollProgress) {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${Math.min(scrolled, 100)}%`;
      }
    }

    // Header show/hide on scroll
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
      updateScrollProgress();
      if (!ticking) {
        window.requestAnimationFrame(handleHeader);
        ticking = true;
      }
    };

    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobilePanel = document.getElementById('mobile-panel');
    let isOpen = false;

    function toggleMobileNav() {
      isOpen = !isOpen;
      if (mobilePanel) {
        if (isOpen) {
          mobilePanel.classList.remove('pointer-events-none', 'opacity-0');
          mobilePanel.classList.add('pointer-events-auto', 'opacity-100');
          const panel = mobilePanel.querySelector('div:last-child');
          if (panel) {
            (panel as HTMLElement).style.transform = 'translateY(0px)';
            (panel as HTMLElement).style.opacity = '1';
          }
        } else {
          mobilePanel.classList.add('pointer-events-none', 'opacity-0');
          mobilePanel.classList.remove('pointer-events-auto', 'opacity-100');
          const panel = mobilePanel.querySelector('div:last-child');
          if (panel) {
            (panel as HTMLElement).style.transform = 'translateY(-8px)';
            (panel as HTMLElement).style.opacity = '0';
          }
        }
      }
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    function handleFormSubmit(e: Event) {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        budget: formData.get('budget'),
        message: formData.get('message'),
        nda: formData.get('nda')
      };
      
      // Here you would typically send to your backend
      console.log('Form submitted:', data);
      
      // Show success message (you could replace this with a proper notification)
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    }

    // Smooth scroll for navigation links
    function handleSmoothScroll(e: Event) {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Close mobile nav if open
          if (isOpen) {
            toggleMobileNav();
          }
        }
      }
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (navToggle) {
      navToggle.addEventListener('click', toggleMobileNav);
    }

    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Add smooth scroll to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navToggle) {
        navToggle.removeEventListener('click', toggleMobileNav);
      }
      if (contactForm) {
        contactForm.removeEventListener('submit', handleFormSubmit);
      }
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return null; // This component only provides functionality, no UI
}