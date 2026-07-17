import type { Metadata } from "next";
import { Gilda_Display, Jost } from "next/font/google";
import "./globals.css";
import { clientConfig } from "@/client.config";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import ScrollProgress from "@/components/ScrollProgress";

const gildaDisplay = Gilda_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: clientConfig.seo.title,
  description: clientConfig.seo.description,
  metadataBase: new URL(clientConfig.seo.url),
  openGraph: {
    title: clientConfig.seo.title,
    description: clientConfig.seo.description,
    url: clientConfig.seo.url,
    images: [clientConfig.hero.visuals[0].image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: clientConfig.brand.legalName,
    description: clientConfig.brand.description,
    image: clientConfig.hero.visuals[0].image,
    telephone: clientConfig.location.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: clientConfig.location.addressLines[0],
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560102",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clientConfig.location.lat,
      longitude: clientConfig.location.lng,
    },
    sameAs: [clientConfig.social.instagram],
    url: clientConfig.seo.url,
  };

  return (
    <html
      lang="en"
      className={`${gildaDisplay.variable} ${jost.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink">
        <ScrollProgress />
        {children}
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
