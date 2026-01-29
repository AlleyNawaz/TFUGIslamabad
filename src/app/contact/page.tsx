"use client";

import { Button } from "@/components/ui/Button";
import { Mail, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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

        // Basic validation
        if (!formState.name || !formState.email || !formState.message) {
            setStatus("error");
            return;
        }

        setStatus("submitting");

        // Simulate network delay then open mailto
        setTimeout(() => {
            const mailtoLink = `mailto:TFUGIslamabad@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
            window.location.href = mailtoLink;
            setStatus("success");
            setFormState({ name: "", email: "", subject: "General Inquiry", message: "" });
        }, 800);
    };

    return (
        <div className="min-h-screen pb-20 pt-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        Have questions? Want to speak at an event? Or just want to say hi? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Community Channels</h2>
                            <div className="space-y-4">
                                <a href="mailto:TFUGIslamabad@gmail.com" className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">Email Us</p>
                                        <p className="text-sm text-slate-500">TFUGIslamabad@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://twitter.com/TFUGIslamabad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <Twitter size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">Twitter / X</p>
                                        <p className="text-sm text-slate-500">@TFUGIslamabad</p>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/company/TFUGIsl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">LinkedIn</p>
                                        <p className="text-sm text-slate-500">TFUG Islamabad</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white"
                        >
                            <h3 className="text-xl font-bold mb-4">Want to be a Speaker?</h3>
                            <p className="text-blue-100 mb-6">
                                We are always looking for community members to share their knowledge. Whether it&apos;s a 30-50 minutes lightning talk or a full workshop.
                            </p>
                            <a href="https://forms.gle/kWBcGuManm36bohUA" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" className="w-full">
                                    Submit a Proposal
                                </Button>
                            </a>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
                        {status === "success" ? (
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-center">
                                <p className="font-semibold">Message Prepared!</p>
                                <p className="text-sm mt-1">Opening your email client to send the message...</p>
                                <Button variant="outline" className="mt-4" onClick={() => setStatus("idle")}>Send Another</Button>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleContactSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="you@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                                    <select
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={formState.subject}
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Partnership / Sponsorship</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message <span className="text-red-500">*</span></label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="How can we help?"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    ></textarea>
                                </div>
                                {status === "error" && (
                                    <p className="text-red-500 text-sm">Please fill in all required fields.</p>
                                )}
                                <Button size="lg" className="w-full" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Preparing..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
