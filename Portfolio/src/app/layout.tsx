import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";
import { clientConfig } from "@/client.config";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: clientConfig.seo.title,
  description: clientConfig.seo.description,
  metadataBase: new URL(clientConfig.seo.url),
  openGraph: {
    title: clientConfig.seo.title,
    description: clientConfig.seo.description,
    url: clientConfig.seo.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: clientConfig.brand.name,
    description: clientConfig.brand.description,
    priceRange: "₹4,999",
    areaServed: "IN",
    url: clientConfig.seo.url,
  };

  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-ink text-paper cursor-none-desktop">
        <ScrollProgress />
        <CustomCursor />
        {children}
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
