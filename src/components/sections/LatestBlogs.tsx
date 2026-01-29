"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/data/blogs";

const CURATED_BLOG_IDS = ["b4", "b6", "b7"];

export function LatestBlogs() {
    const latestBlogs = CURATED_BLOG_IDS.map(id => blogs.find(b => b.id === id)).filter(Boolean) as typeof blogs;

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Understanding AI
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                            Clear, practical writing to help you master AI concepts, tools, and frameworks.
                        </p>
                    </div>
                    <Link
                        href="/blogs"
                        className="hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                    >
                        View all articles <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestBlogs.map((blog, index) => (
                        <motion.a
                            key={blog.id}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 h-full"
                        >
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                                    {blog.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3 text-sm flex-grow">
                                    {blog.excerpt}
                                </p>

                                <div className="flex flex-col gap-4 mt-auto">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                                        <span className="flex items-center gap-1">
                                            <User size={14} /> {blog.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {new Date(blog.publishDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all">
                                        Read article <ArrowUpRight size={16} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                    >
                        View all articles <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
