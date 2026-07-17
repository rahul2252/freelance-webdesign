"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue } from "framer-motion";

function subscribeFinePointer(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function useIsFinePointer() {
  return useSyncExternalStore(
    subscribeFinePointer,
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
}

export default function CustomCursor() {
  const isFinePointer = useIsFinePointer();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (!isFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [isFinePointer, x, y]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: hovering ? 2.2 : 1 }}
      transition={{ opacity: { duration: 0.2 }, scale: { type: "spring", stiffness: 300, damping: 20 } }}
      className="pointer-events-none fixed left-0 top-0 z-[100] w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-acid mix-blend-difference"
    />
  );
}
