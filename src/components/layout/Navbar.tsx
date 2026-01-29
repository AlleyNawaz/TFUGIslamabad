"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import tfugLogo from "@/images/tfuglogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Campaigns", href: "/programs" },
    { label: "Speakers", href: "/speakers" },
    { label: "Sessions", href: "/sessions" },
    { label: "Blogs", href: "/blogs" },
    { label: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-8 h-8">
                            <Image src={tfugLogo} alt="TFUG Logo" fill className="object-contain" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
                            TFUG Islamabad
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <Link
                            href="/contact"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Join Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-600 dark:text-slate-300"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
                    >
                        <div className="px-6 py-8 flex flex-col space-y-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-6 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-sm active:scale-[0.98] transition-all"
                                >
                                    Join Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
