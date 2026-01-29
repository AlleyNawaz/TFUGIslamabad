"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { programs } from "@/data/programs";

export default function ProgramsPage() {
    return (
        <div className="min-h-screen pb-20 pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                    Active Campaigns
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-12">
                    Explore our diverse range of AI and Machine Learning programs designed to help you learn, build, and grow.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <Link href={`/programs/${program.slug}`} key={program.id} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`h-full p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${program.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-6`}>
                                    <div className={`w-6 h-6 rounded-full ${program.color} opacity-80`} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {program.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {program.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
