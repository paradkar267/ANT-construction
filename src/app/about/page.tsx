"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Target, ArrowRight, Building2, MapPin, CheckCircle, Shield } from "lucide-react";
import FounderPortrait from "@/components/FounderPortrait";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useRef } from "react";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-[#fcfcfc] text-[#0f172a] font-sans selection:bg-orange-500 selection:text-white">
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
            alt="AT Buildcon Premium Development site"
            fill
            className="object-cover brightness-90"
            priority
          />
        </motion.div>


        <div className="relative z-20 text-center text-white px-6 mt-12 max-w-5xl mx-auto">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-4 block"
          >
            The Master Builders
          </motion.span>
          
          <div className="relative inline-block mb-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-6xl font-semibold font-heading tracking-tight"
            >
              Building Legacies
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              className="absolute -bottom-2 md:-bottom-4 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-lg font-light opacity-90 max-w-xl mx-auto font-sans tracking-wide mt-6"
          >
            Crafting architectural masterpieces that balance structural supremacy, sustainable design, and unparalleled luxury.
          </motion.p>
        </div>
      </section>

      {/* 2. Editorial Intro Section */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image & Stat Card */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[600px] grid grid-cols-2 grid-rows-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-sm overflow-hidden col-span-1 row-span-2 h-full"
              >
                <Image src="/about-img-1.jpg" alt="Luxury Residential Development 1" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-sm overflow-hidden col-span-1 h-full"
              >
                <Image src="/about-img-2.jpg" alt="Luxury Residential Development 2" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative rounded-sm overflow-hidden col-span-1 h-full"
              >
                <Image src="/about-img-3.jpg" alt="Luxury Residential Development 3" fill className="object-cover" />
              </motion.div>
            </div>
            
            {/* Floating Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-4 right-4 md:bottom-10 md:-right-16 bg-white p-6 md:p-8 shadow-2xl border border-gray-100 max-w-[220px] md:max-w-[280px] z-10"
            >
              <h3 className="text-5xl font-bold font-heading text-[#0f172a] mb-2 flex items-baseline">
                <AnimatedCounter to={15} />+
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-4">Years of Excellence</p>
              <div className="h-[1px] w-full bg-gray-200 mb-4" />
              <p className="text-xs text-gray-400 leading-relaxed">
                A rich heritage of transforming the urban skyline with precision engineering and timeless design.
              </p>
            </motion.div>
          </div>

          {/* Editorial Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:pl-10"
          >
            <span className="text-orange-500 text-xs font-semibold uppercase tracking-[0.3em] block mb-4">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#0f172a] leading-tight mb-8">
              Pioneering the Future of Premium Living.
            </h2>
            <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                Founded on the pillars of absolute transparency, master engineering, and luxury design, AT Buildcon has emerged as a vanguard in real estate development. We don't just build structures; we curate lifestyles.
              </p>
              <p>
                Every project undergoes stringent design evaluation and master planning before execution. From optimal spatial flow to the finest imported materials, our environments are tailored to elevate everyday living into an elite art form.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { icon: Shield, text: "Rigorous Quality Standards" },
                { icon: Building2, text: "Master Architecture" },
                { icon: CheckCircle, text: "Absolute Transparency" },
                { icon: MapPin, text: "Prime Locations" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-orange-500 bg-orange-50 p-2 rounded-full">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-[#0f172a]">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* 4. Vision & Mission Premium Cards */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-orange-500 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">The Core</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#0f172a]">Purpose & Direction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative h-[450px] bg-white rounded-md overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <Image src="/vision-new.jpg" alt="Vision" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end text-white">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 text-orange-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  To redefine the luxury residential skyline by building highly sustainable, architecturally superior, and smart environments that retain timeless value for generations to come.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative h-[450px] bg-white rounded-md overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 md:mt-12"
            >
              <Image src="/mission.jpg" alt="Mission" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end text-white">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 text-orange-400">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  To deliver premium living spaces by enforcing rigorous quality inspections, transparent financial processes, and advanced engineering technologies, generating absolute trust and peace of mind.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Editorial Features (Core Competencies) */}
      <section className="py-32 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-24 md:flex justify-between items-end">
          <div>
            <span className="text-orange-500 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">The A&T Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#0f172a] max-w-xl">
              Why We Are The Developers of Choice.
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm mt-6 md:mt-0 font-light leading-relaxed">
            Our unwavering commitment to excellence ensures every development is a benchmark in its category.
          </p>
        </div>

        <div className="space-y-0">
          {[
            { id: "01", title: "Master Craftsmanship", desc: "We utilize the highest grade materials and precise engineering standards to ensure durability, acoustic superiority, and aesthetic brilliance in every square foot." },
            { id: "02", title: "Transparent Practices", desc: "From legal clearances to financial milestones, we maintain complete transparency, providing our clients with peace of mind and absolute security in their investment." },
            { id: "03", title: "Sustainable Luxury", desc: "Integrating eco-friendly designs, smart energy management, and lush green landscapes, we build homes that respect the environment without compromising on luxury." },
            { id: "04", title: "Client-Centric Design", desc: "Our architectural planning focuses heavily on spatial flow, natural lighting, and lifestyle requirements to create deeply personal and comfortable living environments." },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group border-t border-gray-200 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-gray-50 transition-colors px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <div className="md:col-span-2">
                <span className="text-5xl md:text-7xl font-bold text-[#0f172a] font-heading transition-colors group-hover:text-orange-500">
                  {feature.id}
                </span>
              </div>
              <div className="md:col-span-4 mt-2">
                <h3 className="text-2xl font-bold text-[#0f172a] font-heading">{feature.title}</h3>
              </div>
              <div className="md:col-span-6 mt-2">
                <p className="text-gray-500 leading-relaxed font-light">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </section>

      {/* 6. Leadership Portraits */}
      <section className="py-32 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-orange-500 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              The Visionaries Behind The Legacy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {[
              {
                name: "Ashish Uttarwar",
                img: "/founder1.jpg",
                role: "Co-Founder & Director",
                desc: "Steering the structural integrity, planning regulations, and high-precision execution matrices across all major developments.",
                quote: "Architecture is not just about building walls, but framing the lives within them.",
                linkedin: "https://linkedin.com"
              },
              {
                name: "Tushar Umbarkar",
                img: "/founder2.jpg",
                role: "Co-Founder & Director",
                desc: "Focusing on architectural vision, premium luxury detailing, client advisory, and ensuring seamless spatial flow.",
                quote: "True luxury lies in the details that you feel before you even see them.",
                linkedin: "https://linkedin.com"
              }
            ].map((founder, index) => (
              <FounderPortrait key={founder.name} founder={founder} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Luxurious Light CTA */}
      <section className="py-32 px-6 lg:px-8 relative bg-white text-[#0f172a] overflow-hidden text-center flex flex-col items-center justify-center border-t border-gray-200">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl"
        >
          <span className="text-orange-500 text-xs font-semibold uppercase tracking-[0.3em] mb-6 block">Take The Next Step</span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight tracking-tight">
            Ready to experience unparalleled luxury?
          </h2>
          <p className="text-gray-600 font-light text-lg mb-12">
            Schedule a private consultation with our experts to discuss your future home or investment opportunities in our upcoming developments.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-[#0f172a] text-white hover:bg-orange-500 hover:text-white px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 group shadow-xl"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
