"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import NetflixProjectSlider from "@/components/NetflixProjectSlider";

export default function ProjectsPage() {
  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">
      {/* 1. Page Banner */}
      <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden bg-gray-50">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/project.png"
            alt="AT Buildcon Portfolios Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-white via-white/80 to-transparent z-0 pointer-events-none" />
        </motion.div>


        <div className="relative z-20 text-left text-gray-900 px-6 lg:px-12 mt-12 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4 block"
            >
              The Portfolio
            </motion.span>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-6xl font-semibold font-heading mb-4 tracking-tight"
            >
              Luxury Residencies
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-lg font-light opacity-90 font-sans tracking-wide text-gray-600"
            >
              Discover our completed premium housing collections across prime locations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Headline Intro */}
      <section className="py-24 px-6 lg:px-8 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">Developments</span>
            <h2 className="text-3xl sm:text-5xl font-semibold font-heading text-gray-900 tracking-tight">
              Curated Masterpieces
            </h2>
            <div className="h-[2px] w-24 bg-accent mx-auto mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Projects Showcase List */}
      <NetflixProjectSlider />
    </div>
  );
}
