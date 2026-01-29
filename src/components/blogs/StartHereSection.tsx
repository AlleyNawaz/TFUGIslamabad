"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/types";

interface StartHereSectionProps {
    blogs: Blog[];
}

export function StartHereSection({ blogs }: StartHereSectionProps) {
    return (
        <div className="mb-16">
            <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                        <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-500 fill-current" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Start Your AI Journey
                    </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 ml-11">
                    Beginner-friendly blogs to help you understand AI from the ground up.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog, index) => (
                    <Link
                        key={blog.id}
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800/80 dark:to-slate-800/40 border border-blue-100 dark:border-slate-700 rounded-xl p-5 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-700 font-bold text-blue-600 dark:text-blue-400 text-sm shadow-sm ring-1 ring-slate-100 dark:ring-slate-600">
                                    {index + 1}
                                </span>
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                    <BookOpen size={12} />
                                    {blog.readingTime}
                                </span>
                            </div>

                            <h3 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {blog.title}
                            </h3>

                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">
                                {blog.excerpt}
                            </p>

                            <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                                Start Learning <ArrowRight size={14} className="ml-1" />
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
