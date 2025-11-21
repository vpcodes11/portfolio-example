"use client";
import { motion } from "framer-motion";

const projects = [
    { id: 1, title: "Ethereal Spaces", category: "Web Design", year: "2024", color: "#c0a062" },
    { id: 2, title: "Neon Horizon", category: "Development", year: "2023", color: "#8b5cf6" },
    { id: 3, title: "Abstract Forms", category: "3D Art", year: "2023", color: "#ec4899" },
    { id: 4, title: "Digital Zenith", category: "Experience", year: "2022", color: "#3b82f6" },
];

export default function Work() {
    return (
        <section
            id="work"
            className="min-h-screen w-full py-20 px-6 md:px-20 bg-background relative z-10 overflow-hidden"
        >
            <h2 className="mb-20 text-right text-4xl md:text-6xl font-serif">
                Selected Work
            </h2>

            <div className="flex flex-col relative z-20">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group border-t border-white/10 py-12 flex flex-col md:flex-row justify-between items-baseline hover:bg-secondary/50 transition-colors px-4 cursor-pointer relative"
                    >
                        <h3 className="text-3xl md:text-5xl font-serif group-hover:translate-x-4 transition-transform duration-300 text-foreground">
                            {project.title}
                        </h3>
                        <div className="flex gap-8 mt-4 md:mt-0 font-sans text-sm uppercase tracking-widest text-foreground/60">
                            <span>{project.category}</span>
                            <span>{project.year}</span>
                        </div>
                    </motion.div>
                ))}
                <div className="border-t border-white/10" />
            </div>
        </section>
    );
}
