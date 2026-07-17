"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function BrandStory() {
  const { heading, body, image, imageAlt } = clientConfig.story;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-10 bg-obsidian">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div
          ref={ref}
          className="relative aspect-[4/5] order-1 md:order-none overflow-hidden"
        >
          <motion.div style={{ y }} className="absolute inset-[-8%]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </motion.div>
        </div>

        <Reveal delay={150}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Since 2018
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">
            {heading}
          </h2>
          <p className="text-ivory/70 leading-relaxed text-base md:text-lg font-light">
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
