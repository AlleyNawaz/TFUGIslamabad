"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, BookOpen, Terminal, Sigma } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function Hero() {
    const router = useRouter();

    const campaignCards = [
        {
            id: "build-with-ai",
            title: "Build with AI",
            description: "Build real-world AI systems using modern tools and frameworks.",
            icon: Terminal,
            color: "bg-emerald-500",
            campaign: "build-with-ai",
            position: "lg:-top-8 lg:-left-4",
            rotation: "-rotate-3"
        },
        {
            id: "study-jams",
            title: "AI/ML Study Jams",
            description: "Hands-on coding sessions focused on practical AI & ML skills.",
            icon: PlayCircle,
            color: "bg-blue-600",
            campaign: "study-jams",
            position: "lg:top-16 lg:left-56",
            rotation: "rotate-6"
        },
        {
            id: "paper-clubs",
            title: "AI/ML Paper Reading Clubs",
            description: "Discuss and write cutting-edge AI research with fellow enthusiasts.",
            icon: BookOpen,
            color: "bg-pink-500",
            campaign: "paper-clubs",
            badge: "RESEARCH TRACK",
            position: "lg:top-64 lg:left-0",
            rotation: "-rotate-2"
        },
        {
            id: "math-club",
            title: "AI/ML Math Clubs",
            description: "Deep dives into the mathematical foundations of machine learning.",
            icon: Sigma,
            color: "bg-amber-500",
            campaign: "math-club",
            position: "lg:top-80 lg:left-48",
            rotation: "rotate-2"
        }
    ];

    return (
        <section className="relative overflow-hidden pt-24 pb-12 lg:pt-48 lg:pb-32 min-h-fit flex items-center">
            {/* Background Mesh Gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* LEFT SIDE: Content */}
                    <div className="flex flex-col items-start text-left space-y-10 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] md:leading-[1.05]">
                                Pakistan’s Fastest <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 inline-block mt-2 animate-gradient">Growing AI Community</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
                        >
                            Learn, build, and ship real-world AI systems with developers, researchers, and builders across Pakistan.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Link href="/sessions" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto gap-3 bg-blue-600 text-white shadow-xl shadow-blue-500/20 active:scale-95 transition-all duration-300 font-bold h-14 md:h-16 px-8 md:px-10 rounded-2xl md:rounded-[2rem] text-base md:text-lg">
                                    Explore Sessions
                                    <ArrowRight size={20} />
                                </Button>
                            </Link>
                            <Link href="/programs" className="w-full sm:w-auto">
                                <Button variant="ghost" size="lg" className="w-full sm:w-auto gap-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/50 transition-all font-bold h-14 md:h-16 px-8 md:px-10 rounded-2xl md:rounded-[2rem] text-base md:text-lg border border-slate-200/50 dark:border-slate-700/50">
                                    View Programs
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: Dynamic Visuals */}
                    <div className="relative h-[700px] hidden lg:block">
                        {campaignCards.map((card, idx) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, x: 40, y: 40, rotate: 0 }}
                                    animate={{ opacity: 1, x: 0, y: 0, rotate: parseInt(card.rotation.replace('rotate-', '-').replace('rotate', '')) }}
                                    transition={{ 
                                        duration: 1.2, 
                                        delay: 0.3 + idx * 0.2,
                                        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for premium feel
                                    }}
                                    whileHover={{ 
                                        y: -12, 
                                        scale: 1.05, 
                                        rotate: 0,
                                        zIndex: 50,
                                        transition: { duration: 0.4, ease: "easeOut" }
                                    }}
                                    onClick={() => router.push(`/sessions?campaign=${card.campaign}`)}
                                    className={cn(
                                        "absolute p-8 rounded-[2.5rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer w-80 group",
                                        card.position,
                                        card.rotation
                                    )}
                                >
                                    {card.badge && (
                                        <div className="text-[10px] font-black bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full w-fit mb-5 tracking-[0.15em] uppercase">
                                            {card.badge}
                                        </div>
                                    )}

                                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg shadow-current/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12", card.color)}>
                                        <Icon size={24} />
                                    </div>

                                    <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight leading-slug">
                                        {card.title}
                                    </h4>

                                    <p className="text-[14px] text-slate-500 dark:text-slate-400 mt-3 leading-relaxed font-medium">
                                        {card.description}
                                    </p>

                                    <div className="mt-6 text-[12px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        Explore Track <ArrowRight size={16} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
