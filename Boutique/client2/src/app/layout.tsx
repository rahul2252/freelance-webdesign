import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { clientConfig } from "@/client.config";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    images: [clientConfig.heroSlides[0].image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: clientConfig.brand.legalName,
    description: clientConfig.brand.description,
    image: clientConfig.heroSlides[0].image,
    telephone: clientConfig.contact.phone,
    email: clientConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clientConfig.contact.addressLines[1],
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560034",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clientConfig.contact.lat,
      longitude: clientConfig.contact.lng,
    },
    sameAs: [clientConfig.social.instagram, clientConfig.social.facebook],
    url: clientConfig.seo.url,
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink">
        {children}
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
