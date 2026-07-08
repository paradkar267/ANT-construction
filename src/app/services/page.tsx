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
    image: "/projects/Audumbar.png"
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
    <div className="bg-[#111111] text-[#f5f5f5] font-sans selection:bg-accent selection:text-black">

      {/* 1. Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.jpg"
            alt="Services Banner"
            fill
            className="object-cover scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/70 z-0" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Capabilities</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4">
              Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Services</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Delivering uncompromising quality across industrial, commercial, and residential sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Services */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="space-y-24"
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                variants={fadeUpVariant}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 relative aspect-[4/3] group overflow-hidden border border-white/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-accent">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <span className="text-neutral-500 font-heading font-bold tracking-widest">0{idx + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">{service.title}</h2>
                  <p className="text-neutral-400 leading-relaxed mb-8">{service.desc}</p>

                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
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
      <section className="py-24 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Specialized Capabilities</h2>
            <p className="text-neutral-500 max-w-xl mx-auto">Going beyond standard construction to offer comprehensive lifecycle solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialized.map((spec, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-accent/50 transition-colors group">
                <spec.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold font-heading mb-3">{spec.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-accent text-black text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to Build With Us?</h2>
          <p className="text-black/80 font-medium mb-10 max-w-xl mx-auto">
            Discuss your next big project with our experts and let us lay the foundation for your success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white hover:bg-neutral-800 px-8 py-4 font-bold tracking-[0.15em] uppercase text-xs transition-colors"
          >
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
