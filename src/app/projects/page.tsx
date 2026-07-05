"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import NetflixProjectSlider from "@/components/NetflixProjectSlider";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Sohamdhwani Smart Apartments",
      img: "/projects/Sohamdhwani.png",
      badge: "Completed",
      type: "Residential Development",
      desc: "Premium 3BHK smart apartments featuring modern architecture, intelligent home systems, and luxurious amenities. Designed for contemporary living with a focus on comfort, technology, and sustainable design in a Nagpur location.",
      features: [
        "3BHK Luxury Apartments",
        "Smart Home Technology",
        "Modern Architecture",
        "Prime Location"
      ],
      loc: "Plot no 13, Sawarkar Nagar, Nagpur, Maharashtra"
    },
    {
      id: 2,
      title: "Tuljai Impreials",
      img: "/projects/Tuljai.png",
      badge: "Completed",
      type: "Residential Development",
      desc: "Elegant 3BHK residential complex offering sophisticated living spaces with premium finishes. The project combines functional design with aesthetic appeal, providing residents with a comfortable and upscale lifestyle in Wanjari Nagar.",
      features: [
        "3BHK Premium Residences",
        "Sophisticated Design",
        "Premium Finishes",
        "Strategic Location"
      ],
      loc: "Plot No. 24, Wanjari Nagar, Nagpur, Maharashtra"
    },
    {
      id: 3,
      title: "Audumbar Sahniwas",
      img: "/projects/Audumbar.png",
      badge: "Completed",
      type: "Residential Development",
      desc: "Elegant 4BHK Luxurious Flat, Stylish Apartments in prime locations in Vidhya Nihar Pratap Nagar",
      features: [
        "4BHK Premium Residences",
        "Luxurious Living Spaces",
        "Premium Finishes",
        "Prime Location"
      ],
      loc: "Plot No. 17, Vidhya Nihar Pratap Nagar, Nagpur, Maharashtra"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* 1. Page Banner */}
      <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden bg-white">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/projects-hero.jpg"
            alt="AT Buildcon Portfolios Banner"
            fill
            className="object-cover brightness-90"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-gray-50 z-10" />

        <div className="relative z-20 text-center text-white px-6 mt-12">
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
            className="text-sm sm:text-lg font-light opacity-90 max-w-xl mx-auto font-sans tracking-wide"
          >
            Discover our completed premium housing collections across prime locations.
          </motion.p>
        </div>
      </section>

      {/* 2. Headline Intro */}
      <section className="py-20 px-6 lg:px-8 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">Developments</span>
            <h2 className="text-3xl sm:text-5xl font-semibold font-heading text-[#0f172a] tracking-tight">
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
