"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Award, HardHat, PenTool, Hammer, CheckCircle2, MapPin, Phone, Mail, Factory, Building2, Home as HomeIcon } from "lucide-react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectGallery from "@/components/ProjectGallery";
import StatsCounter from "@/components/StatsCounter";

export default function Home() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const scaleUpVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutImageY = useTransform(aboutScroll, [0, 1], ["-10%", "10%"]);

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-accent selection:text-black">

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/final.png"
            alt="Premium Infrastructure"
            fill
            priority
            className="object-cover object-[85%_center] md:object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-white/10 z-0 pointer-events-none" />
        <div
          className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-white/95 via-white/30 to-transparent md:from-white md:via-white/80 z-0 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-20">
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold">Uncompromising Quality</span>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] font-heading tracking-tight">
                Building Tomorrow&apos;s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Infrastructure.</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUpVariant} className="text-base md:text-lg text-gray-700 mb-10 max-w-xl leading-relaxed">
              We engineer state-of-the-art commercial facilities, luxury residences, and robust industrial frameworks that stand as pillars of modern progress.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <Link href="#projects" className="bg-accent text-black hover:bg-accent-hover px-8 py-4 font-bold tracking-[0.15em] uppercase text-xs transition-all duration-300 flex items-center gap-3">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="border border-black/20 hover:border-gray-900 text-gray-900 px-8 py-4 font-bold tracking-[0.15em] uppercase text-xs transition-all duration-300 backdrop-blur-sm bg-black/5">
                Request a Quote
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeUpVariant} className="mt-16 flex items-center gap-8 border-t border-black/10 pt-8 opacity-70 grayscale">
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400">Certified by:</div>
              <div className="text-lg font-heading font-bold">ISO 9001</div>
              <div className="text-lg font-heading font-bold">LEED®</div>
              <div className="text-lg font-heading font-bold">OHSAS 18001</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section ref={aboutRef} className="py-24 md:py-32 relative bg-white" id="about">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={scaleUpVariant}
              className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-md shadow-2xl border border-black/5 group"
            >
              <motion.div style={{ y: aboutImageY }} className="absolute inset-0 scale-110">
                <Image src="/ChatGPT Image Jul 9, 2026, 04_51_21 PM.png" alt="ANT Construction" fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.05]" />
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-accent" />
                <motion.span variants={fadeUpVariant} className="text-accent uppercase tracking-[0.3em] text-xs font-bold">
                  The ANT Legacy
                </motion.span>
              </div>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-[1.1] text-gray-900 tracking-tight max-w-3xl">
                Forging landmarks with <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">unyielding precision.</span>
              </motion.h2>
              <div className="space-y-6 border-l-2 border-accent/20 pl-6 ml-2">
                <motion.p variants={fadeUpVariant} className="text-gray-800 leading-relaxed text-lg">
                  ANT Construction is a premier tier-one builder specializing in complex, high-value infrastructure. Our methodology fuses heavy-duty engineering with meticulous architectural refinement.
                </motion.p>
                <motion.p variants={fadeUpVariant} className="text-gray-700 leading-relaxed">
                  Whether constructing advanced industrial facilities or luxury residential high-rises, we bring an uncompromising standard of safety, material quality, and timeline execution to every project site.
                </motion.p>
              </div>
              <motion.div variants={fadeUpVariant} className="mt-10 pl-8">
                <Link href="/about" className="inline-flex items-center gap-3 bg-gray-900 text-white hover:bg-accent hover:text-black px-8 py-4 font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-none">
                  Read Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 bg-gray-50 border-y border-black/5" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
          >
            <div>
              <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Core Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Services</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-black/10 border border-black/10">
            {[
              { title: "Industrial", desc: "Large-scale factories, warehouses, and logistics hubs built for heavy operational loads.", icon: Factory },
              { title: "Commercial", desc: "Corporate towers, retail complexes, and hospitality venues engineered for impact.", icon: Building2 },
              { title: "Residential", desc: "Premium housing, luxury villas, and high-rise apartments with superior finishes.", icon: HomeIcon },
              { title: "Renovation", desc: "Structural upgrades and modernization of existing infrastructure.", icon: Hammer },
            ].map((srv, i) => (
              <motion.div
                key={srv.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                className="group relative p-8 md:p-10 bg-gray-50 hover:bg-gray-100 transition-colors duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-10" />
                <srv.icon className="w-10 h-10 text-gray-400 group-hover:text-accent mb-6 transition-colors duration-500 relative z-10" />
                <h3 className="text-xl font-bold font-heading mb-4 relative z-10">{srv.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 relative z-10">{srv.desc}</p>
                <Link href="/services" className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-900 transition-colors mt-auto relative z-10">
                  Explore <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects */}
      <ProjectGallery />

      {/* 5. Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mb-16">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">The ANT Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">
              Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Solid Ground</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Uncompromising Safety", desc: "Rigorous safety protocols exceeding OSHA standards, ensuring zero-incident project sites.", icon: ShieldCheck },
              { title: "Precision & Quality", desc: "Utilization of advanced surveying and high-grade materials for absolute structural integrity.", icon: Award },
              { title: "Timeline Execution", desc: "Aggressive project management to ensure on-time delivery without cutting corners.", icon: Clock },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } } }}
                className="group bg-white border border-black/5 rounded-2xl p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-4">{feature.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats/Numbers */}
      <StatsCounter />

      {/* 7. Process Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mb-16">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Methodology</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[46px] left-[14%] right-[14%] h-[1px] bg-black/10 z-0" />

            {[
              { step: "01", title: "Consultation", desc: "In-depth analysis of requirements, site feasibility, and project scope.", icon: PenTool },
              { step: "02", title: "Engineering", desc: "Architectural modeling, structural engineering, and material sourcing.", icon: HardHat },
              { step: "03", title: "Construction", desc: "Rigorous execution with strict quality control and safety compliance.", icon: Hammer },
              { step: "04", title: "Handover", desc: "Final inspection, regulatory approvals, and project delivery.", icon: CheckCircle2 },
            ].map((proc, i) => (
              <motion.div
                key={proc.step}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15 } } }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white border-2 border-black/10 group-hover:border-accent rounded-full flex flex-col items-center justify-center mb-6 text-accent shadow-sm transition-colors duration-300">
                  <proc.icon className="w-6 h-6 mb-1" />
                  <span className="font-heading font-bold text-sm">{proc.step}</span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{proc.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed max-w-[220px]">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 9. Contact CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-white">
              Ready to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">something great?</span>
            </h2>
            <p className="text-gray-200 mb-10 max-w-md leading-relaxed">Partner with ANT Construction for your next major infrastructure or real estate development project.</p>
            <ul className="space-y-5 mb-10">
              <li className="flex gap-4 items-center text-gray-300"><Phone className="w-5 h-5 text-accent" /> +91 98227 06480</li>
              <li className="flex gap-4 items-center text-gray-300"><Mail className="w-5 h-5 text-accent" /> info@antconstruction.com</li>
              <li className="flex gap-4 items-center text-gray-300"><MapPin className="w-5 h-5 text-accent" /> Nagpur, Maharashtra, India</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="bg-white p-10 rounded-2xl shadow-2xl text-black"
          >
            <h3 className="text-2xl font-bold font-heading mb-2">Send an Inquiry</h3>
            <p className="text-gray-700 text-sm mb-8">Our team will get back to you within 1 business day.</p>
            <form className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 focus:border-accent rounded-xl p-4 outline-none transition-colors text-black placeholder:text-gray-400" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 focus:border-accent rounded-xl p-4 outline-none transition-colors text-black placeholder:text-gray-400" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Project Scope</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 focus:border-accent rounded-xl p-4 outline-none transition-colors resize-none text-black placeholder:text-gray-400" placeholder="Briefly describe your project..." />
              </div>
              <button type="button" className="w-full bg-accent hover:bg-accent-hover text-black font-bold uppercase tracking-[0.15em] text-xs py-4 rounded-xl transition-colors">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
