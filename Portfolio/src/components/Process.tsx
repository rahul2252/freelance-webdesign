import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Process() {
  const { heading, subheading, steps } = clientConfig.process;

  return (
    <section id="process" className="py-24 md:py-32 px-5 lg:px-8 bg-panel">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 md:mb-20 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-magenta mb-3 font-bold">
            {subheading}
          </p>
          <h2 className="font-serif font-black text-4xl md:text-5xl uppercase text-paper">
            {heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 md:divide-x-2 md:divide-paper border-2 border-paper">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className="p-6 md:p-8">
              <span className="font-serif font-black text-5xl md:text-6xl text-acid block mb-4">
                {step.number}
              </span>
              <h3 className="font-serif font-bold text-lg md:text-xl text-paper uppercase mb-2">
                {step.title}
              </h3>
              <p className="text-paper/65 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
