"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const updates = [
  { cat: "Press Release", title: "A&T Buildcon awards construction contracts worth INR 500 Million", date: "Jan 12, 2025" },
  { cat: "News", title: "New smart integration partnership with top tech firms", date: "Feb 05, 2025" },
  { cat: "Press Release", title: "Quarterly earnings exceed expectations by 15%", date: "Mar 10, 2025" },
  { cat: "News", title: "A&T Buildcon featured in top 10 developers list", date: "Apr 02, 2025" },
];

const UpdateCard = ({ update, setHoveredTrack, trackId }: { update: any; setHoveredTrack: (id: string | null) => void; trackId: string }) => {
  return (
    <div
      className="group bg-white p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col justify-between w-[350px] md:w-[420px] shrink-0 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-gray-50/50 relative overflow-hidden"
      onMouseEnter={() => setHoveredTrack(trackId)}
      onMouseLeave={() => setHoveredTrack(null)}
    >
      <div>
        <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest block mb-4">
          {update.cat}
        </span>
        <h4 className="text-xl font-bold text-[#1A1A1A] mb-8 font-heading leading-snug">
          {update.title}
        </h4>
      </div>
      
      <div className="relative mt-8 pt-6">
        {/* Animated Divider Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-200 overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
            {update.date}
          </span>
          <Link
            href="/"
            className="flex items-center text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]"
          >
            Read More
            <ArrowRight className="w-3 h-3 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-2.5 text-orange-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function LatestUpdatesMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      // 1. Scroll Animations for Header
      gsap.fromTo(
        headerRef.current?.querySelector(".heading"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );



      // 2. Continuous Marquee Logic
      const initMarquee = (trackRef: React.RefObject<HTMLDivElement | null>, direction: 1 | -1, duration: number, trackId: string) => {
        if (!trackRef.current) return;
        
        // We have two identical sets of cards in each track to seamlessly loop
        const tl = gsap.to(trackRef.current, {
          xPercent: direction === 1 ? -50 : 50,
          ease: "none",
          duration: duration,
          repeat: -1,
        });

        // Store timeline on the DOM element for access during hover
        (trackRef.current as any).animation = tl;
      };

      // Set initial positions
      gsap.set(track1Ref.current, { xPercent: 0 });

      // Initialize timelines
      initMarquee(track1Ref, 1, 40, "track1"); // Right to left

    },
    { scope: containerRef }
  );

  // Handle Pause/Play on hover
  useEffect(() => {
    if (!track1Ref.current) return;
    
    const t1 = (track1Ref.current as any).animation;

    if (t1) {
      if (hoveredTrack) {
        gsap.to(t1, { timeScale: 0, duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(t1, { timeScale: 1, duration: 0.5, ease: "power2.in" });
      }
    }
  }, [hoveredTrack]);

  // Double the updates array to create seamless loop
  const loopItems1 = [...updates, ...updates];

  return (
    <section 
      ref={containerRef} 
      className="py-24 bg-gray-50 border-t border-gray-200 mt-8 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16" ref={headerRef}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h3 className="heading text-4xl md:text-5xl font-bold text-[#1A1A1A] font-heading opacity-0">
            Latest Updates
          </h3>

        </div>
      </div>

      <div 
        className="w-full"
        style={{
          // Edge fading using CSS Mask
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        {/* Row 1: Right to Left */}
        <div className="flex gap-6 w-max pl-6 md:pl-12" ref={track1Ref}>
          {loopItems1.map((update, idx) => (
            <UpdateCard 
              key={`r1-${idx}`} 
              update={update} 
              setHoveredTrack={setHoveredTrack} 
              trackId="track1"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
