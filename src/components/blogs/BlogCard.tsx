"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User, Eye, Clock } from "lucide-react";
import { Blog } from "@/types";

interface BlogCardProps {
    blog: Blog;
    index: number;
}

const difficultyColors = {
    Beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
    Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
    Advanced: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
};

export function BlogCard({ blog, index }: BlogCardProps) {
    return (
        <motion.a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 h-full"
        >
            <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                        <span
                            className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ${difficultyColors[blog.difficulty]
                                }`}
                        >
                            {blog.difficulty}
                        </span>
                        {blog.category === "JAX" && (
                            <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                                JAX Series
                            </span>
                        )}
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock size={12} />
                        {blog.readingTime}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                    {blog.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3 text-sm flex-grow">
                    {blog.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium pt-4 border-t border-slate-100 dark:border-slate-700/50">
                    <span className="flex items-center gap-1">
                        <User size={12} /> {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar size={12} /> {new Date(blog.publishDate).toLocaleDateString()}
                    </span>
                    {blog.views && (
                        <span className="flex items-center gap-1 ml-auto">
                            <Eye size={12} /> {blog.views}
                        </span>
                    )}
                </div>
            </div>
        </motion.a>
    );
}
