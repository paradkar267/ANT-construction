"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sohamdhwani Smart Apartments",
    img: "/projects/Sohamdhwani.png",
    badge: "Completed",
    type: "Residential Development",
    desc: "Premium 3BHK smart apartments featuring modern architecture, intelligent home systems, and luxurious amenities. Designed for contemporary living with a focus on comfort, technology, and sustainable design.",
    features: ["3BHK Luxury Apartments", "Smart Home Technology", "Modern Architecture", "Prime Location"],
    loc: "Sawarkar Nagar, Nagpur"
  },
  {
    id: 2,
    title: "Tuljai Impreials",
    img: "/projects/Tuljai.png",
    badge: "Completed",
    type: "Residential Development",
    desc: "Elegant 3BHK residential complex offering sophisticated living spaces with premium finishes. The project combines functional design with aesthetic appeal, providing residents with a comfortable and upscale lifestyle.",
    features: ["3BHK Premium Residences", "Sophisticated Design", "Premium Finishes", "Strategic Location"],
    loc: "Wanjari Nagar, Nagpur"
  },
  {
    id: 3,
    title: "Audumbar Sahniwas",
    img: "/projects/Audumbar.png",
    badge: "Completed",
    type: "Residential Development",
    desc: "Elegant 4BHK Luxurious Flat, Stylish Apartments in prime locations. The perfect blend of luxury, space, and modern aesthetics.",
    features: ["4BHK Premium Residences", "Luxurious Living Spaces", "Premium Finishes", "Prime Location"],
    loc: "Pratap Nagar, Nagpur"
  }
];

export default function NetflixProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000); // Slower, 6 seconds
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative w-full bg-[#0a0a0a] overflow-hidden flex flex-col font-sans border-y border-white/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        {/* Left Content Area (Dark Solid Background for perfect readability) */}
        <div className="lg:col-span-5 bg-[#111111] z-20 flex flex-col justify-center px-8 md:px-12 pt-12 pb-32 relative border-r border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-xl"
            >
              {/* Badge & Type */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-[9px] font-bold uppercase tracking-[0.2em] border border-accent px-2 py-1">
                  {projects[activeIndex].badge}
                </span>
                <span className="text-neutral-400 text-[10px] font-semibold uppercase tracking-widest">
                  {projects[activeIndex].type}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight leading-[1.1] mb-4">
                {projects[activeIndex].title}
              </h2>

              {/* Location */}
              <div className="flex items-center gap-2 text-neutral-300 font-medium text-sm mb-8">
                <MapPin className="w-4 h-4 text-accent" />
                {projects[activeIndex].loc}
              </div>

              {/* Description */}
              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-10">
                {projects[activeIndex].desc}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                {projects[activeIndex].features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-neutral-300">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-accent text-black hover:bg-white font-bold tracking-[0.15em] uppercase text-xs px-8 py-4 transition-colors"
                >
                  Inquire Now <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-8 md:left-16 flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-neutral-500 font-heading text-sm font-medium tracking-widest w-12 text-center">
              0{activeIndex + 1} <span className="text-white/20">/</span> 0{projects.length}
            </div>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="lg:col-span-7 relative h-[50vh] lg:h-auto overflow-hidden bg-black">
          <AnimatePresence initial={false}>
            <motion.div
              key={`img-${activeIndex}`}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Image
                src={projects[activeIndex].img}
                alt={projects[activeIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" /> {/* Subtle darkening */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
