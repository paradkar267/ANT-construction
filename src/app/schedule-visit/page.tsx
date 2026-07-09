"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ChevronDown, Check } from "lucide-react";

const properties = [
  { id: "sohamdhwani", name: "Sohamdhwani Smart Apartments", location: "Sawarkar Nagar", img: "/projects/Sohamdhwani.png" },
  { id: "tuljai", name: "Tuljai Impreials", location: "Wanjari Nagar", img: "/projects/Tuljai.png" },
  { id: "audumbar", name: "Audumbar Sahniwas", location: "Pratap Nagar", img: "/projects/Audumbar.png" },
];

const faqs = [
  { question: "Can I schedule a visit on weekends?", answer: "Yes, our experience centers and show residences are open seven days a week, including weekends, to accommodate your schedule. However, weekend slots are highly sought after, so we recommend booking in advance." },
  { question: "Will transportation be provided?", answer: "For select premium clients and VIP tours, we offer complimentary luxury chauffeur services within city limits. Please mention this requirement in your booking notes." },
  { question: "Can I bring family members or guests?", answer: "Absolutely. We encourage you to bring your family or trusted advisors to experience the property together. Please let us know the number of guests in the booking form so we can prepare accordingly." },
  { question: "How long does a typical visit take?", answer: "A comprehensive walkthrough, including a structural overview, amenity tour, and a sit-down consultation, typically takes 45 to 90 minutes. We tailor the duration to your preferences." },
  { question: "Is there any obligation after the visit?", answer: "None whatsoever. Our site visits are purely experiential. We want you to feel the quality of our construction and envision your future lifestyle without any pressure." }
];

export default function ScheduleVisitPage() {
  const [selectedProperty, setSelectedProperty] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "1",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappBase = "https://wa.me/919822706480";
    const text = `*New Site Visit Scheduled*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Property:* ${selectedProperty || "Not specified"}
*Date:* ${formData.date}
*Time:* ${formData.time}
*Guests:* ${formData.guests}
*Notes:* ${formData.notes}`;

    const encodedText = encodeURIComponent(text);
    window.open(`${whatsappBase}?text=${encodedText}`, "_blank");
  };

  return (
    <div className="bg-[#F3F4F1]">
      {/* 1. HERO */}
      <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden bg-white">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/schedule.jpg"
            alt="Schedule a Site Visit"
            fill
            className="object-cover brightness-90"
            priority
          />
        </motion.div>
        
        <div className="relative z-20 text-center text-gray-900 px-6 mt-12">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-4 block text-accent"
          >
            Experience It In Person
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-semibold font-heading mb-4 tracking-tight"
          >
            Schedule a Visit
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-lg font-light opacity-90 max-w-xl mx-auto font-sans tracking-wide"
          >
            Walk through your future address with our team, at a time that suits you.
          </motion.p>
        </div>
      </section>

      {/* 2. WHY VISIT */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B131F] font-heading mb-6">
              Beyond the Blueprints.
            </h2>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                True luxury is felt, not just seen. An in-person visit allows you to experience the meticulous craftsmanship, spatial dynamics, and premium materials that define an A&T Buildcon residence.
              </p>
              <p>
                Our dedicated advisory team will guide you through the property, answering your questions and helping you envision a lifestyle elevated by thoughtful design and structural integrity.
              </p>
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-[450px] mx-auto rounded-none overflow-hidden shadow-xl bg-[#F3F4F1]">
            <Image
              src="/schedule-1.jpg"
              alt="Site Visit Experience"
              fill
              className="object-contain object-center -rotate-90"
            />
          </div>
        </ScrollReveal>
      </section>



      {/* 4 & 5. SELECTOR & BOOKING FORM */}
      <section className="py-24 px-6 lg:px-8 bg-[#F3F4F1]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B131F] font-heading mb-4">Request a Viewing</h2>
            <p className="text-gray-600">Select a property and let us know when you'd like to visit.</p>
          </ScrollReveal>

          {/* Property Selector */}
          <ScrollReveal direction="up" delay={0.1} className="mb-12">
            <h3 className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-6">1. Select Property (Optional)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {properties.map((prop) => (
                <div 
                  key={prop.id}
                  onClick={() => setSelectedProperty(prop.name === selectedProperty ? "" : prop.name)}
                  className={`relative h-[180px] rounded-sm overflow-hidden cursor-pointer group transition-all duration-300 border-2 ${selectedProperty === prop.name ? 'border-accent shadow-lg' : 'border-transparent shadow-sm'}`}
                >
                  <Image src={prop.img} alt={prop.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute inset-0 transition-colors duration-300 ${selectedProperty === prop.name ? 'bg-white/30' : 'bg-black/50 group-hover:bg-white/40'}`} />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h4 className="text-gray-900 font-bold text-sm drop-shadow-md">{prop.name}</h4>
                    <p className="text-gray-900/80 text-xs flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> {prop.location}</p>
                  </div>
                  {selectedProperty === prop.name && (
                    <div className="absolute top-3 right-3 bg-accent text-gray-900 p-1 rounded-full shadow-md z-10">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Booking Form */}
          <ScrollReveal direction="up" delay={0.2} className="bg-white p-8 md:p-12 shadow-xl rounded-none">
            <h3 className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-8">2. Your Details</h3>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 px-0 py-2 text-[#0B131F] placeholder-transparent peer transition-colors"
                    placeholder="Full Name"
                    id="name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-accent uppercase tracking-wider font-semibold">Full Name *</label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 px-0 py-2 text-[#0B131F] placeholder-transparent peer transition-colors"
                    placeholder="Phone Number"
                    id="phone"
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-accent uppercase tracking-wider font-semibold">Phone Number *</label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 px-0 py-2 text-[#0B131F] placeholder-transparent peer transition-colors"
                  placeholder="Email Address"
                  id="email"
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-accent uppercase tracking-wider font-semibold">Email Address</label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="relative pt-4">
                  <div className="absolute inset-y-0 left-0 top-4 flex items-center pointer-events-none text-gray-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 pl-8 pr-0 py-2 text-[#0B131F] transition-colors text-sm"
                  />
                  <label className="absolute left-0 top-0 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Preferred Date *</label>
                </div>
                <div className="relative pt-4">
                  <div className="absolute inset-y-0 left-0 top-4 flex items-center pointer-events-none text-gray-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 pl-8 pr-0 py-2 text-[#0B131F] transition-colors text-sm"
                  />
                  <label className="absolute left-0 top-0 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Preferred Time *</label>
                </div>
                <div className="relative pt-4">
                  <div className="absolute inset-y-0 left-0 top-4 flex items-center pointer-events-none text-gray-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 pl-8 pr-0 py-2 text-[#0B131F] transition-colors text-sm appearance-none"
                  >
                    <option value="1">1 Guest (Just me)</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4+">4+ Guests</option>
                  </select>
                  <label className="absolute left-0 top-0 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Number of Guests</label>
                  <ChevronDown className="absolute right-0 top-6 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="relative pt-4">
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-accent focus:ring-0 px-0 py-2 text-[#0B131F] placeholder-transparent peer transition-colors resize-none"
                  placeholder="Additional Notes"
                  id="notes"
                />
                <label htmlFor="notes" className="absolute left-0 top-0 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-accent uppercase tracking-wider font-semibold">Any specific requirements or questions?</label>
              </div>

              <div className="pt-4 text-center md:text-left">
                <button
                  type="submit"
                  className="bg-[#0B131F] text-gray-900 hover:bg-accent px-10 py-4 text-xs tracking-[0.2em] uppercase font-bold transition-colors duration-300"
                >
                  Confirm Request
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B131F] font-heading mb-4">Visit FAQs</h2>
          </ScrollReveal>

          <div className="space-y-0 border-t border-gray-200">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <span className={`font-semibold text-sm md:text-base pr-8 transition-colors ${isOpen ? 'text-accent' : 'text-[#0B131F] group-hover:text-accent'}`}>
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-accent text-accent' : 'border-gray-300 text-gray-500 group-hover:border-accent group-hover:text-accent'}`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-gray-600 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}
