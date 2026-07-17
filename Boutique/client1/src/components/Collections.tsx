import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Collections() {
  const { heading, subheading, viewAllLabel, viewAllHref, products } =
    clientConfig.collections;

  return (
    <section id="collections" className="py-24 md:py-32 px-6 lg:px-10 bg-cream">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            {subheading}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">{heading}</h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-14">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 100}>
              <article className="group">
                <div className="img-zoom relative aspect-[3/4] bg-beige">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 md:p-5 text-cream">
                      <p className="text-sm md:text-base">{product.name}</p>
                      <p className="text-sm text-cream/90">{product.price}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 md:hidden">
                  <p className="text-sm text-ink">{product.name}</p>
                  <p className="text-sm text-charcoal/70">{product.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14 md:mt-16">
          <a
            href={viewAllHref}
            className="inline-block text-sm uppercase tracking-[0.15em] border-b border-accent text-accent pb-1 hover:text-accent-dark hover:border-accent-dark transition-colors"
          >
            {viewAllLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
