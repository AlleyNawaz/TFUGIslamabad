"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    const values = [
        "Inclusivity & Diversity",
        "Open Source Collaboration",
        "Hands-on Learning",
        "Industry-Academia Bridge",
        "Innovation First",
        "Community Driven",
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-slate-50 dark:bg-slate-900 py-20 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        About TFUG Islamabad
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        We are a community of developers, researchers, and students passionate about Artificial Intelligence, Machine Learning, and Google Technologies.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
                {/* Mission Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Our mission is to democratize AI education in Pakistan. We believe that by providing high-quality resources, mentorship, and a platform for collaboration, we can empower the next generation of AI innovators.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            Whether you are a student just starting with Python or a researcher publishing papers at NeurIPS, TFUG Islamabad is your home to learn, share, and grow.
                        </p>
                    </div>
                    <div className="relative aspect-square md:aspect-video bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-500">
                        <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 font-black text-9xl">TFUG</div>
                    </div>
                </motion.section>

                {/* Values Section */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Core Values</h2>
                        <p className="text-slate-600 dark:text-slate-400">The principles that guide our community.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm"
                            >
                                <CheckCircle2 className="text-green-500" />
                                <span className="font-semibold text-slate-800 dark:text-slate-200">{value}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Google Ecosystem */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Part of the Google Developer Ecosystem</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
                        As an official TensorFlow User Group, we are connected with the global network of Google Developer Groups (GDGs), Google Developer Experts (GDEs), and Women Techmakers. This gives our members access to world-class resources, study jams, and networking opportunities.
                    </p>
                    {/* Placeholder for ecosystem logos */}
                    <div className="flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {/* Text placeholders for logos */}
                        <span className="font-bold text-xl">TensorFlow</span>
                        <span className="font-bold text-xl">Keras</span>
                        <span className="font-bold text-xl">JAX</span>
                        <span className="font-bold text-xl">Gemini</span>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
