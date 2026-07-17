import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Founder() {
  const { label, name, body, image, imageAlt } = clientConfig.founder;
  const paragraphs = body.split("\n\n");

  return (
    <section id="story" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1.4fr] gap-8 md:gap-10 items-start">
        <Reveal>
          <p className="font-serif text-2xl md:text-3xl text-muted tracking-wide">{name}</p>
        </Reveal>

        <Reveal delay={100} className="mx-auto md:mx-0">
          <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="176px"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[10px] uppercase tracking-[0.22em] text-crimson mb-3 md:text-right">
            {label}
          </p>
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-muted leading-loose">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
