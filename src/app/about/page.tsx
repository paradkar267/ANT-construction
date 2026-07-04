"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* 1. Cinematic Banner Section */}
      <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden bg-white">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/About.jpg"
            alt="AT Buildcon Premium Development site"
            fill
            className="object-cover brightness-90"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8FAFC]/90 z-10" />

        <div className="relative z-25 text-center text-white px-6 mt-12">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4 block"
          >
            The Atelier
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-semibold font-heading mb-4 tracking-tight"
          >
            Our Legacy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-lg font-light opacity-90 max-w-xl mx-auto font-sans tracking-wide"
          >
            Curating spaces that balance luxury, detail, and structural excellence.
          </motion.p>
        </div>
      </section>

      {/* 2. Editorial Story Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left" className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Hero.jpg"
              alt="AT Buildcon Structural Milestone"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-6 text-left">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] block">AT Buildcon</span>
            <h2 className="text-3xl sm:text-5xl font-semibold font-heading text-[#0f172a] tracking-tight leading-tight">
              Crafting Landmark Living Environments
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed font-sans">
              Founded on the pillars of transparency, master engineering, and luxury design, AT Buildcon has emerged as a premium real estate developer committed to residential brilliance.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We design not merely for structural strength but for spatial flow, ensuring that light, air, and high-end finishes blend seamlessly to cultivate an elite lifestyle. Every project undergoes stringent design evaluation and master planning before execution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Luxury Vision & Mission Section */}
      <section className="py-24 bg-white px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <ScrollReveal direction="up" className="bg-gray-50 p-10 md:p-16 rounded-3xl border border-gray-200 space-y-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0f172a] font-heading">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm font-sans">
              To redefine the luxury residential skyline of Maharashtra by building highly sustainable, architecturally superior, and smart environments that retain timeless value for generations to come.
            </p>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal direction="up" delay={0.15} className="bg-gray-50 p-10 md:p-16 rounded-3xl border border-gray-200 space-y-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0f172a] font-heading">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm font-sans">
              To deliver premium living spaces by enforcing rigorous quality inspections, transparent financial processes, and advanced engineering technologies, thereby generating absolute trust and peace of mind for our clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Founders Spotlight */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal direction="up" className="mb-20">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">Leadership</span>
            <h2 className="text-3xl sm:text-5xl font-semibold font-heading text-[#0f172a] tracking-tight">
              Our Visionary Founders
            </h2>
            <div className="h-[2px] w-24 bg-accent mx-auto mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Ashish Uttarwar",
                img: "/founder1.jpg",
                role: "Co-Founder & Director",
                desc: "Steering the structural integrity, planning regulations, and high-precision execution matrices."
              },
              {
                name: "Tushar Umbarkar",
                img: "/founder2.jpg",
                role: "Co-Founder & Director",
                desc: "Focusing on architectural vision, premium luxury detailing, client advisory, and spatial flow."
              }
            ].map((founder, index) => (
              <ScrollReveal
                key={founder.name}
                direction="up"
                delay={index * 0.2}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl group text-left flex flex-col justify-between"
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src={founder.img}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/10 to-transparent opacity-60" />
                </div>
                <div className="p-8 space-y-3">
                  <span className="text-accent text-xs uppercase tracking-widest font-semibold">{founder.role}</span>
                  <h3 className="text-2xl font-semibold text-white font-heading">{founder.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{founder.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
