"use client";

import { useState } from "react";
import { clientConfig } from "@/client.config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink border-b-2 border-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          className="font-serif font-bold text-sm md:text-base tracking-tight text-paper uppercase"
        >
          {clientConfig.brand.logoText}
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {clientConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-xs uppercase tracking-[0.2em] text-paper/80 hover:text-acid transition-colors"
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
            data-cursor-hover
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-acid text-ink text-xs font-bold uppercase tracking-[0.1em] brutal-border border-acid hover:bg-paper transition-colors"
          >
            Start a Project
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span className={`block h-0.5 w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-ink border-t-2 border-paper px-5 py-6 flex flex-col gap-5">
          {clientConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-paper/80 hover:text-acid transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={clientConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 bg-acid text-ink text-xs font-bold uppercase tracking-[0.1em] w-fit"
          >
            Start a Project
          </a>
        </nav>
      )}
    </header>
  );
}
