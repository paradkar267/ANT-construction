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
    title: "Apex Industrial Park",
    location: "MIDC Butibori, Nagpur",
    status: "Ongoing",
    image: "/projects/Audumbar.png", // Reusing existing placeholder image
    category: "Industrial",
  },
  {
    id: "2",
    title: "Lumina Corporate Tower",
    location: "IT Park, Nagpur",
    status: "Completed",
    image: "/projects/Sohamdhwani.png", // Reusing existing placeholder image
    category: "Commercial",
  },
  {
    id: "3",
    title: "The Obsidian Residences",
    location: "Civil Lines, Nagpur",
    status: "Ongoing",
    image: "/projects/Tuljai.png", // Reusing existing placeholder image
    category: "Residential",
  },
  {
    id: "4",
    title: "Nexus Logistics Hub",
    location: "Wardha Road",
    status: "Completed",
    image: "/projects/Audumbar.png", // Placeholder
    category: "Infrastructure",
  },
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectStatus>("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.status === filter
  );

  return (
    <section className="py-24 bg-[#111111]" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Featured Projects
            </h2>
            <p className="text-neutral-400 max-w-xl text-sm leading-relaxed">
              Explore our portfolio of cutting-edge industrial facilities, luxury residences, and commercial landmarks built to stand the test of time.
            </p>
          </div>
          
          <div className="flex gap-4 border-b border-white/10 pb-2">
            {["All", "Ongoing", "Completed"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as ProjectStatus)}
                className={`text-xs uppercase tracking-widest font-semibold pb-2 border-b-2 transition-all ${
                  filter === status
                    ? "text-accent border-accent"
                    : "text-neutral-500 border-transparent hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] overflow-hidden bg-neutral-900"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2 block">
                        {project.category} • {project.status}
                      </span>
                      <h3 className="text-2xl font-bold text-white font-heading mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-neutral-300 text-xs">
                        <MapPin className="w-3.5 h-3.5 mr-2 text-accent" />
                        {project.location}
                      </div>
                    </div>
                    <Link
                      href={`/projects`}
                      className="w-12 h-12 bg-accent text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <ArrowRight className="w-5 h-5" />
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
            className="border border-white hover:bg-accent hover:border-accent text-white hover:text-black font-bold tracking-[0.15em] uppercase text-xs px-8 py-4 transition-all duration-300 inline-flex items-center gap-3"
          >
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
