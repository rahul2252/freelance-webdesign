import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";
import DragGallery from "@/components/DragGallery";

export default function Collections() {
  const { heading, subheading, viewAllLabel, viewAllHref, products } =
    clientConfig.collections;

  return (
    <section id="collections" className="py-24 md:py-32 bg-concrete">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center mb-8 md:mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-cobalt mb-3">
            {subheading}
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-frost">{heading}</h2>
        </Reveal>
        <Reveal className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-frost/40">
            Drag to browse
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="px-6 lg:px-10">
          <DragGallery>
            {products.map((product) => (
              <article
                key={product.id}
                className="group relative w-64 md:w-72 mr-5 shrink-0 select-none"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="288px"
                    draggable={false}
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-serif text-lg text-frost">{product.name}</p>
                    <p className="text-sm text-cobalt-soft">{product.price}</p>
                  </div>
                </div>
              </article>
            ))}
          </DragGallery>
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center mt-14 md:mt-16">
          <a
            href={viewAllHref}
            className="link-underline inline-block text-xs uppercase tracking-[0.2em] text-cobalt-soft"
          >
            {viewAllLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
