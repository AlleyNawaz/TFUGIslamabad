"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Blog } from "@/types";

interface BlogCardProps {
    blog: Blog;
    index: number;
    featured?: boolean;
}

const tagStyles: Record<string, string> = {
    beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    advanced: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
    jax: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
};

export function BlogCard({ blog, index, featured = false }: BlogCardProps) {
    const diffKey = blog.difficulty.toLowerCase();
    const catKey = blog.category.toLowerCase();
    const activeTagStyle = tagStyles[catKey === "jax" ? "jax" : diffKey] || tagStyles.beginner;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                featured ? "lg:flex lg:items-center lg:gap-8 p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-500/5 dark:to-purple-500/5 md:col-span-2 lg:col-span-3" : "p-6"
            }`}
        >
            {featured && (
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center relative overflow-hidden group/featured shadow-inner border border-slate-200 dark:border-slate-800">
                        {blog.image ? (
                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform group-hover/featured:scale-105 duration-700" />
                        ) : (
                            <>
                                <span className="text-white/20 font-black text-4xl uppercase tracking-tighter relative z-10 transition-transform group-hover/featured:scale-110 duration-700">Project Guide</span>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                            </>
                        )}
                    </div>
                </div>
            )}

            <div className={featured ? "lg:w-1/2 flex flex-col" : "flex flex-col h-full"}>
                {/* TOP META */}
                <div className="flex justify-between items-center text-sm mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border border-transparent ${activeTagStyle}`}>
                        {blog.difficulty}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-bold text-xs flex items-center gap-1.5">
                        <Clock size={14} className="text-blue-500" />
                        {blog.readingTime}
                    </span>
                </div>

                {featured && <span className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2 block">🔥 Featured Content</span>}

                <h3 className={`font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors tracking-tight ${
                    featured ? "text-3xl md:text-4xl leading-[1.15]" : "text-xl mb-3"
                }`}>
                    {blog.title}
                </h3>

                <p className={`text-slate-600 dark:text-slate-400 mt-3 line-clamp-2 leading-relaxed ${featured ? "text-lg mb-8 max-w-xl" : "text-sm mb-6"}`}>
                    {blog.excerpt}
                </p>

                {/* AUTHOR & FOOTER */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800/50">
                    <div className="flex items-center gap-3">
                        <a 
                            href={blog.authorSocial} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative group/avatar"
                        >
                            <img 
                                src={blog.authorImage} 
                                alt={blog.author}
                                className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800 group-hover/avatar:ring-blue-500 transition-all"
                            />
                            <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover/avatar:bg-blue-500/10 transition-colors" />
                        </a>
                        <div className="flex flex-col">
                            <span className="text-sm font-black text-slate-900 dark:text-white leading-none mb-1">{blog.author}</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
                                {new Date(blog.publishDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            </span>
                        </div>
                    </div>

                    <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 font-black transition-all ${
                            featured 
                                ? "px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20" 
                                : "w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-blue-600"
                        }`}
                    >
                        {featured && "Read Article"}
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
            
            {/* Subtle Interactive Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent -translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />
        </motion.div>
    );
}
