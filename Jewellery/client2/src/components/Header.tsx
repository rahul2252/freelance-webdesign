"use client";

import { useEffect, useState } from "react";
import { clientConfig } from "@/client.config";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.48 1.34 4.997L2 22l5.116-1.334a9.96 9.96 0 0 0 4.888 1.28h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.927-7.067a9.933 9.933 0 0 0-7.074-2.879zm0 18.183h-.003a8.15 8.15 0 0 1-4.156-1.14l-.298-.177-3.037.792.811-2.96-.194-.304a8.156 8.156 0 0 1-1.253-4.401c0-4.512 3.672-8.184 8.187-8.184a8.13 8.13 0 0 1 5.79 2.398 8.135 8.135 0 0 1 2.397 5.791c0 4.512-3.673 8.185-8.244 8.185z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-obsidian/90 backdrop-blur-sm border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          className="font-serif text-2xl md:text-3xl tracking-[0.08em] text-ivory"
        >
          {clientConfig.brand.logoText}
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {clientConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-xs uppercase tracking-[0.2em] text-ivory/80 hover:text-gold-soft transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={clientConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 text-gold-soft hover:border-gold hover:text-gold transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span className={`block h-px w-6 bg-ivory transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ivory transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-ivory transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-obsidian border-t border-gold/15 px-6 py-6 flex flex-col gap-5">
          {clientConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-ivory/80 hover:text-gold-soft transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={clientConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-soft"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
