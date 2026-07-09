"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds total loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-gray-900 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center">
            {/* Logo Text */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-6xl md:text-8xl font-heading font-bold tracking-tighter text-white"
              >
                ANT<span className="text-accent">.</span>
              </motion.h1>
            </div>
            
            {/* Subtitle */}
            <div className="overflow-hidden mt-4">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-accent"></div>
                <span className="text-sm md:text-base tracking-[0.3em] font-semibold text-gray-400 uppercase">
                  Construction
                </span>
                <div className="h-[1px] w-12 bg-accent"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
