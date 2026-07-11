"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

type ProjectStatus = "All" | "Ongoing" | "Completed";

interface Project {
  id: string;
  title: string;
  location: string;
  status: "Ongoing" | "Completed";
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Audumbar Sahniwas",
    location: "Pratap Nagar, Nagpur",
    status: "Completed",
    image: "/projects/Audumbar.png",
    category: "Residential",
  },
  {
    id: "2",
    title: "Sohamdhwani Smart Apartments",
    location: "Sawarkar Nagar, Nagpur",
    status: "Completed",
    image: "/projects/Sohamdhwani.png",
    category: "Residential",
  },
  {
    id: "3",
    title: "Tuljai Impreials",
    location: "Wanjari Nagar, Nagpur",
    status: "Completed",
    image: "/projects/Tuljai.png",
    category: "Residential",
  },
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectStatus>("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.status === filter
  );

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Projects</span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Explore our portfolio of cutting-edge industrial facilities, luxury residences, and commercial landmarks built to stand the test of time.
            </p>
          </div>
        </div>
          
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 rounded-2xl overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center text-gray-500 font-medium text-xs">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-accent" />
                      <span className="truncate max-w-[150px]">{project.location}</span>
                    </div>
                    <Link
                      href={`/projects`}
                      className="w-10 h-10 rounded-full bg-gray-50 hover:bg-accent text-gray-900 hover:text-white flex items-center justify-center transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="border border-gray-900 hover:bg-accent hover:border-accent text-gray-900 hover:text-black font-bold tracking-[0.15em] uppercase text-xs px-8 py-4 transition-all duration-300 inline-flex items-center gap-3"
          >
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
