"use client";

import { motion } from "framer-motion";
import { 
    CheckCircle2, 
    Users, 
    Sparkles, 
    Target, 
    Zap, 
    Link as LinkIcon, 
    Heart, 
    ArrowRight,
    Github,
    Code,
    Cpu
} from "lucide-react";
import { speakers } from "@/data/speakers";
import { Button } from "@/components/ui/Button";

// Brand Logos
import tfLogo from "@/images/tech/tensorflow.png";
import kerasLogo from "@/images/tech/Keras.png";
import jaxLogo from "@/images/tech/jax.png";
import geminiLogo from "@/images/tech/gemini.png";

export default function AboutPage() {
    const values = [
        { 
            title: "Inclusivity & Diversity", 
            icon: Users,
            desc: "A welcoming home for everyone, regardless of background or skill level."
        },
        { 
            title: "Open Source Collaboration", 
            icon: Github,
            desc: "Building together in the open, contributing to the global AI ecosystem."
        },
        { 
            title: "Hands-on Learning", 
            icon: Code,
            desc: "Moving beyond theory with practical projects and guided study jams."
        },
        { 
            title: "Industry-Academia Bridge", 
            icon: LinkIcon,
            desc: "Connecting university talent with real-world industry opportunities."
        },
        { 
            title: "Innovation First", 
            icon: Zap,
            desc: "Exploring the bleeding edge of AI research and Google technologies."
        },
        { 
            title: "Community Driven", 
            icon: Heart,
            desc: "Powered by passion and a shared vision for a smarter Pakistan."
        },
    ];

    const stats = [
        { label: "Sessions", value: "20+" },
        { label: "Speakers", value: "30+" },
        { label: "Developers", value: "3,500+" },
        { label: "Years Active", value: "3+" },
    ];

    const missions = [
        "Hands-on AI learning",
        "Real-world projects",
        "Research-driven approach",
        "Community collaboration"
    ];

    const differentiations = [
        {
            title: "Google-Backed Expertise",
            desc: "Direct access to Google Developer Experts (GDEs) and the global TensorFlow network."
        },
        {
            title: "Elite Learning Tracks",
            desc: "Specialized programs ranging from basic Math for AI to advanced LLM deployment."
        },
        {
            title: "Largest Pak-AI Reach",
            desc: "Impacted thousands of developers across Islamabad and beyond through our network."
        },
        {
            title: "Project-Centric Culture",
            desc: "We don't just talk about AI; we build production-grade systems together."
        }
    ];

    // Get a few speaker avatars for the hero
    const heroSpeakers = speakers.slice(0, 4);

    return (
        <div className="min-h-screen pb-20 bg-white dark:bg-slate-950">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tight"
                    >
                        We build the <span className="text-blue-600">future</span> of AI.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-4 mb-12"
                    >
                        <div className="flex -space-x-4">
                            {heroSpeakers.map((s, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 shadow-xl overflow-hidden bg-slate-100">
                                    <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 bg-slate-900 text-white flex items-center justify-center text-[10px] font-black shadow-xl">
                                +{speakers.length - 4}
                            </div>
                        </div>
                        <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                            3,500+ Developers Driven by Innovation
                        </p>
                    </motion.div>

                    {/* IMPACT STATS ROW */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-x-8 gap-y-4 py-8 border-y border-slate-100 dark:border-slate-900"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</span>
                                <span className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-10 pointer-events-none">
                    <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px]" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-[150px]" />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
                {/* MISSION SECTION (Structured) */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <div className="w-12 h-1 px-1 bg-blue-600 mb-6" />
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Our Mission</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                            Our mission is to democratize AI education in Pakistan. We believe that by providing high-quality resources, mentorship, and a platform for collaboration, we can empower the next generation of AI innovators.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {missions.map((m, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="font-bold text-slate-800 dark:text-slate-200">{m}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative p-1 bg-gradient-to-tr from-blue-500 to-indigo-700 rounded-3xl shadow-2xl group transition-all duration-500 hover:shadow-blue-500/10 hover:-translate-y-1">
                        <div className="bg-slate-900 rounded-[1.4rem] p-8 md:p-12 min-h-[320px] md:aspect-video flex flex-col justify-center relative">
                             {/* Subtle Background Watermark */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center select-none pointer-events-none uppercase tracking-tighter leading-[0.8]">
                                <span className="text-[70px] md:text-[90px] font-black text-white/5">TensorFlow</span>
                                <span className="text-[30px] md:text-[40px] font-black text-white/5 opacity-50">Islamabad</span>
                             </div>
                             
                             <div className="relative z-10">
                                <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                                    <Sparkles className="text-blue-400" size={28} />
                                    Build. Learn. Grow.
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { text: "Hands-on AI Projects", icon: Code },
                                        { text: "Research & Innovation", icon: Target },
                                        { text: "Real-world Systems", icon: Cpu },
                                        { text: "Community Learning", icon: Users }
                                    ].map((item, i) => (
                                        <motion.li 
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            className="flex items-center gap-3 text-white/80 font-bold"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-colors duration-500">
                                                <item.icon size={18} />
                                            </div>
                                            {item.text}
                                        </motion.li>
                                    ))}
                                </ul>
                             </div>
                        </div>
                    </div>
                </motion.section>

                {/* WHY TFUG ISLAMABAD (Differentiation) */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Why TFUG Islamabad?</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">What sets us apart as a community.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {differentiations.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* VALUES SECTION (Premium Cards) */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Core Values</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">The principles that guide our every move.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((v, idx) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{v.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{v.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* GOOGLE ECOSYSTEM (Visual) */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-12 lg:p-20 rounded-[3.5rem] bg-slate-950 text-center overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">Part of the Google Developer Ecosystem</h2>
                        <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-16 font-medium leading-relaxed">
                            As an official TensorFlow User Group, we are connected with the global network of GDGs, GDEs, and Women Techmakers. This gives our members access to world-class resources and networking.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { name: "TensorFlow", image: tfLogo },
                                { name: "Keras", image: kerasLogo },
                                { name: "JAX", image: jaxLogo },
                                { name: "Gemini", image: geminiLogo },
                            ].map((tech, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 group">
                                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:bg-white transition-all duration-500 shadow-xl p-4">
                                        <img 
                                            src={tech.image.src} 
                                            alt={tech.name} 
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <span className="font-black text-white/50 group-hover:text-white transition-colors uppercase tracking-widest text-sm">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Background decor */}
                    <div className="absolute inset-0 opacity-20">
                         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
                         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
                    </div>
                </motion.section>

                {/* FINAL CTA SECTION */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center py-24 rounded-[3.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden"
                >
                    <div className="relative z-10 px-8">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Ready to start your AI journey?</h2>
                        <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-12 font-medium">
                            Join 3,500+ developers in Pakistan&apos;s most active AI community today.
                        </p>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-16 px-12 rounded-2xl font-black text-lg gap-3 uppercase tracking-wider">
                            Join the Community
                            <ArrowRight size={24} />
                        </Button>
                    </div>
                    {/* Subtle grid pattern or dots */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" 
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
                    />
                </motion.section>
            </div>
        </div>
    );
}
