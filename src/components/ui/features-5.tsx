'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Activity, BookOpen, LineChart, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const featuresData = [
  {
    id: 0,
    title: "Comprehensive Curriculum",
    icon: BookOpen,
    image: "/assets/course.png",
  },
  {
    id: 1,
    title: "Live Market Sessions",
    icon: Activity,
    image: "/assets/live.png",
  },
  {
    id: 2,
    title: "Advanced Analytics",
    icon: LineChart,
    image: "/assets/advance.png",
  },
  {
    id: 3,
    title: "Risk Management",
    icon: ShieldCheck,
    image: "/assets/risk.png",
  }
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll over this entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Whenever scrollYProgress changes, update activeIndex (0 to 3)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 4 sections, each takes 0.25 of the scroll progress
    let newIndex = Math.floor(latest * 4);
    if (newIndex > 3) newIndex = 3;
    if (newIndex < 0) newIndex = 0;
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const handleFeatureClick = (index: number) => {
    if (!containerRef.current) return;
    
    // Calculate scroll position based on index
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = rect.height;
    const scrollableHeight = containerHeight - window.innerHeight;
    
    // Scroll to the exact position that triggers this index
    const targetScrollY = containerTop + (scrollableHeight * (index / 3));
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Tall container to allow scrolling */}
      <div ref={containerRef} className="relative h-[400vh]">
      
      {/* Sticky content that stays in viewport while scrolling through the 400vh */}
      <section className="sticky top-[70px] md:top-0 h-[calc(100vh-70px)] md:h-screen flex items-center justify-center py-4 md:py-32 overflow-hidden">
        <div className="mx-auto w-full max-w-xl md:max-w-6xl px-6 py-2 md:py-0">
          <div className="grid items-center gap-6 md:gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-24">
            
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="md:pr-6 lg:pr-0">
                <h2 
                    className="text-2xl font-bold md:text-4xl lg:text-5xl text-[#111] font-disket uppercase" 
                >
                    Why Choose Us
                </h2>
                <p 
                    className="mt-2 md:mt-6 text-[#444] text-[10px] md:text-sm font-geist"
                >
                    Built for traders who want to scale their profitability and master the financial markets from Sitamarhi.
                </p>
              </div>
              
              {/* List with styling exactly from the original component */}
              <ul className="mt-4 md:mt-8 divide-y border-y border-black/10 *:flex *:items-center *:gap-2 md:*:gap-3 *:py-2 md:*:py-3 *:cursor-pointer *:transition-all *:duration-300">
                {featuresData.map((feature, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <li 
                      key={feature.id}
                      onClick={() => handleFeatureClick(idx)}
                      className={isActive ? "text-[#111] font-bold bg-black/5 px-2 rounded text-[10px] md:text-sm font-disket uppercase" : "text-gray-500 hover:text-gray-800 px-2 rounded text-[10px] md:text-sm font-disket uppercase"}
                    >
                      <feature.icon className={`size-3 md:size-5 ${isActive ? 'text-black' : 'text-gray-400'}`} />
                      {feature.title}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Image Container */}
            <div className="border-black/10 relative rounded-2xl md:rounded-3xl border p-2 md:p-3 lg:col-span-3">
              <div className="bg-gradient-to-b relative rounded-xl md:rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700 overflow-hidden shadow">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={featuresData[activeIndex].image} 
                    className="w-full h-auto max-h-[40vh] md:max-h-none object-contain block rounded-[10px] md:rounded-[15px]" 
                    alt={featuresData[activeIndex].title} 
                  />
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    </>
  );
}
