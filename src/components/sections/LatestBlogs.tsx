"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

const CURATED_BLOG_IDS = ["b4", "b6", "b7"];

export function LatestBlogs() {
    const latestBlogs = CURATED_BLOG_IDS.map(id => blogs.find(b => b.id === id)).filter(Boolean) as typeof blogs;

    // Helper for fake tags/read time since they aren't in data
    const getMeta = (index: number) => {
        const categories = ["Beginner", "Advanced", "Intermediate"];
        const time = [5, 12, 8];
        return {
            category: categories[index % categories.length],
            readTime: `${time[index % time.length]} min read`
        };
    }

    return (
        <section className="py-16 relative z-10 px-5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                            Learn <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI</span> by Building
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl font-medium">
                            Practical articles, real projects, and clear explanations to help you understand and build AI systems.
                        </p>
                    </div>
                    <Link
                        href="/articles"
                        className="hidden md:flex items-center px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all duration-300 shadow-sm text-sm"
                    >
                        Explore Articles <ArrowUpRight size={18} className="ml-1.5" />
                    </Link>
                </div>

                <div className="relative group/grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestBlogs.map((blog, index) => {
                        const meta = getMeta(index);
                        return (
                            <motion.a
                                key={blog.id}
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-col bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 ease-out will-change-transform transform-gpu hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:border-transparent group-hover/grid:opacity-50 hover:!opacity-100 h-full"
                            >
                                {/* Background Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="p-8 flex-grow flex flex-col relative z-10 text-left">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                                            {meta.category}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500">
                                            <Clock size={14} /> {meta.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug line-clamp-3">
                                        {blog.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow font-medium">
                                        {blog.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-900 mt-auto">
                                        <a 
                                            href={blog.authorSocial}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 group/author"
                                        >
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-900 shadow-sm transition-transform duration-300 group-hover/author:scale-110">
                                                {blog.authorImage ? (
                                                    <Image 
                                                        src={blog.authorImage} 
                                                        alt={blog.author}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                                                        <User size={18} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1 group-hover/author:text-blue-600 transition-colors duration-300">
                                                    {blog.author}
                                                </span>
                                                <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 leading-none">
                                                    <Calendar size={12} /> {new Date(blog.publishDate).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </a>

                                        <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform-gpu">
                                            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/articles"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-100 transition-all shadow-sm"
                    >
                        Explore Articles <ArrowUpRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
