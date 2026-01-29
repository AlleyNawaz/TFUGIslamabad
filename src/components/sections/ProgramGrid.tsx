"use client";

import { programs } from "@/data/programs";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, BookOpen, Sigma, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
    "study-jams": Code,
    "paper-reading": BookOpen,
    "math-club": Sigma,
    "build-with-ai": Terminal,
};

export function ProgramGrid() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Our Programs
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Choose your path and start learning with our specialized tracks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => {
                        const Icon = icons[program.id as keyof typeof icons] || Code;

                        return (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                            >
                                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-white", program.color)}>
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {program.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-6 min-h-[80px]">
                                    {program.description}
                                </p>

                                <Link
                                    href={`/programs/${program.slug}`}
                                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                                >
                                    View Sessions <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
