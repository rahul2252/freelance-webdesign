import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  const { label, heading, images } = clientConfig.gallery;

  return (
    <section id="gallery" className="bg-ink py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.22em] text-crimson-soft mb-3">{label}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory tracking-wide">{heading}</h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={img.image}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                loading="lazy"
                className="object-cover brightness-[0.92] hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
