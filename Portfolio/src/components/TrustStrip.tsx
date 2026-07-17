import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function TrustStrip() {
  const projectCount = clientConfig.work.projects.length;

  return (
    <section className="py-16 md:py-20 px-5 lg:px-8 bg-panel border-y-2 border-paper">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-5 gap-8 md:gap-6">
        <Reveal className="sm:col-span-1 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1">
          <p className="font-serif font-black text-4xl md:text-5xl text-acid">
            <AnimatedCounter value={projectCount} suffix="" />
          </p>
          <p className="text-xs text-paper/60 font-bold uppercase tracking-[0.1em]">
            Live Projects Shipped
          </p>
        </Reveal>

        {clientConfig.highlights.map((item, i) => (
          <Reveal key={item.title} delay={(i + 1) * 90} className="sm:col-span-1">
            <p className="font-serif font-bold text-base md:text-lg text-paper mb-1.5">
              {item.title}
            </p>
            <p className="text-sm text-paper/60 font-light leading-snug">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
