"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Total Sessions", value: "50+" },
    { label: "Total Speakers", value: "30+" },
    { label: "Community Members", value: "2000+" },
    { label: "Years Active", value: "3" },
];

export function Stats() {
    return (
        <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
