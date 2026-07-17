import type { Metadata } from "next";
import { Oswald, Work_Sans } from "next/font/google";
import "./globals.css";
import { clientConfig } from "@/client.config";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import ScrollProgress from "@/components/ScrollProgress";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: clientConfig.seo.title,
  description: clientConfig.seo.description,
  metadataBase: new URL(clientConfig.seo.url),
  openGraph: {
    title: clientConfig.seo.title,
    description: clientConfig.seo.description,
    url: clientConfig.seo.url,
    images: [clientConfig.hero.image],
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
    image: clientConfig.hero.image,
    telephone: clientConfig.location.phone,
    email: clientConfig.location.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clientConfig.location.addressLines[0],
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
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
      className={`${oswald.variable} ${workSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-ivory text-ink">
        <ScrollProgress />
        {children}
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
