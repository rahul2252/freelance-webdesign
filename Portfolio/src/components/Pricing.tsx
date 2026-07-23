import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true">
      <rect x="0.5" y="0.5" width="19" height="19" fill="currentColor" className="text-acid" />
      <path d="M5 10.5L8.5 14L15 6.5" stroke="black" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export default function Pricing() {
  const { heading, subheading, policyNote, policyHref, plan, features, ctaLabel } =
    clientConfig.pricing;

  return (
    <section id="pricing" className="py-24 md:py-32 px-5 lg:px-8 bg-ink">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-magenta mb-3 font-bold">
            {subheading}
          </p>
          <h2 className="font-serif font-black text-4xl md:text-5xl uppercase text-paper">
            {heading}
          </h2>
        </Reveal>

        <Reveal className="mb-12 md:mb-16 text-center">
          <p className="text-paper/60 text-sm md:text-base font-light max-w-xl mx-auto">
            {policyNote}{" "}
            <a href={policyHref} className="link-underline text-acid font-medium">
              Read the full policy
            </a>
          </p>
        </Reveal>

        <Reveal>
          <div className="relative brutal-border border-paper brutal-shadow bg-panel p-8 md:p-12">
            {"badge" in plan && plan.badge && (
              <span className="absolute -top-4 left-8 md:left-12 bg-magenta text-ink text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 brutal-border border-ink whitespace-nowrap">
                {plan.badge}
              </span>
            )}

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              {"originalPrice" in plan && plan.originalPrice && (
                <span className="font-serif text-lg sm:text-2xl md:text-3xl text-paper/40 line-through">
                  {plan.originalPrice}
                </span>
              )}
              <span className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-paper">
                {plan.price}
              </span>
              <span className="text-paper/60 text-sm uppercase tracking-[0.1em]">
                {plan.period}
              </span>
            </div>
            <p className="text-paper/50 text-xs md:text-sm">{plan.billingNote}</p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-paper/85 text-sm md:text-base">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <MagneticButton
              href={clientConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-acid text-ink text-sm font-bold uppercase tracking-[0.1em] brutal-border border-acid hover:bg-paper transition-colors"
            >
              {ctaLabel}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
