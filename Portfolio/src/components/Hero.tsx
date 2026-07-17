"use client";

import { motion } from "framer-motion";
import { clientConfig } from "@/client.config";
import MagneticButton from "@/components/MagneticButton";

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 60, rotate: -2 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const ACCENT_WORDS = new Set(["LANDING", "PAGES"]);

export default function Hero() {
  const { hero } = clientConfig;
  const words = hero.heading.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden pt-16 md:pt-20 flex flex-col justify-center bg-[radial-gradient(circle_at_1px_1px,rgba(245,245,240,0.12)_1px,transparent_0)] bg-[length:28px_28px]"
    >
      <div className="mx-auto max-w-6xl w-full px-5 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border-2 border-paper text-[11px] md:text-xs uppercase tracking-[0.15em] font-bold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-acid" />
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="font-serif font-black text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] uppercase tracking-tight flex flex-wrap gap-x-4"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordItem}
              className={ACCENT_WORDS.has(word) ? "text-acid" : "text-paper"}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-7 max-w-xl text-paper/75 text-base md:text-lg font-light"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <MagneticButton
            href={hero.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-acid text-ink text-sm font-bold uppercase tracking-[0.1em] brutal-border border-acid brutal-shadow-magenta hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-[transform,box-shadow]"
          >
            {hero.ctaLabel}
          </MagneticButton>
          <MagneticButton
            href={hero.secondaryCtaHref}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-paper text-paper text-sm font-bold uppercase tracking-[0.1em] hover:bg-paper hover:text-ink transition-colors"
          >
            {hero.secondaryCtaLabel}
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "backOut" }}
          className="mt-12 inline-block px-5 py-2.5 bg-magenta text-ink font-bold text-sm uppercase tracking-[0.05em] brutal-border border-ink"
        >
          {hero.priceBadge}
        </motion.div>
      </div>
    </section>
  );
}
