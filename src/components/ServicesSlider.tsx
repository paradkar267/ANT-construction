"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Residential Construction",
    description: "Luxury homes and modern apartments built with care. We create living spaces that define comfort and architectural elegance.",
    image: "/projects/Audumbar.png",
  },
  {
    id: "02",
    title: "Commercial Projects",
    description: "Efficient office spaces and retail complexes designed for productivity and brand identity.",
    image: "/Hero.jpg",
  },
  {
    id: "03",
    title: "Project Management",
    description: "Timely, efficient execution from concept to completion through meticulous oversight.",
    image: "/projects/Tuljai.png",
  },
  {
    id: "04",
    title: "Industrial Construction",
    description: "Reliable, large-scale industrial facilities built for durability and specialized operations.",
    image: "/projects/Sohamdhwani.png",
  },
  {
    id: "05",
    title: "Renovations",
    description: "Transforming existing spaces into modern masterpieces while preserving structural integrity.",
    image: "/About.jpg",
  },
  {
    id: "06",
    title: "Consulting & Planning",
    description: "Expert guidance for every phase of your project, ensuring feasibility and design excellence.",
    image: "/Hero.jpg",
  },
];

export default function ServicesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }, []);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <section 
      className="relative h-screen w-full bg-black overflow-hidden flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={activeIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            src={services[activeIndex].image}
            alt={services[activeIndex].title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-end pb-24 md:pb-32">
        <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-8">
          Our Services
        </h3>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-400 font-light font-heading text-xl md:text-2xl">{services[activeIndex].id} —</span>
                  <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
                    {services[activeIndex].title}
                  </h4>
                </div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                  {services[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-end gap-8 shrink-0">
            {/* Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Previous Service"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Next Service"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Lines */}
            <div className="flex gap-2 items-center">
              {services.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className="group py-2"
                >
                  <div 
                    className={`h-[2px] transition-all duration-300 ${
                      activeIndex === index ? "w-8 bg-orange-500" : "w-4 bg-white/30 group-hover:bg-white/60 group-hover:w-6"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
