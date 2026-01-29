"use client";

import { useState } from "react";
import { blogs } from "@/data/blogs";
import { Search } from "lucide-react";
import { FilterChips } from "@/components/blogs/FilterChips";
import { StartHereSection } from "@/components/blogs/StartHereSection";
import { BlogCard } from "@/components/blogs/BlogCard";

const CATEGORIES = ["All", "ML Basics", "TensorFlow", "Keras", "JAX", "Tools"];
const START_HERE_IDS = ["b1", "b2", "b3", "b8"];

export function BlogsView() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const startHereBlogs = START_HERE_IDS.map(id => blogs.find(b => b.id === id)).filter(Boolean) as typeof blogs;

    const filteredBlogs = blogs.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen pb-20 pt-10 bg-slate-50 dark:bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Insights</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Deep dive into AI, Machine Learning, and Cloud with curated articles from our expert community members.
                    </p>

                    {/* Search & Filter Section */}
                    <div className="max-w-xl mx-auto space-y-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 dark:border-slate-800 rounded-2xl leading-5 bg-white dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200 ease-in-out text-slate-900 dark:text-white shadow-sm hover:shadow-md"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <FilterChips
                            categories={CATEGORIES}
                            activeCategory={activeCategory}
                            onSelect={setActiveCategory}
                        />
                    </div>
                </div>

                {activeCategory === "All" && !searchQuery && (
                    <StartHereSection blogs={startHereBlogs} />
                )}

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog} index={index} />
                    ))}
                </div>

                {filteredBlogs.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                            <Search className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            No articles found
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400">
                            We couldn&apos;t find any articles matching your criteria.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveCategory("All") }}
                            className="mt-6 text-blue-600 hover:text-blue-700 font-medium hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
