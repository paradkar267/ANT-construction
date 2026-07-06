"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Play, Info } from "lucide-react";

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

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2300); // Every 2.3 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[85vh] min-h-[700px] w-full bg-[#141414] overflow-hidden flex flex-col justify-end pb-24 font-sans">
      {/* Background Image with Netflix-style fade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={projects[activeIndex].img}
            alt={projects[activeIndex].title}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Heavy vignettes for text readability (Netflix style) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/50 to-transparent w-[80%]" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full lg:w-[55%] max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }}
            >
              {/* Badge & Type */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex items-center gap-3 mb-4"
              >
                <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                  {projects[activeIndex].badge}
                </span>
                <span className="text-gray-300 text-xs font-semibold uppercase tracking-widest drop-shadow-md">
                  {projects[activeIndex].type}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight leading-tight mb-6 drop-shadow-2xl"
              >
                {projects[activeIndex].title}
              </motion.h2>

              {/* Location */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex items-center gap-2 text-white font-semibold text-sm mb-6 drop-shadow-md"
              >
                <MapPin className="w-4 h-4 text-orange-500" />
                {projects[activeIndex].loc}
              </motion.div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-gray-200 text-base md:text-lg font-light leading-relaxed mb-8 drop-shadow-lg"
              >
                {projects[activeIndex].desc}
              </motion.p>

              {/* Highlights */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex flex-wrap gap-4 mb-10"
              >
                {projects[activeIndex].features.map((feat, idx) => (
                  <div key={idx} className="flex items-center text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                    {feat}
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex gap-4"
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 font-bold px-8 py-3 rounded-md transition-colors text-sm md:text-base shadow-xl"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Inquire Now
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Top Progress Bars (like Instagram/Netflix stories) */}
        <div className="absolute top-[-40vh] md:top-[-50vh] left-6 lg:left-8 right-6 lg:right-8 flex gap-2 max-w-7xl mx-auto z-50">
          {projects.map((_, idx) => (
            <div 
              key={idx} 
              className="h-1 flex-1 bg-gray-600/50 overflow-hidden rounded-full cursor-pointer"
              onClick={() => setActiveIndex(idx)}
            >
              <motion.div
                className="h-full bg-white origin-left"
                initial={{ width: "0%" }}
                animate={{ width: activeIndex === idx ? "100%" : activeIndex > idx ? "100%" : "0%" }}
                transition={{ duration: activeIndex === idx ? 2.3 : 0, ease: "linear" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
