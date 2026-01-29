"use client";

import { motion } from "framer-motion";

interface FilterChipsProps {
    categories: string[];
    activeCategory: string;
    onSelect: (category: string) => void;
}

export function FilterChips({ categories, activeCategory, onSelect }: FilterChipsProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`
            relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
            ${activeCategory === category
                            ? "text-white shadow-lg shadow-blue-500/25"
                            : "text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                        }
          `}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                </button>
            ))}
        </div>
    );
}
