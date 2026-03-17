"use client";

import { Button } from "@/components/ui/Button";
import { Mail, Twitter, Linkedin, ArrowRight, Sparkles, Users, Code, MessageCircle, Send, Globe, Mic, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { speakers } from "@/data/speakers";

// --- Components ---

const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
    <div className={cn("mb-16", centered && "text-center")}>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4"
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

const AvatarStack = () => {
    // Pick some diverse speakers for the stack
    const displaySpeakers = speakers.slice(0, 5);
    
    return (
        <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex -space-x-4">
                {displaySpeakers.map((speaker, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className="w-full h-full object-cover scale-110"
                        />
                    </motion.div>
                ))}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-[10px] font-black z-10 shadow-xl"
                >
                    +3.5k
                </motion.div>
            </div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em]">
                3,500+ builders building together
            </p>
        </div>
    );
};

const JoinCard = ({ icon: Icon, title, description, cta, href, gradient }: { icon: any, title: string, description: string, cta: string, href: string, gradient: string }) => (
    <motion.div
        whileHover={{ y: -8 }}
        className="group p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br", gradient)}>
            <Icon size={28} />
        </div>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-grow">
            {description}
        </p>
        <Link href={href} target={href.startsWith('http') ? "_blank" : "_self"}>
            <Button variant="ghost" className="w-full gap-2 font-bold hover:gap-4 transition-all rounded-xl h-12 border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                {cta} <ArrowRight size={18} />
            </Button>
        </Link>
    </motion.div>
);

// --- Main Page ---

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) {
            setStatus("error");
            return;
        }
        setStatus("submitting");
        setTimeout(() => {
            const mailtoLink = `mailto:TFUGIslamabad@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
            window.location.href = mailtoLink;
            setStatus("success");
            setFormState({ name: "", email: "", subject: "General Inquiry", message: "" });
        }, 800);
    };

    return (
        <div className="min-h-screen pb-32 pt-20 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/20 dark:from-blue-950/20 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. HERO SECTION */}
                <div className="text-center mb-32 pt-16">
                    <AvatarStack />
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]"
                    >
                        Join the Future of <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block">AI in Pakistan</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12"
                    >
                        Be part of a growing community of 3,500+ developers building real AI projects, learning together, and shaping the future.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
                    >
                        <a href="#choose-path">
                            <Button size="lg" className="gap-3 bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-500/20 px-10 h-16 rounded-2xl font-black uppercase tracking-widest text-sm w-full sm:w-auto">
                                Join Community
                                <Zap size={20} fill="currentColor" />
                            </Button>
                        </a>
                        <Link href="/sessions">
                            <Button variant="ghost" size="lg" className="gap-3 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 px-10 h-16 rounded-2xl font-black uppercase tracking-widest text-sm">
                                Explore Sessions
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* 2. JOIN OPTIONS (Decision Framework) */}
                <section id="choose-path" className="mb-32 mt-20 pt-20 border-t border-slate-100 dark:border-slate-800/50">
                    <SectionHeader 
                        title="Choose Your Path" 
                        subtitle="Start your journey with TensorFlow User Group Islamabad based on how you want to learn, build, and contribute."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <JoinCard 
                            icon={Users}
                            title="Learn & Build"
                            description="Attend sessions, learn AI foundations, and build real-world projects alongside experts."
                            cta="Start Learning"
                            href="/sessions"
                            gradient="from-blue-600 to-indigo-600"
                        />
                        <JoinCard 
                            icon={Mic}
                            title="Share Your Knowledge"
                            description="Share your expertise through talks and workshops with our developer audience."
                            cta="Submit Proposal"
                            href="https://forms.gle/kWBcGuManm36bohUA"
                            gradient="from-purple-600 to-pink-600"
                        />
                        <JoinCard 
                            icon={Globe}
                            title="Collaborate & Grow"
                            description="Partner with us to grow AI education impact and support the local ecosystem."
                            cta="Get in Touch"
                            href="#contact-form"
                            gradient="from-emerald-600 to-teal-600"
                        />
                    </div>
                </section>

                {/* 3. PREMIUM SPEAKER SECTION */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-10 md:p-16 rounded-[3rem] text-white shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-12">
                        {/* Decorative Icons */}
                        <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
                            <Sparkles size={200} />
                        </div>
                        
                        <div className="flex-1 space-y-8 z-10">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                <Mic size={14} className="animate-pulse" />
                                Call for Speakers
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
                                Speak at <br/> TFUG Islamabad
                            </h2>
                            <p className="text-xl text-blue-100 font-medium leading-relaxed max-w-lg">
                                Join our speaker community and share your expertise with 3,500+ developers shaping the future of AI.
                            </p>
                            <ul className="space-y-4">
                                {["Lightning talks (30–40 mins)", "Deep dives & workshops", "Real-world AI case studies"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-lg">
                                        <CheckCircle2 size={24} className="text-blue-300" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="https://forms.gle/kWBcGuManm36bohUA" target="_blank">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl font-black uppercase tracking-widest text-sm rounded-2xl h-14 px-10 mt-4 group">
                                    Submit Proposal
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>

                        <div className="flex-1 w-full md:w-auto relative z-10 hidden lg:block">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-400 rounded-3xl rotate-3 scale-105 opacity-20" />
                                <div className="grid grid-cols-2 gap-4">
                                    {speakers.filter(s => ["ashmi-banerjee", "damian-sztankowski", "eya-laouini", "tomek-porozynski"].includes(s.id)).map((s, i) => (
                                        <div key={i} className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
                                            <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 4. STAY CONNECTED CHANNEL GRID */}
                <section className="mb-32">
                    <SectionHeader 
                        title="Stay Connected" 
                        subtitle="Follow us and stay updated with upcoming sessions, community events, and unique opportunities."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { 
                                icon: Mail, 
                                label: "Email Updates", 
                                value: "TFUGIslamabad@gmail.com", 
                                desc: "Get announcements and important community updates directly.", 
                                href: "mailto:TFUGIslamabad@gmail.com",
                                color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400" 
                            },
                            { 
                                icon: Twitter, 
                                label: "Twitter / X", 
                                value: "@TFUGIslamabad", 
                                desc: "Stay updated in real-time with our latest news and event live-feeds.", 
                                href: "https://twitter.com/TFUGIslamabad",
                                color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" 
                            },
                            { 
                                icon: Linkedin, 
                                label: "LinkedIn", 
                                value: "TFUG Islamabad", 
                                desc: "Professional updates, speaker highlights, and industry networking.", 
                                href: "https://www.linkedin.com/company/TFUGIsl",
                                color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400" 
                            }
                        ].map((channel, i) => (
                            <motion.a 
                                key={i}
                                href={channel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col gap-6"
                            >
                                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", channel.color)}>
                                    <channel.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                                        {channel.label}
                                    </h4>
                                    <p className="text-sm text-slate-500 font-bold mb-3">{channel.value}</p>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">
                                        {channel.desc}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </section>

                {/* 5. CONTACT FORM */}
                <section id="contact-form" className="mb-32 max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Send size={150} />
                        </div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Send us a Message</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium mb-10">Have questions? We'd love to hear from you.</p>

                            {status === "success" ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-10 bg-green-50/50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 text-green-700 dark:text-green-300 rounded-3xl text-center"
                                >
                                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black mb-2">Message Ready!</h3>
                                    <p className="font-medium text-green-600 dark:text-green-400/80 mb-8">Opening your email client to send the message...</p>
                                    <Button variant="outline" className="rounded-xl font-bold border-green-200 dark:border-green-800" onClick={() => setStatus("idle")}>
                                        Send Another
                                    </Button>
                                </motion.div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleContactSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[13px] font-black uppercase tracking-widest text-slate-500">Name <span className="text-blue-500">*</span></label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                                placeholder="Your name"
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[13px] font-black uppercase tracking-widest text-slate-500">Email <span className="text-blue-500">*</span></label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                                placeholder="you@example.com"
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-black uppercase tracking-widest text-slate-500">Subject</label>
                                        <select
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                            value={formState.subject}
                                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                        >
                                            <option>General Inquiry</option>
                                            <option>Partnership / Sponsorship</option>
                                            <option>Feedback</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-black uppercase tracking-widest text-slate-500">Message <span className="text-blue-500">*</span></label>
                                        <textarea
                                            rows={5}
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none"
                                            placeholder="How can we help?"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    {status === "error" && (
                                        <p className="text-red-500 text-sm font-bold">Please fill in all required fields.</p>
                                    )}
                                    <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] active:scale-[0.98] transition-all rounded-xl font-black uppercase tracking-widest h-16 shadow-xl shadow-blue-500/20" disabled={status === "submitting"}>
                                        {status === "submitting" ? "Preparing..." : "Send Message"}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                {/* 6. TRUST STATS */}
                <section className="pt-10 mb-20">
                    <div className="max-w-4xl mx-auto px-6 py-12 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col items-center">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600 mb-8">
                            Trusted by developers across Pakistan
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-center">
                            {[
                                { label: "Sessions", val: "20+" },
                                { label: "Speakers", val: "30+" },
                                { label: "Developers", val: "3,500+" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.val}</span>
                                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
