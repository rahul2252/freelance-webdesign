import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function TrustStrip() {
  return (
    <section className="py-16 md:py-20 px-6 lg:px-10 bg-ink text-cream">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {clientConfig.highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className="text-center">
            <p className="font-serif text-lg md:text-xl mb-2">{item.title}</p>
            <p className="text-sm text-cream/70 font-light leading-snug">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
