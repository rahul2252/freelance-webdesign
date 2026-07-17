import { clientConfig } from "@/client.config";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.34C16.3 4.24 15.3 4.15 14.15 4.15c-2.4 0-4.05 1.46-4.05 4.16v2.34H7.6v3h2.5V21h3.4z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-void border-t border-cobalt/10 text-frost/70 px-6 lg:px-10 py-14">
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-frost mb-3 tracking-[0.08em]">
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
              className="link-underline text-xs uppercase tracking-[0.15em] hover:text-cobalt-soft transition-colors w-fit"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div>
          <address className="not-italic text-sm font-light leading-relaxed mb-5">
            {clientConfig.contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="flex gap-4">
            <a
              href={clientConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${clientConfig.brand.name} on Instagram`}
              className="hover:text-cobalt-soft transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={clientConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${clientConfig.brand.name} on Facebook`}
              className="hover:text-cobalt-soft transition-colors"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-cobalt/10 text-xs text-frost/40">
        © {new Date().getFullYear()} {clientConfig.brand.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
