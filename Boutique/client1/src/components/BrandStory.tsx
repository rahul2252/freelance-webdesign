import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function BrandStory() {
  const { heading, body, image, imageAlt } = clientConfig.story;

  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-10 bg-beige">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal className="relative aspect-[4/5] order-1 md:order-none">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={150}>
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Since 2015
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
            {heading}
          </h2>
          <p className="text-charcoal/85 leading-relaxed text-base md:text-lg font-light">
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
