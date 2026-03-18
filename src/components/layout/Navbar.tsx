"use client";

import Link from "next/link";
import Image from "next/image";
import tfugLogo from "@/images/tfuglogo.png";
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
        <div className={`fixed left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none transition-all duration-500 ease-in-out ${scrolled ? 'top-3 scale-95' : 'top-4 scale-100 mt-2'}`}>
            <nav 
                className={`pointer-events-auto transition-all duration-500 flex items-center justify-between w-full max-w-screen-lg mx-auto
                    ${scrolled 
                        ? 'h-14 px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border border-slate-200 dark:border-slate-800 rounded-full' 
                        : 'h-16 px-8 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm border border-slate-200 dark:border-slate-800 rounded-full'
                    }`}
            >
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 shrink-0 group">
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
                        <Image 
                            src={tfugLogo} 
                            alt="TFUG Islamabad" 
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center justify-center flex-1 gap-8 px-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="font-medium text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-all duration-300 text-sm whitespace-nowrap"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:text-white/50 dark:hover:text-white transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <Link
                        href="/contact"
                        className="hidden md:block font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all duration-300 px-6 py-2 text-sm"
                    >
                        Join Us
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-600 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-[4.5rem] left-4 right-4 md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl pointer-events-auto z-50"
                        >
                            <div className="p-6 flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full py-2 text-lg font-semibold text-slate-800 dark:text-white/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center py-4 text-base font-bold text-white bg-blue-600 rounded-2xl shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
                                    >
                                        Join the Community
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
