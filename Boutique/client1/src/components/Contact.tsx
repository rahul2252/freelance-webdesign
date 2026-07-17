import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const { heading, addressLines, lat, lng, mapZoom, hours, phone, phoneHref, email, emailHref } =
    clientConfig.contact;

  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${mapZoom}&output=embed`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-10 bg-beige">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8">
            {heading}
          </h2>

          <address className="not-italic text-charcoal/85 leading-relaxed mb-8">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.15em] text-ink mb-2">
              Store Hours
            </p>
            <ul className="text-charcoal/85 font-light space-y-1">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between max-w-xs gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 text-charcoal/85">
            <a
              href={phoneHref}
              className="hover:text-accent transition-colors w-fit"
            >
              {phone}
            </a>
            <a
              href={emailHref}
              className="hover:text-accent transition-colors w-fit"
            >
              {email}
            </a>
            <a
              href={clientConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-6 py-3 bg-accent text-cream text-sm uppercase tracking-[0.15em] w-fit hover:bg-accent-dark transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[360px]">
          <iframe
            title="Aura Boutique location on Google Maps"
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
