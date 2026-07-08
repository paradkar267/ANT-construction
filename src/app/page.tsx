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
    <div className="bg-[#111111] text-[#f5f5f5] font-sans selection:bg-accent selection:text-black">
      
      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/new2.png"
            alt="Premium Infrastructure"
            fill
            priority
            className="object-cover object-[65%_center]"
          />
        </motion.div>
        {/* Dark gradient overlay for premium feel with fading blur on the left */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div 
          className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-black/90 via-black/50 to-transparent backdrop-blur-md z-0"
          style={{ maskImage: 'linear-gradient(to right, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)' }}
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
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] font-heading tracking-tight">
                Building Tomorrow&apos;s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Infrastructure.</span>
              </h1>
            </motion.div>
            
            <motion.p variants={fadeUpVariant} className="text-base md:text-lg text-neutral-400 mb-10 max-w-xl font-light leading-relaxed">
              We engineer state-of-the-art commercial facilities, luxury residences, and robust industrial frameworks that stand as pillars of modern progress.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <Link href="#projects" className="bg-accent text-black hover:bg-accent-hover px-8 py-4 font-bold tracking-[0.15em] uppercase text-xs transition-all duration-300 flex items-center gap-3">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="border border-white/20 hover:border-white text-white px-8 py-4 font-bold tracking-[0.15em] uppercase text-xs transition-all duration-300 backdrop-blur-sm bg-white/5">
                Request a Quote
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeUpVariant} className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8 opacity-70 grayscale">
               <div className="text-xs uppercase tracking-widest font-bold text-neutral-500">Certified by:</div>
               <div className="text-lg font-heading font-bold">ISO 9001</div>
               <div className="text-lg font-heading font-bold">LEED®</div>
               <div className="text-lg font-heading font-bold">OHSAS 18001</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section ref={aboutRef} className="py-24 md:py-32 relative bg-[#111111]" id="about">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={scaleUpVariant}
              className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden"
            >
              <motion.div style={{ y: aboutImageY }} className="absolute inset-0 scale-110">
                <Image src="/About.jpg" alt="ANT Construction" fill className="object-cover transition-all duration-700" />
              </motion.div>
              <motion.div variants={fadeUpVariant} className="absolute -bottom-8 -right-8 bg-accent p-8 text-black shadow-2xl hidden md:block z-10">
                <div className="text-6xl font-heading font-bold mb-2">25+</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] leading-tight">Years of<br/>Excellence</div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeUpVariant} className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">The ANT Legacy</motion.span>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                Forging landmarks with <br/>unyielding precision.
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-neutral-400 mb-6 leading-relaxed">
                ANT Construction is a premier tier-one builder specializing in complex, high-value infrastructure. Our methodology fuses heavy-duty engineering with meticulous architectural refinement.
              </motion.p>
              <motion.p variants={fadeUpVariant} className="text-neutral-400 mb-10 leading-relaxed">
                Whether constructing advanced industrial facilities or luxury residential high-rises, we bring an uncompromising standard of safety, material quality, and timeline execution to every project site.
              </motion.p>
              <motion.div variants={fadeUpVariant}>
                <Link href="/about" className="inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase hover:text-accent transition-colors">
                  Read Our Full Story <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Core Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading">Our Services</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
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
                className="group relative p-10 border-r border-b border-white/10 last:border-r-0 hover:bg-white/5 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <srv.icon className="w-10 h-10 text-neutral-500 group-hover:text-accent mb-6 transition-colors duration-500" />
                <h3 className="text-xl font-bold font-heading mb-4">{srv.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">{srv.desc}</p>
                <Link href="/services" className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 group-hover:text-white transition-colors mt-auto">
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
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center opacity-5 grayscale mix-blend-overlay pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">The ANT Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Built on Solid Ground</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Uncompromising Safety", desc: "Rigorous safety protocols exceeding OSHA standards, ensuring zero-incident project sites.", icon: ShieldCheck },
              { title: "Precision & Quality", desc: "Utilization of advanced surveying and high-grade materials for absolute structural integrity.", icon: Award },
              { title: "Timeline Execution", desc: "Aggressive project management to ensure on-time delivery without cutting corners.", icon: Clock },
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } } }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group hover:border-accent transition-colors duration-500">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-4">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats/Numbers */}
      <StatsCounter />

      {/* 7. Process Timeline */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Methodology</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[45px] left-[12%] right-[12%] h-[1px] bg-white/20 z-0" />
            
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
                className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="w-24 h-24 bg-[#111111] border border-white/20 rounded-full flex flex-col items-center justify-center mb-6 text-accent">
                  <proc.icon className="w-6 h-6 mb-1" />
                  <span className="font-heading font-bold">{proc.step}</span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{proc.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-[250px]">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-center mb-16">
            <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Client Perspectives</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Tested & Proven</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "ANT Construction delivered our 500,000 sq ft logistics hub ahead of schedule. Their attention to structural detail and safety is unmatched in the industry.", author: "Rajesh S.", role: "Director, Apex Logistics" },
              { text: "The level of professionalism from site preparation to final handover was exceptional. They don't just build structures; they build absolute trust.", author: "Meera K.", role: "CEO, Lumina Tech" },
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } } }}
                className="bg-[#111111] p-10 border border-white/5 relative"
              >
                <svg className="absolute top-8 right-8 w-12 h-12 text-white/5" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg text-neutral-300 italic mb-8 relative z-10 leading-relaxed">&quot;{test.text}&quot;</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full" />
                  <div>
                    <h4 className="font-bold text-white font-heading">{test.author}</h4>
                    <span className="text-xs text-accent uppercase tracking-widest">{test.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact CTA */}
      <section className="py-24 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">Ready to build?</h2>
            <p className="text-lg font-medium mb-10 max-w-md">Partner with ANT Construction for your next major infrastructure or real estate development.</p>
            <ul className="space-y-4 mb-10 font-medium">
               <li className="flex gap-4 items-center"><Phone className="w-5 h-5"/> +91 98227 06480</li>
               <li className="flex gap-4 items-center"><Mail className="w-5 h-5"/> info@antconstruction.com</li>
               <li className="flex gap-4 items-center"><MapPin className="w-5 h-5"/> Nagpur, Maharashtra, India</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="bg-white p-10 text-black shadow-2xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-neutral-500 mb-2">Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 focus:border-accent p-4 outline-none transition-colors text-black placeholder:text-neutral-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-neutral-500 mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 focus:border-accent p-4 outline-none transition-colors text-black placeholder:text-neutral-400" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-neutral-500 mb-2">Project Scope</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 focus:border-accent p-4 outline-none transition-colors resize-none text-black placeholder:text-neutral-400" placeholder="Briefly describe your project..." />
              </div>
              <button type="button" className="w-full bg-accent hover:bg-black text-black hover:text-white font-bold uppercase tracking-[0.15em] text-xs py-4 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
