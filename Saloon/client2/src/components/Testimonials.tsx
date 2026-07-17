import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  const { label, heading, items } = clientConfig.testimonials;

  return (
    <section className="bg-sand border-y border-border py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal className="max-w-lg mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-crimson mb-3">{label}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">{heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.author} delay={i * 100}>
              <div className="bg-ivory border border-border p-6 h-full flex flex-col">
                <div className="text-crimson text-sm tracking-[3px] mb-2.5">★★★★★</div>
                <p className="text-[13px] text-muted italic leading-relaxed mb-4 flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-xs font-medium text-crimson shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-ink">{item.author}</p>
                    <p className="text-[11px] text-muted">{item.tag}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
