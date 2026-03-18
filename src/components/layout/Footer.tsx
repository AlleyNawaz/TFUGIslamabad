"use client";

import Link from "next/link";
import Image from "next/image";
import tfugLogo from "@/images/tfuglogo.png";
import { Twitter, Linkedin, Mail, Facebook, Instagram, PlayCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Discord = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className={className}
    >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
    </svg>
);

const WhatsApp = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

export function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-24">
            
            {/* LAYER 1 — POWER SECTION (CTA) */}
            {isHomePage && (
                <div className="max-w-7xl mx-auto px-6 pt-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/5 dark:to-purple-500/5 border border-blue-100/50 dark:border-blue-500/10"
                    >
                        {/* Subtle Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="max-w-xl text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                                    Build with TFUG Islamabad
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium">
                                    Join 3,500+ developers learning AI through real sessions, projects, and community.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link 
                                    href="/contact"
                                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
                                >
                                    <Users size={18} /> Join Community
                                </Link>
                                <Link 
                                    href="/sessions"
                                    className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
                                >
                                    <PlayCircle size={18} /> Explore Sessions
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            <div className="border-t border-slate-100 dark:border-slate-900/50 my-12" />

            {/* LAYER 2 — CLEAN NAV (LINKS) */}
            <div className="max-w-7xl mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="block w-fit mx-auto flex flex-col items-center">
                            <div className="relative w-40 h-10 mb-2 transition-transform duration-300 hover:scale-105">
                                <Image 
                                    src={tfugLogo} 
                                    alt="TFUG Islamabad Logo" 
                                    fill
                                    className="object-contain transition-all"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">
                            Building Pakistan’s most active AI developer community. An independent group of builders and researchers.
                        </p>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                            <li><Link href="/sessions" className="hover:text-blue-600 transition-colors">Sessions</Link></li>
                            <li><Link href="/articles" className="hover:text-blue-600 transition-colors">Articles</Link></li>
                            <li><Link href="/speakers" className="hover:text-blue-600 transition-colors">Speakers</Link></li>
                            <li><Link href="/programs" className="hover:text-blue-600 transition-colors">Programs</Link></li>
                        </ul>
                    </div>

                    {/* Campaigns Column */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Campaigns</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                            <li><Link href="/sessions?campaign=build-with-ai" className="hover:text-blue-600 transition-colors">Build with AI</Link></li>
                            <li><Link href="/sessions?campaign=study-jams" className="hover:text-blue-600 transition-colors">AI/ML Study Jams</Link></li>
                            <li><Link href="/sessions?campaign=paper-reading" className="hover:text-blue-600 transition-colors">AI/ML Paper Reading Clubs</Link></li>
                            <li><Link href="/sessions?campaign=math-club" className="hover:text-blue-600 transition-colors">AI/ML Math Clubs</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info (Compact) */}
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 text-center md:text-left">Connect</h4>
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4 flex-nowrap">
                            <a href="https://www.facebook.com/groups/TFUGIslamabad" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110" title="Facebook"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/TFUGIsl" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-all hover:scale-110" title="Instagram"><Instagram size={20} /></a>
                            <a href="https://twitter.com/TFUGIslamabad" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-all hover:scale-110" title="Twitter"><Twitter size={20} /></a>
                            <a href="https://www.linkedin.com/company/TFUGIsl" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-all hover:scale-110" title="LinkedIn"><Linkedin size={20} /></a>
                            <a href="https://discord.gg/hwCx9BaYeC" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-500 transition-all hover:scale-110" title="Discord"><Discord size={20} /></a>
                            <a href="https://chat.whatsapp.com/HCAoCKBHahiDvDTklD6Ej6" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-all hover:scale-110" title="WhatsApp"><WhatsApp size={20} /></a>
                            <a href="https://www.commudle.com/communities/TFUGIslamabad" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-all hover:scale-110 flex items-center" title="Commudle">
                                <Image src="/images/Commudle.svg" alt="Commudle" width={32} height={20} className="h-5 w-auto dark:invert" />
                            </a>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <a href="mailto:TFUGIslamabad@gmail.com" className="hover:text-blue-500">TFUGIslamabad@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LAYER 3 — BRAND BAR (BOTTOM) */}
                <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} TensorFlow User Group Islamabad</p>
                    <p className="flex items-center gap-2">
                        An independent community group <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Islamabad, PK
                    </p>
                </div>
            </div>
        </footer>
    );
}
