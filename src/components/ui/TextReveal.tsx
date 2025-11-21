"use client";
import { motion } from "framer-motion";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    const words = children.split(" ");

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ staggerChildren: 0.05, delayChildren: delay }}
                className="flex flex-wrap"
            >
                {words.map((word, i) => (
                    <span key={i} className="inline-block mr-[0.25em] overflow-hidden">
                        <motion.span
                            variants={{
                                hidden: { y: "100%" },
                                visible: { y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                            className="inline-block"
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
