import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function BeforeAfter() {
  const { label, heading, headingAccent, body, items } = clientConfig.beforeAfter;

  return (
    <section id="results" className="bg-ink py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-10 max-w-lg">
          <p className="text-[10px] uppercase tracking-[0.22em] text-mauve mb-3">{label}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3">
            {heading}
            <em className="text-rose">{headingAccent}</em>
          </h2>
          <p className="text-sm text-cream/45 leading-relaxed">{body}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <Reveal key={item.service} delay={i * 100}>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    loading="lazy"
                    className="object-cover brightness-[0.9]"
                  />
                </div>
                <div className="flex justify-between items-center px-3.5 py-2.5 border-t border-cream/[0.06]">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-cream/40">
                    {item.service}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.1em] font-medium px-2.5 py-1 bg-mauve text-cream">
                    After ✦
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
