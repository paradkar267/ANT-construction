"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Factory, Building2, HomeIcon, ArrowRight, ShieldCheck, HardHat, Hammer, Leaf, Settings, PenTool } from "lucide-react";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const services = [
  {
    title: "Industrial & Manufacturing",
    desc: "We construct heavy-duty industrial facilities, factories, and warehouses designed for operational efficiency and high load-bearing requirements.",
    icon: Factory,
    features: ["High-Load Foundations", "Safety Compliance", "Optimized Workflows", "Durable Materials"],
    image: "/hero-image.jpg"
  },
  {
    title: "Commercial & Corporate",
    desc: "From striking corporate headquarters to sprawling retail complexes, we build commercial spaces that reflect brand prestige and functionality.",
    icon: Building2,
    features: ["Modern Aesthetics", "Energy Efficient", "Scalable Layouts", "Premium Finishes"],
    image: "/About.jpg"
  },
  {
    title: "Luxury Residential",
    desc: "Developing bespoke residential complexes and luxury villas that offer unparalleled comfort, elegance, and modern living amenities.",
    icon: HomeIcon,
    features: ["Smart Home Ready", "Bespoke Interiors", "Sustainable Design", "Prime Locations"],
    image: "/two.png"
  }
];

const specialized = [
  { title: "Structural Engineering", icon: HardHat, desc: "Advanced structural analysis and robust framework construction." },
  { title: "Project Management", icon: Settings, desc: "End-to-end execution, timeline tracking, and quality control." },
  { title: "Architectural Planning", icon: PenTool, desc: "Innovative designs bridging form and function seamlessly." },
  { title: "Sustainable Building", icon: Leaf, desc: "Eco-friendly materials and LEED-certified construction practices." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">

      {/* 1. Hero Banner */}
      <section className="relative h-[400px] sm:h-[500px] flex items-center overflow-hidden bg-gray-50">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero.png"
            alt="AT Buildcon Services Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/10 z-0 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-white/95 via-white/30 to-transparent md:from-white md:via-white/80 z-0 pointer-events-none" />
        </motion.div>

        <div className="relative z-20 text-left text-gray-900 px-6 lg:px-12 mt-12 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">Our Capabilities</span>
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-6xl font-bold font-heading mb-6 tracking-tight"
            >
              Expertise & Services
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-gray-600 max-w-xl leading-relaxed font-light"
            >
              Delivering uncompromising quality across industrial, commercial, and luxury residential sectors with absolute precision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Main Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="space-y-16 lg:space-y-24"
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeUpVariant}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 relative aspect-[4/3] group overflow-hidden border border-black/5 rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-black/5 border border-black/10 rounded-full flex items-center justify-center text-accent">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-400 font-heading font-bold tracking-widest">0{idx + 1}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 lg:mb-6">{service.title}</h2>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8">{service.desc}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <ShieldCheck className="w-4 h-4 text-accent" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Specialized Capabilities */}
      <section className="py-16 lg:py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Specialized Capabilities</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">Going beyond standard construction to offer comprehensive lifecycle solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {specialized.map((spec, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-black/5 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <spec.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold font-heading mb-3 text-gray-900">{spec.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 lg:py-24 bg-white text-gray-900 text-center px-4 sm:px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 lg:mb-6 leading-tight">Ready to Build With Us?</h2>
          <p className="text-gray-600 font-medium mb-8 lg:mb-10 max-w-xl mx-auto text-sm sm:text-base px-2">
            Discuss your next big project with our experts and let us lay the foundation for your success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent text-black hover:bg-white px-6 sm:px-8 py-3 sm:py-4 font-bold tracking-[0.15em] uppercase text-xs transition-colors"
          >
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
