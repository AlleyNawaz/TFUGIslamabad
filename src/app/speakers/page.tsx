"use client";

import { gdes, googleSpeakers, industryExperts } from "@/data/speakers";
import { Speaker } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

// Reusable Speaker Card Component
function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group flex flex-col items-center text-center"
        >
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 group-hover:border-blue-500 transition-colors">
                <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {speaker.name}
            </h3>

            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                {speaker.role}
            </p>

            {speaker.company && (
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                    {speaker.company}
                </p>
            )}

            {/* Socials */}
            <div className="flex gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                {speaker.socials?.twitter && (
                    <a
                        href={speaker.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 cursor-pointer pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Twitter size={16} />
                    </a>
                )}
                {speaker.socials?.linkedin && (
                    <a
                        href={speaker.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-700 cursor-pointer pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Linkedin size={16} />
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default function SpeakersPage() {
    return (
        <div className="min-h-screen pb-20 pt-10">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                    Our Speakers
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    World-class experts driving the future of AI.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* Section 1: Featured Googlers */}
                <section>
                    <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800 md:hidden"></div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center md:text-left">
                            Featured Googlers
                        </h2>
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800 md:hidden"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {googleSpeakers.map((speaker, index) => (
                            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
                        ))}
                    </div>
                </section>

                {/* Section 2: Featured GDEs */}
                <section>
                    <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800 md:hidden"></div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center md:text-left">
                            Featured Google Developer Experts
                        </h2>
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800 md:hidden"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {gdes.map((speaker, index) => (
                            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
                        ))}
                    </div>
                </section>

                {/* Section 3: Industry Experts */}
                <section>
                    <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800 md:hidden"></div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center md:text-left">
                            Featured Industry Experts
                        </h2>
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800 md:hidden"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {industryExperts.map((speaker, index) => (
                            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
