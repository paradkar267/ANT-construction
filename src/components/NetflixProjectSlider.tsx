"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

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
  return (
    <section className="relative w-full bg-gray-50 py-24 px-6 lg:px-8 font-sans border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-shadow duration-500 group bg-white border border-gray-100 p-2">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="absolute top-6 left-6 flex gap-2 z-10">
                    <span className="bg-accent text-white shadow-md text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                      {project.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center py-4">
                <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest mb-4 block">
                  {project.type}
                </span>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-heading tracking-tight mb-4 leading-[1.1]">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 font-medium text-sm mb-8">
                  <MapPin className="w-4 h-4 text-accent" />
                  {project.loc}
                </div>

                <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
                  {project.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-accent hover:bg-gray-900 text-white font-bold tracking-[0.15em] uppercase text-xs px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Inquire Now <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
