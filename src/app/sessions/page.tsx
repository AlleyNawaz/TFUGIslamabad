"use client";

import { useState } from "react";
import { sessions } from "@/data/sessions";
import { programs } from "@/data/programs";
import { VideoGrid } from "@/components/sections/VideoGrid";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";

export default function SessionsPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSessions = sessions.filter((session) => {
        const matchesFilter = activeFilter === "all" || session.programId === activeFilter;
        const matchesSearch = session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            session.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="min-h-screen pb-20 pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                    Sessions
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-10">
                    Browse through our complete library of talks, workshops, and study jams.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-2">
                        <Button
                            variant={activeFilter === "all" ? "primary" : "outline"}
                            size="sm"
                            onClick={() => setActiveFilter("all")}
                        >
                            All
                        </Button>
                        {programs.map((prog) => (
                            <Button
                                key={prog.id}
                                variant={activeFilter === prog.id ? "primary" : "outline"}
                                size="sm"
                                onClick={() => setActiveFilter(prog.id)}
                            >
                                {prog.title}
                            </Button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search sessions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <VideoGrid sessions={filteredSessions} />

                {filteredSessions.length === 0 && (
                    <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                        <p className="text-slate-500">No sessions match your search.</p>
                        <Button variant="link" onClick={() => { setActiveFilter("all"); setSearchQuery(""); }}>
                            Clear filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
