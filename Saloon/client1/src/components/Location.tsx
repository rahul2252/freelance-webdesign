import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

const STATUS_STYLE: Record<string, string> = {
  Open: "bg-green-500/15 text-green-400",
  Limited: "bg-mauve/15 text-mauve",
};

export default function Location() {
  const { label, heading, headingAccent, addressLines, lat, lng, mapZoom, phone, phoneHref, hours, directionsHref } =
    clientConfig.location;

  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${mapZoom}&output=embed`;

  return (
    <section id="location" className="bg-ink py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-mauve mb-3">{label}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            {heading}
            <em className="text-rose">{headingAccent}</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Reveal className="border border-cream/[0.08] overflow-hidden">
            <iframe
              title={`${clientConfig.brand.legalName} location on Google Maps`}
              src={mapSrc}
              className="w-full h-[260px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="flex gap-3 mb-6">
              <span className="text-lg shrink-0 mt-0.5">📍</span>
              <address className="not-italic">
                <strong className="block text-sm text-cream mb-0.5">{addressLines[0]}</strong>
                <span className="block text-[13px] text-cream/40 leading-relaxed">
                  {addressLines[1]}
                </span>
              </address>
            </div>

            <div className="flex gap-3 mb-6">
              <span className="text-lg shrink-0 mt-0.5">📞</span>
              <div>
                <a href={phoneHref} className="block text-sm text-cream hover:text-mauve transition-colors">
                  {phone}
                </a>
                <span className="block text-[13px] text-cream/40">Call or WhatsApp to book</span>
              </div>
            </div>

            <div className="mt-4">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between items-center gap-2 py-2.5 border-b border-cream/[0.06] last:border-none text-[13px]"
                >
                  <span className="text-cream/35">{h.day}</span>
                  <span className="text-cream/70 font-medium">{h.time}</span>
                  <span className={`text-[10px] px-2.5 py-1 tracking-[0.05em] ${STATUS_STYLE[h.status]}`}>
                    {h.status}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-6 px-5 py-2.5 border border-mauve/35 text-mauve text-xs uppercase tracking-[0.1em] hover:bg-mauve/10 transition-colors"
            >
              Get directions →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
