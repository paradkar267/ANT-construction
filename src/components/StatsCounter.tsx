"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ value, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(duration / end, 20); // max 50fps

      const timer = setInterval(() => {
        start += Math.max(Math.ceil(end / (duration / incrementTime)), 1);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 bg-gray-900 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-2 flex items-baseline">
        {count}
        <span className="text-accent ml-1 text-2xl md:text-3xl">{suffix}</span>
      </div>
      <div className="text-gray-400 text-xs tracking-[0.2em] uppercase font-semibold text-center">
        {label}
      </div>
    </div>
  );
};

export default function StatsCounter() {
  const stats = [
    { value: 25, label: "Years Experience", suffix: "+" },
    { value: 150, label: "Projects Completed", suffix: "+" },
    { value: 5, label: "Million Sq. Ft. Built", suffix: "M" },
    { value: 500, label: "Clients Served", suffix: "+" },
  ];

  return (
    <section className="py-24 relative bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <StatItem value={stat.value} label={stat.label} suffix={stat.suffix} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
