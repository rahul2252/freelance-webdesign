import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-cream">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">
            What Our Customers Say
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {clientConfig.testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              delay={i * 100}
              className="border border-stone/70 p-8 flex flex-col gap-6"
            >
              <p className="font-serif text-xl text-accent leading-none">
                &ldquo;
              </p>
              <p className="text-charcoal/85 leading-relaxed font-light -mt-8">
                {t.quote}
              </p>
              <p className="text-sm uppercase tracking-[0.15em] text-ink/70">
                {t.author}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
