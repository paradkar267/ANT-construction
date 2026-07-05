"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FounderProps {
  founder: {
    name: string;
    img: string;
    role: string;
    desc: string;
    quote?: string;
    linkedin?: string;
  };
  index: number;
}

export default function FounderPortrait({ founder, index }: FounderProps) {
  // Base delay for staggering between multiple founders
  const baseDelay = index * 0.4;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-gray-200 shadow-2xl group text-left flex flex-col justify-end"
    >
      {/* Portrait Image with B&W to Color transition */}
      <motion.div
        variants={{
          hidden: { filter: "grayscale(100%)", scale: 1.05 },
          visible: { filter: "grayscale(0%)", scale: 1 }
        }}
        transition={{ duration: 2, ease: "easeOut", delay: baseDelay }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={founder.img}
          alt={founder.name}
          fill
          className="object-cover object-top"
        />
      </motion.div>

      {/* Cinematic Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 z-10" />

      {/* Sequenced Content */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col">
        {/* Name slides upward */}
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: baseDelay + 1.2 }}
          className="text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-2"
        >
          {founder.name}
        </motion.h3>

        {/* Designation appears */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: baseDelay + 1.8 }}
        >
          <span className="text-orange-500 text-xs uppercase tracking-widest font-bold">
            {founder.role}
          </span>
        </motion.div>


      </div>
    </motion.div>
  );
}
