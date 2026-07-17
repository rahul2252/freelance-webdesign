"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clientConfig } from "@/client.config";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.48 1.34 4.997L2 22l5.116-1.334a9.96 9.96 0 0 0 4.888 1.28h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.927-7.067a9.933 9.933 0 0 0-7.074-2.879zm0 18.183h-.003a8.15 8.15 0 0 1-4.156-1.14l-.298-.177-3.037.792.811-2.96-.194-.304a8.156 8.156 0 0 1-1.253-4.401c0-4.512 3.672-8.184 8.187-8.184a8.13 8.13 0 0 1 5.79 2.398 8.135 8.135 0 0 1 2.397 5.791c0 4.512-3.673 8.185-8.244 8.185z" />
    </svg>
  );
}

export default function Hero() {
  const { hero, whatsapp, location } = clientConfig;

  return (
    <section id="home" className="relative min-h-[100svh] w-full bg-ink grid md:grid-cols-2 overflow-hidden">
      <div className="relative z-10 flex flex-col justify-end px-6 md:px-10 lg:px-14 pt-28 pb-16 md:pb-20">
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-cream/5 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-cream/[0.03] pointer-events-none"
          aria-hidden="true"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[10px] uppercase tracking-[0.25em] text-mauve mb-6"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl text-cream leading-[1.08] mb-6"
        >
          {hero.headingLines.map((line) => (
            <span
              key={line}
              className={`block ${line === hero.headingAccent ? "italic text-rose" : ""}`}
            >
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm text-cream/45 max-w-[300px] leading-relaxed mb-10"
        >
          {hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-2.5"
        >
          <a
            href={whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-cream text-xs font-medium uppercase tracking-[0.08em] hover:bg-deep transition-colors"
          >
            <WhatsAppIcon className="w-[15px] h-[15px]" />
            {hero.ctaLabel}
          </a>
          <a
            href={location.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream/70 text-xs uppercase tracking-[0.08em] hover:border-cream/40 hover:text-cream transition-colors"
          >
            📞 {hero.secondaryCtaLabel}
          </a>
        </motion.div>
      </div>

      <div className="relative hidden md:grid grid-rows-2 bg-[#2A1A18]">
        {hero.visuals.map((visual, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${i === 0 ? "border-b border-cream/5" : ""}`}
          >
            <Image
              src={visual.image}
              alt={visual.alt}
              fill
              priority={i === 0}
              sizes="50vw"
              className="object-cover brightness-[0.85]"
            />
            <span className="absolute bottom-4 left-4 px-3 py-1 bg-mauve text-cream text-[10px] uppercase tracking-[0.1em]">
              {visual.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
