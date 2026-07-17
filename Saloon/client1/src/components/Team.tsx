import Image from "next/image";
import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Team() {
  const { label, heading, headingAccent, body, members } = clientConfig.team;

  return (
    <section id="team" className="py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal className="max-w-lg">
          <p className="text-[10px] uppercase tracking-[0.22em] text-mauve mb-3">{label}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-3">
            {heading}
            <em className="text-mauve">{headingAccent}</em>
          </h2>
          <p className="text-sm text-muted leading-relaxed">{body}</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mt-10">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <article className="bg-white border border-border">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={`${member.name} – ${member.role}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-ink/55 backdrop-blur-[2px] px-3 py-2">
                    <span className="text-[10px] uppercase tracking-[0.12em] text-cream/80">
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-3.5">
                  <p className="text-[15px] font-medium text-ink">{member.name}</p>
                  <p className="text-xs text-muted mt-0.5">{member.role}</p>
                  <p className="text-[11px] text-mauve mt-1.5">{member.exp}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
