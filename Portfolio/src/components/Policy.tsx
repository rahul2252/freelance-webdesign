import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

function DotIcon({ className = "" }: { className?: string }) {
  return <span className={`inline-block w-1.5 h-1.5 mt-2 shrink-0 ${className}`} aria-hidden="true" />;
}

export default function Policy() {
  const { subheading, heading, intro, included, additional, additionalNote, terms, acceptClause } =
    clientConfig.policy;

  return (
    <section id="policy" className="py-24 md:py-28 px-5 lg:px-8 bg-panel border-t-2 border-paper">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-magenta mb-3 font-bold">
            {subheading}
          </p>
          <h2 className="font-serif font-black text-4xl md:text-5xl uppercase text-paper mb-4">
            {heading}
          </h2>
          <p className="text-paper/60 text-sm md:text-base font-light max-w-xl mx-auto">{intro}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Reveal className="brutal-border border-paper bg-ink p-6 md:p-8">
            <h3 className="font-serif font-bold text-lg text-paper mb-5 uppercase tracking-tight">
              Included in Every Plan
            </h3>
            <ul className="flex flex-col gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-paper/80 text-sm">
                  <DotIcon className="bg-acid" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="brutal-border border-paper bg-ink p-6 md:p-8">
            <h3 className="font-serif font-bold text-lg text-paper mb-5 uppercase tracking-tight">
              Additional Cost Applies For
            </h3>
            <ul className="flex flex-col gap-3">
              {additional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-paper/80 text-sm">
                  <DotIcon className="bg-magenta" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 pt-5 border-t border-paper/15 text-paper/55 text-xs leading-relaxed">
              {additionalNote}
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-6 md:mt-8 brutal-border border-paper bg-ink p-6 md:p-8">
          <h3 className="font-serif font-bold text-lg text-paper mb-5 uppercase tracking-tight">
            Subscription Terms
          </h3>
          <ul className="flex flex-col gap-3 mb-6">
            {terms.map((item) => (
              <li key={item} className="flex items-start gap-3 text-paper/80 text-sm">
                <DotIcon className="bg-paper/40" />
                {item}
              </li>
            ))}
          </ul>
          <p className="pt-5 border-t-2 border-paper/20 text-paper text-sm font-bold">
            {acceptClause}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
