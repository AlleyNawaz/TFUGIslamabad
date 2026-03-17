"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { sessions } from "@/data/sessions";
import { programs } from "@/data/programs";
import { speakers, industryExperts, googleSpeakers } from "@/data/speakers";
import { VideoGrid } from "@/components/sections/VideoGrid";
import { Search, LayoutGrid, List as ListIcon, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function parseDuration(duration: string) {
    const parts = duration.split(":").map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
}

export function SessionsView() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [category, setCategory] = useState(searchParams.get("category") || "all");
    const [speakerType, setSpeakerType] = useState(searchParams.get("speakerType") || "all");
    const [sortBy, setSortBy] = useState(searchParams.get("sort") || "newest");
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    
    // Autocomplete states
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileSearchFocused, setIsMobileSearchFocused] = useState(false);

    // Initial hydration to avoid hydration mismatch warnings and persist viewMode
    useEffect(() => {
        const savedView = localStorage.getItem("tfug_viewMode");
        if (savedView === "grid" || savedView === "list") setViewMode(savedView);
    }, []);

    const handleViewMode = (mode: "grid" | "list") => {
        setViewMode(mode);
        localStorage.setItem("tfug_viewMode", mode);
    };

    // URL Param Synchronization
    useEffect(() => {
        const params = new URLSearchParams();
        if (category !== "all") params.set("category", category);
        if (speakerType !== "all") params.set("speakerType", speakerType);
        if (sortBy !== "newest") params.set("sort", sortBy);
        if (searchQuery) params.set("q", searchQuery);

        const query = params.toString() ? `?${params.toString()}` : "";
        router.replace(`${pathname}${query}`, { scroll: false });
    }, [category, speakerType, sortBy, searchQuery, pathname, router]);

    // Data structuring
    const structuredVideos = useMemo(() => {
        return sessions.map((session) => {
            const speaker = speakers.find((s) => s.id === session.speakerId);
            
            let type = "community";
            if (speaker) {
                if (googleSpeakers.some(gs => gs.id === speaker.id)) type = "google";
                else if (speaker.role.toLowerCase().includes("gde") || speaker.isGDE) type = "gde";
                else if (industryExperts.some(ie => ie.id === speaker.id)) type = "industry";
            }

            return {
                ...session,
                speaker,
                speakerType: type,
                durationSeconds: parseDuration(session.duration)
            };
        });
    }, []);

    // Active Filter Pipeline
    const filteredAndSortedVideos = useMemo(() => {
        let result = structuredVideos;
        
        if (category !== "all") {
            result = result.filter(v => v.programId === category);
        }

        if (speakerType !== "all") {
            result = result.filter(v => v.speakerType === speakerType);
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(v => 
                v.title.toLowerCase().includes(q) || 
                (v.speaker?.name.toLowerCase().includes(q) ?? false)
            );
        }

        result = [...result].sort((a, b) => {
            switch (sortBy) {
                case "oldest": return new Date(a.date).getTime() - new Date(b.date).getTime();
                case "most-viewed": return (b.views || 0) - (a.views || 0);
                case "least-viewed": return (a.views || 0) - (b.views || 0);
                case "longest": return b.durationSeconds - a.durationSeconds;
                case "shortest": return a.durationSeconds - b.durationSeconds;
                case "newest":
                default:
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
        });

        return result;
    }, [structuredVideos, category, speakerType, searchQuery, sortBy]);

    // Compute top 5 Search Suggestions
    const searchSuggestions = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const q = searchQuery.toLowerCase();
        
        // Find matching titles or speakers
        const matches = structuredVideos.filter(v => 
            v.title.toLowerCase().includes(q) || 
            (v.speaker?.name.toLowerCase().includes(q) ?? false)
        );

        // Map to unique strings (preferring titles if matches title, or speaker name if matches speaker)
        const suggestions = new Set<string>();
        matches.forEach(m => {
            if (m.title.toLowerCase().includes(q)) suggestions.add(m.title);
            else if (m.speaker?.name.toLowerCase().includes(q)) suggestions.add(m.speaker.name);
        });

        return Array.from(suggestions).slice(0, 5);
    }, [searchQuery, structuredVideos]);

    const sortOptions = [
        { value: "newest", label: "Newest to Oldest" },
        { value: "oldest", label: "Oldest to Newest" },
        { value: "most-viewed", label: "Most Viewed" },
        { value: "least-viewed", label: "Least Viewed" },
        { value: "longest", label: "Longest Duration" },
        { value: "shortest", label: "Shortest Duration" },
    ];

    return (
        <div className="min-h-screen pb-20 pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Sessions</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-10">
                    Browse through our complete library of talks, workshops, and study jams.
                </p>

                {/* Premium Sticky Filter Header */}
                <div className="sticky top-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 mb-10">
                    
                    {/* Top Row: Search & Mobile Toggle */}
                    <div className="flex items-center justify-between gap-4 mb-4 lg:mb-0 lg:hidden">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search videos or speakers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsMobileSearchFocused(true)}
                                onBlur={() => setTimeout(() => setIsMobileSearchFocused(false), 200)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                            />
                            {/* Mobile Autocomplete Dropdown */}
                            <AnimatePresence>
                                {isMobileSearchFocused && searchSuggestions.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                                        className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50 py-2"
                                    >
                                        {searchSuggestions.map((suggestion, idx) => (
                                            <button
                                                key={idx}
                                                onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
                                                onClick={() => { setSearchQuery(suggestion); setIsMobileSearchFocused(false); }}
                                                className="w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors"
                                            >
                                                <Search size={14} className="text-slate-400 shrink-0" />
                                                <span className="truncate">{suggestion}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <button 
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                            className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                        >
                            <SlidersHorizontal size={20} />
                        </button>
                    </div>

                    {/* Filter Container */}
                    <AnimatePresence>
                        {(showMobileFilters || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="flex flex-col gap-4 w-full overflow-hidden lg:overflow-visible"
                            >
                                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">
                                    {/* Category Segmented Control */}
                                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-full lg:flex-1 lg:max-w-[70%] overflow-x-auto no-scrollbar scroll-smooth">
                                        <button
                                            onClick={() => setCategory("all")}
                                            className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${category === "all" ? "bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`}
                                        >
                                            All Videos
                                        </button>
                                        {programs.map((prog) => (
                                            <button
                                                key={prog.id}
                                                onClick={() => setCategory(prog.id)}
                                                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${category === prog.id ? "bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`}
                                            >
                                                {prog.title}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Desktop Search Component */}
                                    <div className="hidden lg:block relative w-full lg:w-72 shrink-0">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Search videos..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onFocus={() => setIsSearchFocused(true)}
                                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                                            className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                                        />
                                        
                                        {/* Desktop Autocomplete Dropdown */}
                                        <AnimatePresence>
                                            {isSearchFocused && searchSuggestions.length > 0 && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                                                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-50 py-2"
                                                >
                                                    {searchSuggestions.map((suggestion, idx) => (
                                                        <button
                                                            key={idx}
                                                            onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
                                                            onClick={() => { setSearchQuery(suggestion); setIsSearchFocused(false); }}
                                                            className="w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-3 transition-colors"
                                                        >
                                                            <Search size={14} className="text-slate-400 shrink-0" />
                                                            <span className="truncate">{suggestion}</span>
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Speaker Type & Sort Dropdowns */}
                                <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-3 w-full border-t border-slate-100 dark:border-slate-800 pt-4 lg:pt-0 lg:border-t-0">
                                    <select
                                        value={speakerType}
                                        onChange={(e) => setSpeakerType(e.target.value)}
                                        className="w-full lg:w-auto appearance-none bg-slate-100 dark:bg-slate-800 border-none px-4 pr-10 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 cursor-pointer outline-none transition-all custom-select-arrow"
                                    >
                                        <option value="all">Any Speaker</option>
                                        <option value="gde">GDEs</option>
                                        <option value="google">Googlers</option>
                                        <option value="industry">Industry Experts</option>
                                        <option value="community">Community Speakers</option>
                                    </select>

                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full lg:w-auto appearance-none bg-slate-100 dark:bg-slate-800 border-none px-4 pr-10 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 cursor-pointer outline-none transition-all custom-select-arrow"
                                    >
                                        {sortOptions.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>

                                    {/* View Toggle */}
                                    <div className="hidden lg:flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl shrink-0">
                                        <button 
                                            onClick={() => handleViewMode('grid')}
                                            className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? "bg-white dark:bg-slate-600 shadow-sm text-blue-600 dark:text-blue-400" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`}
                                        >
                                            <LayoutGrid size={16} />
                                        </button>
                                        <button 
                                            onClick={() => handleViewMode('list')}
                                            className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? "bg-white dark:bg-slate-600 shadow-sm text-blue-600 dark:text-blue-400" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`}
                                        >
                                            <ListIcon size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Results Mapping */}
                <motion.div layout>
                    <VideoGrid sessions={filteredAndSortedVideos} viewMode={viewMode} />
                </motion.div>

                {/* Empty State */}
                {filteredAndSortedVideos.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-center py-20 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 mt-8"
                    >
                        <Search className="mx-auto text-slate-300 dark:text-slate-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">No videos found</h3>
                        <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                            We couldn't find any sessions matching your current filters. Try selecting a different category or clearing your search.
                        </p>
                        <button 
                            onClick={() => { setCategory("all"); setSpeakerType("all"); setSortBy("newest"); setSearchQuery(""); }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
