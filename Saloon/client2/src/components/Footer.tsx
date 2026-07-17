import { clientConfig } from "@/client.config";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 lg:px-8 pt-12 pb-8">
      <div className="mx-auto max-w-4xl flex flex-wrap justify-between items-start gap-8 pb-8 border-b border-ivory/[0.07] mb-6">
        <div>
          <p className="font-serif text-2xl text-crimson-soft tracking-[0.1em]">
            {clientConfig.brand.logoText}
          </p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-ivory/20 mt-1">
            Church Street, Bangalore
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={clientConfig.location.phoneHref}
            className="text-xs uppercase tracking-[0.08em] text-ivory/30 hover:text-crimson-soft transition-colors"
          >
            {clientConfig.location.phone}
          </a>
          <a
            href={clientConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.08em] text-ivory/30 hover:text-crimson-soft transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={clientConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.08em] text-ivory/30 hover:text-crimson-soft transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>

      <p className="text-center text-[11px] text-ivory/15">
        © {new Date().getFullYear()} {clientConfig.brand.legalName} · Church Street, Bangalore
      </p>
    </footer>
  );
}
