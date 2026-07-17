"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { clientConfig } from "@/client.config";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = window.scrollY * 0.35;
        node.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden"
    >
      <div ref={imgRef} className="absolute inset-0 -top-16 h-[calc(100%+8rem)]">
        <Image
          src={clientConfig.hero.image}
          alt={clientConfig.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-cream tracking-wide">
          {clientConfig.hero.heading}
        </h1>
        <p className="mt-5 max-w-md text-cream/90 text-base md:text-lg font-light tracking-wide">
          {clientConfig.hero.tagline}
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={clientConfig.hero.ctaHref}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-cream text-sm uppercase tracking-[0.15em] hover:bg-accent-dark transition-colors"
          >
            {clientConfig.hero.ctaLabel}
          </a>
          <a
            href={clientConfig.hero.secondaryCtaHref}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-cream/70 text-cream text-sm uppercase tracking-[0.15em] hover:bg-cream/10 transition-colors"
          >
            {clientConfig.hero.secondaryCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
