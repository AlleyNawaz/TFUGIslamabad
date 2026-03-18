"use client";

import { gdes, googleSpeakers, industryExperts } from "@/data/speakers";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

// Combine all speakers
const allSpeakers = [...gdes, ...googleSpeakers, ...industryExperts];

export function FeaturedSpeakers() {
    return (
        <section className="py-16 relative z-10 overflow-hidden px-5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                        Community Leaders
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Learn from Google Developer Experts and industry researchers.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full mb-16 pause-on-hover">

                    <div className="flex w-max animate-marquee hover:cursor-grab active:cursor-grabbing">
                        {/* Render list twice for seamless loop */}
                        {[...allSpeakers, ...allSpeakers].map((speaker, index) => (
                            <Link
                                key={`${speaker.id}-${index}`}
                                href={`/speakers?id=${speaker.id}`}
                                className="flex-shrink-0 w-64 mx-4 md:mx-6 text-center group"
                            >
                                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 group-hover:border-blue-500 transition-colors duration-300">
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate px-2">
                                    {speaker.name}
                                </h3>
                                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1 truncate px-2">
                                    {speaker.role}
                                </p>
                                {speaker.company && (
                                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-3 truncate px-2">
                                        {speaker.company}
                                    </p>
                                )}

                                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                                    {/* Only show icons if links exist */}
                                    {speaker.socials?.twitter && (
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                window.open(speaker.socials!.twitter!, '_blank');
                                            }}
                                            className="text-slate-400 hover:text-blue-400 cursor-pointer pointer-events-auto"
                                        >
                                            <Twitter size={16} />
                                        </span>
                                    )}
                                    {speaker.socials?.linkedin && (
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                window.open(speaker.socials!.linkedin!, '_blank');
                                            }}
                                            className="text-slate-400 hover:text-blue-700 cursor-pointer pointer-events-auto"
                                        >
                                            <Linkedin size={16} />
                                        </span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/speakers"
                        className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 dark:border-slate-700 text-base font-semibold rounded-full text-slate-900 dark:text-white bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 shadow-sm"
                    >
                        Meet All Speakers
                    </Link>
                </div>
            </div>
        </section>
    );
}
