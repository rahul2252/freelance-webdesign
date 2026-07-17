"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  const { testimonials } = clientConfig;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-onyx">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal className="mb-14 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-rosegold mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-pearl">
            Words From Our Clients
          </h2>
        </Reveal>

        <div className="relative h-56 md:h-44 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            >
              <p className="font-serif text-xl md:text-2xl text-pearl/90 leading-relaxed">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-rosegold-soft">
                {testimonials[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-rosegold" : "w-1.5 bg-pearl/30 hover:bg-pearl/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
