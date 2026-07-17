"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function StaggerText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-flex ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter} aria-hidden="true">
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
