"use client";

import { VideoSession } from "@/types";
import { motion } from "framer-motion";
import { PlayCircle, Clock, Calendar, Linkedin } from "lucide-react";
import { speakers } from "@/data/speakers";
import Image from "next/image";
import tfugLogo from "@/images/tfuglogo.png";

interface VideoGridProps {
    sessions: VideoSession[];
}

export function VideoGrid({ sessions }: VideoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => {
                const speaker = speakers.find((s) => s.id === session.speakerId);

                return (
                    <motion.div
                        key={session.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
                    >
                        {/* Thumbnail */}
                        <div className="relative aspect-video bg-slate-100 dark:bg-slate-900 overflow-hidden group-hover:brightness-90 transition-all">
                            <a
                                href={session.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <PlayCircle size={48} className="text-white drop-shadow-lg" />
                            </a>

                            {/* YouTube Thumbnail */}
                            <Image
                                src={`https://img.youtube.com/vi/${session.youtubeId}/hqdefault.jpg?v=1`}
                                alt={session.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />

                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                                <Clock size={10} /> {session.duration}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} /> {new Date(session.date).toLocaleDateString()}
                                </span>
                                {session.views && (
                                    <span>• {session.views} views</span>
                                )}
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                <a href={session.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                    {session.title}
                                </a>
                            </h3>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                                <div className="flex items-center gap-2 truncate pr-2">
                                    <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 bg-slate-200">
                                        <Image
                                            src={speaker?.image || tfugLogo.src}
                                            alt={speaker?.name || "TFUG Islamabad"}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                                        {speaker?.name || "TFUG Islamabad"}
                                    </span>
                                </div>
                                {speaker?.socials?.linkedin && (
                                    <a
                                        href={speaker.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 text-slate-400 hover:text-[#0A66C2] transition-colors"
                                        title={`Connect with ${speaker.name} on LinkedIn`}
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
