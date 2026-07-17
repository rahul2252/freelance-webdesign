import { clientConfig } from "@/client.config";

export default function Footer() {
  return (
    <footer className="bg-ink border-t-2 border-paper text-paper/70 px-5 lg:px-8 py-14">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif font-bold text-lg text-paper mb-3 uppercase tracking-tight">
            {clientConfig.brand.logoText}
          </p>
          <p className="text-sm font-light leading-relaxed max-w-xs">
            {clientConfig.brand.description}
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {clientConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-xs uppercase tracking-[0.15em] hover:text-acid transition-colors w-fit"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-paper/50 mb-3">
            Ready to start?
          </p>
          <a
            href={clientConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-acid text-ink text-xs font-bold uppercase tracking-[0.1em] w-fit hover:bg-paper transition-colors"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-12 pt-6 border-t-2 border-paper/20 text-xs text-paper/40">
        © {new Date().getFullYear()} {clientConfig.brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
