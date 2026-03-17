"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { Search, Sparkles } from "lucide-react";
import { FilterChips } from "@/components/blogs/FilterChips";
import { BlogCard } from "@/components/blogs/BlogCard";

const CATEGORIES = ["All", "ML Basics", "TensorFlow", "Keras", "JAX", "Tools"];

export function BlogsView() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // Keyboard Shortcut Handler
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                const searchInput = document.querySelector('input[placeholder="Search articles..."]') as HTMLInputElement;
                searchInput?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const featuredBlogTitle = "TensorFlow Made Simple: AI for Everyone";
    const firstBlog = blogs.find(b => b.title === featuredBlogTitle) || blogs[0];
    
    // Improved Filtering Logic
    const filteredBlogs = blogs.filter((blog) => {
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch = 
            blog.title.toLowerCase().includes(query) || 
            blog.category.toLowerCase().includes(query) ||
            blog.tags?.some(tag => tag.toLowerCase().includes(query));
        
        const matchesCategory = activeCategory === "All" || 
            blog.category.replace(/\s/g, "").toLowerCase() === activeCategory.replace(/\s/g, "").toLowerCase() ||
            blog.tags?.some(tag => tag.replace(/\s/g, "").toLowerCase() === activeCategory.replace(/\s/g, "").toLowerCase());
            
        return matchesSearch && matchesCategory;
    });

    const displayBlogs = activeCategory === "All" && !searchQuery 
        ? filteredBlogs.filter(b => b.id !== firstBlog.id)
        : filteredBlogs;

    const beginnerBlogs = displayBlogs.filter(b => b.difficulty === "Beginner");
    const intermediateBlogs = displayBlogs.filter(b => b.difficulty === "Intermediate");
    const advancedBlogs = displayBlogs.filter(b => b.difficulty === "Advanced");

    return (
        <div className="min-h-screen pb-20 pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                {/* 1. HERO (MATCH SESSIONS STYLE) */}
                <div className="mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Articles
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-10 leading-relaxed font-medium"
                    >
                        Learn AI through real projects, practical explanations, and production-level insights.
                    </motion.p>
                </div>

                {/* 2. SEARCH BAR (STRIPE STYLE) */}
                <div className="max-w-2xl mx-auto mt-6 mb-16 px-4">
                    <div className="relative group">
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-300">
                            <Search className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full outline-none text-base bg-transparent text-slate-900 dark:text-white placeholder-slate-400 font-medium"
                            />
                            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">⌘K</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <FilterChips
                            categories={CATEGORIES}
                            activeCategory={activeCategory}
                            onSelect={(cat) => {
                                setActiveCategory(cat);
                                setSearchQuery("");
                            }}
                        />
                    </div>
                </div>

                {/* 3. FEATURED ARTICLE (BIG) - ONLY SHOW ON "ALL" */}
                {activeCategory === "All" && !searchQuery && (
                    <section className="mt-12 mb-20">
                        <BlogCard blog={firstBlog} index={0} featured={true} />
                    </section>
                )}

                {/* 3.5 TOP PICKS (BEST BLOGS) - ONLY SHOW ON "ALL" */}
                {activeCategory === "All" && !searchQuery && (
                    <section className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase italic">Top Picks</h2>
                            <div className="h-[2px] flex-grow bg-gradient-to-r from-indigo-500/50 to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogs.filter(b => ["b4", "b5", "b6"].includes(b.id)).map((blog, idx) => (
                                <BlogCard key={blog.id} blog={blog} index={idx + 10} />
                            ))}
                        </div>
                    </section>
                )}

                {/* 4. CONTENT GRID SECTIONS */}
                <div className="space-y-24">
                    {activeCategory === "All" && !searchQuery ? (
                        <>
                            {/* Structured Layout for "All" View */}
                            {beginnerBlogs.filter(b => !["b7", "b4", "b5", "b6"].includes(b.id)).length > 0 && (
                                <section>
                                    <div className="flex items-center gap-4 mb-10">
                                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Start Learning</h2>
                                        <div className="h-[2px] flex-grow bg-gradient-to-r from-emerald-500/50 to-transparent" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {beginnerBlogs.filter(b => !["b7", "b4", "b5", "b6"].includes(b.id)).map((blog, idx) => (
                                            <BlogCard key={blog.id} blog={blog} index={idx + 2} />
                                        ))}
                                    </div>
                                </section>
                            )}

                            {(intermediateBlogs.length > 0 || advancedBlogs.length > 0) && (
                                <section>
                                    <div className="flex items-center gap-4 mb-10">
                                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Practical Guides</h2>
                                        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {[...intermediateBlogs, ...advancedBlogs].map((blog, idx) => (
                                            <BlogCard key={blog.id} blog={blog} index={idx + 5} />
                                        ))}
                                    </div>
                                </section>
                            )}
                        </>
                    ) : (
                        /* Standard Grid for Filtered/Search Results */
                        filteredBlogs.length > 0 && (
                            <section>
                                <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent mb-10" />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredBlogs.map((blog, idx) => (
                                        <BlogCard key={blog.id} blog={blog} index={idx} />
                                    ))}
                                </div>
                            </section>
                        )
                    )}
                </div>

                {/* Empty State */}
                {filteredBlogs.length === 0 && (
                    <div className="text-center py-24">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
                            <Search className="h-10 w-10 text-slate-400" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                            No articles found
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto font-medium">
                            We couldn&apos;t find any articles matching your criteria. Try adjusting your search or filters.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveCategory("All") }}
                            className="mt-10 px-8 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
