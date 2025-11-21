"use client";
import { motion } from "framer-motion";

const services = [
    "Creative Direction",
    "Web Development",
    "3D Implementation",
    "Motion Design",
    "Brand Identity"
];

export default function Services() {
    return (
        <section id="services" className="min-h-screen w-full py-20 px-6 md:px-20 flex flex-col justify-center bg-secondary/30 backdrop-blur-sm">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif mb-16"
            >
                Services
            </motion.h2>

            <div className="grid gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-sans font-light tracking-wide border-b border-white/10 pb-4 hover:text-primary transition-colors cursor-default"
                    >
                        {service}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
