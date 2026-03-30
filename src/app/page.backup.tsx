'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import InteractiveElements from '@/components/InteractiveElements';
import LoadingScreen from '@/components/LoadingScreen';
import TechStackSection from '@/components/TechStackSection';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Timeline } from '@/components/ui/timeline';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const { t: _t } = useLanguage();
  const [showLoading, setShowLoading] = useState(true);

  // Fail-safe: ensure loading screen disappears even if onComplete is missed
  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const solutions = [
    {
      quote:
        'From opportunity mapping to ROI-backed roadmaps, we design a strategy that aligns with your business outcomes.',
      name: 'AI Strategy & Roadmapping',
      designation: 'Discovery to feasibility',
      src: '/image1-medium.webp',
    },
    {
      quote:
        'We build domain-specific models and evaluate rigorously to deliver measurable lift.',
      name: 'Custom ML Development',
      designation: 'From POC to production',
      src: '/image2-medium.webp',
    },
    {
      quote:
        'We automate complex, cross-system processes to reduce cycle time and eliminate toil.',
      name: 'Automation Engineering',
      designation: 'Workflows and agents',
      src: '/image3-medium.webp',
    },
    {
      quote:
        'Data pipelines and insight layers that empower teams to decide with confidence.',
      name: 'Predictive Analytics',
      designation: 'Dashboards & forecasting',
      src: '/image4-medium.webp',
    },
  ];

  const timelineData = [
    {
      title: '2025',
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Your Vision, Our Code
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            Start your digital transformation journey with us. Whether you&apos;re
            looking to build a new product, enhance your existing platform, or
            scale your operations, we&apos;re here to turn your ideas into reality.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image1-medium.webp"
              alt="Innovation"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full aspect-square"
            />
            <Image
              src="/image2-medium.webp"
              alt="Partnership"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full aspect-square"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'What We Do',
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Full-Stack Excellence
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            From AI integration to cloud infrastructure, we deliver end-to-end
            solutions that drive real business value. Our expertise spans the
            entire development lifecycle.
          </p>
          <div className="space-y-2">
            {[
              'AI & Machine Learning Solutions',
              'Cloud Architecture & DevOps',
              'Web & Mobile Applications',
              'API Development & Integration',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"
              >
                <span className="text-blue-500">▸</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Our Process',
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            Agile & Collaborative
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            We believe in transparency and collaboration. Our iterative approach
            ensures you&apos;re involved at every step, from initial planning to
            final deployment.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="space-y-3">
              {[
                { phase: 'Discovery', desc: 'Understanding your needs' },
                { phase: 'Design', desc: 'Crafting the perfect solution' },
                { phase: 'Development', desc: 'Building with precision' },
                { phase: 'Deployment', desc: 'Launching with confidence' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {item.phase}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <>
      <InteractiveElements />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Venator Capital
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming ideas into powerful digital solutions with cutting-edge
              technology and innovative design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Our Solutions
            </h2>
            <AnimatedTestimonials testimonials={solutions} autoplay={true} />
          </div>
        </section>

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Partner With Us
            </h2>
            <Timeline data={timelineData} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Let&apos;s discuss how we can help bring your vision to life with our
              expertise in modern web development and AI solutions.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
    </>
  );
}