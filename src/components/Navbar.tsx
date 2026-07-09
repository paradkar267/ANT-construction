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
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-800 py-4 shadow-xl"
            : "bg-transparent py-6 border-b border-black/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative flex items-center group">
              <span className="font-heading font-bold text-2xl tracking-tighter text-gray-900 group-hover:text-accent transition-colors">
                ANT<span className="text-accent group-hover:text-gray-900 transition-colors">.</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold tracking-widest text-gray-500 uppercase mt-1">
                Construction
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8">
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

            {/* CTA Button - Square & Premium */}
            <div className="hidden md:flex items-center">
              <Link
                href="/schedule-visit"
                className="flex items-center gap-2 border border-gray-900 hover:bg-accent hover:border-accent text-gray-900 font-semibold tracking-[0.15em] uppercase text-[10px] px-6 py-3 rounded-none transition-all duration-300 bg-transparent"
              >
                <Calendar className="w-3.5 h-3.5" />
                Schedule Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-none border border-black/20 text-gray-900 hover:bg-black/10 transition-colors"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-0 z-40 bg-white border-b border-neutral-800 pt-28 pb-10 px-6 shadow-2xl flex flex-col items-center gap-8"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm tracking-[0.2em] uppercase font-semibold transition-all ${
                      isActive ? "text-accent font-bold" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/schedule-visit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full max-w-xs border border-gray-900 hover:bg-accent hover:border-accent text-gray-900 font-bold tracking-[0.15em] uppercase text-xs py-4 rounded-none transition-all duration-300 bg-transparent"
            >
              <Calendar className="w-4 h-4" />
              Schedule Visit
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
