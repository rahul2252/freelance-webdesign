import { clientConfig } from "@/client.config";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 lg:px-8 pt-12 pb-8">
      <div className="mx-auto max-w-4xl flex flex-wrap justify-between items-start gap-8 pb-8 border-b border-cream/[0.07] mb-6">
        <div>
          <p className="font-serif text-2xl text-mauve">{clientConfig.brand.legalName}</p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-cream/20 mt-1">
            HSR Layout, Bengaluru
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={clientConfig.location.phoneHref}
            className="text-xs uppercase tracking-[0.08em] text-cream/30 hover:text-mauve transition-colors"
          >
            {clientConfig.location.phone}
          </a>
          <a
            href={clientConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.08em] text-cream/30 hover:text-mauve transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={clientConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.08em] text-cream/30 hover:text-mauve transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>

      <p className="text-center text-[11px] text-cream/15">
        © {new Date().getFullYear()} {clientConfig.brand.legalName} · HSR Layout, Bengaluru
      </p>
    </footer>
  );
}
