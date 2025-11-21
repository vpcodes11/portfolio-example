"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen w-full py-20 px-6 md:px-20 flex flex-col justify-center items-center bg-background relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-serif mb-8 text-center"
            >
                Let's Talk
            </motion.h2>

            <motion.a
                href="mailto:hello@example.com"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-sans uppercase tracking-widest border border-primary px-8 py-4 rounded-full hover:bg-primary hover:text-background transition-all"
            >
                Get in Touch
            </motion.a>

            <footer className="absolute bottom-10 w-full text-center text-sm text-white/40 font-sans">
                © 2025 Portfolio. All Rights Reserved.
            </footer>
        </section>
    );
}
