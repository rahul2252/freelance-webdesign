import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Services() {
  const { label, heading, items } = clientConfig.services;

  return (
    <section id="services" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-14 md:mb-16 text-right">
          <p className="text-[10px] uppercase tracking-[0.22em] text-crimson mb-3">{label}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-wide">{heading}</h2>
        </Reveal>

        <div className="flex flex-col gap-16 md:gap-20">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 100}>
              <div className="grid md:grid-cols-[auto_1fr_1.3fr] gap-6 md:gap-10 items-center">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto md:mx-0">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="192px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-ink text-center md:text-left tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-loose">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
