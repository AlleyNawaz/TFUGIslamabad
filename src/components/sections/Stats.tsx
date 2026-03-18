"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Total Sessions", value: "50+" },
    { label: "Total Speakers", value: "30+" },
    { label: "Community Members", value: "3000+" },
    { label: "Years Active", value: "3" },
];

export function Stats() {
    return (
        <section className="py-16 relative overflow-hidden px-5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="relative group flex flex-col items-center justify-center text-center"
                        >
                            {/* Animated Background Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                            
                            <div className="relative">
                                <motion.div 
                                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-white/60 mb-2"
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-xs md:text-sm font-semibold text-slate-500 dark:text-blue-400/80 uppercase tracking-[0.2em]">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Subtle Divider Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
        </section>
    );
}
