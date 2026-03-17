"use client";

import { programs } from "@/data/programs";
import { sessions } from "@/data/sessions";
import { speakers } from "@/data/speakers";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, BookOpen, Sigma, Terminal, Sparkles, Mic, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
    "build-with-ai": Terminal,
    "study-jams": Code,
    "paper-reading": BookOpen,
    "math-club": Sigma,
    "community-talks": Mic,
};

const iconGradients = {
    "build-with-ai": "from-indigo-500 to-purple-600",
    "study-jams": "from-blue-600 to-indigo-700",
    "paper-reading": "from-pink-500 to-rose-600",
    "math-club": "from-violet-500 to-blue-600",
    "community-talks": "from-orange-500 to-red-600",
};

const reachData = {
    "paper-reading": "1,500+",
    "math-club": "500+",
    "community-talks": "1,000+",
    "build-with-ai": "2,000+",
    "study-jams": "3,500+"
};

export function ProgramGrid() {
    const router = useRouter();

    // Helper to get speakers for a specific program
    const getProgramSpeakers = (programId: string) => {
        const speakerIds = Array.from(new Set(
            sessions.filter(s => s.programId === programId).map(s => s.speakerId)
        ));
        return speakers.filter(s => speakerIds.includes(s.id));
    };

    // Explicitly group programs for the refined Stripe-level layout
    const featuredProgram = programs.find(p => p.id === "study-jams");
    const sidebarPrograms = [
        programs.find(p => p.id === "paper-reading"),
        programs.find(p => p.id === "math-club"),
    ].filter(Boolean);
    
    // Bottom Pair
    const buildWithAI = programs.find(p => p.id === "build-with-ai");
    const communityTalks = programs.find(p => p.id === "community-talks");

    // Sample data for the featured card - Expanded for density
    const recentSessionsList = [
        "Build Gemini AI Agents",
        "Intro to LLMs & Prompt Engineering",
        "Deploying ML Models at Scale",
        "Mastering Hyperparameter Tuning",
        "Mastering Chatbot Dev with Gemma"
    ];

    return (
        <section className="py-24 relative z-10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6"
                    >
                        Our Programs
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
                    >
                        Master the future of technology through our specialized, outcome-driven learning tracks.
                    </motion.p>
                </div>

                <div className="space-y-8 lg:space-y-10">
                    {/* TOP SECTION: Featured + Sidebar (2 Tracks) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                        {/* FEATURED: AI/ML Study Jams */}
                        {featuredProgram && (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                onClick={() => router.push(`/sessions?campaign=${featuredProgram.id}`)}
                                className="group relative p-10 rounded-[2.5rem] border border-blue-100 dark:border-blue-900/30 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-fit"
                            >
                                <div className="absolute top-8 right-8 z-20">
                                    <div className="flex items-center gap-1.5 bg-blue-600 text-white px-5 py-2 rounded-full text-[12px] font-black uppercase tracking-widest ring-4 ring-blue-500/10 shadow-lg shadow-blue-500/20">
                                        <Sparkles size={14} />
                                        Most Popular
                                    </div>
                                </div>

                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 transition-all duration-500 group-hover:scale-110 shadow-xl shadow-blue-500/30 bg-gradient-to-br",
                                    iconGradients[featuredProgram.id as keyof typeof iconGradients]
                                )}>
                                    <Code size={32} />
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-5 leading-tight">
                                    {featuredProgram.title}
                                </h3>

                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8 max-w-md">
                                    Build real AI projects from scratch with guided sessions and hands-on learning. Start your journey here.
                                </p>

                                {/* Recent Sessions Section */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <div className="w-8 h-[1px] bg-blue-200 dark:bg-blue-800" />
                                        Recent Sessions
                                    </h4>
                                    <ul className="space-y-3">
                                        {recentSessionsList.map((session, idx) => (
                                            <motion.li 
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + idx * 0.1 }}
                                                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium"
                                            >
                                                <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                                                {session}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Speaker Avatars & Social Proof (Large Format) */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex -space-x-3">
                                        {getProgramSpeakers(featuredProgram.id).slice(0, 4).map((speaker, i) => (
                                            <div 
                                                key={i}
                                                className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 shadow-sm overflow-hidden"
                                            >
                                                <img 
                                                    src={speaker.image} 
                                                    alt={speaker.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                        {getProgramSpeakers(featuredProgram.id).length > 4 && (
                                            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                                                +{getProgramSpeakers(featuredProgram.id).length - 4}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-black text-blue-700 dark:text-blue-300 tracking-tight">3,500+ Developers</span>
                                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest leading-none">Campaign Reach</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-4">
                                    <Button size="lg" className="gap-3 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 px-8 h-14 rounded-2xl font-black uppercase tracking-wider text-sm pointer-events-none">
                                        Explore Sessions
                                        <ArrowRight size={20} />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {/* SIDEBAR: Paper & Math */}
                        <div className="grid grid-cols-1 gap-6 lg:gap-8 h-full">
                            {sidebarPrograms.map((program, index) => {
                                const Icon = icons[program!.id as keyof typeof icons] || Code;
                                const isPaperClubs = program!.id === "paper-reading";
                                const programSpeakers = getProgramSpeakers(program!.id);

                                return (
                                    <motion.div
                                        key={program!.id}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                                        onClick={() => router.push(`/sessions?campaign=${program!.id}`)}
                                        className="group relative p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-full"
                                    >
                                        {isPaperClubs && (
                                            <div className="absolute top-8 right-8 z-20">
                                                <div className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 ring-pink-500/20 shadow-sm">
                                                    Research Track
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-col">
                                            <div className={cn(
                                                "w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg bg-gradient-to-br",
                                                iconGradients[program!.id as keyof typeof iconGradients]
                                            )}>
                                                <Icon size={26} />
                                            </div>
                                            
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {program!.title}
                                            </h3>
                                            
                                            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-2 mb-4">
                                                {program!.id === "paper-reading" ? "Deconstruct cutting-edge research and translate breakthroughs into engineering." :
                                                 program!.id === "math-club" ? "Solidify your AI foundations by mastering essential mathematics." :
                                                 program!.description}
                                            </p>

                                            {/* Avatar Social Proof (Medium Format) */}
                                            <div className="flex items-center gap-3 mt-4">
                                                <div className="flex -space-x-2">
                                                    {programSpeakers.slice(0, 4).map((s, i) => (
                                                        <div key={i} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 shadow-sm overflow-hidden">
                                                            <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                                                        </div>
                                                    ))}
                                                    {programSpeakers.length > 4 && (
                                                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-800 text-white text-[8px] font-bold border-2 border-white dark:border-slate-900 shadow-sm">
                                                            +{programSpeakers.length - 4}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="leading-tight">
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                                                        {reachData[program!.id as keyof typeof reachData]} Developers
                                                    </p>
                                                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                                                        Campaign Reach
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1">
                                            Explore Sessions <ArrowRight size={14} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* BOTTOM ROW: Build with AI (Left) + Community Talks (Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {/* Build with AI */}
                        {buildWithAI && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                onClick={() => router.push(`/sessions?campaign=${buildWithAI.id}`)}
                                className="group relative p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-full"
                            >
                                <div className="flex flex-col">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg bg-gradient-to-br",
                                        iconGradients[buildWithAI.id as keyof typeof iconGradients]
                                    )}>
                                        <Terminal size={26} />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {buildWithAI.title}
                                    </h3>
                                    <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-2 mb-4">
                                        Architect and ship production-grade AI systems with end-to-end guidance from experts.
                                    </p>

                                    {/* Avatar Social Proof (Medium Format) */}
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="flex -space-x-2">
                                            {getProgramSpeakers(buildWithAI.id).slice(0, 4).map((s, i) => (
                                                <div key={i} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 shadow-sm overflow-hidden">
                                                    <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                            {getProgramSpeakers(buildWithAI.id).length > 4 && (
                                                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-800 text-white text-[8px] font-bold border-2 border-white dark:border-slate-900 shadow-sm">
                                                    +{getProgramSpeakers(buildWithAI.id).length - 4}
                                                </div>
                                            )}
                                        </div>
                                        <div className="leading-tight">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                                                {reachData[buildWithAI.id as keyof typeof reachData]} Developers
                                            </p>
                                            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                                                Campaign Reach
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1">
                                    Explore Build Track <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        )}

                        {/* Community Talks */}
                        {communityTalks && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                onClick={() => router.push(`/sessions?campaign=${communityTalks.id}`)}
                                className="group relative p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-full"
                            >
                                <div className="flex flex-col">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg bg-gradient-to-br",
                                        iconGradients[communityTalks.id as keyof typeof iconGradients]
                                    )}>
                                        <Mic size={26} />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {communityTalks.title}
                                    </h3>
                                    <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-2 mb-4">
                                        Connect with leaders and explore diverse AI domains across the community.
                                    </p>

                                    {/* Avatar Social Proof (Medium Format) */}
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="flex -space-x-2">
                                            {getProgramSpeakers(communityTalks.id).slice(0, 4).map((s, i) => (
                                                <div key={i} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 shadow-sm overflow-hidden">
                                                    <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                            {getProgramSpeakers(communityTalks.id).length > 4 && (
                                                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-800 text-white text-[8px] font-bold border-2 border-white dark:border-slate-900 shadow-sm">
                                                    +{getProgramSpeakers(communityTalks.id).length - 4}
                                                </div>
                                            )}
                                        </div>
                                        <div className="leading-tight">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                                                {reachData[communityTalks.id as keyof typeof reachData]} Developers
                                            </p>
                                            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                                                Campaign Reach
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1">
                                    Explore Sessions <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <Link href="/sessions">
                        <Button variant="ghost" size="lg" className="gap-2 text-lg font-bold hover:gap-4 transition-all rounded-2xl h-16 px-10 border border-slate-200 dark:border-slate-800">
                            Explore All Sessions <ArrowRight size={20} />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
