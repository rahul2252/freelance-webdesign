import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Promo() {
  const { heading, items } = clientConfig.promos;

  return (
    <section className="py-20 md:py-24 px-6 lg:px-8 bg-sand">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-wide">{heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="text-center">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="160px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-lg text-ink mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
