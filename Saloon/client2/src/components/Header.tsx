"use client";

import { useEffect, useState } from "react";
import { clientConfig } from "@/client.config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ivory/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        >
          <span className={`block h-px w-6 transition-transform ${scrolled ? "bg-ink" : "bg-ivory"} ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 transition-opacity ${scrolled ? "bg-ink" : "bg-ivory"} ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 transition-transform ${scrolled ? "bg-ink" : "bg-ivory"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <a
          href="#home"
          className={`font-serif text-2xl tracking-[0.15em] transition-colors ${
            scrolled ? "text-crimson" : "text-ivory"
          }`}
        >
          {clientConfig.brand.logoText}
        </a>

        <a
          href={clientConfig.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden sm:inline-flex items-center px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] transition-colors ${
            scrolled ? "bg-crimson text-ivory hover:bg-ink" : "bg-ivory/15 text-ivory border border-ivory/40 hover:bg-ivory/25"
          }`}
        >
          Book Now
        </a>
      </div>

      {open && (
        <nav className="bg-ivory border-t border-border px-6 py-6 flex flex-col gap-5">
          {clientConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.16em] text-ink/70 hover:text-crimson transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={clientConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-crimson text-ivory text-xs font-medium uppercase tracking-[0.1em] w-fit"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
