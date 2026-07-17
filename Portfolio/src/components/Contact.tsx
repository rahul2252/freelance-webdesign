import { clientConfig } from "@/client.config";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.48 1.34 4.997L2 22l5.116-1.334a9.96 9.96 0 0 0 4.888 1.28h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.927-7.067a9.933 9.933 0 0 0-7.074-2.879zm0 18.183h-.003a8.15 8.15 0 0 1-4.156-1.14l-.298-.177-3.037.792.811-2.96-.194-.304a8.156 8.156 0 0 1-1.253-4.401c0-4.512 3.672-8.184 8.187-8.184a8.13 8.13 0 0 1 5.79 2.398 8.135 8.135 0 0 1 2.397 5.791c0 4.512-3.673 8.185-8.244 8.185z" />
    </svg>
  );
}

export default function Contact() {
  const { heading, body, ctaLabel } = clientConfig.contact;

  return (
    <section id="contact" className="py-24 md:py-32 px-5 lg:px-8 bg-panel">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl uppercase text-paper leading-[1.05]">
          {heading}
        </h2>
        <p className="mt-6 text-paper/70 text-base md:text-lg font-light max-w-xl mx-auto">
          {body}
        </p>
        <MagneticButton
          href={clientConfig.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 px-9 py-5 bg-acid text-ink text-sm font-bold uppercase tracking-[0.1em] brutal-border border-acid brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-[transform,box-shadow]"
        >
          <WhatsAppIcon className="w-5 h-5" />
          {ctaLabel}
        </MagneticButton>
      </Reveal>
    </section>
  );
}
