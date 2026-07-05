"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const storySlides = [
  {
    id: "01",
    title: "Master Planning",
    description: "Every landmark begins with a vision. We integrate rigorous planning and architectural precision to lay the foundation for enduring legacy.",
    image: "/About.jpg",
  },
  {
    id: "02",
    title: "Structural Brilliance",
    description: "Engineering excellence meets modern aesthetics. We forge robust environments capable of weathering the tests of time.",
    image: "/projects/Tuljai.png",
  },
  {
    id: "03",
    title: "Curated Luxury",
    description: "From spatial flow to high-end finishes, our spaces are meticulously designed to cultivate an elite and seamless lifestyle.",
    image: "/projects/Audumbar.png",
  },
  {
    id: "04",
    title: "Skyline Defining",
    description: "Transforming the urban horizon. We deliver residential masterpieces that become the gold standard for luxury living.",
    image: "/Hero.jpg",
  },
];

export default function AboutStorySlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === storySlides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center font-sans">
      <AnimatePresence initial={false}>
        <motion.div
          key={activeIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={storySlides[activeIndex].image}
            alt={storySlides[activeIndex].title}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Left Gradient for Typography Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Editorial Typography (Left Aligned) */}
        <div className="flex-1 max-w-2xl text-left text-white mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-500 mb-6 block">
                {storySlides[activeIndex].id} — The Process
              </span>
              <h2 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8 tracking-tight">
                {storySlides[activeIndex].title}
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300 max-w-lg">
                {storySlides[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Vertical Progress Indicator (Right Aligned) */}
        <div className="hidden md:flex flex-col justify-center items-end gap-6 h-full absolute right-8 top-0 bottom-0 z-20">
          {storySlides.map((_, index) => (
            <div key={`dot-${index}`} className="flex items-center gap-4">
              <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-500 ${activeIndex === index ? 'text-white' : 'text-gray-500/50'}`}>
                0{index + 1}
              </span>
              <div className="relative w-1 h-12 bg-white/10 overflow-hidden">
                <motion.div 
                  className="absolute bottom-0 left-0 w-full bg-orange-500 origin-bottom"
                  initial={{ height: "0%" }}
                  animate={{ height: activeIndex === index ? "100%" : "0%" }}
                  transition={{ duration: activeIndex === index ? 3 : 0, ease: "linear" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
