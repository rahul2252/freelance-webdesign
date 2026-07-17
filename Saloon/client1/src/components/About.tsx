import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function About() {
  const { label, heading, headingAccent, headingRest, body } = clientConfig.about;

  return (
    <section className="py-20 md:py-24 px-6 lg:px-8">
      <Reveal className="max-w-2xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.22em] text-mauve mb-3">{label}</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-4">
          {heading}
          <em className="text-mauve">{headingAccent}</em>
          {headingRest}
        </h2>
        <p className="text-sm text-muted leading-loose max-w-md">{body}</p>
      </Reveal>
    </section>
  );
}
