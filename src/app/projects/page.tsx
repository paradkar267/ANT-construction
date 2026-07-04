"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

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
            src="/About.jpg"
            alt="AT Buildcon Portfolios Banner"
            fill
            className="object-cover brightness-90"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8FAFC]/90 z-10" />

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
      <section className="pb-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center scroll-mt-28"
              >
                {/* Image layout with custom direction animations */}
                <ScrollReveal
                  direction={isEven ? "left" : "right"}
                  className={`relative h-[320px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl group border border-gray-200 ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-6 left-6 bg-[#0B131F]/85 backdrop-blur-sm border border-accent/20 text-[#0f172a] bg-neutral-800 text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-md">
                    {project.badge}
                  </div>
                </ScrollReveal>

                {/* Content Panel */}
                <ScrollReveal
                  direction={isEven ? "right" : "left"}
                  className="space-y-6 text-left"
                >
                  <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                    {project.type}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#0f172a] font-heading tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm flex items-center gap-1.5 font-sans font-medium">
                    <MapPin className="w-4 h-4 text-accent" /> {project.loc}
                  </p>

                  <p className="text-[#1E293B] font-light text-base leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="pt-4 border-t border-gray-200/60">
                    <h4 className="text-[#0f172a] text-xs font-semibold uppercase tracking-wider mb-4 font-heading">
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-gray-600 font-medium font-sans">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-accent bg-accent hover:bg-transparent text-[#0f172a] hover:text-accent font-semibold tracking-wider uppercase text-xs px-6 py-3 rounded-full transition-all duration-500"
                    >
                      Inquire Details
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
