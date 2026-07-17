"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { clientConfig } from "@/client.config";
import StaggerText from "@/components/StaggerText";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const { heroSlides, hero } = clientConfig;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, hero.slideIntervalMs);
    return () => clearInterval(id);
  }, [heroSlides.length, hero.slideIntervalMs]);

  return (
    <section id="home" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={heroSlides[index].id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[index].image}
            alt={heroSlides[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/55 to-void/85" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-cobalt-soft mb-4"
        >
          {clientConfig.brand.tagline}
        </motion.p>
        <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl text-frost tracking-wide leading-none">
          <StaggerText text={hero.heading} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-5 max-w-md text-frost/80 text-base md:text-lg font-light tracking-wide"
        >
          {hero.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton
            href={hero.ctaHref}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-cobalt text-frost text-xs uppercase tracking-[0.2em] hover:bg-cobalt-soft transition-colors"
          >
            {hero.ctaLabel}
          </MagneticButton>
          <MagneticButton
            href={hero.secondaryCtaHref}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-frost/40 text-frost text-xs uppercase tracking-[0.2em] hover:border-cobalt-soft hover:text-cobalt-soft transition-colors"
          >
            {hero.secondaryCtaLabel}
          </MagneticButton>
        </motion.div>
      </div>

      <div className="absolute bottom-8 inset-x-0 z-10 flex justify-center gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-cobalt" : "w-1.5 bg-frost/40 hover:bg-frost/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
