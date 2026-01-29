"use client";

import { gdes, googleSpeakers, industryExperts } from "@/data/speakers";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

// Combine all speakers
const allSpeakers = [...gdes, ...googleSpeakers, ...industryExperts];

export function FeaturedSpeakers() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Community Leaders & Experts
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Learn from Google Developer Experts and industry researchers.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full mb-16 pause-on-hover mask-gradient">
                    {/* Gradient Masks for smooth edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

                    <div className="flex w-max animate-marquee hover:cursor-grab active:cursor-grabbing">
                        {/* Render list twice for seamless loop */}
                        {[...allSpeakers, ...allSpeakers].map((speaker, index) => (
                            <div
                                key={`${speaker.id}-${index}`}
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
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/speakers"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        Meet All Speakers
                    </Link>
                </div>
            </div>
        </section>
    );
}
