"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DragGallery({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraint, setConstraint] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current && trackRef.current) {
        const overflow =
          trackRef.current.scrollWidth - containerRef.current.offsetWidth;
        setConstraint(overflow > 0 ? -overflow : 0);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [children]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        ref={trackRef}
        drag="x"
        dragConstraints={{ left: constraint, right: 0 }}
        dragElastic={0.12}
        className="drag-gallery-track flex w-max"
      >
        {children}
      </motion.div>
    </div>
  );
}
