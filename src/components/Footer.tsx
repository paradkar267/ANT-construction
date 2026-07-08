"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our luxury collection newsletter.");
  };

  return (
    <footer className="bg-black text-neutral-300 py-20 border-t border-white/10 font-sans relative overflow-hidden">
      {/* Decorative luxury vector lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Brand Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <Link href="/" className="inline-block relative flex items-center group w-fit">
              <span className="font-heading font-bold text-3xl tracking-tighter text-white group-hover:text-accent transition-colors">
                ANT<span className="text-accent group-hover:text-white transition-colors">.</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase mt-1">
                Construction
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Delivering high-end infrastructure, premium industrial facilities, and architectural masterpieces with unyielding precision and strength.
            </p>
            <div className="flex items-center space-x-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  ),
                  href: "#"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                  href: "#"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  href: "#"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                  href: "#"
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-neutral-400 hover:text-accent hover:border-accent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-3 text-sm tracking-wider">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Services", href: "/#services" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Schedule Visit", href: "/schedule-visit" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors duration-200 block py-0.5 uppercase text-xs">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Inquiries</h4>
            <ul className="space-y-4 text-sm tracking-wider">
              <li className="flex gap-3">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span className="text-neutral-400">Nagpur, Maharashtra, India</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <a href="tel:+919822706480" className="hover:text-accent transition-colors">
                  +91 98227 06480
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <a href="mailto:info@antconstruction.com" className="hover:text-accent transition-colors">
                  info@antconstruction.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Subscribe to receive exclusive previews of our upcoming luxury real estate portfolios.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 focus:border-accent rounded-none px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 pr-12"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-0 top-0 bottom-0 px-4 bg-accent hover:bg-accent-hover text-black flex items-center justify-center transition-colors duration-300 rounded-none border border-transparent border-l-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom copyright and disclaimer */}
        <motion.div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-wider text-neutral-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} ANT Construction. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-accent transition-colors">Terms of Use</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
