import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function TrustStrip() {
  return (
    <section className="py-16 md:py-20 px-6 lg:px-10 bg-steel border-y border-cobalt/15">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {clientConfig.highlights.map((item, i) => (
          <Reveal key={item.label} delay={i * 90} className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-cobalt-soft mb-2">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
            </p>
            <p className="text-sm text-frost/60 font-light leading-snug uppercase tracking-[0.1em]">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
