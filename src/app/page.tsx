"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, FileText, Download, Play, MessageCircle, Home as HomeIcon, Building2, Factory, Hammer, ClipboardList, LineChart } from "lucide-react";
import ServicesSlider from "@/components/ServicesSlider";

export default function Home() {
  return (
    <div className="bg-white text-[#0f172a] font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] w-full bg-white overflow-hidden">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.25] translate-y-10 contrast-[1.15] saturate-[1.2] brightness-105"
        />
        {/* Navigation overlay dark gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/40 z-0" />
        
        <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-end max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight font-heading">
            Step Into The World of A&T Buildcon
          </h1>
          <p className="text-xs md:text-sm text-gray-200 mb-6 font-light">
            A diverse portfolio of world-class real estate developments, sustainable communities, and premium corporate spaces.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#1A1A1A] hover:bg-gray-100 px-5 py-2.5 rounded-none font-bold tracking-wide transition-colors flex items-center gap-2 text-xs uppercase">
              Explore Portfolio <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>


      </section>

      {/* 2. Intro Section */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight font-heading">
            Live Life to the Fullest with A&T Buildcon
          </h2>
          <div className="text-gray-600 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              As a premier real estate developer, we are deeply committed to creating vibrant communities, sustainable corporate infrastructures, and architectural landmarks that define modern living.
            </p>
            <p>
              Our approach merges structural precision with elegant aesthetics, ensuring that every project not only meets but exceeds the expectations of our stakeholders and residents.
            </p>
            <Link href="/about" className="inline-flex items-center text-[#1A1A1A] font-bold hover:underline mt-4 tracking-wide">
              Our Corporate Vision <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>



      {/* 4. About A & T Buildcon Banner */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/About.jpg"
          alt="About A & T Buildcon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            About A & T Buildcon
          </h2>
          <p className="text-gray-200 max-w-xl mb-8 leading-relaxed">
            For over a decade, AT Buildcon has defined structural excellence, translating our clients&apos; grand visions into residential milestones. By maintaining absolute control over detailing, incorporating sustainable building frameworks, and prioritizing client aspirations, we create spaces that elevate everyday living into an elegant art.
          </p>
          <Link href="/about" className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0f172a] px-8 py-3 rounded-none font-bold uppercase tracking-wider text-sm transition-colors w-fit">
            Explore More
          </Link>
        </div>
      </section>

      {/* 5. Latest Launches (Offset) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-16 font-heading">Our Latest Launches</h3>
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 h-auto md:h-[450px]">
          {/* Card 1 (Left) */}
          <div className="bg-white border border-gray-200 shadow-xl p-8 z-10 w-full md:w-[45%] md:absolute md:left-10 md:top-10 flex gap-6">
             <div className="flex-1">
               <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest block mb-2">Residential</span>
               <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-heading">Sohamdhwani Smart Living</h4>
               <Link href="#" className="inline-flex items-center text-xs font-bold text-[#1A1A1A] uppercase tracking-wider hover:underline">
                 Learn More <ArrowRight className="w-3 h-3 ml-1" />
               </Link>
             </div>
             <div className="w-1/2 h-32 relative hidden sm:block">
               <Image src="/projects/Sohamdhwani.png" alt="Sohamdhwani" fill className="object-cover" />
             </div>
          </div>
          
          {/* Card 2 (Right, Dark) */}
          <div className="bg-white text-[#0f172a] p-8 z-0 w-full md:w-[60%] md:absolute md:right-10 md:bottom-10 flex gap-6 md:pl-32 shadow-2xl">
            <div className="flex-1">
               <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest block mb-2">Premium Estate</span>
               <h4 className="text-2xl font-bold text-[#0f172a] mb-4 font-heading">Audumbar Residences</h4>
               <Link href="#" className="inline-flex items-center text-xs font-bold text-[#0f172a] uppercase tracking-wider hover:underline">
                 Learn More <ArrowRight className="w-3 h-3 ml-1" />
               </Link>
             </div>
             <div className="w-1/2 h-40 relative hidden sm:block">
               <Image src="/projects/Audumbar.png" alt="Audumbar" fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. We are more than what you know */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <h3 className="text-3xl font-bold text-[#1A1A1A] max-w-sm font-heading">We are more than what you know</h3>
             <div className="flex gap-2">
               <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-200">
                 <ChevronRight className="w-5 h-5 rotate-180" />
               </button>
               <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-200">
                 <ChevronRight className="w-5 h-5" />
               </button>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Residential Masterpieces", img: "/projects/Tuljai.png" },
              { title: "Commercial Hubs", img: "/Hero.jpg" },
              { title: "Retail Experiences", img: "/About.jpg" },
              { title: "Smart City Integration", img: "/projects/Sohamdhwani.png" },
            ].map((item, idx) => (
              <div key={idx} className="group relative h-[400px] w-full overflow-hidden cursor-pointer">
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg font-heading">{item.title}</h4>
                  <p className="text-white/80 text-[10px] mt-1 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Explore <ArrowRight className="inline w-3 h-3 ml-1" /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Services */}
      <ServicesSlider />



      {/* 9. What's New */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
         <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A1A1A] font-heading">What&apos;s New at A&T Buildcon</h3>
            <div className="flex gap-2">
               <button className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:bg-gray-200">
                 <ChevronRight className="w-4 h-4 rotate-180" />
               </button>
               <button className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:bg-gray-200">
                 <ChevronRight className="w-4 h-4" />
               </button>
             </div>
         </div>
         
         <div className="relative h-[400px] w-full">
           <Image src="/projects/Tuljai.png" alt="New Launch" fill className="object-cover" />
           <div className="absolute inset-0 bg-black/20" />
           
           <div className="absolute -bottom-8 left-8 right-8 sm:right-auto sm:w-[450px] bg-white p-8 shadow-xl border border-gray-200">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-4">Press Release</span>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-heading leading-snug">A&T Buildcon announces the launch of Tuljai Imperials Phase II</h4>
              <Link href="#" className="inline-flex items-center text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                 Read More <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
           </div>
         </div>
      </section>

      {/* 10. Latest Updates Grid */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <h3 className="text-3xl font-bold text-[#1A1A1A] font-heading">Latest Updates</h3>
             <Link href="#" className="text-xs uppercase tracking-widest font-bold text-orange-500 hover:underline">View All</Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               { cat: "Press Release", title: "A&T Buildcon awards construction contracts worth INR 500 Million", date: "Jan 12, 2025" },
               { cat: "News", title: "New smart integration partnership with top tech firms", date: "Feb 05, 2025" },
               { cat: "Press Release", title: "Quarterly earnings exceed expectations by 15%", date: "Mar 10, 2025" },
               { cat: "News", title: "A&T Buildcon featured in top 10 developers list", date: "Apr 02, 2025" }
             ].map((update, idx) => (
               <div key={idx} className="bg-white p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gray-200 transition-colors">
                 <div>
                   <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest block mb-3">{update.cat}</span>
                   <h4 className="text-lg font-bold text-[#1A1A1A] mb-6 font-heading leading-snug">{update.title}</h4>
                 </div>
                 <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                   <span className="text-[11px] text-gray-500 font-semibold">{update.date}</span>
                   <Link href="#" className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:underline">Read More</Link>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
