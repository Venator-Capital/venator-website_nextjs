"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gray-950 font-sans md:px-10 relative overflow-hidden"
      ref={containerRef}
    >
      {/* 背景装飾要素 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.03),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.02),transparent_50%)] pointer-events-none"></div>
      
      {/* 装飾的な線 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent"></div>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"></div>
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"></div>
      
      {/* 大きな光る要素 */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* 小さな装飾要素 */}
      <div className="absolute top-40 right-1/4 w-4 h-4 bg-teal-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-80 right-1/3 w-2 h-2 bg-purple-400/20 rounded-full animate-bounce delay-700"></div>
      
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 mb-8">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
            <span className="text-sm font-medium text-teal-300">Why Choose Us</span>
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-teal-100 via-blue-100 to-white bg-clip-text text-transparent">
            Small team. Enterprise outcomes.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We move fast without breaking what matters—security, reliability, and results.
          </p>
          
          {/* 統計情報の追加 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-400/20">
              <div className="text-3xl font-bold text-teal-400 mb-2">2-4 weeks</div>
              <div className="text-gray-300">Average kickoff time</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">NDA compliance</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Direct access to team</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-lg shadow-teal-500/25">
                <div className="h-6 w-6 rounded-full bg-white border-2 border-white shadow-inner" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-24 md:text-5xl font-bold text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-teal-500 via-blue-500 via-purple-500 to-transparent from-[0%] via-[10%] rounded-full shadow-lg shadow-teal-500/50"
          />
        </div>
      </div>
    </div>
  );
};
