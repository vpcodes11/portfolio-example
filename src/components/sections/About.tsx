"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="min-h-screen w-full py-20 px-6 md:px-20 flex flex-col justify-center bg-secondary/50 backdrop-blur-sm">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif mb-12"
            >
                About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl leading-relaxed text-foreground/80 font-sans"
                >
                    <p className="mb-6">
                        I am a creative developer with a passion for building immersive digital experiences.
                        My work blends technical precision with artistic vision, creating websites that are not just functional, but memorable.
                    </p>
                    <p>
                        With expertise in React, WebGL, and modern frontend technologies, I transform ideas into interactive realities.
                    </p>
                </motion.div>
                <div className="relative h-[400px] bg-white/5 rounded-lg overflow-hidden border border-white/10">
                    {/* Placeholder for image or 3D element */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-serif">
                        [Portrait]
                    </div>
                </div>
            </div>
        </section>
    );
}
