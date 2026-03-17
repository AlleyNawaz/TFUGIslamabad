"use client";

import React, { useState, useEffect, useRef } from "react";
import { gdes, googleSpeakers, industryExperts } from "@/data/speakers";
import { Speaker } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, ArrowRight, Mic, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FILTERS = ["All", "Googlers", "GDEs", "Community"];

// Elite Grid Card
function EliteGridCard({ speaker, onClick }: { speaker: Speaker; onClick: () => void }) {
    return (
        <motion.div
            onClick={onClick}
            layoutId={`speaker-card-${speaker.id}`}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="group relative flex flex-col items-center text-center p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[0.97] hover:shadow-xl"
        >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none" />
            
            {/* Avatar */}
            <motion.div layoutId={`speaker-image-${speaker.id}`} className="relative w-24 h-24 mb-4 rounded-full overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-95 group-hover:ring-4 group-hover:ring-blue-500/30 z-10">
                <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Name */}
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white mb-1 relative z-10 tracking-tight transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {speaker.name}
            </h3>

            {/* Role */}
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide relative z-10">
                {speaker.role}
            </p>

            {/* Company Badge */}
            <div className="mt-3 mb-6 relative z-10 min-h-[28px] flex items-center justify-center w-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-60">
                {speaker.company ? (
                    <span className="px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 truncate max-w-[90%]">
                        {speaker.company}
                    </span>
                ) : (
                    <div className="h-full" /> // Keeps spacing consistent
                )}
            </div>
            
            {/* View Profile CTA overlaying the bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 group-hover:translate-y-0 z-20 whitespace-nowrap">
                View Profile →
            </div>
        </motion.div>
    );
}

// 4. Elite Speaker Modal (Apple-Style Detail Overlay)
function SpeakerModal({ speaker, onClose }: { speaker: Speaker | null; onClose: () => void }) {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const parallaxImageRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number | null>(null);
    const scrollRafId = useRef<number | null>(null);

    // Hardware check strictly for client-side
    const isLowEndDevice = typeof window !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 4;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isLowEndDevice || !spotlightRef.current) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (rafId.current) return;
        rafId.current = requestAnimationFrame(() => {
            if (spotlightRef.current) {
                spotlightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 40%)`;
            }
            rafId.current = null;
        });
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (isLowEndDevice || !parallaxImageRef.current) return;
        
        const y = e.currentTarget.scrollTop;
        if (scrollRafId.current) return;
        
        scrollRafId.current = requestAnimationFrame(() => {
            if (parallaxImageRef.current) {
                // Reduced parallax intensity for better performance
                const depthY = y * 0.15;
                const scale = 1.02 + (Math.max(0, -y) * 0.0002);
                parallaxImageRef.current.style.transform = `translate3d(0, ${depthY}px, 0) scale(${scale})`;
            }
            scrollRafId.current = null;
        });
    };

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (speaker) {
            document.body.style.overflow = 'hidden';
            if (parallaxImageRef.current && !isLowEndDevice) {
                parallaxImageRef.current.style.transform = `translate3d(0, 0px, 0) scale(1.02)`;
            }
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup RAFs on unmount
        return () => { 
            document.body.style.overflow = 'unset'; 
            if (rafId.current) cancelAnimationFrame(rafId.current);
            if (scrollRafId.current) cancelAnimationFrame(scrollRafId.current);
        };
    }, [speaker]);

    return (
        <AnimatePresence>
            {speaker && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 backdrop-blur-md">
                    {/* Background Click to Close */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        onClick={onClose}
                        className="absolute inset-0"
                    />
                    
                    {/* Slide-Up Panel */}
                    <motion.div 
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={{ top: 0, bottom: 0.5 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.y > 100 || info.velocity.y > 500) {
                                onClose();
                            }
                        }}
                        onMouseMove={handleMouseMove}
                        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-t-[2.5rem] shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 overflow-hidden flex flex-col max-h-[92vh] mt-12 will-change-transform translate-z-0"
                        layoutId={speaker ? `speaker-card-${speaker.id}` : undefined}
                    >
                        {/* Spotlight Glare */}
                        <div ref={spotlightRef} className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay transition-opacity duration-300" />

                        {/* Drag Handle */}
                        <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-4 mb-2 shrink-0 z-50" />

                        {/* Fixed Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black text-slate-900 dark:text-white transition-all duration-300 backdrop-blur-md hover:scale-110 hover:rotate-90 active:scale-95 shadow-lg cursor-pointer"
                        >
                            <X size={20} />
                        </button>

                        {/* Parallax Image Header Container - Fixed to proper object-contain */}
                        <div className="relative flex items-center justify-center h-[280px] sm:h-[360px] w-full shrink-0 overflow-hidden bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 text-center">
                            {/* The Image inside moves via Parallax */}
                            <motion.div 
                                ref={parallaxImageRef}
                                className="absolute inset-0 origin-bottom will-change-transform flex items-center justify-center translate-z-0"
                                layoutId={speaker ? `speaker-image-${speaker.id}` : undefined}
                                style={{ transform: "translate3d(0, 0px, 0) scale(1.02)" }}
                            >
                                <Image 
                                    src={speaker.image} 
                                    alt={speaker.name} 
                                    width={400}
                                    height={400} 
                                    className="max-h-full w-auto object-contain drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>
                            
                            {/* Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-900 pointer-events-none" />

                            {/* Header Content Overlaying Image */}
                            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10 sm:right-10 flex items-end justify-between z-10 pointer-events-none">
                                <div className="max-w-[80%] text-left">
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-1 drop-shadow-sm">
                                        {speaker.name}
                                    </h2>
                                    <p className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 drop-shadow-sm">
                                        {speaker.role} {speaker.company && <span className="opacity-80">@ {speaker.company}</span>}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Scrolling Content Panel */}
                        <div 
                            className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 custom-scrollbar bg-white dark:bg-slate-900 z-10"
                            onScroll={handleScroll}
                        >
                            <div className="flex flex-col sm:flex-row gap-10">
                                {/* Left Column: Bio & Sessions */}
                                <div className="flex-1 space-y-10 relative z-10">
                                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1, duration: 0.5}}>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            About
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-lg">
                                            {speaker.bio || `${speaker.name} is a distinguished professional in the AI ecosystem, recognized for their contributions to community education and advanced technical implementations.`}
                                        </p>
                                    </motion.div>

                                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.5}}>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            Sessions
                                        </h4>
                                        <Link href={`/sessions?q=${encodeURIComponent(speaker.name)}`}>
                                            <div className="group flex flex-col p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer hover:scale-[1.02]">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-5">
                                                        <div className="w-14 h-14 rounded-[1.25rem] bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                            <Mic size={24} />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-lg text-slate-900 dark:text-white transition-colors">
                                                                Talks by {speaker.name}
                                                            </p>
                                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                                                                Explore platform sessions
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                                                        <ArrowRight size={18} className="text-slate-500 group-hover:text-blue-600 transition-colors group-hover:translate-x-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Right Column: Social Links Sidebar */}
                                <motion.div initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.3, duration: 0.5}} className="sm:w-32 lg:w-40 shrink-0 relative z-10">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 hidden sm:flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        Connect
                                    </h4>
                                    <div className="flex sm:flex-col gap-4">
                                        {speaker.socials?.linkedin && (
                                            <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 border border-slate-100 dark:border-slate-800 hover:border-blue-200 hover:shadow-sm transition-all duration-300 hover:scale-105">
                                                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-[#0A66C2] transition-colors shadow-sm">
                                                    <Linkedin size={16} />
                                                </div>
                                                <span className="hidden lg:block text-xs font-bold text-slate-600 group-hover:text-blue-700">LinkedIn</span>
                                            </a>
                                        )}
                                        {speaker.socials?.twitter && (
                                            <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 border border-slate-100 dark:border-slate-800 hover:border-blue-200 hover:shadow-sm transition-all duration-300 hover:scale-105">
                                                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors shadow-sm">
                                                    <Twitter size={16} />
                                                </div>
                                                <span className="hidden lg:block text-xs font-bold text-slate-600 group-hover:text-slate-900">Twitter X</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                            
                            {/* Bottom Padding for scroll allowance */}
                            <div className="h-12" />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export function SpeakersView() {
    const [filter, setFilter] = useState("All");
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

    const allSpeakers = [...googleSpeakers, ...gdes, ...industryExperts];

    // Create unique list for the filter, to remove duplicates if any speaker appears in multiple lists
    const uniqueSpeakers = Array.from(new Set(allSpeakers));

    const filteredSpeakers = uniqueSpeakers.filter(s => {
        if (filter === "All") return true;
        if (filter === "Googlers") return googleSpeakers.includes(s);
        if (filter === "GDEs") return gdes.includes(s);
        if (filter === "Community") return industryExperts.includes(s);
        return true;
    });

    return (
        <div className="bg-black dark:bg-black min-h-screen">
            <div className={`transition-all duration-300 ease-out origin-bottom bg-slate-50 dark:bg-slate-950 min-h-screen will-change-transform translate-z-0 ${selectedSpeaker ? "scale-[0.96] blur-md opacity-80 pointer-events-none rounded-[2rem] overflow-hidden" : "scale-100 blur-0 opacity-100 rounded-none overflow-auto"}`}>
                {/* Header with Trust Layer */}
                <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 md:pb-16 text-center relative">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter"
                >
                    Our Speakers
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12"
                >
                    Learn from engineers, researchers, and leaders shaping AI across industry and academia.
                </motion.p>

                {/* Trust Logos Row */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center justify-center gap-4 pt-10 border-t border-slate-100 dark:border-slate-800/50 max-w-3xl mx-auto"
                >
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                        Trusted by engineers from
                    </span>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-black uppercase tracking-widest text-slate-300 dark:text-slate-600 select-none">
                        <span className="hover:text-slate-900 dark:hover:text-white transition-colors">Google</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                        <span className="hover:text-blue-500 transition-colors">GDEs</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                        <span className="hover:text-slate-900 dark:hover:text-white transition-colors">Industry Leaders</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                        <span className="hover:text-slate-900 dark:hover:text-white transition-colors">Academia</span>
                    </div>
                </motion.div>
            </div>

            {/* Interactive Grid with Category Filters */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4 text-center md:text-left">
                                All Speakers
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs text-center md:text-left">
                                The minds powering our community
                            </p>
                        </div>

                        {/* Category Filter Pill Bar */}
                        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-800">
                            {FILTERS.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                                        filter === cat 
                                            ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md scale-105" 
                                            : "text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredSpeakers.map((speaker) => (
                                <EliteGridCard key={`${speaker.id}-grid`} speaker={speaker} onClick={() => setSelectedSpeaker(speaker)} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Become a Speaker CTA */}
            <section className="py-24 md:py-32 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[2.5rem] p-10 md:p-20 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white shadow-2xl"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/30 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/3" />

                        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-10">
                            <div className="w-24 h-24 rounded-[2rem] bg-white/10 flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-md">
                                <Mic size={48} className="text-white drop-shadow-md" />
                            </div>
                            
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                                    Become a Speaker
                                </h2>
                                <p className="text-xl md:text-2xl font-bold text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
                                    Share your knowledge with 3,500+ developers and shape the future of AI in Pakistan.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link href="https://forms.gle/kWBcGuManm36bohUA" target="_blank">
                                    <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-50 shadow-2xl shadow-blue-900/20 font-black uppercase tracking-widest text-sm rounded-2xl h-16 px-12 group">
                                        Submit Proposal
                                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1 duration-300" />
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-10 text-white/70">
                                {["Deep Dives", "Real-world AI", "Practical Workshops"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                                        <CheckCircle2 size={16} className="text-blue-300" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            </div>

            {/* Elite Speaker Modal component */}
            <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
        </div>
    );
}
