"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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

export default function ScrollytellingServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine active index based on scroll progress (0 to 1)
    const index = Math.min(
      services.length - 1,
      Math.floor(latest * services.length)
    );
    setActiveIndex(index);
  });

  return (
    <div ref={containerRef} className="relative h-[600vh] w-full bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* Background Images */}
        {services.map((service, index) => (
          <motion.div
            key={`bg-${service.id}`}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
          </motion.div>
        ))}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between h-full py-24 md:py-32">
          
          {/* Left Content Area (Active Service Details) */}
          <div className="flex-1 flex flex-col justify-center h-full max-w-2xl">
            <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              Our Services
            </h3>
            
            <div className="relative min-h-[300px]">
              {services.map((service, index) => (
                <motion.div
                  key={`text-${service.id}`}
                  className="absolute top-0 left-0 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                    pointerEvents: activeIndex === index ? "auto" : "none"
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gray-400 font-light font-heading text-xl">{service.id} —</span>
                    <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading leading-tight">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl font-light">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Navigation / Progress Indicator */}
          <div className="hidden md:flex flex-col justify-center gap-6 h-full w-48 text-right">
            {services.map((service, index) => (
              <div 
                key={`nav-${service.id}`}
                className="flex items-center justify-end gap-4 cursor-default group"
              >
                <div 
                  className={`text-xs tracking-widest font-bold transition-colors duration-500 uppercase
                    ${activeIndex === index ? 'text-gray-900' : 'text-gray-500'}
                  `}
                >
                  <span className="opacity-50 mr-2">{service.id}</span>
                  {service.title.split(' ')[0]} {/* Shorten name for side nav */}
                </div>
                {/* Line indicator */}
                <motion.div 
                  className="h-[1px] bg-white origin-right"
                  initial={{ width: "16px", opacity: 0.3 }}
                  animate={{ 
                    width: activeIndex === index ? "48px" : "16px",
                    opacity: activeIndex === index ? 1 : 0.3,
                    backgroundColor: activeIndex === index ? "#f97316" : "#ffffff" // orange-500 for active
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
