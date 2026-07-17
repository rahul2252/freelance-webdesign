import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

const TIER_COLOR: Record<string, string> = {
  Minimalist: "bg-paper text-ink",
  Animated: "bg-acid text-ink",
  "Advanced Animation": "bg-magenta text-ink",
};

export default function WorkGrid() {
  const { heading, subheading, description, projects } = clientConfig.work;

  return (
    <section id="work" className="py-24 md:py-32 px-5 lg:px-8 bg-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 md:mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-acid mb-3 font-bold">
            {subheading}
          </p>
          <h2 className="font-serif font-black text-4xl md:text-5xl uppercase text-paper mb-4">
            {heading}
          </h2>
          <p className="text-paper/70 text-base md:text-lg font-light">{description}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 100}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group block brutal-border border-paper bg-panel hover:brutal-shadow transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-paper bg-ink">
                  <Image
                    src={project.image}
                    alt={`${project.name} landing page preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 border-2 border-paper text-paper/80">
                      {project.category}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 ${TIER_COLOR[project.tier]}`}
                    >
                      {project.tier}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-paper mb-2">
                    {project.name}
                  </h3>
                  <p className="text-paper/60 text-sm font-light mb-3">{project.description}</p>
                  <span className="link-underline text-xs uppercase tracking-[0.15em] text-acid font-bold">
                    View Live Site ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
