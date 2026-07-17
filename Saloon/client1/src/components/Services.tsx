"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Services() {
  const { label, heading, headingAccent, tabs } = clientConfig.services;
  const [activeId, setActiveId] = useState<string>(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section id="services" className="bg-blush border-y border-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 md:py-24">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.22em] text-mauve mb-3">{label}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8">
            {heading}
            <em className="text-mauve">{headingAccent}</em>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap border-b border-border mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.1em] font-medium -mb-px border-b-2 transition-colors ${
                  tab.id === activeId
                    ? "text-deep border-deep"
                    : "text-muted border-transparent hover:text-deep/70"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            {active.items.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-baseline gap-4 py-3.5 border-b border-border last:border-none"
              >
                <div>
                  <p className="text-sm font-medium text-ink">{item.name}</p>
                  <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-sm font-medium text-deep">{item.price}</span>
                  <span className="text-[11px] text-muted">{item.time}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
