import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export default function Collections() {
  const { heading, subheading, viewAllLabel, viewAllHref, products } =
    clientConfig.collections;

  return (
    <section id="collections" className="py-24 md:py-32 bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-moss mb-3">
            {subheading}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">{heading}</h2>
        </Reveal>
      </div>

      <Reveal>
        <Marquee>
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative w-64 md:w-72 mx-3 shrink-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="288px"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-serif text-lg text-cream">{product.name}</p>
                  <p className="text-sm text-stone">{product.price}</p>
                </div>
              </div>
            </article>
          ))}
        </Marquee>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center mt-14 md:mt-16">
          <a
            href={viewAllHref}
            className="link-underline inline-block text-xs uppercase tracking-[0.2em] text-moss"
          >
            {viewAllLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
