"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clientConfig } from "@/client.config";

export default function Hero() {
  const { hero } = clientConfig;

  return (
    <section id="home" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl tracking-[0.1em] text-ivory"
        >
          {clientConfig.brand.logoText}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 text-xs uppercase tracking-[0.3em] text-ivory/70"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href={hero.ctaHref}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-crimson text-ivory text-xs font-medium uppercase tracking-[0.15em] hover:bg-crimson-soft transition-colors"
          >
            {hero.ctaLabel}
          </a>
          <a
            href={hero.secondaryCtaHref}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-ivory/50 text-ivory text-xs uppercase tracking-[0.15em] hover:bg-ivory/10 transition-colors"
          >
            {hero.secondaryCtaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
