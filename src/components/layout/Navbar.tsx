"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Sessions", href: "/sessions" },
    { label: "Speakers", href: "/speakers" },
    { label: "Articles", href: "/articles" },
    { label: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none transition-all duration-500 ease-in-out ${scrolled ? 'top-3 scale-95' : 'top-6 scale-100'}`}>


            <nav 
                className={`pointer-events-auto transition-all duration-500 flex items-center justify-between w-full
                    ${scrolled 
                        ? 'max-w-2xl h-14 px-8 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm border border-slate-200 dark:border-slate-800 rounded-full' 
                        : 'max-w-4xl h-16 px-10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm border border-slate-200 dark:border-slate-800 rounded-full mt-2'
                    }`}
            >
                {/* Desktop Nav Items - All links shown and flattened for "equally spaced" filling */}
                {scrolled ? (
                    <>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-medium text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-all duration-300 text-sm whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </>
                ) : (
                    <div className="hidden md:flex items-center justify-between w-full gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-medium text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-all duration-300 text-sm md:text-base whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Right Side CTA & Theme Desktop */}
                <div className="hidden md:flex items-center gap-4 md:gap-6 shrink-0 z-50 ml-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:text-white/50 dark:hover:text-white transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <Link
                        href="/contact"
                        className={`font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 shadow-lg shadow-blue-500/30 transition-all duration-300 pointer-events-auto
                            ${scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-sm md:text-base'}`}
                    >
                        Join Us
                    </Link>
                </div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-400 hover:bg-black/5 dark:hover:bg-white/10 dark:text-white/50 dark:hover:text-white transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-slate-600 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 rounded-full"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`absolute left-4 right-4 md:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl pointer-events-auto ${scrolled ? 'top-[4.5rem]' : 'top-[5.5rem]'}`}
                    >
                        <div className="px-6 py-6 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-base font-medium text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-white/10">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 shadow-lg shadow-blue-500/30 transition-all"
                                >
                                    Join Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
