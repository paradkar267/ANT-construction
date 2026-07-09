"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md border-b border-black/10 py-4 shadow-xl"
            : "bg-transparent py-6 border-b border-black/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative flex items-center group z-10">
              <span className="font-heading font-bold text-2xl tracking-tighter text-gray-900 group-hover:text-accent transition-colors">
                ANT<span className="text-accent group-hover:text-gray-900 transition-colors">.</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold tracking-widest text-gray-500 uppercase mt-1">
                Construction
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:text-gray-900 relative py-2 font-medium ${
                      isActive ? "text-gray-900 font-bold" : "text-gray-500"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden relative z-50 p-2 rounded-none border border-black/20 text-gray-900 hover:bg-black/10 transition-colors bg-white/50 backdrop-blur-sm"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white pt-32 pb-10 px-8 flex flex-col justify-between"
          >
            <nav className="flex flex-col items-start gap-8 mt-10">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl sm:text-4xl tracking-wider uppercase font-heading transition-all ${
                        isActive ? "text-accent font-bold" : "text-gray-400 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }}
              className="text-left mt-auto pb-8 border-t border-black/10 pt-8"
            >
              <div className="text-gray-500 text-xs tracking-widest uppercase font-semibold mb-2">Inquiries</div>
              <a href="tel:+919822706480" className="text-2xl font-heading font-bold text-gray-900 block mb-1">+91 98227 06480</a>
              <a href="mailto:info@antconstruction.com" className="text-gray-500 font-sans text-sm">info@antconstruction.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
