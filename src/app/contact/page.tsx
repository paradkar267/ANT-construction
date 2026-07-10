"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Calendar, CheckSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Space Inquiry",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappBase = "https://wa.me/919822706480";
    const text = `*New Real Estate Consultation Enquiry*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Inquiry Type:* ${formData.projectType}
*Details:* ${formData.details}`;

    const encodedText = encodeURIComponent(text);
    window.open(`${whatsappBase}?text=${encodedText}`, "_blank");
  };

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
            src="/contact.png"
            alt="Contact AT Buildcon"
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
              The Desk
            </motion.span>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-6xl font-semibold font-heading mb-4 tracking-tight"
            >
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Partners</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-lg font-medium opacity-100 font-sans tracking-wide text-gray-900 drop-shadow-md"
            >
              Schedule private viewings, request specifications, or speak with our directors.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Headline Intro */}
      <section className="py-20 px-6 lg:px-8 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">Inquiries</span>
            <h2 className="text-3xl sm:text-5xl font-semibold font-heading text-gray-900 tracking-tight">
              Begin Your Premium Journey
            </h2>
            <div className="h-[2px] w-24 bg-accent mx-auto mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Detail Columns & Form */}
      <section className="pb-32 bg-white px-6 lg:px-8 border-t border-black/5 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Column 1: Details & Google Map */}
          <ScrollReveal direction="left" className="space-y-12 text-left">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-gray-900 font-heading">Client Advisory & Support</h3>
              <p className="text-gray-500 leading-relaxed font-sans text-sm">
                Our dedicated team is available to assist you with detailed project specifications, arrange exclusive site visits, and discuss investment opportunities. Connect with us to discover the A&T Buildcon difference.
              </p>
            </div>

            {/* Premium Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Voice Call Desk", details: "+91 98227 06480", sub: "Available Daily 8AM - 8PM", icon: <Phone className="w-5 h-5" /> },
                { title: "Direct Email", details: "info@atbuildcon.com", sub: "Replies within 1 business day", icon: <Mail className="w-5 h-5" /> },
                { title: "Headquarters", details: "Nagpur, Maharashtra", sub: "Visit by appointment only", icon: <MapPin className="w-5 h-5" /> },
                { title: "Office Hours", details: "Mon - Sat, 9AM - 7PM", sub: "Closed on public holidays", icon: <Clock className="w-5 h-5" /> },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-accent bg-accent/5 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-accent/10 transition-colors group-hover:bg-accent group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider font-heading">{item.title}</h4>
                    <p className="text-gray-600 font-medium text-sm mt-1">{item.details}</p>
                    <p className="text-gray-400 text-xs mt-0.5 font-sans">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="relative h-[280px] w-full rounded-2xl overflow-hidden shadow-lg border border-black/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.24264667822!2d79.00247271816578!3d21.12962483861271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a3d0f0d5%3A0x2d1be3e46cf23b4!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* Column 2: Elegant Form */}
          <ScrollReveal direction="right" className="bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.08)] text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 font-heading mb-3">Consultation Booking</h3>
              <p className="text-gray-500 text-sm mb-10 font-sans leading-relaxed">
                Enter your details, and a dedicated partnership associate will confirm your site visit slot.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-500 font-semibold mb-2 text-xs uppercase tracking-wider" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="E.g., Devendra Varma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-black/10 focus:border-accent rounded-xl px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 font-semibold mb-2 text-xs uppercase tracking-wider" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="E.g., +91 99999 99999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-black/10 focus:border-accent rounded-xl px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 font-semibold mb-2 text-xs uppercase tracking-wider" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="E.g., name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-black/10 focus:border-accent rounded-xl px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 font-semibold mb-2 text-xs uppercase tracking-wider" htmlFor="projectType">
                    Preferred Property Portfolio
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white border border-black/10 focus:border-accent rounded-xl px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300"
                  >
                    <option value="Sohamdhwani Smart Apartments">Sohamdhwani Smart Apartments</option>
                    <option value="Tuljai Impreials">Tuljai Impreials</option>
                    <option value="Audumbar Sahniwas">Audumbar Sahniwas</option>
                    <option value="Other Residential Development">Other Residential Space</option>
                    <option value="Commercial Space">Commercial Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-500 font-semibold mb-2 text-xs uppercase tracking-wider" htmlFor="details">
                    Structural & Design Brief *
                  </label>
                  <textarea
                    id="details"
                    required
                    rows={4}
                    placeholder="Tell us about your spatial needs or visit preferences..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-white border border-black/10 focus:border-accent rounded-xl px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 resize-none placeholder:text-neutral-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-transparent border border-accent text-black hover:text-accent font-bold tracking-widest uppercase text-xs py-4 rounded-full transition-all duration-500 shadow-lg hover:shadow-none"
                >
                  Schedule Private Consultation
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
