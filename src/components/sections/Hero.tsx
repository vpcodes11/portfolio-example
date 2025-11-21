"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-9xl font-serif font-bold tracking-tighter z-10 text-black"
            >
                CREATIVE
                <br />
                DEVELOPER
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-6 text-lg md:text-xl font-sans tracking-widest uppercase text-foreground/80 z-10"
            >
                Crafting Digital Experiences
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
