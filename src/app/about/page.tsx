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
            src="/ant.png"
            alt="AT Buildcon Premium Development site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/10 z-0 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-white/95 via-white/30 to-transparent md:from-white md:via-white/80 z-0 pointer-events-none" />
        </motion.div>


        <div className="relative z-20 text-left text-gray-900 px-6 lg:px-12 mt-12 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4 block"
            >
              The Master Builders
            </motion.span>

            <div className="relative inline-block mb-4">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-6xl font-semibold font-heading tracking-tight text-gray-900"
              >
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Legacies</span>
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="absolute -bottom-2 md:-bottom-4 left-0 h-[2px] bg-gradient-to-r from-accent to-transparent"
              />
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-lg font-medium opacity-100 font-sans tracking-wide mt-6 text-gray-900 drop-shadow-md"
            >
              Crafting architectural masterpieces that balance structural supremacy, sustainable design, and unparalleled luxury.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Editorial Intro Section */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image & Stat Card */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[600px] grid grid-cols-2 grid-rows-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-lg overflow-hidden col-span-1 row-span-2 h-full shadow-lg group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image src="/about-img-1.jpg" alt="Luxury Residential Development 1" fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-lg overflow-hidden col-span-1 h-full shadow-md group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image src="/about-img-2.jpg" alt="Luxury Residential Development 2" fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative rounded-lg overflow-hidden col-span-1 h-full shadow-md group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image src="/about-img-3.jpg" alt="Luxury Residential Development 3" fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              </motion.div>
            </div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-8 md:mt-0 md:absolute md:bottom-10 md:-right-16 bg-gray-900/95 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-l-4 border-l-accent rounded-r-lg w-full md:max-w-[300px] z-10 hover:-translate-y-2 transition-transform duration-500"
            >
              <h3 className="text-6xl font-bold font-heading text-white mb-2 flex items-baseline">
                <AnimatedCounter to={15} /><span className="text-accent ml-1">+</span>
              </h3>
              <p className="text-sm text-accent uppercase tracking-widest font-bold mb-5">Years of Excellence</p>
              <div className="h-[1px] w-12 bg-white/20 mb-5" />
              <p className="text-sm text-gray-300 leading-relaxed font-light">
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
            className="lg:pl-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Our Heritage</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-[1.1] mb-8 tracking-tight">
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

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, text: "Rigorous Quality Standards" },
                { icon: Building2, text: "Master Architecture" },
                { icon: CheckCircle, text: "Absolute Transparency" },
                { icon: MapPin, text: "Prime Locations" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-4 bg-gray-50 hover:bg-white p-4 rounded-lg border border-transparent hover:border-black/5 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-accent bg-white group-hover:bg-accent group-hover:text-white shadow-sm p-3 rounded-md transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* 4. Vision & Mission Premium Cards */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">The Core</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">Purpose & Direction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative h-[450px] bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-black/5"
            >
              <Image src="/vision-new.jpg" alt="Vision" fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end text-white">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 rounded-full text-accent shadow-lg group-hover:scale-110 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4 text-white group-hover:-translate-y-1 transition-transform duration-300">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed font-light group-hover:-translate-y-1 transition-transform duration-300 delay-75">
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
              className="group relative h-[450px] bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 md:mt-12 border border-black/5"
            >
              <Image src="/mission.jpg" alt="Mission" fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end text-white">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 rounded-full text-accent shadow-lg group-hover:scale-110 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4 text-white group-hover:-translate-y-1 transition-transform duration-300">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed font-light group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                  To deliver premium living spaces by enforcing rigorous quality inspections, transparent financial processes, and advanced engineering technologies, generating absolute trust and peace of mind.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Editorial Features (Core Competencies) */}
      <section className="py-32 max-w-6xl mx-auto px-6 lg:px-8 bg-white">
        <div className="mb-24 md:flex justify-between items-end">
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">The A&T Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 max-w-xl">
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
              className="group border-t border-black/5 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-gray-50 hover:shadow-sm hover:border-transparent transition-all duration-300 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl"
            >
              <div className="md:col-span-2">
                <span className="text-5xl md:text-7xl font-bold text-gray-200 font-heading transition-colors duration-500 group-hover:text-accent">
                  {feature.id}
                </span>
              </div>
              <div className="md:col-span-4 mt-2">
                <h3 className="text-2xl font-bold text-gray-900 font-heading transition-transform duration-300 group-hover:translate-x-2">{feature.title}</h3>
              </div>
              <div className="md:col-span-6 mt-2">
                <p className="text-gray-500 leading-relaxed font-light transition-transform duration-300 group-hover:translate-x-2 delay-75">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-black/5" />
        </div>
      </section>

      {/* 6. Leadership Portraits */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50 text-gray-900 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">Leadership</span>
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
      <section className="py-32 px-6 lg:px-8 relative bg-white text-gray-900 overflow-hidden text-center flex flex-col items-center justify-center">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-6 block">Take The Next Step</span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight tracking-tight text-gray-900">
            Ready to experience unparalleled luxury?
          </h2>
          <p className="text-gray-500 font-light text-lg mb-12">
            Schedule a private consultation with our experts to discuss your future home or investment opportunities in our upcoming developments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent text-black hover:bg-neutral-200 px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 group shadow-xl"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
