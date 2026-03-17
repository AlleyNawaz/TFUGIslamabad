"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle, FileText, BookOpen, Users, ArrowUpRight } from "lucide-react";

const platformCards = [
    {
        title: "Learn by Watching",
        description: "Explore real AI sessions, live builds, and hands-on walkthroughs from the community.",
        icon: <PlayCircle size={28} className="text-blue-500" />,
        href: "/sessions",
        color: "from-blue-500/10 to-blue-500/0",
        borderColor: "group-hover:border-blue-500/50",
    },
    {
        title: "Read Articles",
        description: "Learn AI through real projects, practical explanations, and production-level insights.",
        icon: <FileText size={28} className="text-purple-500" />,
        href: "/articles",
        color: "from-purple-500/10 to-purple-500/0",
        borderColor: "group-hover:border-purple-500/50",
    },
    {
        title: "Learn from Builders",
        description: "Connect with developers and AI practitioners building real-world systems.",
        icon: <Users size={28} className="text-orange-500" />,
        href: "/speakers",
        color: "from-orange-500/10 to-orange-500/0",
        borderColor: "group-hover:border-orange-500/50",
    },
];

export function ExplorePlatform() {
    return (
        <section className="relative py-20 overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Start Your AI Journey
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
                        Everything you need to learn, build, and grow in AI — all in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platformCards.map((card, index) => (
                        <Link key={index} href={card.href} className="group block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`relative h-full flex flex-col p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/50 ${card.borderColor} overflow-hidden`}
                            >
                                {/* Subtle background gradient on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                                
                                <div className="relative z-10 flex flex-col h-full pointer-events-none">
                                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-800/80 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {card.icon}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between tracking-tight">
                                        {card.title}
                                        <ArrowUpRight size={20} className="text-slate-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                    </h3>
                                    
                                    <p className="text-slate-600 dark:text-slate-400 mt-auto leading-relaxed font-medium text-sm md:text-base">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
