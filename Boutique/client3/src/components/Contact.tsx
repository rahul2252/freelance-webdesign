import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const { heading, addressLines, lat, lng, mapZoom, hours, phone, phoneHref, email, emailHref } =
    clientConfig.contact;

  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${mapZoom}&output=embed`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-10 bg-concrete">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cobalt mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-frost mb-8">
            {heading}
          </h2>

          <address className="not-italic text-frost/70 leading-relaxed mb-8">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cobalt-soft mb-2">
              Hours
            </p>
            <ul className="text-frost/70 font-light space-y-1">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between max-w-xs gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 text-frost/70">
            <a href={phoneHref} className="hover:text-cobalt-soft transition-colors w-fit">
              {phone}
            </a>
            <a href={emailHref} className="hover:text-cobalt-soft transition-colors w-fit">
              {email}
            </a>
            <a
              href={clientConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-6 py-3 bg-cobalt text-void text-xs uppercase tracking-[0.2em] w-fit hover:bg-cobalt-soft transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[360px]">
          <iframe
            title={`${clientConfig.brand.legalName} location on Google Maps`}
            src={mapSrc}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
